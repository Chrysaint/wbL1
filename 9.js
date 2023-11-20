const a = {
  a: 4,
  b: "asd",
  c: {
    d: 5,
    h: "hello",
    j: {
      s: 12,
      l: "letter",
      dsa: {
        asd: "hello",
        asf: "world",
        li: "!",
      },
    },
  },
  arr: [
    {
      arr1: 2,
      arr2: 4,
    },
  ],
};

function stringify(obj) {
  console.log(obj);
  if (typeof obj !== "object" || obj === null || obj instanceof Array) {
    // Вызывается если obj не объект { }
    return value(obj);
  }
  // Вызывается только для объектов(не массивы и т. п.).
  return (
    "{" +
    Object.keys(obj)
      .map(function (k) {
        return typeof obj[k] === "function"
          ? null
          : '"' + k + '":' + value(obj[k]);
      })
      .filter(function (i) {
        return i;
      }) +
    "}"
  );
}

function value(val) {
  switch (typeof val) {
    case "string":
      return '"' + val.replace(/\\/g, "\\\\").replace('"', '\\"') + '"';
    case "number":
    case "boolean":
      return "" + val;
    case "function":
      return "null";
    case "object":
      if (val instanceof Date) return '"' + val.toISOString() + '"';
      if (val instanceof Array) return "[" + val.map(value).join(",") + "]";
      if (val === null) return "null";
      return stringify(val);
  }
}
