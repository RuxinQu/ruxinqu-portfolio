// banner click me section

let img = document.getElementById('rotate-img');
let click = document.getElementById('click-me');
let help = document.getElementById('help-me');
let message = document.getElementById('crook-message');


function rotate(){
    img.style.transform = "rotate(30deg)";
    message.style.display = 'block';
    help.style.display = 'block';
    click.style.display = 'none';
};

function rotateReturn(){
    img.style.transform = "";
    message.style.display = 'none';
    click.style.display = 'block';
    help.style.display = 'none';
};

click.addEventListener('click',rotate);
help.addEventListener('click',rotateReturn);

