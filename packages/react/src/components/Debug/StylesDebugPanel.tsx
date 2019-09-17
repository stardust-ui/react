import * as React from 'react'
import * as _ from 'lodash'

const includes = (s, target) => _.toLower(s).indexOf(_.toLower(target)) !== -1

const StylesData = props => {
  const { data, indent = 2, highlightKey, prevMergedData } = props

  if (typeof data === 'undefined') {
    return <span>undefined</span>
  }

  if (data === null || typeof data !== 'object') {
    return <span>{JSON.stringify(data)}</span>
  }

  return (
    <>
      {'{'}
      {Object.keys(data).map(key => {
        // TODO extract this logic on one place
        const highlight =
          highlightKey !== '' &&
          (includes(key, highlightKey) ||
            (typeof data[key] !== 'object' &&
              !_.isNil(data[key]) &&
              includes(data[key], highlightKey)))
        const overriden =
          typeof data[key] !== 'object' &&
          prevMergedData &&
          prevMergedData[key] !== null &&
          prevMergedData[key] !== undefined
        return (
          <div key={key}>
            <span style={{ background: highlight ? 'rgb(255,255,224)' : '' }}>
              {' '.repeat(indent)}
              <span style={{ textDecoration: overriden ? 'line-through' : 'none' }}>
                <span style={{ color: typeof data[key] === 'object' ? 'grey' : 'red' }}>{key}</span>
                {': '}
                <StylesData
                  data={data[key]}
                  indent={indent + 2}
                  prevMergedData={prevMergedData ? prevMergedData[key] : null}
                  highlightKey={highlightKey}
                />
              </span>
              {','}
            </span>
          </div>
        )
      })}
      {`${indent > 2 ? ' '.repeat(indent - 2) : ''}}`}
    </>
  )
}

const StylesDebugPanel = props => {
  const [value, setValue] = React.useState('')
  const { data } = props

  const reversedData = JSON.parse(JSON.stringify(data)).reverse()
  const mergedThemes = []

  mergedThemes.push({}) // init

  for (let i = 1; i < data.length; i++) {
    mergedThemes.push(_.merge({}, mergedThemes[i - 1], reversedData[i - 1]))
  }

  const filterR = (search, theme) => {
    let result = false

    Object.keys(theme).forEach(key => {
      if (includes(key, search)) {
        result = true
      }
      if (typeof theme[key] === 'object' && filterR(search, theme[key])) {
        result = true
      }
      if (typeof theme[key] !== 'object' && !_.isNil(theme[key]) && includes(theme[key], search)) {
        result = true
      }
    })

    return result
  }

  return (
    <>
      <input
        onChange={e => setValue(e.target.value)}
        style={{ padding: '2px 4px', width: '100%', border: '1px solid #ccc' }}
        placeholder="Filter"
      />
      {reversedData.map((theme, idx) => {
        const filteredTheme =
          value === ''
            ? theme
            : Object.keys(theme)
                .filter(key => {
                  if (includes(key, value)) {
                    return true
                  }
                  if (typeof theme[key] === 'object' && theme[key] !== null) {
                    return filterR(value, theme[key])
                  }
                  if (
                    typeof theme[key] !== 'object' &&
                    !_.isNil(theme[key]) &&
                    includes(theme[key], value)
                  ) {
                    return true
                  }
                  return false
                })
                .reduce((obj, key) => {
                  obj[key] = theme[key]
                  return obj
                }, {})

        return (
          <pre
            key={idx}
            style={{
              padding: '0.5em 0',
              borderTop: idx > 0 ? '1px solid #ddd' : 'none',
            }}
          >
            <StylesData
              data={filteredTheme}
              prevMergedData={mergedThemes[idx]}
              highlightKey={value}
            />
          </pre>
        )
      })}
    </>
  )
}

export default StylesDebugPanel
