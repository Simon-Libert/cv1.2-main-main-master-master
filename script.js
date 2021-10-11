// NAVBAR
// let lastScrollTop = 0;
// navbar = document.getElementById('navbar'); 

// window.addEventListener('scroll', function() {
//     const scrollTop = window.pageTOffset ||
//     this.document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         navbar.style.top="-50px";
//     } else {
//         navbar.style.top="0";
//     }
//     lastScrollTop = scrollTop;
// });

// TYPE
var typed = new Typed('.typed', {
    strings: [ "Après une carrière en tant que musicien intermittent du spectacle, et professeur de guitare et de basse, j'ai décidé de me lancer à fond dans l'apprenstissage du code. En octobre 2021, après m'être formé en autodidacte à la base des langages HTML et CSS et javascript, j'ai intégré la formation SIMPLON afin de devenir développeur d'application web et web mobile." ],
    
      
    typespeed: 40,
    smartBackspace: true, // Default value
    loop: false
  });

  const darkMode = document.getElementById('dark-mode');

  darkMode.addEventListener('change', () => {
      document.body.classList.toggle('dark');
  })

