new Vue({
	//espicificar zona de actuacion de vue
	el:"#mipagina",
	data:{
		mensaje:'HOLA PROPIETARIO',
		nombre:'',
		apellido:'',
		genero:'',
		edad: 0,
		editando:0,
		indice:0,
		buscar:'',

		propietario:[
		{nombre:'jose',apellido:'campos',genero:'m',edad:27},
		{nombre:'josefina',apellido:'lopez',genero:'f',edad:30},
		{nombre:'noe',apellido:'can',genero:'m',edad:20},
		{nombre:'noemi',apellido:'torres',genero:'f',edad:20}
		],

		genero:[
		{clave:1,nombre:'m'},
		{clave:2,nombre:'f'}
		],


},
	// este objeto permite crear funciones y/o procedimientos
	methods:{


		aumentarEdad:function(){

			this.edad=Number(this.edad)+1;
		},
		disminuirEdad:function(){

			this.edad=Number(this.edad)-1;
		},
		agregarpropietario:function(){
	   if (this.nombre && this.apellido && this.genero && this.edad){
	   var unpropietario={nombre:this.nombre,apellido:this.apellido,genero:this.genero,edad:this.edad};
        
        //agrgo un objeto mascota en el array
        this.propietario.push(unpropietario);
        this.limpiarhtml();

        this.$refs.nombre.focus();
        Swal.fire({
  		position: 'top-end',
  		icon: 'success',
  		title: 'el propietario se guardo correctamente',
  		showConfirmButton: false,
  		timer: 2000
		})
      }
    else
    	Swal.fire({
  		position: 'top-end',
  		icon: 'error',
  		title: 'debes capturar todos los datos',
  		showConfirmButton: false,
  		timer: 2000
		})
		},
		limpiarhtml:function(){
         this.nombre='';
         this.apellido='';
         this.genero='';
         this.edad=''; 
		},
		eliminarpropietario:function(pos){
			//var pregunta=confirm('estas seguro de eliminar?');
			 //if (pregunta)
			// this.propietario.splice(pos,1);	
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
  			this.propietario.splice(pos,1);

    	Swal.fire(
      	'Eliminado!',
      	'La mascota fue eliminado.',
      	'success'
    		)
  		}
	})
			},
			
			 	
			
		editarpropietario:function(pos){
			this.nombre=this.propietario[pos].nombre;
			this.apellido=this.propietario[pos].apellido;
			this.genero=this.propietario[pos].genero;
			this.edad=this.propietario[pos].edad;
			this.editando=1;
			this.indice=pos;


		},
		cancelar:function(){
			this.limpiarhtml();
			this.editando=0;
		},
		guardarEdicion:function(){
			this.propietario[this.indice].nombre=this.nombre;
			this.propietario[this.indice].apellido=this.apellido;
			this.propietario[this.indice].genero=this.genero;
			this.propietario[this.indice].edad=this.edad;

			this.limpiarhtml();
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
	//fin del metons
	computed:{
		numeropropietarios:function(){
		var num=0;
		num=this.propietario.length;
		return num;
	},
	filtropropietario:function(){
		return this.propietario.filter((propietario)=>{
			return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
				   propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())
		});
	}
	}
		
		
		})	

    	