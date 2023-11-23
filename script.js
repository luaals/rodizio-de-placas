function gerar(){
    const num = document.querySelector('#num').value;
    const dia = document.querySelector('#dia').value;
    const msg = document.querySelector(".msg");


    if((num == 1 || num == 2) && ( dia == "segunda" || dia == "Segunda")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 3 || num == 4) && (dia == "terça" || dia == "Terça")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 5 || num == 6) && (dia == "quarta" || dia == "Quarta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 7 || num == 8) && (dia == "quinta" || dia == "Quinta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 9 || num == 0) && (dia == "sexta" || dia == "Sexta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else{
        msg.innerHTML = "Pode dirigir";
    }
}

/*
    function vias(){
    const msg2 = document.querySelector(".msg2");
    const automovel = document.querySelector('#automovel').value;
    const vias = document.querySelector('#vias').value; 

    if(vias == "área vermelha" || vias == "area vermelha" || vias == "Área vermelha" || vias == "Area vermelha" || automovel == "carro" || automovel == "Carro" || automovel == "caminhao" || automovel == "Caminhao" || automovel == "caminhão" || automovel == "Caminhão"){
        msg.innerHTML = "Seu automóvel não pode circular nas vias da área vermelha das 7h ás 10h e das 17h ás 20h";
    }

    else if(vias == "limítrofes" || vias == "Limítrofes" || vias == "limitrofes" || vias == "Limitrofes"){
        msg.innerHTML = "Seu carro não pode circular nas vias da área vermelha das 7h ás 10h e das 17h ás 20h, porém se possuir caminhão, ele pode de acordo com o rodízio";
    }
    else{
        msg.innerHTML = "nao sei"
    }
}*/
