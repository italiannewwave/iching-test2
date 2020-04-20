// Burger menu animated
function animateMenu(x) {
		//if ($(window).width()>1080){
		//	return;
		//}
		if (document.getElementById("mySidenav").style.width == "250px") {
			closeNav(x);
		}
		else{
			openNav(x);
		}
}
function fromContent(x){
	if(document.getElementById("mySidenav").style.width == "250px"){
		animateMenu(x);
	}
	else {
		return;
	}
}
function changeMenu(x){
	x.classList.toggle("change");
}
// Side menu for Mobile
function openNav(x) {
		changeMenu(x);
    document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("line1").style.backgroundColor = "black";
		document.getElementById("line3").style.backgroundColor = "black";
}
// Set the width of the side navigation to 0
function closeNav(x) {
		changeMenu(x);
    document.getElementById("mySidenav").style.width = "0px";
		//document.getElementById("line1").style.backgroundColor = "white";
		//document.getElementById("line3").style.backgroundColor = "white";
}
//-----------------