// IMA Karate — Webflow page enhancer
// Source: /home/user/workspace/webflow-footer-code-v2.html
(function(){
  var IMG = {
    hero: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/2021-Team-Photo-in-Track-Suits-1536x1024.jpg",
    adultClass: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/adult-class-1536x1152.jpg",
    tinyTigers: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/Tiny-Tigers.jpg",
    tinyTigersClass: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/Tiny-Tigers-Class.jpg",
    tinyTigerPhoto: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/tiny-tiger-photo.jpg",
    littleDragons: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/little-dragons.jpg",
    youth: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/Youth.jpg",
    youthClass: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/youth-class.jpg",
    teen: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/Teen.jpg",
    compTeam: "https://raw.githubusercontent.com/robh-autods/ima-karate-assets/main/Comp-Team.jpg",
  };

  function $(sel, ctx){ return (ctx||document).querySelector(sel); }
  function $$(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }
  function setHTML(el, html){ if(el) el.innerHTML = html; }
  function replaceImg(el, url, alt){
    if(!el) return;
    el.setAttribute('src', url);
    el.removeAttribute('srcset');
    el.removeAttribute('sizes');
    if(alt) el.setAttribute('alt', alt);
  }
  function hideExtras(container){
    if(!container) return;
    // Hide any template-provided "Head Coach"/instructor profile widgets
    $$('[data-w-id]', container).forEach(function(el){
      var t = (el.textContent||'').toLowerCase();
      if(t.indexOf('josh steven')>-1 || t.indexOf('head bjj')>-1 ||
         t.indexOf('head coach')>-1 || t.indexOf('view instructor')>-1 ||
         t.indexOf('brazilian jiu')>-1){
        var parent = el.closest('.container, .column, .section') || el;
        if(parent && !parent.classList.contains('section')){
          parent.classList.add('ima-hide');
        } else {
          el.classList.add('ima-hide');
        }
      }
    });
  }

  function run(){

    // ============ 1. HERO ============
    var hero = $('.section.hero-slide-one');
    if(hero){
      var h1 = $('.hero-headline', hero);
      setHTML(h1, '<strong>Developing Karate Athletes</strong><br/><strong>of the Highest Level</strong>');

      var p = $('.light-paragraph', hero);
      setHTML(p,
        'Our karate family invites you to join us to develop the highest level of technical and philosophical skills in Traditional and Sport Karate. We welcome dojos, clubs, and other organizations to learn about our unique methods of teaching karate for all ages and abilities.<br/><br/>'+
        'If you are looking for a strong and non-political karate organization, the International Martialarts Association (I.M.A) has built a reputation for producing students and instructors of the highest standards for over 35 years.'
      );

      var btns = $$('.buttons-wrap .button', hero);
      if(btns[0]){ btns[0].textContent = 'Our Programs'; btns[0].setAttribute('href','#programs'); }
      if(btns[1]){ btns[1].textContent = 'Join IMA Today'; btns[1].setAttribute('href','/sign-up'); }
    }

    // ============ 2. NEWS HEADINGS ============
    var newsItems = $$('.section.videos-section .menu-item-heading');
    if(newsItems[0]) newsItems[0].textContent = '2025 Gasshuku';
    if(newsItems[1]) newsItems[1].textContent = 'Rocky Mountain Championships';
    if(newsItems[2]) newsItems[2].textContent = 'Belt Testing — Kyu: April 5 · Dan: June 21';

    // ============ 3. INTRO ============
    var intro = $('.section.intro-section');
    if(intro){
      var introImg = $('img', intro);
      replaceImg(introImg, IMG.adultClass, 'IMA Karate adult class training');

      var introH2 = $('.section-heading-large', intro);
      if(introH2) introH2.textContent = 'Join IMA Honbu Dojo in Louisville, CO';

      var introP = $('.light-paragraph', intro);
      setHTML(introP,
        'Many factors make IMA Karate in Louisville, Colorado a unique place to pursue the study of martial arts for you and your family:'+
        '<ul class="ima-benefits-list">'+
          '<li>Conveniently scheduled, year-round training classes</li>'+
          '<li>Convenient location for Boulder County and Denver residents</li>'+
          '<li>Competitive monthly fees with <strong>no contract required</strong></li>'+
          '<li>World-recognized instructors for students of all levels and abilities</li>'+
          '<li>Over 40 years of instructional experience</li>'+
          '<li>Individualized attention — students can start at any time</li>'+
        '</ul>'
      );

      var introBtns = $$('.button', intro);
      if(introBtns[0]){ introBtns[0].textContent = 'Class Schedule'; introBtns[0].setAttribute('href','#schedule'); }
      if(introBtns[1]){ introBtns[1].textContent = 'Join IMA'; introBtns[1].setAttribute('href','/sign-up'); }
    }

    // ============ 4. COMPETITION TEAM ============
    var comp = $('.section.second-section');
    if(comp){
      var compH2 = $('.section-heading-large', comp);
      if(compH2) compH2.textContent = 'IMA Competition Team';

      var compP = $('.light-paragraph', comp);
      setHTML(compP,
        'The IMA Competition Team is an invite-only group of dedicated karate practitioners who show the highest level of drive and commitment to the sport. The team travels to WKF-style karate tournaments throughout the US and internationally. '+
        'Our members include athletes on the <strong>USA Karate National Team</strong> and National champions across divisions — currently 6 IMA students are members of the US National Team.'
      );

      var compImg = $('img', comp);
      replaceImg(compImg, IMG.compTeam, 'IMA Competition Team');

      var compBtns = $$('.button', comp);
      if(compBtns[0]){ compBtns[0].textContent = 'Join IMA Today'; compBtns[0].setAttribute('href','/sign-up'); }
      if(compBtns[1]){ compBtns[1].textContent = 'Meet the Team'; compBtns[1].setAttribute('href','#instructors'); }
    }

    // ============ 5. STUDENT RESOURCES → PROGRAMS ============
    var third = $('.section.third-section:not(.user-guide-section)');
    if(third){
      third.setAttribute('id','programs');
      hideExtras(third);
      // Replace the entire inner HTML so stray template widgets are gone
      third.innerHTML =
        '<div class="container flex-container condensed">'+
          '<div class="column centered-column ima-center">'+
            '<span class="ima-section-eyebrow">Our Programs</span>'+
            '<h2 class="section-heading-large white-heading centered-heading">Classes for Every Age &amp; Ability</h2>'+
            '<p class="light-paragraph">From our youngest Tiny Tigers to our elite Competition Team, every IMA program is designed to build technical skill, character, and confidence through traditional Shotokan karate.</p>'+
          '</div>'+
        '</div>'+
        '<div class="container">'+
          '<div class="ima-programs-grid">'+
            programCard(IMG.tinyTigers, 'Tiny Tigers', 'Ages 4 – 5',
              'Our youngest students learn proper respect and etiquette toward the dojo, instructors, and fellow students. Focus is on following directions, taking turns, and concentration within a fun learning atmosphere.') +
            programCard(IMG.littleDragons, 'Little Dragons', 'Ages 5 – 7',
              'Designed to help students control their emotions and stay focused. Class time combines warm-up games with basic karate techniques and kata while reinforcing proper etiquette.') +
            programCard(IMG.youthClass, 'Pre-Teen / Youth', 'Ages 8 – 12',
              'Students focus on traditional Shotokan techniques and forms, conditioning to build strength, and an introduction to sport Karate Kumite (sparring) with opportunities to compete.') +
            programCard(IMG.teen, 'Adult / Teen Class', 'Ages 13 &amp; Up',
              'Our adult program serves students of all levels: warm-up, conditioning, hand and foot techniques, traditional Shotokan kata, Sport Kumite sparring, self-defense, and dynamics.') +
            programCard(IMG.compTeam, 'Competition Team', 'Invite Only',
              'An elite, invite-only group competing in WKF-style tournaments across the US and internationally. Includes USA Karate National Team athletes and National champions.') +
            programCard(IMG.youth, 'Black Belt Classes', 'Teen / Adult',
              'Advanced training for black belts focused on refining technique, deepening philosophical understanding, and preparing for Dan-level testing and championship competition.') +
          '</div>'+
        '</div>';
    }

    function programCard(img, title, age, desc){
      return '<div class="ima-program-card">'+
               '<div class="ima-program-imgwrap"><img src="'+img+'" alt="'+title+'" loading="lazy"></div>'+
               '<div class="ima-program-body">'+
                 '<h3>'+title+'</h3>'+
                 '<div class="ima-program-age">'+age+'</div>'+
                 '<p>'+desc+'</p>'+
               '</div>'+
             '</div>';
    }

    // ============ 6. FEATURED VIDEOS → SCHEDULE + DOJO KUN + INSTRUCTORS ============
    var featured = $('.section.third-section.user-guide-section');
    if(featured){
      featured.setAttribute('id','schedule');
      hideExtras(featured);
      featured.innerHTML =
        // ---- Schedule ----
        '<div class="ima-subsection">'+
          '<div class="container flex-container condensed">'+
            '<div class="column centered-column ima-center">'+
              '<span class="ima-section-eyebrow">Louisville Honbu Dojo</span>'+
              '<h2 class="section-heading-large white-heading centered-heading">Class Schedule</h2>'+
              '<p class="light-paragraph">Classes run year-round at 1340 Main St., Louisville, CO 80027. Call <a href="tel:3036650339" style="color:#d4a24a">(303) 665-0339</a> to reserve your free trial class.</p>'+
            '</div>'+
          '</div>'+
          '<div class="container">'+
            '<div class="ima-sched-grid">'+
              schedDay('Monday', [['Tiny Tigers','4:30 – 5:00 pm']]) +
              schedDay('Tuesday', [
                ['All Levels – Teen/Adult','12:00 – 1:00 pm'],
                ['Little Dragons','5:00 – 6:00 pm'],
                ['Youth Class','6:00 – 7:00 pm'],
                ['Black Belt – Teen/Adult','7:00 – 8:15 pm']]) +
              schedDay('Wednesday', [
                ['Little Dragons','5:00 – 6:00 pm'],
                ['Youth Class','6:00 – 7:00 pm'],
                ['All Levels – Teen/Adult','7:00 – 8:15 pm']]) +
              schedDay('Thursday', [
                ['All Levels – Teen/Adult','12:00 – 1:00 pm'],
                ['Little Dragons','5:00 – 6:00 pm'],
                ['Youth Class','6:00 – 7:00 pm'],
                ['Black Belt – Teen/Adult','7:00 – 8:15 pm']]) +
              schedDay('Friday', [
                ['Little Dragons','5:00 – 6:00 pm'],
                ['Youth Class','6:00 – 7:00 pm'],
                ['All Levels – Teen/Adult','7:00 – 8:15 pm']]) +
              schedDay('Saturday', [
                ['Little Dragons / Youth','10:00 – 11:00 am'],
                ['All Levels – Teen/Adult','11:00 – 12:15 pm']]) +
            '</div>'+
            '<p class="ima-sched-note"><strong style="color:#d4a24a">Belt Testing:</strong> Kyu Testing — April 5 &nbsp;|&nbsp; Dan Testing — June 21</p>'+
          '</div>'+
        '</div>'+

        // ---- Dojo Kun ----
        '<div class="ima-subsection">'+
          '<div class="container flex-container condensed">'+
            '<div class="column centered-column ima-center">'+
              '<span class="ima-section-eyebrow">Traditional Shotokan Affirmations</span>'+
              '<h2 class="section-heading-large white-heading centered-heading">Dojo Kun</h2>'+
              '<p class="light-paragraph">Our dojo kun reminds students to carry the physical, mental, and spiritual discipline of karate beyond the dojo and into everyday life.</p>'+
              '<ul class="ima-kun-list">'+
                '<li>Seek perfection of character</li>'+
                '<li>Be faithful</li>'+
                '<li>Endeavor to excel</li>'+
                '<li>Respect others</li>'+
                '<li>Refrain from violent behavior</li>'+
                '<li>Love yourself and love others</li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+

        // ---- Instructors ----
        '<div class="ima-subsection" id="instructors">'+
          '<div class="container flex-container condensed">'+
            '<div class="column centered-column ima-center">'+
              '<span class="ima-section-eyebrow">Our Instructors</span>'+
              '<h2 class="section-heading-large white-heading centered-heading">World-Class Teachers</h2>'+
              '<p class="light-paragraph">Led by founder Hanshi Cyrus Madani, Kudan (9th Dan) — training since 1964 with the Japan Karate Association.</p>'+
            '</div>'+
          '</div>'+
          '<div class="container">'+
            '<div class="ima-instructors-grid">'+
              insCard('Hanshi Cyrus Madani','Chief Instructor · Kudan',
                'Founder and Chief Instructor of the International Martialarts Association. Held the highest kata/kumite license with the Pan American Karate Federation and World Karate Federation (1998–2021). Students have medaled at Pan American championships since 2000 and World Championships in 2009 and 2011.') +
              insCard('Shihan Fariba Madani','Head Instructor · Hachidan',
                'First woman from the United States to be licensed by Pan American and WKF as a karate referee. Member of the USA-NKF Referee Council and the World Karate Federation.') +
              insCard("Sensei Michelle Prud'Homme",'Rokudan',
                'Training with Hanshi since the rec center days in 1993 — before the dojo was built. Achieved National Referee A license.') +
              insCard('Sensei Bob McCormick','Rokudan',
                'Joined IMA Honbu Dojo in 1996 and began teaching in 1997 as an orange belt, drawn to the family atmosphere and high level of karate-do being practiced.') +
              insCard('Sensei Deborah Keyek-Franssen','Godan',
                'Studying with Hanshi since 1999. Lifetime USA-WKF member who judges and referees local tournaments including the Rocky Mountain Championship.') +
              insCard('Sensei Josh Schmidt','Sandan',
                'The first Black Belt under Hanshi Madani at the Honbu Dojo. Coaches the competition team; his wife and two children also train with IMA Karate.') +
            '</div>'+
            '<div class="ima-center" style="margin-top:40px">'+
              '<a href="/sign-up" class="button transparent-button w-button" style="margin-right:10px">Start Free Trial</a>'+
              '<a href="tel:3036650339" class="button red-cta-button w-button">Call (303) 665-0339</a>'+
            '</div>'+
          '</div>'+
        '</div>';
    }

    function schedDay(day, slots){
      var html = '<div class="ima-sched-day"><h4>'+day+'</h4>';
      slots.forEach(function(s){
        html += '<div class="ima-sched-slot"><strong>'+s[0]+'</strong><span class="ima-sched-time">'+s[1]+'</span></div>';
      });
      return html + '</div>';
    }
    function insCard(name, rank, bio){
      return '<div class="ima-ins-card">'+
               '<h4>'+name+'</h4>'+
               '<span class="ima-ins-rank">'+rank+'</span>'+
               '<p>'+bio+'</p>'+
             '</div>';
    }

    // ============ 7. CTA VIDEO ============
    var ctaSec = $('#CTA-Section .column.short-opaque-column');
    if(ctaSec){
      var ctaH2 = $('.section-heading-large', ctaSec);
      setHTML(ctaH2, '<strong>Develop Your Body, Mind &amp; Spirit</strong><br/><em style="font-size:18px;font-weight:400">Traditional Shotokan Karate in Louisville, CO</em>');
      var ctaBtns = $$('.button', ctaSec);
      if(ctaBtns[0]){ ctaBtns[0].textContent = 'Join IMA'; }
      if(ctaBtns[1]){ ctaBtns[1].textContent = 'Our Programs'; ctaBtns[1].setAttribute('href','#programs'); ctaBtns[1].removeAttribute('target'); }
    }

    // ============ 8. SPECIAL OFFER ============
    var offer = $('.section.marketing-cta-section .column.light-column');
    if(offer){
      var headings = $$('.section-heading-large', offer);
      if(headings[0]) setHTML(headings[0], 'New Student Special:<br/>One Month + Free Uniform<br/>for Only $150');
      if(headings[2]) setHTML(headings[2], '<span style="font-size:18px;font-weight:400">A 50% savings — valid for new enrollments</span>');
      var offerBtns = $$('.button', offer);
      if(offerBtns[0]){ offerBtns[0].textContent = 'Join IMA'; offerBtns[0].setAttribute('href','/sign-up'); }
      if(offerBtns[1]){ offerBtns[1].textContent = 'Call (303) 665-0339'; offerBtns[1].setAttribute('href','tel:3036650339'); }
    }

    // ============ 9. FOOTER LINKS ============
    var footerLinks = $$('.column.footer-column .footer-link');
    var labels = [
      'Tiny Tigers','Little Dragons','Pre-Teen / Youth','Adult / Teen','Competition Team','Black Belt Classes',
      'Class Schedule','Dojo Etiquette','FAQ','History','Instructors','Free Trial'
    ];
    footerLinks.forEach(function(a, i){ if(labels[i]) a.textContent = labels[i]; });

    // ============ 10. TOP BAR ============
    var topBarLinks = $$('.nav-topbar .top-bar-link');
    if(topBarLinks[0]){ topBarLinks[0].textContent = '+1 (303) 665-0339'; topBarLinks[0].setAttribute('href','tel:3036650339'); }
    if(topBarLinks[1]){ topBarLinks[1].textContent = 'CLAIM A FREE TRIAL CLASS'; topBarLinks[1].setAttribute('href','/sign-up'); }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  // Run again after a short delay in case Webflow re-renders any CMS/embed widgets
  setTimeout(run, 400);
  setTimeout(run, 1200);
})();