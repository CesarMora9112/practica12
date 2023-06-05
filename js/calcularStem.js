function calcula_densidad(){
    var masa= 5.97E24;
    var radio= 6378e3;
    var volumen= (4/3)*Math.PI*radio*radio*radio;
    var densidad= masa/volumen;

    var c=299792;
    var z=0.15;
    var v=z*c;
    var d=document.getElementById("resultadoA");
    d.innerHTML=v+' km/s';
    }
    