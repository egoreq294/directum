document.querySelector('#reg_button').addEventListener('click',event=>{
    document.querySelector('.form').classList.remove('display_none');
});
document.querySelector('#close_button').addEventListener('click',event=>{
    document.querySelector('.form').classList.add('display_none');
});


//слайдер сделан готовой библиотекой, сам за 2 дня так и не разобрался как сделать нормальный адаптивный слайдер
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });