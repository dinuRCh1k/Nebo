document.addEventListener("DOMContentLoaded", function () {
    var link = document.querySelector('.promo_title a.inactive');

    link.addEventListener('click', function (event) {
        event.preventDefault();
        this.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
        setTimeout(() => {
            this.style.boxShadow = 'none';
            window.location.href = this.href;
        }, 300);
    });

    link.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});