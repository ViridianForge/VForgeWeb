/*
* Main js file to dictate functionality of the main ViridianForge website.
*/

//Seed value
var formerVis = 'about_page';

//Change which div is visible
function setVisible(newVis){
	document.getElementById(formerVis).style.display = 'none';
	document.getElementById(newVis).style.display = 'block';
	
	formerVis = newVis;
}