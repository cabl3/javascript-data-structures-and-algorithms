// Graph data structure class definition
const Dictionary = require("../Dictionaries/dictionary");

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  /**
   * add a vertex to a list of vertices
   * @param  v vertex to be added to the graph
   */
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  /**
   * this method receives two vertices as parameters.
   * First, we add an edge from vertex v to vertex w
   * by adding w to the adjacent list of vertex v.
   */
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
}

module.exports = Graph;