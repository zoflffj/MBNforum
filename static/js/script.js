// 쓸만한 JS 코드 정리 - 필요한 것만 가져다 사용
// class, id는 프로젝트별로 달라짐

// 기본사항:
// document.getElementByID('ID)' <- id 가져오기
// document.querySelector('.class') <- 쿼리 가져오기

//bx slider
$( document ).ready( function() {
  $( '.slider' ).bxSlider( {
    auto: true,
    pause: 3000,
    autoHover: true,
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 300,
    slideMargin: 20,
    moveSlides: 1,
  } );
} );
//bx slider 끝

function openPopup() {
  var popup = document.getElementsByClassName('popup')[0];

  popup.classList.add('open');

  document
    .getElementsByClassName('js-close-popup')[0]
    .addEventListener('click', function () {
      popup.classList.remove('open');
    });

  document
    .getElementsByClassName('dimmed')[0]
    .addEventListener('click', function () {
      popup.classList.remove('open');
    });
}
//팝업 오픈('open, dimmed' 클래스 필요[다른걸로 바꿔도 됨])

function toggleHeader() {
  var header = document.getElementById('header');
  var navItem = document.getElementsByClassName('header__nav-item');

  header.classList.toggle('header--open');

  var closeHeader = function closeHeader(e) {
    if (!e.target.hasAttribute('onclick')) {
      header.classList.remove('header--open');
    }
  };

  for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', closeHeader, false);
  }
}
//메뉴 클릭시 네비 오픈


function tabtoggle(){
  document.querySelector('.compare-tab').classList.toggle('on');
}
//탭 토글


