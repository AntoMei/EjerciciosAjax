var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", 'archivo.json');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        objetoJson = JSON.parse(XMLHttpRequestObject.responseText);
        lugar.innerHTML = objetoJson.coche + " " + objetoJson.color;
    }

}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
    document.getElementById('boton').onclick = sacardatos;
}