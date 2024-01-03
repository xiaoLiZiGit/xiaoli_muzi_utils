export function isBlank(value: unknown) {
  return value !== null && value !== undefined && value !== ''
}

export function getQueryMap(queryStr: string) {
  const map: Record<string, unknown> = {};
  if (isBlank(queryStr) === false) {
    const str = queryStr.split('?')[1];
    const strs = str.split('&');
    for (const item of strs) {
      const kv = item.split('=');
      map[kv[0]] = kv[1];
    }
  }
  return map;
}