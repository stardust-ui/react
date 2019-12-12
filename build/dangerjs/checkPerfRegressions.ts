import * as _ from 'lodash'
import { DangerJS } from './types'
import config from '../../config'

function fluentFabricComparision(danger, markdown, warn) {
  let perfCounts
  try {
    perfCounts = require(config.paths.packageDist('perf-test', 'perfCounts.json'))
  } catch {
    warn('No perf measurements available')
    return
  }
  const results = _.mapValues(
    _.pickBy(perfCounts, (value, key) => key.endsWith('.Fluent')),
    stats => {
      const fluentTpi = _.get(stats, 'extended.tpi')
      const fabricTpi = _.get(stats, 'extended.fabricTpi')
      return {
        numTicks: stats.analysis.numTicks,
        iterations: stats.extended.iterations,
        fluentTpi,
        fabricTpi,
        fluentToFabric: Math.round((fluentTpi / fabricTpi) * 100),
      }
    },
  )

  markdown(
    [
      '## Fluent UI to Fabric perf comparision',
      '',
      'Kind | Fluent UI | Fabric | % | iterations | PR Ticks',
      '--- | ---:| ---:| ---:| ---:| ---:',
      ..._.map(
        results,
        (result, key) =>
          `${key} | ${result.fluentTpi} | ${result.fabricTpi} | ${result.fluentToFabric} | ${result.iterations} | ${result.numTicks}`,
      ),
    ].join('\n'),
  )
}

export default ({ danger, markdown, warn }: DangerJS) => {
  fluentFabricComparision(danger, markdown, warn)
}
