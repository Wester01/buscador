let xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();

xhr.onload = ()=>{
	//console.log(xhr.response);
	const data = JSON.parse(xhr.response);
	const carrito = new Carrito();
	carrito.recuperarPersistencia();
	const stock = new Stock(data);
	let contenedor = document.querySelector("#contenedor");

	//crear fichas de los agentes de seguros
	//necesito crear un producto por cada objeto dentro de data
	//y renderizarlo dentro del container ese
	
	stock.getStock().forEach(producto => {
		contenedor.appendChild(producto.renderProduct());
	})

	const inputBuscar = document.getElementById("buscar");
	const botonBuscar = document.getElementById("botonBuscar");

	inputBuscar.addEventListener('input',(e)=>{
		let contenedorSugerencias = document.getElementById("contenedorSugerencias");
		let sugerencias = document.getElementById("sugerencias").children;
		

		if(e.target.value !== ""){
			contenedorSugerencias.classList.remove("fuera");
		}else{
			contenedorSugerencias.classList.add("fuera");
		}
		for(let i = 0; i < sugerencias.length;i++){
			sugerencias[i].addEventListener('click',(e)=>{
				if(e.target.textContent == sugerencias[i].textContent){
					inputBuscar.value = sugerencias[i].textContent;
					inputBuscar.placeHolder = "";
					contenedorSugerencias.classList.add("fuera")
				}

			})
			if(sugerencias[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())){
				 sugerencias[i].classList.remove("fuera");
			}else{
				sugerencias[i].classList.add("fuera");
			}
		}
	});

	botonBuscar.addEventListener('click',(e)=>{
		e.target.preventDefault;

		if(inputBuscar.value == "Locura"){
			let producto = document.getElementById("Psicologo").parentNode;
			if(producto == null){
				alert("No se encuentra disponible");
			}
			producto.style = "border: 2px solid red;";
			producto.focus();
		}else if(inputBuscar.value == "Listo"){
			let producto = document.getElementById("Ajedrez_profesional").parentNode;
			if(producto == null){
				alert("No se encuentra disponible");
			}
			producto.style = "border: 2px solid red;";
			setTimeout(()=>{
				producto.style = "border:none;";
			},3000);
		}else{
			let productos = document.getElementsByClassName("producto");
			console.log(productos[1])
			for(let i = 0; i < productos.length; i++){
				if(productos[i].lastElementChild.previousElementSibling.firstElementChild.textContent.toLowerCase().includes(inputBuscar.value.toLowerCase()) || productos[i].lastElementChild.previousElementSibling.firstElementChild.nextElementSibling.textContent.toLowerCase().includes(inputBuscar.value.toLowerCase())){
					productos[i].style = "border: 2px solid red;";
					setTimeout(()=>{
						productos[i].style = "border:none;";
					},3000);
				}
			}

			/*if(producto == null){
				alert("No se encuentra disponible");
			}*/
			
		}

	})

	const botones = document.querySelectorAll('#button-addon2');
	botones.forEach(boton => {
		boton.addEventListener('click',()=> {
			let id = boton.previousElementSibling.id;
			let cantidad = parseInt(boton.previousElementSibling.previousElementSibling.value,10);
			carrito.agregarProducto(stock.consultarProducto(id),cantidad);
			carrito.persistir();
		})
	})

}