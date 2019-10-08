window.addEventListener("load", event => {
	console.log("loaded");
	main();
});



const main = event => {
	
	console.log("MAIN");
	
	let div = document.createElement("div");
	document.body.appendChild(div);

	div.addEventListener('clic', onClick);

}

function dimension_image()
{
	let dimension = document.getElementById('myImage');
	document.getElementById('myImage').style.height="400px";
	document.getElementById('myImage').style.width="400px";
	document.getElementById('myImage').style.margin="10px";
	
}


function choix_image_avec_boutons(numero_image) {
  let image_courante;
  	dimension_image();
  if (numero_image == 0) {
  
    image_courante = "image/shadesblue.png"
  }
  else if (numero_image == 1) {
  
    image_courante = "image/yellow_black.png"
  }
  else if (numero_image == 2) {
  
    image_courante = "image/green_white.png"
  }


else {
    image_courante = "image/multi.png"
  }
  document.getElementById('myImage').src = image_courante;
}


const onClick = event =>{
	console.log("clicked!");
	console.log(event.clientX);	
}

