const slider = document.querySelector('.event-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 320; // Ajusta según el ancho de tus tarjetas
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 320; // Ajusta según el ancho de tus tarjetas
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

window.addEventListener('load', () => {
    const message = document.querySelector('.whatsapp-message');
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateX(0)';
    }, 2000); // Aparece después de 2 segundos
});