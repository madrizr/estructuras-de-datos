class Nodo{
	constructor(data, anterior, siguiente){
		this.data = data;
		this.anterior = anterior;
		this.siguiente = siguiente;
	}
}

class NewCola{
	constructor(){
		this.head = null;
		this.longitud = 0;
		this.end = null;
	}

	encolar(data){
		const newNodo = new Nodo(data, null, null);
		if (!this.head) {
			this.head = newNodo;
			this.end = newNodo;
		}else{
			//let puntero = this.head;
			//while(puntero.siguiente) puntero = puntero.siguiente;

			newNodo.anterior = this.end;
			this.end.siguiente = newNodo;
			this.end = newNodo;
		}
		this.longitud++;
	}

	procesar(){
		if (this.head) return this.head;
		else return null;	
	}

	deleteHead(){
		if (this.head) {
			this.longitud--;
			if (this.head.siguiente) {
				let siguiente = this.head.siguiente;
				siguiente.anterior = null;
		 		return this.head = siguiente;
			} else{
				this.end = null;
				return this.head = null;
			}
		}
	}

	despachar(){
		if (this.head) {
			let n = this.procesar();
			this.deleteHead();
			return n;
		}else return null;
		
	}

	empty(){
		if (this.head) return this.head;
		else return false;
	}
	
	deleteHalf(position){
		if (this.head && position <= this.longitud){
			let anterior = 1;
			let puntero = this.head;
			while(anterior  < position - 1){
				puntero = puntero.siguiente;
				anterior++;
			}
			if (puntero.siguiente.siguiente) {
				let punteroSiguiente = puntero.siguiente.siguiente;
				puntero.siguiente = puntero.siguiente.siguiente;
				punteroSiguiente.anterior = puntero;
			}else puntero.siguiente = null; this.end = puntero;
		}
		this.longitud--;
	}
}

/*Probando la estructura*/
let perrillo = new NewCola();
for (let i = 0; i < /*parseInt(Math.random() * 100)*/ 5 ; i++) {
	perrillo.encolar(i+1)
}
perrillo.deleteHalf(5)
console.log(perrillo)