var prods = [
    { id: 1, name: "Produto 1", price: 1000.0 },
    { id: 2, name: "Produto 2", price: 2000.0 },
];

function calc(){
    
    output = document.getElementById("output");
    output.innerHTML = "";
    
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    
    output.innerHTML += `Preço: ${formatter.format(prods[0].price)}</br>`
    output.innerHTML += `Preço: ${formatter.format(prods[1].price)}</br>`
    
} 