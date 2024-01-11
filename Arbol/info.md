# Documentación para Arbol Binario

Este código define una implementación de un Árbol Binario en JavaScript. 

## Clases

La implementación cuenta con dos clases principales:

- `Nodo`: Representa un nodo individual del árbol. Cada nodo tiene un 'data' que almacena su valor, y dos enlaces a sus nodos hijos 'izquierdo' y 'derecho'.

- `NewArbol`: Esta clase representa el árbol binario completo. Incluye métodos para insertar nuevos nodos, localizar un nodo en el árbol y diferentes métodos para recorrer el árbol.

## Métodos

- `add(data)`: Este método se utiliza para añadir un nuevo nodo al árbol. 

- `insertNow(padre, newNodo)`: Método auxiliar usado por `add()`, inserta nodos en el lugar correcto en el árbol.

- `localizar(data)`: Busca un nodo en el árbol. 

- `locationRecursive(padre, data)`: Método auxiliar de `localizar()`, realiza una búsqueda recursiva a través del árbol.

- `inOrden(nodo, fn)`: Realiza un recorrido en orden del árbol. 

- `getRaizNode()`: Devuelve la raíz del árbol.

- `preOrden(nodo, fn)`: Realiza un recorrido en pre-orden del árbol.

- `postOrden(nodo, fn)`: Realiza un recorrido en post-orden del árbol.

Recuerde que este código utiliza JavaScript en modo estricto (`"use strict"`), lo que significa que ciertas prácticas de codificación descuidada darán lugar a errores.
