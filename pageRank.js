// Define a function to compute the PageRank of a protein-protein interaction network
function computePageRank(graph) {
  // Initialize the PageRank of each protein to 1
  let pageRanks = Array(graph.length).fill(1);

  // Iterate over the adjacency matrix for the specified number of iterations
  for (let i = 0; i < NUM_ITERATIONS; i++) {
    // Create a new array to store the updated PageRanks
    let newPageRanks = Array(graph.length).fill(0);

    // Iterate over the adjacency matrix
    for (let j = 0; j < graph.length; j++) {
      for (let k = 0; k < graph.length; k++) {
        // If there is an edge between nodes j and k
        if (graph[j][k] > 0) {
          // Update the PageRank of node j based on the PageRank of node k
          newPageRanks[j] += pageRanks[k] / numNeighbors(graph, k);
        }
      }
    }

    // Set the PageRanks to the updated values
    pageRanks = newPageRanks;
  }

  // Return the final PageRanks
  return pageRanks;
}

// Define a helper function to compute the number of neighbors of a node in the graph
function numNeighbors(graph, node) {
  let count = 0;

  // Iterate over the adjacency matrix
  for (let i = 0; i < graph.length; i++) {
    // If there is an edge between node and i, increment the count
    if (graph[node][i] > 0) {
      count++;
    }
  }

  return count;
}
