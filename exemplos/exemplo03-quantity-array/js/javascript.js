var prods = [
    { id: 1, name: "Produto 1", price: 10.0 },
    { id: 2, name: "Produto 2", price: 20.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    
    output.innerHTML = "";

    for (var input of quantities) {
        var id = input.id;

        output.innerHTML += `Produto: ${prods[id-1].name}  - Preço: ${prods[id-1].price} - Quantidade: ${input.value} </br>`;
        total            += prods[id-1].price * parseFloat(input.value);
    }

    output.innerHTML += `<h2>Total: ${total}</h2>`;

}

