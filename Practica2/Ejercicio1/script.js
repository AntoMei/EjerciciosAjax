var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(event){
    event.preventDefault();
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        var name = document.getElementById("name").value;
        XMLHttpRequestObject.open("GET", 'mensaje.php?nombre=' + name);
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
    }
    
}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
    document.getElementById('boton').onclick = sacardatos;
}