document.addEventListener("DOMContentLoaded", function(){
    var selectIdiomas = document.getElementById("idiomas");


    selectIdiomas.addEventListener("change", function(){
        var selectedLanguage = selectIdiomas.value;

        switch(selectedLanguage){
            case "es":
                window.location.href= "index_es.html";
                break;
            case "gal":
                window.location.href= "index_gal.html";
                break;
            case "ek":
                window.location.href= "index_ek.html";
                break;
            case "cat":
                window.location.href= "index_cat.html";
                break;
            default:
                break;
        }
    });
});