document.getElementById('hamburger').addEventListener('click',ToggleMenu);

function ToggleMenu(){
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}



