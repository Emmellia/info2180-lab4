"use strict"
window.onload=function(){

    var searchBtn=document.querySelector(".btn");
    var httpRequest;

    searchBtn.addEventListener("click", function(){

        httpRequest= new XMLHttpRequest();
        var url="http://localhost:8080/superheroes.php";
        httpRequest.onreadystatechange=loadMessage;
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    function loadMessage() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }



}