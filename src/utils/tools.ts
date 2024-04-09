function parseObj(obj: any) {
  const res: any = {}
  for (const key in obj) {
    if (obj[key] != null) {
      res[key] = obj[key]
    }
  }

  return res
}

function parseArray(arr: any[]) {
  return arr.map((v) => parseObj(v))
}

function parse(v: any) {
  // debugger
  if (Array.isArray(v)) {
    return parseArray(v)
  }
  return parseObj(v)
}

export default parse
