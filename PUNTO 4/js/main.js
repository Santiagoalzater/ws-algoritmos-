let compraFinal = 0;
let bono = 0;

function addH(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantH")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);
    let precio = 15000;
    let compra = cant * precio;
    compraFinal = compraFinal + compra;
    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addL(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantL")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);
    let precio = 3500;
    let compra = cant * precio;
    compraFinal = compraFinal + compra;
    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addP(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantP")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);
    let precio = 2000;
    let compra = cant * precio;
    compraFinal = compraFinal+ compra;
    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addF(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);
    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantF")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);
    let precio = 5000;
    let compra = cant * precio;
    compraFinal = compraFinal + compra;
    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function ramdonBono(){
    bono=Math.round(Math.random() * 20000)
}

function pagar(){
    if (compraFinal >= 60000) {
        ramdonBono();
        compraDes = compraTotal - bono;
        alert("Te obsequiamos un bono de: $" + bono + "\n" +
              "El valor de su compra con descuento es: $" + compraDes + "\n" +
              "GRACIAS POR SU COMPRA");
    } else {
        alert("No se ha genera Bono, ya que su compra no supero los 60.000" + "\n" +
              "El valor de su compra es: $" + compraFinal + "\n" +
              "GRACIAS POR SU COMPRA");
    }
}

function reload(){
    window.location.reload();
}