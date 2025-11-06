(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            if (!form.checkValidity()) {
                /* event.preventDefault();
                event.stopPropagation(); */
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
})();
