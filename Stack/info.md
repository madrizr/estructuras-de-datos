# Documentación para Stack

Este código define dos implementaciones de Pilas (Stacks) en JavaScript, una utilizando listas enlazadas y la otra utilizando arreglos.

## Clases

Se definen dos clases principales:

- `Nodo`: Representa un nodo individual de la pila en la implementación con listas enlazadas.

- `NewStack`: Implementación de Pila usando listas enlazadas.

- `NewStackarr`: Implementación de Pila usando arreglos.

## Métodos

Ambas implementaciones de pila comparten los mismos métodos:

- `push(data)`: Este método se utiliza para agregar un nuevo elemento a la pila.

- `peek()`: Retorna el elemento en la cima de la pila.

- `pop()`: Elimina y retorna el elemento en la cima de la pila.

## Uso

Para usar estas estructuras, simplemente necesitas crear una instancia de la clase `NewStack` o `NewStackarr` y utilizar sus métodos. Por ejemplo, puedes agregar elementos a la pila con el método `push`, y luego eliminar elementos con `pop`. Para ver el elemento en la cima de la pila, utiliza `peek`.

```javascript
const pila = new NewStack();
pila.push(5);
console.log(pila.peek()); //Imprime 5
pila.pop();
console.log(pila.peek()); //Imprime null porque la pila está vacía
```

Las mismas operaciones se pueden realizar con la implementación de pila usando arreglos `NewStackarr`.
