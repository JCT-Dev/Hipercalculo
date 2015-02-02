function home(){
    document.getElementById("home").setAttribute("class","uk-active");
    document.getElementById("quem_somos").setAttribute("class","uk-not-active");
    document.getElementById("solucoes").setAttribute("class","uk-not-active");
    document.getElementById("parceiros").setAttribute("class","uk-not-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-not-active");
    document.getElementById("contactos").setAttribute("class","uk-not-active");
    document.getElementById("end_frame").setAttribute("src","home.html");
}

function quem_somos(){
    document.getElementById("home").setAttribute("class","uk-not-active");
    document.getElementById("quem_somos").setAttribute("class","uk-active");
    document.getElementById("solucoes").setAttribute("class","uk-not-active");
    document.getElementById("parceiros").setAttribute("class","uk-not-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-not-active");
    document.getElementById("contactos").setAttribute("class","uk-not-active");
    document.getElementById("end_frame").setAttribute("src","quem_somos.html");
}

function solucoes(){
    document.getElementById("home").setAttribute("class","uk-not-active");
    document.getElementById("quem_somos").setAttribute("class","uk-not-active");
    document.getElementById("solucoes").setAttribute("class","uk-active");
    document.getElementById("parceiros").setAttribute("class","uk-not-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-not-active");
    document.getElementById("contactos").setAttribute("class","uk-not-active");
    document.getElementById("end_frame").setAttribute("src","solucoes.html");
}

function parceiros(){
    document.getElementById("home").setAttribute("class","uk-not-active");
    document.getElementById("quem_somos").setAttribute("class","uk-not-active");
    document.getElementById("solucoes").setAttribute("class","uk-not-active");
    document.getElementById("parceiros").setAttribute("class","uk-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-not-active");
    document.getElementById("contactos").setAttribute("class","uk-not-active");
    document.getElementById("end_frame").setAttribute("src","parceiros.html");
}

function marcas_comerciais(){
    document.getElementById("home").setAttribute("class","uk-not-active");
    document.getElementById("quem_somos").setAttribute("class","uk-not-active");
    document.getElementById("solucoes").setAttribute("class","uk-not-active");
    document.getElementById("parceiros").setAttribute("class","uk-not-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-active");
    document.getElementById("contactos").setAttribute("class","uk-not-active");
    document.getElementById("end_frame").setAttribute("src","marcas_comerciais.html");
}

function contactos(){
    document.getElementById("home").setAttribute("class","uk-not-active");
    document.getElementById("quem_somos").setAttribute("class","uk-not-active");
    document.getElementById("solucoes").setAttribute("class","uk-not-active");
    document.getElementById("parceiros").setAttribute("class","uk-not-active");
    document.getElementById("marcas_comerciais").setAttribute("class","uk-not-active");
    document.getElementById("contactos").setAttribute("class","uk-active");
    document.getElementById("end_frame").setAttribute("src","contactos.html");
}