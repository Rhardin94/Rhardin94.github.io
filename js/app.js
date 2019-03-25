$(document).ready(function() {
    $(".GifTastic").hide();
    $(".Office-Trivia").hide();
    const aboutMe = $(".aboutMe");
    aboutMe.hide();
    const contactInfo = $(".contactInfo");
    contactInfo.hide();
    const portfolio = $(".portfolio");
    portfolio.hide();
    setTimeout(aboutDiv, 1000);
    setTimeout(contactDiv, 2000);
    setTimeout(portfolioDiv, 3000);
    function aboutDiv() {
        aboutMe.addClass("animated fadeInRight");
        aboutMe.show();
    };
    function contactDiv() {
        contactInfo.addClass("animated fadeInRight");
        contactInfo.show()
    }
    setTimeout(projectSwap, 6000);  
    function portfolioDiv() {
        portfolio.addClass("animated fadeInUp");
        portfolio.show();
    }
    function projectSwap() {
        setTimeout(function() {
            $(".Nerd-Lator").hide();
            $(".GifTastic").show();
        }, 4000);
        setTimeout(function() {
            $(".GifTastic").hide();
            $(".Office-Trivia").show();
        }, 8000);
        setTimeout(function() {
            $(".Office-Trivia").hide();
            $(".Nerd-Lator").show();
        }, 12000);
        setTimeout(projectSwap, 16000);
    }
});