/* PILAS USANDO LISTAS ENLAZADAS JS*/

class Nodo{
	constructor(data, siguiente){
		this.cima = data;
		this.siguiente = siguiente;
	}
}

class NewStack{
	constructor(){
		this.head = null;
		this.longitud = 0;
	}

	push(data){
		if (!this.head) {
			const nodo = new Nodo(data, null);
			this.head = nodo;
		}else{
			const nodo = new Nodo(data, this.head);
			this.head = nodo;
		}
		this.longitud++;
	}

	peek(){
		if (!this.head) return null;
		else return this.head.cima;
	}

	pop(){
		if (!this.head) return null;
		else this.head = this.head.siguiente;

		this.longitud--;
	}
}

/* PILAS IMPLEMENTADAS CON ARREGLOS JS*/

class NewStackarr{
	constructor(){
		this.head = null;
	}

	push(data){
		if (!this.head) this.head = [data];
		else this.head.push(data);
	}
	peek(){
		if (!this.head) return null;
		else return this.head[this.head.length - 1];
	}
	pop(){
		if (!this.head) return null;
		else{
			this.head.pop();
			if(!this.head[this.head.length - 1]) this.head = null;
		} 
	}
}

/*Probando la estructura*/

const pila = new NewStackarr();
for (var i = 1; i <= 3; i++) {
	pila.push(i+1);
}
for (var i = 1; i <= 3; i++) {
	pila.pop();
}

console.log(pila.pop())
