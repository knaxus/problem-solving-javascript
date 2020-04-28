const { LinkedList } = require('../LinkedList');

class Graph {
  constructor() {
    this.data = this.getStorage();
  }

  addVertex(v) {
    this.data.addVertex(v);
  }

  addEdge(v, e) {
    this.data.addEdge(v, e);
  }

  removeEdge(v, e) {
    this.data.removeEdge(v, e);
  }

  removeVertex(v) {
    this.data.removeVertex(v);
  }

  getEdges(v) {
    return this.data.getEdges(v);
  }

  display() {
    return this.data.displayMatrix();
  }

  // eslint-disable-next-line class-methods-use-this
  getStorage() {
    const map = {};

    return {
      addVertex(v) {
        if (!map[v]) map[v] = new LinkedList();
      },
      addEdge(v, e) {
        if (map[v]) {
          map[v].addAtEnd(e);
        }
      },
      removeEdge(v, e) {
        if (map[v]) {
          map[v].filter(e);
        }
      },
      removeVertex(v) {
        if (map[v]) {
          delete map[v];

          const vertices = Object.keys(map);
          const edge = v; // this vertex may be an edge for other vertices
          vertices.forEach((vertex) => this.removeEdge(vertex, edge));
        }
      },
      getEdges(v) {
        if (map[v]) {
          return map[v].traverseList();
        }
      },
      displayMatrix() {
        const vertices = Object.keys(map);
        const result = {};

        vertices.forEach((v) => {
          result[v] = map[v].traverseList();
        });
        return result;
      },
    };
  }
}

// const g = new Graph();

// g.addVertex('Noida');
// console.log(g.display());

// g.addEdge('Noida', 'Greater Noida');
// g.addEdge('Noida', 'Ghaziabaad');
// g.addEdge('Noida', 'Meerut');
// g.addEdge('Noida', 'Greater Noida');
// g.addEdge('Noida', 'Mathura');

// g.addVertex('Mathura');
// g.addEdge('Mathura', 'Noida');
// g.addEdge('Mathura', 'Meerut');
// console.log(g.display());
// // g.data['Noida'].size = 10;

// // console.log(g.data['Noida']);
// // g.filter('Noida', 'Greater Noida');
// console.log(g.display());
// console.log('removing Mathura');

// g.removeVertex('Mathura');
// console.log(g.display());
// console.log(g.getEdges('Noida'));

module.exports = Graph;
