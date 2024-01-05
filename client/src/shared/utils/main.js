export function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      // each 'entry' is a [key, value] tupple
      result[key] = value;
    }
    return result;
  }
  
  export function paramsURLToObject(params) {
    const entries = new URLSearchParams(params).entries();
    const result = paramsToObject(entries);
    return result;
  }