window.onload = function () {
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    if (document.getElementById("services__fixed")) {
        if (document.documentElement.clientWidth < 550) {
            let isOpenDrop = false;
            document.getElementById("services__fixed-arrow").addEventListener("click", function () {
                if (!isOpenDrop) {
                    document.querySelectorAll(".services__fixed > li").forEach(el => {
                        el.style = "opacity: 1; visibility: visible; position: relative; z-index: 1;";
                    });
                    document.querySelector("#services__fixed-arrow > svg").style.transform = "rotate(180deg)";
                    return isOpenDrop = true;
                } else {
                    document.querySelectorAll(".services__fixed > li").forEach((el, ind) => {
                        if (ind === 0) {
                            return;
                        } else {
                            el.style = "opacity: 0; visibility: hidden; position: absolute; z-index: -999;";
                        }
                    })
                    document.querySelector("#services__fixed-arrow > svg").style.transform = "rotate(0)";
                    return isOpenDrop = false;
                }
            })
            document.querySelectorAll(".services__fixed > li").forEach((el, ind) => {
                if (ind === 0) {
                    return;
                } else {
                    el.style = "opacity: 0; visibility: hidden; position: absolute; z-index: -999;";
                }
            })
        }
        $('.services__comments-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: ".services__comments-prev",
            nextArrow: ".services__comments-next",
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });
        document.querySelectorAll(".services__right > .services-item").forEach((item, ind) => {
            item.setAttribute("id", `service-${ind + 1}`);
        });
        document.querySelectorAll(".services__fixed > li > a").forEach((el, ind) => {
            el.setAttribute("href", `#service-${ind + 1}`);
        })

        $(document).on("scroll", { passive: true }, onScroll);

        $('.services__fixed li').click(function () {
            $(document).off("scroll");
            var navLink = $(this).find("a").attr("href"),
                dest = $(navLink).offset().top;
            $('html,body').stop().animate({
                scrollTop: dest - 150,
            }, 800, function () {
                $(document).on("scroll", { passive: true }, onScroll);
            });

            $('.services__fixed li').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
            return false;
        });
        function onScroll() {
            var scrollPos = $(document).scrollTop() + 300;
            $('.services__fixed li').each(function () {
                var currLink = $(this).find("a");
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos) {
                    $('.services__fixed li').removeClass("active");
                    $(this).addClass("active");
                }
                else {
                    $(this).removeClass("active");
                }
            });
        }
    }

    if (document.querySelector(".main-page")) {
        $('.services__comments-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: ".services__comments-prev",
            nextArrow: ".services__comments-next",
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }

    if (document.documentElement.clientWidth < 1100) {
        const burger = document.getElementById("burger");
        const menu = document.getElementById("burger-popup");
        let isMenuOpen = false;
        burger.addEventListener("click", function () {
            if (isMenuOpen) {
                burger.classList.remove("active");
                menu.classList.remove("active");
                const body = document.body;
                const scrollY = body.style.top;
                body.style.position = '';
                body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
                return isMenuOpen = false;
            } else {
                burger.classList.add("active");
                menu.classList.add("active");
                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
                const body = document.body;
                body.style.position = 'fixed';
                body.style.top = `-${scrollY}`;
                return isMenuOpen = true;
            }
        })
    }
}