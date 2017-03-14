
 
/* se declara un arreglo vacio de forma global, donde se 
almacenara  la informacion  */
var nombres= [];

function Stack(){
/* se declara un constructor que nos servira de molde
para poder llamar las pilas */ 

  var datos= [];

 /*con el metodo push se agrega en la ultima posicion */
  this.push= function(dato){
  	datos.push(dato);
  };

 /* con el metodo pop retorna el último elemento de la pila */
  this.pop= function(){
  	return datos.pop();
  };

  /*con el metodo peek nos permite ver el ultimo sin borrarlo */
  this.peek= function(){
  	return datos[datos.length -1];
  };

  /*con el metodo print se imprime  */
  this.print= function(){
  console.log(datos.toString());	
  };

}

 /*se realiza con for el ingreso de datos para poder depues concatenar  */

var nombre= new Stack();
   for(var i=0; i< 5; i++){
   	nombre.push(prompt("Ingrese el nombre"));
   }

var apellido= new Stack();
   for(var i=0; i<5; i++){
   	apellido.push(prompt("Ingrese el apellido"));
   }


var nombres= new Stack();
   for(var i=0; i<5; i++){
   	nombres.push(nombre.pop() + " " + apellido.pop());
   }   

nombres.print();


