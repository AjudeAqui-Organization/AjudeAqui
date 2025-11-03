document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('[data-copy]');

    copyButtons.forEach((button) => {
        const originalLabel = button.textContent.trim();

        button.addEventListener('click', async () => {
            const value = button.getAttribute('data-copy');

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(value);
                } else {
                    const tempInput = document.createElement('input');
                    tempInput.value = value;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }

                button.classList.add('is-copied');
                button.textContent = 'Copiado!';
                button.blur();

                setTimeout(() => {
                    button.textContent = originalLabel;
                    button.classList.remove('is-copied');
                }, 1800);
            } catch (error) {
                console.error('Erro ao copiar:', error);
            }
        });
    });
});