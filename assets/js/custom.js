
    (function(n,t,c){var o=t.createElement("script");o.async=!0,o.src="https://cdn.buttonizer.io/embed.js",o.onload=function(){window.Buttonizer.init(c)},t.head.appendChild(o)})(window,document,"13b2868e-f544-4bcd-acf7-b1db2f9b72f7");
  

      // hero image slider + left-corner roll + dots
      const heroSlides = document.querySelectorAll('.hero-slide');
      const rollItems  = document.querySelectorAll('.roll-item');
      const heroDots   = document.querySelectorAll('.hero-dots .dot');
      let heroIndex = 0;
      let heroTimer;

      function goToSlide(i){
        heroIndex = i;
        heroSlides.forEach((s,idx)=>s.classList.toggle('active', idx===i));
        rollItems.forEach((r,idx)=>r.classList.toggle('active', idx===i));
        heroDots.forEach((d,idx)=>d.classList.toggle('active', idx===i));
      }
      function nextSlide(){ goToSlide((heroIndex+1) % heroSlides.length); }
      function startHeroAutoplay(){
        clearInterval(heroTimer);
        heroTimer = setInterval(nextSlide, 5000);
      }
      rollItems.forEach(btn=>{
        btn.addEventListener('click', ()=>{ goToSlide(+btn.dataset.slide); startHeroAutoplay(); });
      });
      heroDots.forEach(btn=>{
        btn.addEventListener('click', ()=>{ goToSlide(+btn.dataset.slide); startHeroAutoplay(); });
      });
      startHeroAutoplay();

      const siteHeader = document.querySelector('header.main');
      const toggleHeaderState = () => {
        if(window.scrollY > 60){ siteHeader.classList.add('scrolled'); }
        else{ siteHeader.classList.remove('scrolled'); }
      };
      window.addEventListener('scroll', toggleHeaderState);
      toggleHeaderState();

      const backToTop = document.getElementById('rts-back-to-top');
      window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 400);
      });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      const menuToggleBtn = document.querySelector('.menu-toggle');
      if (menuToggleBtn){
        menuToggleBtn.addEventListener('click', function(){
          const nav = document.querySelector('nav');
          nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
      }
      document.querySelectorAll('.gallery-tabs button').forEach(btn=>{
        btn.addEventListener('click', function(){
          document.querySelectorAll('.gallery-tabs button').forEach(b=>b.classList.remove('active'));
          this.classList.add('active');
        });
      });

      // footer copyright year (from original site footer script)
      const yearEl = document.getElementById('year');
      if (yearEl) { yearEl.textContent = new Date().getFullYear(); }