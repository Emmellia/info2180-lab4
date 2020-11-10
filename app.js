"use strict"
window.onload=function(){

    var httpRequest;
    var searchBtn=document.querySelector(".btn");
    var searchRequest=document.getElementById("search");
    var result=document.querySelector("#result");
    
    
    

    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        let searchField=searchRequest.value;

        httpRequest= new XMLHttpRequest();
        var url="http://localhost:8080/superheroes.php?query="+searchField+"";
        httpRequest.onreadystatechange=loadMessage;
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    function loadMessage() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            result.innerHTML=response; 
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
    

}