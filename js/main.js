const cores=["verde", "azul", "amarelo", "laranja"];

function gerarmundo(){

    for(var i=1; i<=9; i++){
        

        var celatual = document.getElementById("cel"+i);
        var corescolhida = cores[Math.floor(Math.random() * cores.length)];
        celatual.innerHTML = corescolhida;
    }

}