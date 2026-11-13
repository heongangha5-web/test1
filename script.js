// 국가공무원인재개발원 포털 스크립트

// 1. 교육과정 탭 전환 기능
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 모든 버튼 활성화 클래스 제거
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // 모든 콘텐츠 숨김
      tabContents.forEach(content => content.classList.remove('active'));

      // 클릭한 버튼 활성화
      button.classList.add('active');

      // 대응하는 콘텐츠 표시
      const targetId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 2. 네비게이션 스크롤 인터랙션
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

// 3. 진천 본원 / 과천 분원 캠퍼스 토글 함수
function switchCampus(campus) {
  const jincheonBtn = document.getElementById('btn-jincheon');
  const gwacheonBtn = document.getElementById('btn-gwacheon');
  const jincheonContent = document.getElementById('campus-jincheon');
  const gwacheonContent = document.getElementById('campus-gwacheon');

  if (campus === 'jincheon') {
    jincheonBtn.classList.add('active');
    gwacheonBtn.classList.remove('active');
    jincheonContent.style.display = 'block';
    gwacheonContent.style.display = 'none';
  } else if (campus === 'gwacheon') {
    gwacheonBtn.classList.add('active');
    jincheonBtn.classList.remove('active');
    gwacheonContent.style.display = 'block';
    jincheonContent.style.display = 'none';
  }
}
