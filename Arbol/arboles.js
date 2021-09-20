"use strict"
class Nodo{
	constructor(data){
		this.data = data;
		this.izquierdo = null;
		this.derecho = null;
	}
}

class NewArbol{
	constructor(){
		this.raiz = null;
		this.repetidos = 0;
		this.mostrar = null;
	}

	/* METODO DE INSERTAR---- */
	add(data){
		const newNodo = new Nodo(data)
		if (!this.raiz) return this.raiz = newNodo;
		else this.insertNow(this.raiz, newNodo);
	}

	insertNow(padre, newNodo){
		if (newNodo.data < padre.data){
			if (!padre.izquierdo) padre.izquierdo = newNodo;
				else this.insertNow(padre.izquierdo, newNodo)
		}
		if (newNodo.data > padre.data) {
			if (!padre.derecho) padre.derecho = newNodo;
				else this.insertNow(padre.derecho, newNodo)
		} 
		if (newNodo.data === padre.data) this.repetidos++;
	}
	/* -------------------------------------------------------------*/
	/* LOCALIZAR NODO */
	localizar(data){
		if (!this.raiz) return null;
		if (data === this.raiz.data) return this.raiz.data;
			else{
				this.locationRecursive(this.raiz, data);
				return this.mostrar;
			} 
	}
	locationRecursive(padre, data){
		if (!padre) return null;
		if (data < padre.data) this.locationRecursive(padre.izquierdo, data);
		if (data > padre.data) this.locationRecursive(padre.derecho, data);
		if (data === padre.data) return this.mostrar = padre;
	}
/* ------------------------------------------------------------------------*/
/* RECORRIDOS DE ARBOL */
	inOrden(nodo, fn){
		if (nodo != null){
			this.inOrden(nodo.izquierdo, fn);
			// puedes colocar codigo
			//console.log(nodo.data)
			fn.call(null, nodo) //Usando callbacks
			this.inOrden(nodo.derecho, fn);	
		} 
	}
	getRaizNode(){return this.raiz}

	preOrden(nodo, fn){
		if (nodo != null){
			//console.log(nodo.data)
			fn.call(null, nodo) //Usando callbacks
			this.preOrden(nodo.izquierdo, fn);
			this.preOrden(nodo.derecho, fn);	
		} 
	}

	postOrden(nodo, fn){
		if (nodo != null){
			this.postOrden(nodo.izquierdo, fn);
			this.postOrden(nodo.derecho, fn);
			//console.log(nodo.data)
			fn.call(null, nodo) //Usando callbacks	
		} 
	}
	/*-------------------------------------------------------*/
}
const arbolito = new NewArbol();

for (let i = 0; i < 10; i++) {
	arbolito.add(parseInt(Math.random() * 11))
}
console.log(arbolito)
const array = [];
arbolito.postOrden(arbolito.getRaizNode(), (nodo) => array.push(nodo.data))
console.log(array)
