var nombres=[];

function Queue(){
  
   var elemento=[];

  this.elemento = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue; 
  this.dequeue = dequeue;
  this.empty = empty;
  
  this.print = print;
  

  /*El metodo enqueue agrega un elelmento a la cola */
  function enqueue (element) {
    this.elemento.push(element);
  }
  
  /*El metodo dequeue retira el primer elelmento de la cola  */
  function dequeue(){
    return this.elemento
    .shift();
  }
  /*El metodo empty indica si la cola esta vacia */
  function empty(){
    return this.elemento.length == 0;  
  }
  /*El metodo print no es propio de queue, pero se utiliza para imprimir */
  function print(element){
    this.elemento.forEach(function(item){
      element.appendChild(item.node);
    });
  }



var nombre= new Queue();
   for(var i=0; i< 5; i++){
    nombre.push(prompt("Ingrese el nombre"));
   }

var apellido= new Queue();
   for(var i=0; i<5; i++){
    apellido.push(prompt("Ingrese el apellido"));
   }


var nombres= new Queue();
   for(var i=0; i<5; i++){
    nombres.push(nombre.shift() + " " + apellido.pop());
   }   

nombres.print();

}
