const menutoggle = document.getElementById('menu-toggle');
const navigasi = document.getElementsByClassName('nav-1')[0];

menutoggle.addEventListener('click', function(){
	navigasi.classList.toggle('slide');

});