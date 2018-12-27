// Logo
document.querySelector("#home-logo").onmouseenter = function() {
	document.querySelector("#home-logo").style.cursor = "pointer";
}
document.querySelector("#home-logo").onclick = function() {
	window.location.href = "index.html";
}

// Redirect tabs
document.querySelector("#home-tab").onclick = function() {
	window.location.href = "index.html";
}
document.querySelector("#about-tab").onclick = function() {
	window.location.href = "2about.html";
}
document.querySelector("#resume-tab").onclick = function() {
	window.location.href = "4resume.html";
}
document.querySelector("#contact-tab").onclick = function() {
	window.location.href = "5contact.html";
}

// Mobile menu slideIn
$("#mobileMenu").click( function() {
	$("#tabs-ul").toggleClass("slideIn");
});


