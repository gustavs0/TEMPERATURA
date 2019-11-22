function getClima(){
    
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=56d07e3a24ce1661cdaf641d1e86a0ff',
        dataType: 'json',
        success: function (data){
            
            temperatura  = data.main.temp - 273;
            $('temperatura').html(temperatura+"º");
            descricao = data.weather[0].description;
            $('#situacao').html(descricao);
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
            
        }
    });
}
function traduzirDescricao(){
    descricaoTraduzida = "";
    if(descricao == "clear sky"){
        descricaoTraduzida = "Céu limpo";
    }else if(descricao == "few clods") {
        descricaoTraduzida = "Poucas nuvens";
    }else if(descricao == "scattered clouds") {
        descricaoTraduzida = "nuvens dispersas";
    }else if(descricao == "broken clouds") {
        descricaoTraduzida = "nuvens quebradas";
    }else if(descricao == "shower rain") {
        descricaoTraduzida = "chuva de banho";
    }else if(descricao == "rain") {
        descricaoTraduzida = "chuva";
    }else if(descricao == "thunderstorm") {
        descricaoTraduzida = "trovoada";
    }else if(descricao == "snow") {
        descricaoTraduzida = "neve";
    }else if(descricao == "mist") {
        descricaoTraduzida = "névoa";
    }
    return descicaoTradudida;
    
}

window.onload = function(){
    getClima();
};  

