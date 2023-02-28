    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav li");

    hamburger.addEventListener('click', ()=>{
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        hamburger.classList.toggle("toggle");
    });
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
        tl.to(".intro", { y: "-100%", duration: 1}, "-=1");
        tl.fromTo("#first", {opacity: 0}, {opacity: 1, duration: 1});
        tl.fromTo("#buket", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
        tl.fromTo("#exp", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
        tl.fromTo(".about", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
        tl.fromTo(".projects", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

        const cursorCircle = document.querySelector('.cursor-circle');
        const cursorDot = document.querySelector('.cursor-dot');
        
        window.addEventListener('mousemove', (e) => {
            const x = e.pageX;
            const y = e.pageY;
            
              cursorCircle.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
              cursorDot.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(1)';
          
          });
          
          document.addEventListener('mouseleave', () => {
            cursorCircle.style.transform = 'translate(-9999px, -9999px)';
            cursorDot.style.transform = 'translate(-9999px, -9999px) scale(0)';
          });