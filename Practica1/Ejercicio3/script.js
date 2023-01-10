var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(ajax, idDiv){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById('imagen');
        XMLHttpRequestObject.open("GET", 'imagen2.jpg');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        objeto.setAttribute('src', XMLHttpRequestObject.responseURL)
    }
    
}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
    document.getElementById('boton').onclick = sacardatos;
}