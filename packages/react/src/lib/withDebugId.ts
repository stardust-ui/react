const withDebugId = <T>(data: T, debugId: string) => {
  if (typeof data === 'object' && data !== null) {
    Object.defineProperty(data, '_debugId', {
      value: debugId,
      writable: false,
      enumerable: false,
    })
  }
  return data
}

export default withDebugId
