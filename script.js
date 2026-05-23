 const reveals = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {

      reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
          reveal.classList.add('active');
        }

      });

    });

    // CONTACT FORM

    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
      e.preventDefault();

      alert("Thank you! Your message has been sent.");
      form.reset();
    });