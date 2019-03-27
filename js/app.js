$(document).ready(function() {
    $(".GifTastic").hide();
    $(".Office-Trivia").hide();
    $(".wrapper").hide();
    const aboutMe = $(".aboutMe");
    aboutMe.hide();
    const contactInfo = $(".contactInfo");
    contactInfo.hide();
    const portfolio = $(".portfolio");
    portfolio.hide();
    if ($(".wrapper")) {
    setTimeout(aboutDiv, 1000);
    setTimeout(contactDiv, 3000);
    setTimeout(portfolioDiv, 2000);
    } else {
        clearTimeout(aboutDiv);
        clearTimeout(contactDiv);
        clearTimeout(portfolioDiv);
    }
    function aboutDiv() {
        aboutMe.addClass("animated fadeInRight slow");
        aboutMe.show();
    };
    function contactDiv() {
        contactInfo.addClass("animated fadeInUp slow");
        contactInfo.show()
    }
    setTimeout(projectSwap, 6000);  
    function portfolioDiv() {
        portfolio.addClass("animated fadeInRight slow");
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
        }, 12000);
        setTimeout(function() {
            $(".Office-Trivia").hide();
            $(".Nerd-Lator").show();
        }, 20000);
        setTimeout(projectSwap, 28000);
    }
    $(".aboutBtn").on("click", function() {
        $(".introDiv").hide();
        $(".wrapper").addClass("animated fadeIn slow");
        $(".wrapper").show();
    })
});