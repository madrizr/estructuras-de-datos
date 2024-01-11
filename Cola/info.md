# Documentación para Cola Doble

Este código define una implementación de una Cola Doble (Double Ended Queue) en JavaScript.

## Clases

La implementación cuenta con dos clases principales:

- `Nodo`: Representa un nodo individual de la cola. Cada nodo tiene un 'data' que almacena su valor, y dos enlaces a sus nodos 'anterior' y 'siguiente'.

- `NewCola`: Esta clase representa la cola doble. Incluye métodos para encolar y desencolar nodos, procesar elementos, chequear si la cola está vacía y eliminar elementos de una posición media.

## Métodos

- `encolar(data)`: Este método se utiliza para agregar un nuevo nodo al final de la cola. 

- `procesar()`: Retorna el elemento al principio de la cola. 

- `deleteHead()`: Elimina el primer elemento de la cola.

- `despachar()`: Procesa y luego elimina el primer elemento de la cola.

- `empty()`: Verifica si la cola está vacía, devuelve el primer nodo si no está vacía y 'false' si está vacía.

- `deleteHalf(position)`: Elimina un nodo de una posición intermedia especificada en la cola.

## Uso
Para usar esta estructura, solo necesitas crear una instancia de la clase `NewCola` y utilizar sus métodos. Por ejemplo, puedes agregar elementos a la cola con el método `encolar`, y luego eliminar elementos con `deleteHalf` especificando la posición del elemento a eliminar. Para ver la cola completa, simplemente imprime la instancia de la cola.

```javascript
let nuevaCola = new NewCola();
nuevaCola.encolar(5);
nuevaCola.deleteHalf(1);
console.log(nuevaCola);
```