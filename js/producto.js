class Producto{

	constructor(_id,_precio,_nombre,_img,_desc,_empleo){
		this.id = _id;
		this.nombre = _nombre;
		this.precio = _precio;
		this.img = _img;
		this.cantidad = 1;
		this.desc = _desc;
		this.empleo = _empleo;
	}

	getPrecio(){
		return this.precio;
	}
	getId(){
		return this.id;
	}
	getImg(){
		return this.img;
	}
	getNombre(){
		return this.nombre;
	}
	getCantidad(){
		return this.cantidad;
	}
	setCantidad(_cantidad){
		this.cantidad = _cantidad;
	}
	incrementarCantidad(){
		this.cantidad++;
	}
	setPrecio(precioNuevo){
		this.precio = precioNuevo;
	}
	setId(idNuevo){
		this.id = idNuevo;
	}
	setNombre(nombreNuevo){
		this.nombre = nombreNuevo;
	}
	setImg(imgNueva){
		this.img = imgNueva;
	}
	renderProduct(){
		//crea la tarjeta del producto
		let card = document.createElement('div'),
			cardImgTop = document.createElement('img'),
			cardBody = document.createElement('div'),
			cardTitle = document.createElement('h5'),
			cardText = document.createElement('p'),
			inputGroup = document.createElement('div'),
			inputCantidad = document.createElement('input'),
			inputId = document.createElement('input'),
			botonAgregar = document.createElement('button'),
			empleo = document.createElement('input');


		card.classList.add('card','w-25','m-4','d-flex', 'text-center', 'producto');

		empleo.setAttribute('id',`${this.empleo}`);
		empleo.setAttribute('type','hidden');

		cardImgTop.setAttribute('src',`img/${this.img}`);
		cardImgTop.setAttribute('alt','...');
		cardImgTop.classList.add('card-img-top','w-50', 'align-self-center');

		cardBody.classList.add('card-body');

		cardTitle.textContent = `${this.nombre}`;
		cardTitle.classList.add('card-title','text-dark');

		cardText.textContent = `${this.desc}`;
		cardText.classList.add('card-text','text-dark');

		inputGroup.classList.add('input-group');

		inputCantidad.classList.add('form-control');
		inputCantidad.setAttribute('type','text');
		//inputCantidad.setAttribute('value','1');
		inputCantidad.setAttribute('placeholder',`${this.precio}€`);
		inputCantidad.setAttribute('aria-label','cantidad');
		inputCantidad.setAttribute('aria-describedby','button-addon2');
		inputCantidad.setAttribute('id',`cantidadProducto${this.id}`);

		inputId.setAttribute('id',`${this.id}`);
		inputId.setAttribute('type','hidden');

		botonAgregar.classList.add('btn','btn-outline-success');
		botonAgregar.setAttribute('type','button');
		botonAgregar.setAttribute('id','button-addon2');
		botonAgregar.textContent = '+';


		inputGroup.appendChild(inputCantidad);
		inputGroup.appendChild(inputId);
		inputGroup.appendChild(botonAgregar);

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(inputGroup);

		card.appendChild(cardImgTop);
		card.appendChild(cardBody);
		card.appendChild(empleo);

		return card;
	}
}