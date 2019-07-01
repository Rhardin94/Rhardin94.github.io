//Waits for HTML to load before running anything
$(document).ready(function () {
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
      clickEmDead = {
        image: $("<img src='public/assets/images/Home.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("ClickEmDead"),
        deployed: $("<a href='https://rhardin94.github.io/ClickEmDead/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/ClickEmDead' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo</h4>")
      },
      PipPip_Newsio = {
        image: $("<img src='public/assets/images/homepage.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("PipPip Newsio"),
        deployed: $("<a href='https://dry-mesa-18962.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/PipPip_Newsio/tree/master' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo</h4>")
      },
      moviews = {
        image: $("<img src='public/assets/images/home_page.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Moviews"),
        deployed: $("<a href='https://moviews-team5.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Moviews' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      burgerMeister = {
        image: $("<img src='public/assets/images/burger.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Burger Meister"),
        deployed: $("<a href='https://stark-forest-59222.herokuapp.com/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Burger_Meister' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      bamazonApp = {
        image: $("<img src='public/assets/images/bamazon.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("Bamazon"),
        deployed: $("<a href='https://drive.google.com/file/d/1Y4ZtCnFz6rCUDe69aqrM64HyLaljF393/view?usp=sharing' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Demo </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Bamazon_NOT_Amazon' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      liriApp = {
        image: $("<img src='public/assets/images/liri.jpg'>").addClass("border border-warning"),
        name: $("<h2>").text("L.I.R.I"),
        deployed: $("<a href='https://drive.google.com/file/d/1TDuus6k-dMUWgKzbpJ6GsKnQ-r6s4B18/view' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Demo </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Liri-Node-App' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      nerdLator = {
        image: $("<img src='public/assets/images/Nerd-lator.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Nerd-Lator"),
        deployed: $("<a href='https://rhardin94.github.io/Nerd-Lator/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/Nerd-Lator' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      gifTastic = {
        image: $("<img src='public/assets/images/gif.png'>").addClass("border border-warning"),
        name: $("<h2>").text("GifTastic"),
        deployed: $("<a href='https://rhardin94.github.io/GifTastic/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site </h4>"),
        repo: $("<a href='https://github.com/Rhardin94/GifTastic' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      },
      officeTrivia = {
        image: $("<img src='public/assets/images/office.png'>").addClass("border border-warning"),
        name: $("<h2>").text("Office Trivia"),
        deployed: $("<a href='https://rhardin94.github.io/Office-Trivia/' target='_blank'>").html("<h4 class='animated pulse slow infinite'> Link to Deployed Site"),
        repo: $("<a href='https://github.com/Rhardin94/Office-Trivia' target='_blank'>").html("<h4 class='fab fa-github animated pulse slow infinite'> Repo </h4>")
      }
    ];
    //Loops through projects array and displays each one inside portfolioDiv
    for (let i = 0; i < pastProjects.length; i++) {
      let displayedProject = pastProjects[i];
      const currentProject = $("<div>").attr("class", "project text-white p-3 m-1 d-inline-block animated fadeIn slow");
      $(currentProject).append(displayedProject.image);
      $(currentProject).append(displayedProject.name);
      $(currentProject).append(displayedProject.deployed);
      $(currentProject).append(displayedProject.repo);
      $(".currentProject").append(currentProject);
    }
  };
  //On-click that opens contact modal
  $(".contactBtn").on("click", function () {
    $(".contactModal").modal("toggle");
  });
  //On-click that will eventually submit info to me and also navigates back to homepage
  $(".submitBtn").on("click", function(event) {
    //Prevents submit from refreshing page, submit post request through JS instead of form action.
    event.preventDefault();
    const emailData = {
      Email: $(".emailInput").val().trim(),
      Subject: $(".subjectInput").val().trim(),
      Message: $(".messageInput").val().trim()
    };
    console.log(emailData);
    $.post("https://afternoon-inlet-46699.herokuapp.com/contact", emailData).then(res => console.log(res)).catch(err => console.error(err));
    //Form auto sends post request to nodemailer, this checks 
    if ((!$(".subjectInput").val()) || (!$(".emailInput").val()) || (!$(".messageInput").val())) {
      $("label").append(" (You didn't fill in all the required fields!)");
      setTimeout(() => {
        $("#email").text("Email");
        $("#subject").text("Subject");
        $("#message").text("Message");
      }, 3000);
      return false;
    };
    $(".contactModal").modal("toggle");
    //Something magic happens that sends me this info
    //At the moment, it clears the input fields and returns user to about page
    setTimeout(function () {
      $(".subjectInput").val("");
      $(".emailInput").val("");
      $(".messageInput").val("");
    }, 3000);
  });
});