var papeles = 0;
var div = 0;

var imagenes = [];
imagenes["billete_50"] = "villete50.gif";
imagenes["billete_20"] = "villete20.gif";
imagenes["billete_10"] = "villete10.gif";


var boton = document.getElementById("Extraer");
boton.addEventListener("click",entregar_Billetes);

class billetes
{
  constructor(n, c , v)
  {
    this.imagen = new Image ();
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.nombre];
  }
}

var caja = [];
var entregado = [];
caja.push(new billetes("billete_50",10,50));
caja.push(new billetes("billete_20",15,20));
caja.push(new billetes("billete_10",20,10));

function entregar_Billetes () {
  var t = document.getElementById("valor");
  dinero = parseInt (t.value);
  for ( bi of caja) {
    div = Math.floor(dinero / bi.valor);

  if (div > bi.cantidad) {
    papeles = bi.cantidad;
  }
  else {
    papeles = div
  }
  entregado.push(new billetes (bi.imagen,papeles,bi.valor));
  dinero = dinero - (bi.valor * papeles);

  }
  if (dinero > 0) {
    resultado.innerHTML = " Este cajero no tiene los recursos suficientes : </br>";
  }

  else {
  for ( e of entregado) {
    if (e.cantidad > 0) {
      resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      imagen.innerHTML += document.body.appendChild(bi.imagen);
    }
    }
    }
    }
