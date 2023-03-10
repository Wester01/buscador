class Carrito{

	constructor(){
		this.listaCompra = new Array();
	}
	getLista(){
		return this.listaCompra;
	}
	setLista(_listaCompra){
		this.listaCompra = _listaCompra;
	}
	agregarProducto(_producto,_cantidad){
		let existente = this.listaCompra.find(item => item.id == _producto.id);
		if(existente){
			this.listaCompra.forEach(item => {
				if(item.id == _producto.id)item.cantidad += _cantidad;
			});
			return;	
		}else{
			this.listaCompra.push(_producto);
		}
		
	}
	eliminarProducto(producto){
		let index = this.listaCompra.indexOf(producto);
		this.listaCompra.splice(index,1);
		this.renderizarCarrito();
	}
	renderizarCarrito(){
		//genera la vista del carrito, en una tabla
		//1 label por elemento <label for="" class="d-flex flex-row h-25 w-100 border border-dark">Manzana <input class="text-center form-control w-25 ms-2 me-2" type="number" placeholder="3"> Total: 2€</label>
		let form = document.createElement('form');
		form.classList.add('d-flex', 'flex-column','border','border-success');

		for(let i = 0; i < this.listaCompra.length; i++){
			let label = document.createElement('label'),
				spanProducto = document.createElement('span'),
				input = document.createElement('input'),
				spanTotal = document.createElement('span');
			input.setAttribute('type','number');
			input.setAttribute('value',`${this.listaCompra[i].cantidad}`);
			spanProducto.textContent = `${this.listaCompra[i].nombre}`;
			spanTotal.textContent = `Total: ${this.listaCompra[i].precio * this.listaCompra[i].cantidad}€`;

			label.appendChild(spanProducto);
			label.appendChild(input);
			label.appendChild(spanTotal);

			form.appendChild(label);
		}
		let button = document.createElement('button');
		button.classList.add('button-success');
		button.textContent = 'Comprar';
		form.appendChild(button);
		let contenedor = document.querySelector('.description');
		contenedor.appendChild(form);
	}
	calcularTotal(){
		return this.listaCompra.reduce((acum,producto)=>{acum = acum + producto.precio},0)
	}

	persistir(){
		sessionStorage.setItem('carrito',JSON.stringify(this.listaCompra));
	}
	recuperarPersistencia(){
		this.listaCompra = JSON.parse(sessionStorage.getItem('carrito'));
	}

	toString(){
		return JSON.stringify(this.listaCompra);
	}
}