import * as React from 'react'

export type PerfSample = {
  build: number
  ts: string
  performance: {
    [name: string]: {
      actualTime: {
        median: number
      }
    }
  }
}

export type PerfData = PerfSample[]

export type PerfDataContextValue = {
  loading: boolean
  error: Error
  data: PerfData
}

const PerfDataContext = React.createContext<PerfDataContextValue>({
  loading: true,
  error: undefined,
  data: undefined,
})

export default PerfDataContext
