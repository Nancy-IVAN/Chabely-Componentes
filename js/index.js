particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ff0000" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            out_mode: "out"
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});


function scrollToSection() {
    const seccion = document.getElementById("bienvenida");
    seccion.scrollIntoView({ behavior: "smooth" });
}

// Selecciona la barra de navegación
const navbar = document.querySelector('.navbar-custom');

// Escucha el evento de desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Agrega la clase cuando se desplaza hacia abajo
    } else {
        navbar.classList.remove('scrolled'); // Elimina la clase cuando vuelve al inicio
    }
});

// Selecciona todas las imágenes de los certificados
const certificateImages = document.querySelectorAll('.certificate-image');

// Agrega un evento de clic a cada imagen
certificateImages.forEach((image) => {
    image.addEventListener('click', () => {
        // Alterna la clase "enlarged" para ampliar o reducir la imagen
        image.classList.toggle('enlarged');
    });
});
