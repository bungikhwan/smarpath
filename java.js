document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');

        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            alert('Alamat email tidak valid.');
            emailInput.focus();
            return false;
        }

        const message = messageTextarea.value.trim();
        if (message === '') {
            alert('Harap tuliskan pesan Anda.');
            messageTextarea.focus();
            return false;
        }

        alert('Pesan berhasil dikirim!!');
        form.reset();
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});