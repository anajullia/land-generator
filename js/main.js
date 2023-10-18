const cores=["verde", "azul", "amarelo", "laranja"];

function gerarmundo(){

    for(var i=1; i<=16; i++){
        

        var celatual = document.getElementById("cel"+i);
        var corescolhida = cores[Math.floor(Math.random() * cores.length)];
        celatual.innerHTML = corescolhida;

        if(celatual.innerHTML == "verde"){
            celatual.innerHTML = " ";
            celatual.style.backgroundColor = "green";
        }
        else if(celatual.innerHTML == "azul"){
            celatual.innerHTML = " ";
            celatual.style.backgroundColor = "blue";
        }
        else if(celatual.innerHTML == "amarelo"){
            celatual.innerHTML = " ";
            celatual.style.backgroundColor = "yellow";
        }
        else if(celatual.innerHTML == "laranja"){
            celatual.innerHTML = " ";
            celatual.style.backgroundColor = "orange";
        }
    }

}