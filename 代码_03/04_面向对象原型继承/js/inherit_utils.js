function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}


function inherit(Subtype, Supertype) {
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype, "constructor", {
    eumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
}