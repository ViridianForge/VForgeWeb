/*
* Main js file to dictate functionality of the main ViridianForge website.
*/

//Storage variable to keep track of the currently displayed panel
var curPanel = 'about_page';

//Change which div is visible
//ToDo -- Use a class switch to animate the exit and entry
function setVisible(newPanel){
	document.getElementById(curPanel).style.display = 'none';
	document.getElementById(newPanel).style.display = 'block';
	
	curPanel = newPanel;
}

//Switches up the current navigation menu displayed
//ToDo -- Use a class switch to animate the exit and entry
function setNavGroup(oldNav, newNav){
	document.getElementById(oldNav).className = 'fade-out';
	document.getElementById(oldNav).style.display = 'none';
	document.getElementById(oldNav).className = 'fade-in';
	document.getElementById(newNav).style.display = 'block';
}