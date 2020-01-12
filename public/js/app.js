//Waits for HTML to load before running anything
$(document).ready(function () {
  //Each time the user visits the site, send a get request to wake on heroku's side.
  // $.get("http://localhost:4500/wake").then(res => console.log(res)).catch(err => console.error(err));
  $.get("https://afternoon-inlet-46699.herokuapp.com/wake").then(res => console.log(res)).catch(err => console.error(err));
  //Assigning variables to each about div and hiding it for animation later
  const aboutMe = $(".aboutMe");
  aboutMe.hide();
  const skills = $(".skills");
  skills.hide();
  const portfolio = $(".portfolio");
  portfolio.hide();
  const footer = $("footer");
  footer.hide();
  setTimeout(aboutDiv, 1000);
  setTimeout(skillsDiv, 2000);
  setTimeout(portfolioDiv, 3000);
  setTimeout(footerMagic, 3000);

  function aboutDiv() {
    aboutMe.addClass("animated fadeInRight slow");
    aboutMe.show();
  };

  function skillsDiv() {
    skills.addClass("animated fadeInRight slow");
    skills.show();
  };
  setTimeout(projectSwap, 3000);

  function portfolioDiv() {
    portfolio.addClass("animated fadeInRight slow");
    portfolio.show();
  };

  function footerMagic() {
    footer.addClass("animated fadeInUp slow");
    footer.show();
  }
  //Function that cycles through GitHub projects
  function projectSwap() {
    //const tempArray = [];
    const pastProjects = [
      fridge2Table = {
        image: $("<img src='public/assets/images/fridge2table_logo.png'>").addClass("borger border-warning"),
        name: $("<h2>").text("Fridge2Table"),
        description: $("<p>").text("A completely mobile app built/published with Expo-CLI that tracks user food expiration. Showcases full-stack, mobile development with react-native"),
        tech: $("<p>").text("Node.js, React-Native, Expo-CLI, Express, MongoDB"),
        deployed: $("<a href='https://expo.io/@rhardin/fridgetotable?release-channel=prod' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed App </h4>"),
        repo: $("<a href='https://github.com/Dreadpipe/fridge2table' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo</h4>")
      },
      clickEmDead = {
        image: $("<img src='public/assets/images/Home.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("ClickEmDead"),
        description: $("<p>").text("A single-page React memory game themed around The Office U.S. Showcases front-end development with React."),
        tech: $("<p>").text("HTML5, CSS3, React.js"),
        deployed: $("<a href='https://rhardin94.github.io/ClickEmDead/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/ClickEmDead' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo</h4>")
      },
      PipPip_Newsio = {
        image: $("<img src='public/assets/images/homepage.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("PipPip Newsio"),
        description: $("<p>").text("A BBC-inspired news scraper site. Showcases full-stack development, data scraping, and NoSQL database interactions."),
        tech: $("<p>").text("HTML5, CSS3, JavaScript, jQuery, Node.js, Express, MongoDB, Handlebars, Cheerio"),
        deployed: $("<a href='https://dry-mesa-18962.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/PipPip_Newsio/tree/master' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo</h4>")
      },
      moviews = {
        image: $("<img src='public/assets/images/home_page.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Moviews"),
        description: $("<p>").text("A spoiler-protection based movie review site. Showcases full-stack development, user authentication, and client-side server interaction filtering."),
        tech: $("<p>").text("HTML5, CSS3, JavaScript, jQuery, Node.js, Express, MySQL, Handlebars, Passport"),
        deployed: $("<a href='https://moviews-team5.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Moviews' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      burgerMeister = {
        image: $("<img src='public/assets/images/burger.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Burger Meister"),
        description: $("<p>").text("A simple, 'eat the burger' app themed around Burger Meister. Showcases use of handlebars templating, server integration, and MySQL interaction to dynamically update the page."),
        tech: $("<p>").text("Node.js, Express, Handlebars, MySQL"),
        deployed: $("<a href='https://stark-forest-59222.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Burger_Meister' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      bamazonApp = {
        image: $("<img src='public/assets/images/bamazon.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("Bamazon"),
        description: $("<p>").text("A mock amazon store CLI app that contains three different use cases. Showcases integration of MySQL server and several npm packages to mold user experience."),
        tech: $("<p>").text("Node.js, Inquirer, Dotenv, Moment.js, MySQL"),
        deployed: $("<a href='https://drive.google.com/file/d/1Y4ZtCnFz6rCUDe69aqrM64HyLaljF393/view?usp=sharing' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Demo </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Bamazon_NOT_Amazon' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      liriApp = {
        image: $("<img src='public/assets/images/liri.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("L.I.R.I"),
        description: $("<p>").text("A CLI app inspired by Siri. Showcases use of npm to server the user data from multiple APIs"),
        tech: $("<p>").text("Node.js, Axios, Inquirer, FS, Dotenv, Moment.js, Node-Spotify-Api"),
        deployed: $("<a href='https://drive.google.com/file/d/1TDuus6k-dMUWgKzbpJ6GsKnQ-r6s4B18/view' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Demo </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Liri-Node-App' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      nerdLator = {
        image: $("<img src='public/assets/images/Nerd-lator.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Nerd-Lator"),
        description: $("<p>").text("A text-translator site that translates English into fantasy languages. Showcases more REST API use and CSS manipulation via front-end Javascript."),
        tech: $("<p>").text("HTML5, CSS3, JavaScript, jQuery, Ajax, funtranslationAPIs"),
        deployed: $("<a href='https://rhardin94.github.io/Nerd-Lator/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Nerd-Lator' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      gifTastic = {
        image: $("<img src='public/assets/images/gif.png'>").addClass("border border-warning"),
        name: $("<h2>").text("GifTastic"),
        description: $("<p>").text("A site that calls on the Giphy API to dynamically populate the page based on button clicks. Showcases REST API use from front-end JavaScript."),
        tech: $("<p>").text("HTML5, CSS3, JavaScript, jQuery, Ajax, Giphy API"),
        deployed: $("<a href='https://rhardin94.github.io/GifTastic/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/GifTastic' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      officeTrivia = {
        image: $("<img src='public/assets/images/office.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Office Trivia"),
        description: $("<p>").text("A jQuery trivia game themed around The Office U.S. Showcases clever use of jQuery and multiple arrays to display questions and answers."),
        tech: $("<p>").text("HTML5, CSS3, JavaScript, jQuery"),
        deployed: $("<a href='https://rhardin94.github.io/Office-Trivia/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site"),
        repo: $("<a href='https://github.com/Rhardin94/Office-Trivia' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      }
    ];
    //Loops through projects array and displays each one inside portfolioDiv
    for (let i = 0; i < pastProjects.length; i++) {
      let displayedProject = pastProjects[i];
      const currentProject = $("<div>").attr("class", "col-lg-3 project text-white p-3 m-1 d-inline-block animated fadeIn slow");
      $(currentProject).append(displayedProject.name);
      $(currentProject).append(displayedProject.image);
      $(currentProject).append(displayedProject.deployed);
      $(currentProject).append(displayedProject.repo);
      $(currentProject).append(displayedProject.tech);
      currentProject.append(displayedProject.description);
      $(".currentProject").append(currentProject);
    }
  };
  //On-click that opens contact modal
  $(".contactBtn").on("click", function () {
    $(".contactModal").modal("toggle");
  });
  //On-click that will eventually submit info to me and also navigates back to homepage
  $(".submitBtn").on("click", function (event) {
    //Prevents submit from refreshing page, submit post request through JS instead of form action.
    event.preventDefault();
    const emailData = {
      Email: $(".emailInput").val().trim(),
      Subject: $(".subjectInput").val().trim(),
      Message: $(".messageInput").val().trim()
    };
    if ((!$(".subjectInput").val()) || (!$(".emailInput").val()) || (!$(".messageInput").val())) {
      $("label").append(" (You didn't fill in all the required fields!)");
      setTimeout(() => {
        $("#email").text("Email");
        $("#subject").text("Subject");
        $("#message").text("Message");
      }, 3000);
      return false;
    } else {
      // $.post("https://afternoon-inlet-46699.herokuapp.com/contact", emailData).then(res => console.log(res)).catch(err => console.error(err));
      $.post("http://localhost:4500/contact", emailData).then(res => console.log(res)).catch(err => console.error(err));
      console.log(emailData);
      //Form auto sends post request to nodemailer, this checks 
      $(".contactModal").modal("toggle");
      //Something magic happens that sends me this info
      //At the moment, it clears the input fields and returns user to about page
      setTimeout(function () {
        $(".subjectInput").val("");
        $(".emailInput").val("");
        $(".messageInput").val("");
      }, 3000);
    }
  })
});