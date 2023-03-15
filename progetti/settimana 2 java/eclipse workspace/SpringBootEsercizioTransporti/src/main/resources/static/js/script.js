document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    console.log("js ready");
    
    
    let tbody = document.querySelector("tbody");
		let tr = document.createElement("tr");
		let td = document.createElement("td");
		$.ajax({
			url : "/api/autisti",
			contentType : 'json'
		}).done(function(data) {
			// inserire tutti i dati con un for 
			let testotd;
			for(let index=0;index<data.lenght;index++){
			testotd[index]=document.createElement("td");
			testotd= td+index;
			testotd.textContet = data.id 
			tr.appendChild(testotd);
			}
			console.log(data)
			// $(this).addClass("done");
        })
    
});