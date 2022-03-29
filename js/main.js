const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const sideLink = document.getElementsByClassName("sidepanel__link"),
    sideDivider = document.querySelector('.sidepanel__divider'),
    sideText = document.querySelector('.sidepanel__text');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        for (let item of sideLink) {
            item.classList.add('black');
        };
        sideDivider.classList.add('black');
        sideText.classList.add('black');
    } else {
        for (let item of sideLink) {
            item.classList.remove('black');
        };
        sideDivider.classList.remove('black');
        sideText.classList.remove('black');
    };
});

const counters = document.querySelectorAll('.skill__other-percentage'),
    lines = document.querySelectorAll('.skill__other-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

    //Customizing mailer plugin
    $('form').submit(function(e) {
        e.preventDefault(); //switched off standard behavior of the browser

        $.ajax({
            type: "POST", //Sends data
            url: "mailer/smart.php", //Using mailer to proceed the process
            data: $(this).serialize() //Select  data to send, in that case this means data from form
        }).done(function() {
            $(this).find("input").val(""); //After ajax done its job, runs function to empty all input fields

            $('form').trigger('reset'); //Resets all forms
        });
        return false;
    });
});