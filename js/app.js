$(document).ready(function() {
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
    function portfolioDiv() {
        portfolio.addClass("animated fadeInUp");
        portfolio.show();
    }
});