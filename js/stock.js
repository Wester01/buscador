class Stock{

	constructor(data){
		this.almacen = [];
		for(let i = 0; i < data.length; i++){
			let aux = this.getDescription();
			this.almacen.push(new Producto(data[i].id,this.random(),data[i].name,"img/userSample.jpg",aux[1],aux[0]));
		}
	}

	getStock(){
		return this.almacen;
	}

	getDescription(){
		let index = (Math.random()*5-0).toFixed(0);
		let empleo = [
				"Agente de seguros",
				"Psicologo",
				"Sicario",
				"Vendedor",
				"Mecanico",
				"Ajedrez profesional"
			];
		let descript = [
				"\"No hay mejor agente de seguros que yo.\" Este agente sabrá darle a usted todo lo que necesita.",
				"Siempre a tu disposición, te guiaremos en todo el proceso de curación mental, con nosotros logrará dejar atrás aquello que le lastra.",
				"Si ha tenido un mal día o alguien le cae mal, contactenos.",
				"Reptiles y mandrágoras extrañas, todo lo que siempre soñó al alcance de su mano. BICHENCIOS SL",
				"TALLERES STRUNGLER SL - EL MEJOR CONTACTO EN EL MUNDO DEL MOTOR",
				"AJEDRECISTAS PROFESIONALES - Si buscas un reto, habla con nosotros."
			];

		let response = [empleo[index],descript[index]];

		return response;

	}

	consultarProducto(productoId){
		return this.almacen.find(producto => producto["id"] == productoId);
	}
	random(){
		return (Math.random() * (150 - 50) + 50).toFixed(2);
	}

}