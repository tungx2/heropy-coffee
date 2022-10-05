 
 const badgeEl= document.querySelector('.badges');

 window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY>760){
        // badgeEl.style.display= 'none';
        gsap.to(badgeEl,0.6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        // badgeEl.style.display= 'block';
        gsap.to(badgeEl,0.6, {
            opacity: 1,
            display: 'block'
        });
    }
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
