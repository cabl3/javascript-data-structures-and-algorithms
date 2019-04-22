# Graphs

Just like Binary Tree data structure, Graph is a nonlinear data structure.

A **graph** is an abstract model of a network structure. A graph is a set of **nodes**(or **vertices**) connected by **edges**. Learning about graphs is vital because any binary relationship can be represented by a graph.

Any social network, such as Facebook, Twitter, can be represented by a graph.

![1555753102832](/home/lomolo/.config/Typora/typora-user-images/1555753102832.png)

We can also use graphs to represent, roads, flights, and communications.

A graph *G = (V, E)* is composed of:

- **V**: A set of vertices
- **E**: A set of edges connecting the vertices in *V*

## Graph Terminology

![1555753146287](/home/lomolo/.config/Typora/typora-user-images/1555753146287.png)

Vertices connected by an edge are called **adjacent vertices**. For example, **A** and **D** are adjacent, **A** and **C** are adjacent, **A** and **B** are adjacent and **A** and **E** are *not* adjacent.

A degree of a vertex consists of the number of adjacent vertices. For example, **A** is connected to other 3 vertices, therefore, **A** has degree 3; **E** is connected to other two adjacent vertices, therefore, **E** has degree 2.

A path is a sequence of consecutive vertices, such as *v1, v2, v3, ..., vk*, where *vi* and *vi+1* are adjacent. Using the graph from the diagram above, we have the paths **A** **B** **E** **I** and **A** **C** **D** **G**, among others.

A simple path does not contain repeated vertices. As an example, we have the path **A** **D** **G**. A **cycle** is a simple path, except for the last vertex, which is the same as the first vertex: **A** **D** **C** **A**(back to **A**)

A graph is **acyclic** if it does not have cycles. A graph is connected if there is a path between every pair of vertices.

## Directed and Undirected graphs

Graphs can be **undirected**(where edges do not have direction) or **directed**(**digraph**), where edges have direction.

![1555753532675](/home/lomolo/.config/Typora/typora-user-images/1555753532675.png)

A graph is **strongly directed** if there is a path in both directions between every pair of vertices. For example, **C** and **D** are strongly connected, while **A** and **B** are not strongly connected.

Graphs can also be **unweighted**(as we have noted so far) or **weighted**(in which the edges have weights,) as shown in the diagram below

![1555756325172](/home/lomolo/.config/Typora/typora-user-images/1555756325172.png)

We can solve many problems in the computer science using graphs, such as

- searching a graph for a specific vertex
- searching for a specific edge
- finding a path in the graph(from one vertex to another)
- finding the shortest path between two vertices
- cycle detection

## Representing a graph

There are a few ways in which we can represent graphs when it comes to data structure. There is no correct way of representing a graph among the existing possibilities. It depends on the type of problem you need to solve and the type of graph as well.

### The adjacency matrix

This is the most common implementation of graphs using adjacency matrix. Each node is associated with an integer, which is an array index. We will represent the connectivity between vertices using a two-dimensional array, as `array[i][j] === 1` if there is an edge from the node with index *i* to the node with index *j* or as `array[i][j] === 0` otherwise, as demonstrated by the below diagram:

![1555757371997](/home/lomolo/.config/Typora/typora-user-images/1555757371997.png)

Graphs that are not strongly connected(**sparse graphs**) will be represented by a matrix with many entries in the adjacency matrix. This means that we would waste space in the computer memory to represent edges that do not exist; for example, if we need to find the adjacent vertices of a given vertex, we will have to iterate through the whole row even if this vertex has only one adjacent vertex. Another reason this might not be a good representation is that the number of vertices in the graph may change, and a two-dimensional array is not flexible.

### The adjacency list

We can use dynamic data structure to represent graphs as well, called an **adjacency list**. This consists of a list of adjacent vertices for every vertex of the graph. There are a few different ways we can represent this data structure. To represent the list of adjacent vertices, we can use a list(array), a linked list, or even a hash map or dictionary.

![1555844168945](/home/lomolo/.config/Typora/typora-user-images/1555844168945.png)

Both representations are very useful and have different properties(for example, finding out whether the vertices `v` and `w` are adjacent is faster using adjacency matrix), although adjacency lists are probably better for most problems. We are going to use adjacency list representation for the examples in this tutorial.

### The incidence matrix

We can also represent a graph using the **incidence matrix**. In an incidence matrix, each row of the matrix represents a vertex, and each column represents an edge. We represent the connectivity between two objects using a two-dimensional array, as `array[v][e] === 1` if the vertex `v` is incident upon edge `e` or as `array[v][e] === 0` otherwise, as shown below:

![1555845884714](/home/lomolo/.config/Typora/typora-user-images/1555845884714.png)

An incidence matrix is usually used to save space and memory when we have more edges than vertices.