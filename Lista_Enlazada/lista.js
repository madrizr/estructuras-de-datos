
class Node{
	constructor(data, siguiente){
		this.data = data;
		this.siguiente = siguiente;
	}
}

class NewList{
	constructor(){
		this.head = null;
		this.longitud = 0;
	}

	addEnd(data){
		const newNode = new Node(data, null);
		if (!this.head) {
			this.head = newNode;
		}else{
			let puntero = this.head;
			
			while(puntero.siguiente){
				puntero = puntero.siguiente;
			};
			puntero.siguiente = newNode;
		};
		this.longitud++;
	}

	addFirst(data){
		if (!this.head) {
			this.head = new Node(data, null);
		}else{
			const newNode = new Node(data, this.head);
			this.head = newNode;
		};
		this.longitud++;	
	}

	addHalf(data, position){

		if (!this.head && position <= this.longitud) {
			this.head = new Node(data, null);
		}else{
			let anterior = 1; //la posicion que estamos evaluando es la anterior al elemento que queremos intducir.
			let puntero = this.head;
			while(anterior < position - 1){
				puntero = puntero.siguiente
				anterior++;	
			};
			const newNode = new Node(data, puntero.siguiente);
			puntero.siguiente = newNode;
		};
		this.longitud++;
	}

	deleteFirst(){
		if (this.head){
			let temp = this.head;
			this.head = this.head.siguiente;
			//delete temp
			this.longitud--;
		}else{
			return "la lista esta vacia";
		}
		
	}

	deleteEnd(){
		if (this.head) {
			let puntero = this.head;
			while(puntero.siguiente.siguiente){
				puntero = puntero.siguiente;
			};
			puntero.siguiente = null;
			this.longitud--;
			// En otros lenguajes como C# o C++ hay que eliminar el ultimo elemento de la memoria
		}else{
			return "La lista esta vacia";
		}
	}

	deleteHalf(position){
		if (this.head && position <= this.longitud) {
			let anterior = 1;
			let puntero = this.head;
			while(anterior  < position - 1){
				puntero = puntero.siguiente;
				anterior++;
			}
			let temp = puntero.siguiente;
			puntero.siguiente = puntero.siguiente.siguiente;
			//delete temp; En otros lenguajes debes borrar el elemento de la memoria.
			this.longitud--;
		}else{
			return "La lista esta vacia o la posicion introducida no existe";
		}
		
	}

	empty(){
		if (this.head === null) return "La lista esta vacia";
	   else return `La lista posee: ${this.longitud} elementos`;
	}

	getlength(){
		return this.longitud;
	}

	get(position){
		if(this.head && position <= this.longitud){
			let puntero = this.head;
			let cont = 1;
			while (cont < position){
				puntero = puntero.siguiente;
				cont++;
			}
			return puntero;
		}else{
			return "La lista esta vacia o la posicion introducida no existe";
		}
	}
}

/*Probando la estructura*/

const perros = new NewList();
for (var i = 0; i < parseInt(Math.random() * 500)* 5; i++) {
	perros.addEnd(i+1);
} 
console.log(perros)
console.log(perros.get(2));
