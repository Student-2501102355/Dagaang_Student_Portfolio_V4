/* script.js with working thumbnails + smooth transitions */
(function(){

  document.getElementById('year').textContent = new Date().getFullYear();

  /* THEME TOGGLE */
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    themeToggle.textContent =
      document.documentElement.classList.contains('light-theme') ? '☀️' : '🌙';
  });

  /* --- PROJECTS WITH THUMBNAILS --- */
  const projectData = [
    {
      title: 'Nasuli Blog V2 (Final)',
      desc: 'Full blog system with frontend and backend functionalities.',
      repo: 'https://github.com/Student-2501102355/Nasuli-Blog-V2-FINAL.git',
      live: 'https://student-2501102355.github.io/Nasuli-Blog-V2-FINAL/',
      img: 'Projects/1.png'
    },
    {
      title: 'CAN-AYAN Blog V4 (Final)',
      desc: 'Updated project entry as requested.',
      repo: 'https://github.com/Student-2501102355/CAN-AYAN-Blog-V4-FINAL.git',
      live: 'https://student-2501102355.github.io/CAN-AYAN-Blog-V4-FINAL/',
      img: 'Projects/2.png'
    },
    {
      title: 'Sign-Up / Sign-In Sample Project',
      desc: 'A simple authentication system demonstrating sign-up and sign-in features.',
      repo: 'https://github.com/Student-2501102355/Sign-Up-Sign-In-Project-Sample.git',
      live: 'https://student-2501102355.github.io/Sign-Up-Sign-In-Project-Sample/',
      img: 'Projects/3.png'
    },
    {
      title: 'Portfolio V1 (HTML Version)',
      desc: 'First version of my personal portfolio built fully with HTML, CSS, and JS.',
      repo: 'https://github.com/Student-2501102355/Portfolio-V1-HTML.git',
      live: 'https://student-2501102355.github.io/Portfolio-V1-HTML/',
      img: 'Projects/4.png'
    }
  ];

  const projectGrid = document.getElementById('projectGrid');
  projectData.forEach(p => {
    const el = document.createElement('div');
    el.className = 'project-card';
    el.innerHTML = `
      <img src="${p.img}" class="project-thumb" alt="${p.title} Thumbnail" />
      <h3>${p.title}</h3>
      <p class="muted small">${p.desc}</p>
      <div style="margin-top:10px">
        <a class="btn small" href="${p.repo}" target="_blank">View Repo</a>
        <a class="btn small ghost" href="${p.live}" target="_blank">Live</a>
      </div>`;
    projectGrid.appendChild(el);
  });

  /* --- BLOGS --- */
  const blogData = [
    { title:'Networking 101', content:'An intro to TCP/IP, subnetting, and common tools.' },
    { title:'Web Security Basics', content:'OWASP Top 10, secure headers, input validation, and tips.' },
    { title:'Automating with Python', content:'Use Python to automate repetitive tasks.' },
    { title:'Introduction to C Programming', content:'Learn the fundamentals of C programming.' }
  ];

  const blogGrid = document.getElementById('blogGrid');
  blogData.forEach((b,i)=>{
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
      <h3>${b.title}</h3>
      <p class="muted small">${b.content.substring(0,90)}...</p>
      <button class="btn small" data-idx="${i}">Read More</button>`;
    blogGrid.appendChild(card);
  });

  const blogView = document.getElementById('blogView');
  const blogTitle = document.getElementById('blogTitle');
  const blogBody = document.getElementById('blogBody');

  blogGrid.addEventListener('click',(e)=>{
    const btn = e.target.closest('button[data-idx]');
    if(!btn) return;
    const i = Number(btn.dataset.idx);
    blogTitle.textContent = blogData[i].title;
    blogBody.textContent = blogData[i].content;
    blogView.classList.remove('hidden');
  });

  document.getElementById('blogBack').addEventListener('click',()=>{
    blogView.classList.add('hidden');
  });

})();  // END MAIN FUNCTION


/* --- Smooth Navigation Transitions (Global, works everywhere) --- */
(function enableSmoothNav() {

  const mainContent = document.getElementById("mainContent");

  function smoothScroll(e) {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const targetID = link.getAttribute("href");
    const section = document.querySelector(targetID);

    if (!section) return;

    e.preventDefault();

    mainContent.classList.add("is-transitioning");

    setTimeout(() => {

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        mainContent.classList.remove("is-transitioning");
      }, 400);

    }, 200);
  }

  document.addEventListener("click", smoothScroll);

})();
