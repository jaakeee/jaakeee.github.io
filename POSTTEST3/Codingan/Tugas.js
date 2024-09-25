const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

function myFunction() {
    let text = "Apakah anda ingin Melakukan Pendaftaran?";
    
    if (confirm(text)) {
       
        window.location.href = "Login.html";
    } else { 
    }
    
    return false; 
}

function Nendroid() {
    let text = "Sudah Siap Khilaf?";
    
    if (confirm(text)) {
       
        window.location.href = "Nendroid.html";
    } else { 
    }
    
    return false; 
}

function Scaled_Figure() {
    let text = "Mau lihat Scaled Figure ya?";
    
    if (confirm(text)) {
       
        window.location.href = "Scaled Figure.html";
    } else { 
    }
    
    return false; 
}

function Pop_Up_Parade() {
    let text = "Awass Khilaf!";
    
    if (confirm(text)) {
       
        window.location.href = "Pop Up Parade.html";
    } else { 
    }
    
    return false; 
}

function Prize_Figure() {
    let text = "Seriusan Mau Lihat?";
    
    if (confirm(text)) {
       
        window.location.href = "Prize Figure.html";
    } else { 
    }
    return false; 
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});