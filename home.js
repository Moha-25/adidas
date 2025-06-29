        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger-btn');
            const mobileNav = document.querySelector('.mobile-nav');
            const closeBtn = document.querySelector('.mobile-close-btn');
            
            // فتح القائمة
            hamburger.addEventListener('click', function() {
                mobileNav.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // إغلاق القائمة
            closeBtn.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            // إغلاق القائمة عند النقر على أي رابط
            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
            
            // إعادة تعيين عند تغيير حجم الشاشة
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        let img = document.getElementById('img');
        
        window.onscroll = function() {
        let value = scrollY;
        
        img.style.left = value * 3 +'px';
    }


    let btn = document.getElementById('up');

    window.onscroll = function(){
        if(scrollY > 1028)
        {
            btn.style.display = 'block'
        }
        else{
            btn.style.display = 'none'
        }
    }

    btn.onclick = function(){
        scroll({
            left : '0',
            top : '0',
            behavior: 'smooth'
        })
    }

      window.addEventListener("load", () => {
    setTimeout(() => {
      const intro = document.getElementById("intro");
      intro.classList.add("opacity-0");
      setTimeout(() => intro.style.display = "none", 1000);
    }, 2500);
  });




  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('open'); // لتفعيل الحركة
  });