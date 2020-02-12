import { useAutoControlled } from '@fluentui/react-bindings'
import { shallow } from 'enzyme'
import * as React from 'react'
import * as ReactTestUtils from 'react-dom/test-utils'

type TestComponentProps = {
  defaultValue?: string
  value?: string

  initialValue?: string
  onChange?: (value: string) => void
}

const TestComponent: React.FunctionComponent<TestComponentProps> = props => {
  const [value, setValue] = useAutoControlled({
    defaultValue: props.defaultValue,
    value: props.value,

    initialValue: props.initialValue,
  })

  return (
    <>
      <input
        onChange={e => {
          setValue(e.target.value)
          if (props.onChange) props.onChange(e.target.value)
        }}
        value={value || ''}
      />
      <button onClick={() => setValue(undefined)} />
    </>
  )
}

describe('useAutoControlled', () => {
  it('defaults to "undefined"', () => {
    const wrapper = shallow(<TestComponent />)

    expect(wrapper.find('input').prop('value')).toBe('')
  })

  it('defaults to `initialValue` if specified', () => {
    const wrapper = shallow(<TestComponent initialValue="foo" />)

    expect(wrapper.find('input').prop('value')).toBe('foo')
  })

  it('sets default values of controlled props to the state', () => {
    const wrapper = shallow(<TestComponent defaultValue="foo" />)

    expect(wrapper.find('input').prop('value')).toBe('foo')
  })

  it('sets values of controlled props to the state', () => {
    const wrapper = shallow(<TestComponent value="foo" />)

    expect(wrapper.find('input').prop('value')).toBe('foo')
  })

  it('handles state updates via actions', () => {
    const wrapper = shallow(<TestComponent />)

    ReactTestUtils.act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'foo' } })
    })

    expect(wrapper.find('input').prop('value')).toBe('foo')
  })

  it('sets values of controlled props to the state on updates', () => {
    const wrapper = shallow(<TestComponent value="foo" />)

    ReactTestUtils.act(() => {
      wrapper.setProps({ value: 'bar' })
    })
    expect(wrapper.find('input').prop('value')).toBe('bar')

    ReactTestUtils.act(() => {
      wrapper.setProps({ value: 'baz' })
    })
    expect(wrapper.find('input').prop('value')).toBe('baz')
  })

  it('keeps last value of controlled prop in the state if value gets "undefined"', () => {
    const wrapper = shallow(<TestComponent defaultValue="foo" />)

    ReactTestUtils.act(() => {
      wrapper.setProps({ value: undefined })
    })
    expect(wrapper.find('input').prop('value')).toBe('foo')
  })
})
