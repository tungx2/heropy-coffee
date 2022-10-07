 
 const badgeEl= document.querySelector('.badges');
 const topBtnEl= document.querySelector('.top_btn');

 window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY>760){
        // badgeEl.style.display= 'none';
        gsap.to(badgeEl,0.6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(topBtnEl,0.6, {
            opacity: 1,
        });
    }else{
        // badgeEl.style.display= 'block';
        gsap.to(badgeEl,0.6, {
            opacity: 1,
            dispalay: 'block'
        });
        gsap.to(topBtnEl,0.6, {
            opacity: 0,
        });
    }
 })

topBtnEl.addEventListener('click', function() {
    gsap.to(window, .6, {
        scrollTo: 0
    })
})


//  gsap.to(요소,시간,속성)

// 비쥬얼 순차적으로 나오는 애니메이션
const fadeEl= document.querySelectorAll('.fadeIn');

// 요소들 하나씩 반복 처리
fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1, {
        delay: (index + 1) * 0.7, //0.7초씩 느리게 시간을 추가
        opacity: 1
    });
});

// 커피프로모션 토글 아이콘 클릭시 박스 open/close
// const 변하지않는 let 변하는
const promotionEl= document.querySelector('section.promotion');
const toggleEl= document.querySelector('.toggle_btn');

//토글버튼 글릭시 프로모션 높이 변경
toggleEl.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){ //만약에 promotion클래스에 .hide가 있다면 (0인 상태에서 누르니까)
        // 높이가 663이 되어야함
        promotionEl.classList.remove('hide');
    }else{ //promotion 클래스에 hide가 없다면
        //.hide추가
        promotionEl.classList.add('hide');
    }
});

// coffee blend, reserve, favorite,find store 콘텐츠가 80% 지점에 보일 때 동작하는 스크립트
const spyEl= document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){
    new ScrollMagic
    .Scene({ //감시할 장면 추가
        triggerElement:spyEl, //보여질 여부를 감시할 요소를 지정
        triggerHook:0.8 //화면의 80%지점에서 동작
    })
    .setClassToggle(spyEl,'show') //show 클랙스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다. 
})


// 푸터 카피라이트 연도
const thisYear= document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();