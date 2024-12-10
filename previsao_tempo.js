

const key = "c8a24f9a384b32fc9b8701c2f17dd077";

function colocarDadosNatela(dados){
    console.log(dados);
    document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + " ºC"
    document.querySelector(".texto_previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

 async function buscarCidade(cidade){ // async avisa que estamos pegando inf de outro serv

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json()) // usado para fazer com que o js espere as info do outro serv /// para acessar o servidor obrigatoriamente usamos o fetch, por fim pegamos os dados e passamos para  padrão json
    
    colocarDadosNatela(dados)
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input_cidade").value; //pegamos as info do htmlo através do query e colocamos o value para gaurdarmos apenas o valor
    buscarCidade(cidade)
    
}

