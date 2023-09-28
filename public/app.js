const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {
 
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })

}

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
})

typewriter 
.pauseFor(1800)
.changeDelay(20)
.typeString('Je me présente')
.pauseFor(300)
.typeString('<strong>, Développeuse Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #00008B;"> HTML/CSS</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #2E8B57;"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #191970;"> Symfony</span> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #9932CC;"> Boostrap/Sass</span> !')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color: #ff6910;"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #DC143C;"> Angular</span> !')
.start()

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })
}

const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btn-rond')

const TL1 = gsap.timeline({paused: true});

TL1 
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche')
const listePres = document.querySelectorAll('.item-liste')

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
.addTo(controller)

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
.addTo(controller)

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
.addTo(controller)

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
.addTo(controller)

const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill')
const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-bloc");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Valeurs récupérées:", nom, prenom, email, message);
            
      Email.send({
        SecureToken: "7681b974-2ddb-4e3c-9a85-0976505695d4",
        To: 'elian.salemi@gmail.com',
        From: 'elian.salemi@gmail.com',
        Subject: `Message de ${nom} ${prenom} depuis le portfolio`,
        Body: `Email: ${email} Message: ${message}`,
      }).then(message => {
            console.log("Réponse du serveur:", message);
            alert("Email envoyé avec succès!")
            form.reset();
          }).catch(error => {
            console.log("Erreur d'envoi:", error);
            alert("L'envoi de l'email a échoué.")
          }
        );
    });
  });
  