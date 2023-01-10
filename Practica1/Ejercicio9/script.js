var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        /*let imagen = document.createElement('img')
        imagen.setAttribute('src', './loading.gif')
        imagen.setAttribute('id', 'imagen')
        document.getElementById('contenedor').appendChild(imagen)*/
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", 'mensaje.php');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        //imagen.remove()
        lugar.innerHTML = XMLHttpRequestObject.responseText;
    }
    
}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
   document.getElementById('boton').onclick = sacardatos;
   //sacardatos();
}