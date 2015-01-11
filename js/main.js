/*
* Main js file to dictate functionality of the main ViridianForge website.
*
*/

//I should write an onload function that resets the visible page and radio buttons to the about page

//Seed value
var formerVis = 'about_page';

//Change which div is visible
function setVisible(newVis){
	document.getElementById(formerVis).style.display = 'none';
	document.getElementById(newVis).style.display = 'block';
	
	formerVis = newVis;
}