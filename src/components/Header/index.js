document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) {
        return;
    }

        const SCROLL_THRESHOLD = 40;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateHeaderOnScroll = () => {
        const currentScroll = window.pageYOffset;
            if (currentScroll > SCROLL_THRESHOLD) {
                header.classList.add('header--scrolled');

                if (currentScroll > lastScrollY) {
                    header.classList.add('header--hidden');
                } else if (currentScroll < lastScrollY) {
                    header.classList.remove('header--hidden');
                }
            } else {
                header.classList.remove('header--scrolled');
                header.classList.remove('header--hidden');
            }

        lastScrollY = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderOnScroll);
            ticking = true;
        }
    });

        document.querySelectorAll('.dropdown').forEach((dropdown) => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (!menu) {
                return;
            }
        let hideTimeout;

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            menu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
    });
});