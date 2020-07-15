document.querySelector('#reg_button').addEventListener('click',event=>{
    document.querySelector('.form').classList.remove('display_none');
});
document.querySelector('#close_button').addEventListener('click',event=>{
    document.querySelector('.form').classList.add('display_none');
});