 const header = document.querySelector('.header');
        let lastScrollTop = 0;
        let scrollThreshold = 50;

        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Se estou scrollando para baixo
            if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
                header.style.transform = 'translateY(-100%)';
            } 
            // Se estou scrollando para cima
            else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });

        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const button = dropdown.querySelector('button');
            const menu = dropdown.querySelector('.dropdown-menu');
            
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