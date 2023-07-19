/* document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[0].classList.toggle('orange');
    document.querySelectorAll('.tab-content')[0].classList.toggle('show');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
})
document.querySelectorAll('.tab-button')[1].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[1].classList.toggle('orange');
    document.querySelectorAll('.tab-content')[1].classList.toggle('show');
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
})
document.querySelectorAll('.tab-button')[2].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[2].classList.toggle('orange');
    document.querySelectorAll('.tab-content')[2].classList.toggle('show');
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
}) */

// for문을 사용한 확장성 있는 코드 작성
for (let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click', function(){
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    })
  };
/*  

$('.tab-button').eq(0).on('click', function(){
.eq(0)이 [0]과 같은 효과를 준다.
});

*/