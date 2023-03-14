let c=document.getElementById("c");
let v=document.getElementById("v");

$.get("http://localhost:8080/a", function(data){
    
   console.log(data);
    for(i=0;i<data.length;i++){

       let div=document.createElement("div");
       div.textContent=data[i].id;

       let div1=document.createElement("div");
       div1.textContent=data[i].nome;

       let div2=document.createElement("div");
       div2.textContent=data[i].cognome;

       let div3=document.createElement("div");
       div3.textContent=data[i].telefono;

       let div4=document.createElement("div");
       div4.textContent=data[i].indirizzo;

       let div5=document.createElement("div");
       div5.textContent=data[i].email;

       let div6=document.createElement("div");
       div6.textContent=data[i].data_nascita;

       let div7=document.createElement("div");
       div7.textContent=data[i].patente;

       let div8=document.createElement("div");
       div8.textContent=data[i].stato;

       c.appendChild(div);
       c.appendChild(div1);
       c.appendChild(div2);
       c.appendChild(div3);
       c.appendChild(div4);
       c.appendChild(div5);
       c.appendChild(div6);
       c.appendChild(div7);
       c.appendChild(div8);
    }
  });
  
  $("#button").click(function(){
    let id=document.getElementById("input").value;
    v.innerHTML="";
    $.get("http://localhost:8080/ar?id="+id, function(data){
    console.log("ciao");
    console.log(data);
    
       
      let div=document.createElement("div");
       div.textContent=data.id;

       let div1=document.createElement("div");
       div1.textContent=data.nome;

       let div2=document.createElement("div");
       div2.textContent=data.cognome;

       let div3=document.createElement("div");
       div3.textContent=data.telefono;

       let div4=document.createElement("div");
       div4.textContent=data.indirizzo;

       let div5=document.createElement("div");
       div5.textContent=data.email;

       let div6=document.createElement("div");
       div6.textContent=data.data_nascita;

       let div7=document.createElement("div");
       div7.textContent=data.patente;

       let div8=document.createElement("div");
       div8.textContent=data.stato;

       v.appendChild(div);
       v.appendChild(div1);
       v.appendChild(div2);
       v.appendChild(div3);
       v.appendChild(div4);
       v.appendChild(div5);
       v.appendChild(div6);
       v.appendChild(div7);
       v.appendChild(div8);
    
  });
  });