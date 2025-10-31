 function abrirPopupCopiar(conteudo, elemento) {
            const popup = document.getElementById('popupCopiar');
            const textoCopiar = document.getElementById('textoCopiar');
            
            textoCopiar.textContent = conteudo;
            popup.style.display = 'block';
            
            // Posiciona o popup próximo ao botão
            const rect = elemento.getBoundingClientRect();
            popup.style.top = (rect.bottom + 10) + 'px';
            popup.style.left = (rect.left - 50) + 'px';
            
            // Armazena o conteúdo para copiar
            window.conteudoCopiar = conteudo;
            
            // Fecha quando clicar fora
            setTimeout(() => {
                document.addEventListener('click', fecharPopup);
            }, 10);
        }

        function copiarConteudo() {
            navigator.clipboard.writeText(window.conteudoCopiar).then(() => {
                // Feedback visual
                const btn = document.querySelector('.btn-copiar-popup');
                const textOriginal = btn.textContent;
                btn.textContent = '✓ Copiado!';
                btn.style.backgroundColor = '#10b981';
                
                setTimeout(() => {
                    btn.textContent = textOriginal;
                    btn.style.backgroundColor = '';
                    fecharPopup();
                }, 1500);
            }).catch(err => {
                console.error('Erro ao copiar:', err);
            });
        }

        function fecharPopup() {
            const popup = document.getElementById('popupCopiar');
            popup.style.display = 'none';
            document.removeEventListener('click', fecharPopup);
        }