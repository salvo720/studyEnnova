let clienti=document.getElementById("clienti");
let viaggi=document.getElementById("viaggi");

$.get("http://localhost:8080/", function(data){
    
    for(i=0;i<data.length;i++){
       let div=document.createElement("div");
       div.textContent=data[i];
       clienti.appendChild(div)
    }
  });
  
  $("#button").click(function(){
    let id=document.getElementById("input").value;
    viaggi.innerHTML="";
    $.get("http://localhost:8080/viaggi?id="+id, function(data){
    
    for(i=0;i<data.length;i++){
       let div=document.createElement("div");
       div.textContent=data[i];
       viaggi.appendChild(div)
    }
  });
  });