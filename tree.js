"use strict"

module.exports = createRandomTree

function createRandomTree(n) {
  var edges = []
  for(var i=1; i<n; ++i) {
    var v = (Math.random()*i)|0
    edges.push([i, v])
  }
  return edges
}