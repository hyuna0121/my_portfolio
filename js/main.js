// ScrollMagic 사용
// 그 외 scrollreveal
const spyEls = document.querySelectorAll('section.scroll-spy');

// init controller
const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {
  // create a scene
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1 사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!)
});

const skillList = document.querySelectorAll('.skill .skill-container div');
const modalEl = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modal .btn-close');
const modalHeader = document.querySelector('#modal .modal-header p');
const modalBody = document.querySelector('#modal .modal-body p');

skillList.forEach(function (skill) {
  skill.addEventListener('click', function() {    
    modalHeader.innerHTML = skill.dataset.skill;
    modalBody.innerHTML = skill.dataset.skillInfo;
    modalEl.classList.add('show');
  });
});

modalCloseBtn.addEventListener('click', function() {
  modalEl.classList.remove('show');
});

modalEl.addEventListener('click', function (e) { // e : 이벤트 발생 시 이벤트 객체가 전달됨
  console.log(e.target); // 현재 이벤트가 발생한 대상(사용자가 실제 클릭한 가장 안쪽 요소)
  console.log(e.currentTarget); // 이벤트가 바인딩된 요소(여기선 modal), this와 동일

  if (e.target === e.currentTarget) { // 이벤트 리스너가 붙은 요소 그 자체를 클릭한 경우만 실행
    modalEl.classList.remove('show');
  }
});