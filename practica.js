new Vue({
	//especificar la zona de actuacion de Vue
	el:"#miPagina",

	//Esta seccion de VUE sirve para Variables 
	// Y constantes 
	data:{
		mensaje:'HOLA MUNDO CRUEL',
		alumno:'',
		nombre:'',
		especie:'',
		edad:0,
		editando:0,
		indice:0,
		buscar:'',
		mascotas:[{nombre:'Goldi',especie:'Canina',edad:9},
			{nombre:'Zuma',especie:'Felina',edad:4},
			{nombre:'Toño',especie:'Canina',edad:5}
				],

		especies:[
			 {clave:1,nombre:'Canina'},
			 {clave:2,nombre:'Felina'},
			 {clave:3,nombre:'Ave'}		
		],	
		name:'',
		first_name:'',
		second_name:'',
		pivote:0,

			
			
			

	},
// este objeto permite crear funciones y/o procedimientos
	methods:{


		aumentarEdad:function(){

			this.edad=Number(this.edad)+1;
		},


		disminuirEdad:function(){

			this.edad=Number(this.edad)-1;
		},

		agregarMascota:function(){
			if (this.nombre && this.especie && this.edad){
			//contruimos un objeto de tipo mascota para insertarlo en el array
			var unaMascota={nombre:this.nombre,especie:this.especie,edad:this.edad};

			//Agrego un objeto mascota
			this.mascotas.push(unaMascota);
			this.limpiarHtml();

			// enviamos el foco al primer componente html/nombre mascota 
			this.$refs.nombre.focus();

			//Enveiamos el mensaje de confimacion
			Swal.fire({
  		position: 'top-end',
  		icon: 'success',
  		title: 'La mascota se guardo correctamente',
  		showConfirmButton: false,
  		timer: 2000
		})

		}
			else

				Swal.fire({
  		position: 'top-end',
  		icon: 'error',
  		title: 'Debe de capturar todos los datos',
  		showConfirmButton: false,
  		timer: 2000
		})

		},

		limpiarHtml:function(){

			this.nombre='';
			this.especie='';
			this.edad='';

		},

		//metodo eliminar mascota
		eliminarMascota:function(pos){
			//var pregunta=confirm('Esta seguro de eliminar?');

		//	if(pregunta)
		//		console.Log('Voy a eliminar');

		//this.mascotas.splice(pos,1);

		//	else
		//		console.Log('se arrepintio');

		//ventana de sweet aler
		Swal.fire({
  		title: 'Esta seguro de eliminar?',
  		text: "No podra desacer los cambios!",
  		icon: 'warning',
  		showCancelButton: true,
 	 	confirmButtonColor: '#3085d6',
  		cancelButtonColor: '#d33',
  		confirmButtonText: 'Si, eliminalo!'
		}).then((result) => {
  		if (result.isConfirmed) {
  			//eliminamos la mascota seleccionada
  			this.mascotas.splice(pos,1);

    	Swal.fire(
      	'Eliminado!',
      	'La mascota fue eliminado.',
      	'success'
    		)
  		}
	})
		//fin de ventana de sweet alert
		},

		editarMascota:function(pos){
			this.nombre=this.mascotas[pos].nombre;
			this.especie=this.mascotas[pos].especie;
			this.edad=this.mascotas[pos].edad;
			this.editando=1;
			this.indice=pos;	
		},

		cancelar:function(){
			this.limpiarHtml();
			this.editando=0;

		},

		guardarEdicion:function(){
			//Modifico los valores del array
			this.mascotas[this.indice].nombre=this.nombre;
			this.mascotas[this.indice].especie=this.especie;
			this.mascotas[this.indice].edad=this.edad;

			// Limpiamos los componentes del HTML
			this.limpiarHtml();
			//Indicamos que terminamos de editar, (Activando el boton Agregar/azul)
			this.editando=0;

			Swal.fire({
  		position: 'top-end',
  		icon: 'info',
  		title: 'Los cambios fueron efectuados',
  		showConfirmButton: false,
  		timer: 2000
		})
		},

	},
//Fin de methods 

//Seccion para calcular valor automticamente 

computed: {
	numeroMascotas:function(){
		var num=0;
		num=this.mascotas.length;
		return num;
	},

	filtroMascotas:function(){
		return this.mascotas.filter((mascota)=>{
			return mascota.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
				   mascota.especie.toLowerCase().match(this.buscar.toLowerCase().trim())
		});
	},
	fullname:function(){
		var completo=this.name+ ''+this.first_name+ ''+ this.second_name;
		return completo;
	},
	tablamultiplicar:function(){
		var tabla=[];
		var resultado=[];

		for (var i = 1; i <=10; i++) {
			tabla.push({res:this.pivote + 'x'+ i +'='+ (this.pivote*i)});
		}
		return tabla;
	}

}

});