console.log("JS foi carregado!");
let estadoBotao= {
    isOpen:true
}
    


const containerFotosProjeto=document.querySelector(".container-fotos-projeto");
const gridOffsetArea=document.querySelectorAll(".grid-offset");
const botaoClose= document.createElement("button");
const imgBotaoClose=document.createElement("img");
imgBotaoClose.src="/src/assets/botoes/icon-close.svg";

botaoClose.append(imgBotaoClose);
botaoClose.classList.add("botao-close");
botaoClose.style.setProperty("position","absolute");
botaoClose.style.setProperty("z-index",3);


const watchBotaoClose= new Proxy(estadoBotao,{
    set(target,prop,novoValor){
        if(prop="isOpen"&&target[prop]==true){
            botaoClose.classList.toggle("d-none");
            target[prop]=novoValor;

        } else if(target[prop]==false){
            botaoClose.classList.toggle("d-none");
            target[prop]=novoValor;
        }
    }
});

const fotosProjeto= document.querySelectorAll(".container-foto");
console.log("Objeto das fotos: ",fotosProjeto);

let fotoAtiva;

fotosProjeto.forEach(element => {
    console.log("foto: ", element.id);
    // console.log((element.id.split("-"))[1]);
    // let aux = element.id.split("-");
    console.log("aux",(element.id.split("-"))[1]);
    element.addEventListener("click",()=>{
        if((document.querySelector(`#${element.id}`)).classList.contains("ativa")==false){
            //  containerFotosProjeto.prepend(botaoClose);
            //  console.log("'botao Close' Adicionado!");
            gridOffsetArea.forEach(element=>{
                element.style.backgroundColor="rgba(99, 99, 99,.2)";
            });
            (document.querySelector(`#${element.id}`)).classList.toggle("ativa");
            console.log("agora"+`#${element.id}`+"é uma foto 'ativa'");
            fotoAtiva=(element.id.split("-"))[1];
        } else{
            document.querySelector(".ativa").classList.remove("ativa");
            (document.querySelector(`#${element.id}`)).classList.add("ativa");
        }

    })
});


console.log("Espaço 'grid-offset-area: ",gridOffsetArea);


gridOffsetArea.forEach(element=>{
    element.addEventListener("click",()=>{
        console.log("Offset Area clickada, foto 'ativa' ira ser des-destacada");
        gridOffsetArea.forEach(element=>{
            element.style.backgroundColor="inherit";
        })
        if(document.querySelector(".ativa")) document.querySelector(".ativa").classList.remove("ativa");

    })
})


botaoClose.addEventListener("click",()=>{
    console.log("BOTAO CLOSE CLICKADO")
    if(document.querySelector(".ativa")) document.querySelector(".ativa").classList.remove("ativa");
    botaoClose.classList.toggle("d-none");
});




