function calc(){

    var quantities  = document.getElementsByName("quantity");
    var output      = document.getElementById("output");
   
    
    for (var input of quantities) {
        output.innerHTML +=   `Id do Elemento = ${input.id} - Value do Elemento ${input.value} </br>`;
    }
}