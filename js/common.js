$(document).ready(function(){

  function header_active(){
    var $hash = location.hash;
    var $index = $hash.replace("#", "");
    console.log($index);
  
    $(".menuactive li").removeClass("active");
    $(".menuactive li").eq($index).addClass("active");
  }

  //load 이벤트 : 문서가 준비가 완료되면 외부파일을 로드해오겠다는 이벤트 (단, 서버라는 호스트를 통과해야 가져올 수 있음. 로컬 탐색기로는 열 수 없음)
    $("#header").load("header.html", function(){
      header_active();
    });
    $("#top") .load("top.html")
    $("#footer").load("footer.html");

    //메뉴바 active

    
//     $('.menuactive li a').click( function() {
//       $(this).closest.siblings().removeClass('active');
//       $(this).closest.addClass('active');
      
//  });

//  $(".menuactive li").click(function(){
//   $(this).removeClass("active");
//   $(this).addClass("active");
//   return false;

// });


  


});




