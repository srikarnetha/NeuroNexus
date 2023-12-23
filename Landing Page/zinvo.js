var banner = document.getElementById('banner');
        function toggleBannerVisibility() {
            if (window.scrollY > 200) { 
                banner.classList.add('hidden');
            } else {
                banner.classList.remove('hidden');
            }
        }
        window.addEventListener('scroll', toggleBannerVisibility);
function toggleAnswer(questionElement) {
            const answerElement = questionElement.querySelector('.answer');
            const isOpen = answerElement.style.maxHeight !== '0';
            
            if (isOpen) {
                answerElement.style.maxHeight = '0';
            } else {
                answerElement.style.maxHeight = '200px'; 
            }
        }