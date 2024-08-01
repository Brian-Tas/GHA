function redirectButton(id, link) {
    document.getElementById(id).addEventListener('click', ()=>{
        window.location = link;
    });
}