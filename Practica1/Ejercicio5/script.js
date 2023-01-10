var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", 'alert.js');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        eval(XMLHttpRequestObject.responseText);
    }
    
}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
    document.getElementById('boton').onclick = sacardatos;
}


