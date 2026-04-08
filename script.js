
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});



const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



const allButtons = document.querySelectorAll('button');

allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    });
});



const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();



window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let scrollY = window.scrollY;

    if (hero) {
        hero.style.backgroundPosition = `center ${scrollY * 0.4}px`;
    }
});



document.addEventListener('DOMContentLoaded', () => {

    const startNowBtn = document.querySelector('.nav-btn');
    const joinBtn = document.querySelector('.primary-btn');
    const exploreBtns = document.querySelectorAll('.secondary-btn, .price-card button');

    if (startNowBtn) {
        startNowBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
        });
    }

    exploreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
        });
    });
});



const frame = document.getElementById('confirmation-frame');
const message = document.getElementById('confirmation-message');

function showMessage(text) {
    message.textContent = text;
    frame.classList.add('show');

    setTimeout(() => {
        frame.classList.remove('show');
    }, 3000);
}



const formBtn = document.querySelector('.contact button');

if (formBtn) {
    formBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showMessage("Registration successful!");
    });
}



document.querySelectorAll('.price-card button').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.closest('.premium')) {
            showMessage("You selected the Premium plan 💪");
        } else {
            showMessage("You selected the Basic plan 🔥");
        }
    });
});               