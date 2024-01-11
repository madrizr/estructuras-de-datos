# Documentación para Lista Enlazada Simple

Esta implementación representa una lista enlazada simple en JavaScript.

## Clases

Se define dos clases principales:

- `Node`: Representa un nodo individual de la lista. Cada nodo tiene una 'data' que almacena su valor, y un enlace 'siguiente' a su nodo sucesor.

- `NewList`: Esta clase representa la lista enlazada. Incluye métodos para agregar y eliminar nodos al principio, al final o en una posición intermedia, chequear si la lista está vacía, obtener la longitud de la lista y obtener un nodo en una posición especifica.

## Métodos

- `addEnd(data)`: Agrega un nuevo nodo al final de la lista.

- `addFirst(data)`: Agrega un nuevo nodo al principio de la lista.

- `addHalf(data, position)`: Agrega un nuevo nodo en una posición intermedia especificada en la lista.

- `deleteFirst()`: Elimina el primer nodo de la lista.

- `deleteEnd()`: Elimina el último nodo de la lista.

- `deleteHalf(position)`: Elimina un nodo de una posición intermedia especificada en la lista.

- `empty()`: Verifica si la lista está vacía, devuelve un mensaje con la cantidad de elementos en la lista si no está vacía y un mensaje indicando que la lista está vacía en caso contrario.

- `getlength()`: Devuelve la longitud de la lista.

- `get(position)`: Devuelve el nodo en la posición especificada.

## Uso
Para usar esta estructura, simplemente se necesita crear una instancia de la clase `NewList` y utilizar sus métodos. Por ejemplo, para agregar elementos a la lista se usa el método `addEnd`, y luego para eliminar elementos se usa `deleteHalf` especificando la posición del elemento a eliminar. Para ver toda la lista, simplemente imprime la instancia de la lista.

```javascript
const nuevaLista = new NewList();
nuevaLista.addEnd(5);
nuevaLista.deleteHalf(1);
console.log(nuevaLista);
```