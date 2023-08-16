const container = document.querySelector('.main-content');
const links = document.querySelectorAll('header nav a');
let url = 'partials/home.html';

function selectContent(e) {
    e.preventDefault();

    let currentPageURL = e.target.href;
  
    loadContent(currentPageURL);
}

for (i=0;i<links.length;i++) {
    
    links[i].addEventListener('click', selectContent);
}

function loadContent (requestedPage) {
	
    fetch(requestedPage).then(function (rsp) {
		
        return rsp.text();
        
	}).then(function (data) {
		
        container.innerHTML = data;
	});
}
 
loadContent(url);
