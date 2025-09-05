
var foods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Alface", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var name = document.getElementById("name").value;
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;

     var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

        let Item = false;
        for(let input of quantities){
            if(parseInt(input.value) > 0){
                Item = true;
                break;
            }
        }

        if(!Item){
                
                output.innerHTML = `Caro <strong>${name}</strong> <br><br>
                Por favor, selecione algum item do menu.`;
                return;    
            }

     output.innerHTML = "";

     output.innerHTML += `
        Caro <strong>${name}</strong> <br><br><br>
        Seguem os dados do seu pedido. <br><br> 
        O seu pedido é: <br>
        <ul>`;
        
        for (var input of quantities) {
          var id = parseInt(input.id);
          var qty = parseInt(input.value);
          
          if(qty > 0){
          var itemTotal = foods[id-1].price * qty;
          total += itemTotal;

                         output.innerHTML += 
                            `<li>
                               Prato: ${foods[id-1].name}  -
                               Preço unitário: ${formatter.format(foods[id-1].price)} - 
                               Quantidade: ${input.value} - 
                               Total: ${formatter.format(itemTotal)}.
                             </li>`;
     }
        }
        output.innerHTML += `</ul><br><br><br>Preço final: ${formatter.format(total)}`;
    
}
