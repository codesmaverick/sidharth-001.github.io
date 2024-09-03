$(document).ready(function(){
    $('#todo-btn').click(function(){
        $('#todo-modal').modal('show');
    });
    $('#extension-btn').click(function(){
        $('#extension-modal').modal('show');
    });
    $('#article-btn').click(function(){
        $('#article-modal').modal('show');
    });
    $('#queue-btn').click(function(){
        $('#queue-modal').modal('show');
    });
    $('#mcdtu-btn').click(function(){
        $('#mcdtu-modal').modal('show');
    });
    $('#generator-btn').click(function(){
        $('#generator-modal').modal('show');
    });
    $('#cloud-btn').click(function(){
        $('#cloud-modal').modal('show');
    });
    $('#confusion-btn').click(function(){
        $('#confusion-modal').modal('show');
    });
});


window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page-top', true);
    show('loading', false);
});

