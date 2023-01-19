$(document).ready(function(){

  $(window).scroll(function(){
    let windowHeight = $(window).height()*0.8;
    let scrollTop  = $(window).scrollTop();


      $(".a,.b").each(function(){
        if(scrollTop+windowHeight>$(this).offset().top){
          $(this).addClass("on");
        }else{
          $(this).removeClass("on");
        }
      });
  });

  $(".gnb").mouseover(function(){
    $("header").addClass("on")
  })
  $(".gnb").mouseout(function(){
    $("header").removeClass("on")
  })



  /* 옵션선택 */
  // function selectOpt2() {
  //     opts2.forEach(opt2 => {
  //         const innerValue = opt2.innerHTML;
  //
  //         function changeValue() {
  //             values2.innerHTML = innerValue;
  //         }
  //         opt2.addEventListener('click', changeValue)
  //     });
  // }
  /* 셀렉트영역 클릭 시 옵션 숨기기, 보이기 */
  // function selects2(e) {
  //     e.stopPropagation();
  //     option2.setAttribute('style', `bottom:${select2.offsetHeight + 16}px`)
  //     if (option2.classList.contains('selet-hide')) {
  //         option2.classList.remove('selet-hide');
  //         option2.classList.add('selet-show');
  //         select2.classList.add('on');
  //     } else {
  //         option2.classList.add('selet-hide');
  //         option2.classList.remove('selet-show');
  //         select2.classList.remove('on');
  //     }
  //     selectOpt2();
  // }





});
