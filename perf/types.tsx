declare global {
  interface Window {
    runMeasures: () => ProfilerMeasureCycle
  }
}

export type ProfilerMeasure = {
  actualTime: number
  baseTime: number
  exampleIndex: number
  phase: string
  startTime: number
  commitTime: number
}

export type ProfilerMeasureCycle = { [perfExample: string]: ProfilerMeasure }
