$(document).ready(function () {
  let activeClass = null;
  let contentBox = $(".contentBox");

  $(".boost").click(function (e) {
    e.preventDefault();
    let boostClass = $(this).attr("class").split(" ")[1];

    if (activeClass === boostClass) {
      contentBox.animate(
        {
          width: 0,
          height: 0,
        },
        300,
        function () {
          contentBox.hide();
        }
      );
      activeClass = null;
      $(".boost").removeClass("boostActive");
    } else {
      let htmlContent = "";
      let cssProperties = {
        position: "absolute",
        touchAction: "none",
        userSelect: "none",
      };

      if (boostClass === "thisSite") {
        htmlContent =
          "<h1>About This Site</h1><br><br><p>Driven by my dissatisfaction with my previous portfolio website, I have arrived at a profound realization: it no longer captures the essence of who I am as a designer. It has been a revelation fueled by my deep fascination with the transformative power of abstraction, as introduced by the brilliant mind of Alfred Korzybski. Intrigued by this concept, I have wholeheartedly embraced it as a guiding principle in redefining my creative process and shaping my approach to design. <br /><br /> This newfound appreciation for abstraction has sparked an intense desire within me to transcend the ordinary and venture into uncharted territories of artistic expression. It compels me to strip away the superfluous layers, leaving behind only the purest essence of my creative vision. In doing so, I aim to distill the complexities of my design process into elegant and thought-provoking concepts that resonate on a profound level. <br /><br /> Initially, I would like to try to upgrade this site with clues from the event level and start making the event level appear more often in the object level using visual cues. <br /><br /></p>";
        cssProperties = {
          ...cssProperties,
          display: "block",
          width: "40vw",
          height: "70vh",
        };
      } else if (boostClass === "archives") {
        htmlContent =
          "<h1>Archives</h1><p>This is the content for archives class.</p>";
        cssProperties = {
          ...cssProperties,
          display: "block",
          width: "30vw",
          height: "70vh",
        };
      } else if (boostClass === "info") {
        htmlContent =
          "<h1>Info</h1><br><br> <p> Hey there! I am <span>Yiğit</span>, currently a fourth-year graphic design student at OCAD University based in Toronto. I am interested in generative art, web development, creative programming, typeface design, typography, layout design, user interface design, and visual identity systems. I am always eager to acquire and contribute new skills and experience from a new environment with a passionate mindset. I am also interested in design tools, archives, design philosophy, music, and general semantics. <br /><br /></p>";
        cssProperties = {
          ...cssProperties,
          display: "block",
          width: "40vw",
          height: "70vh",
        };
      }

      htmlContent += '<button class="closeButton">close</button>';

      contentBox.html(htmlContent).css(cssProperties);

      contentBox
        .css({
          width: 0,
          height: 0,
          opacity: 0,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        })
        .show()
        .animate(
          {
            width: cssProperties.width,
            height: cssProperties.height,
            opacity: 1,
          },
          300
        );

      contentBox.removeClass("manip").addClass(boostClass + " manip");
      activeClass = boostClass;
      $(".boost")
        .addClass("boostActive")
        .filter("." + boostClass)
        .removeClass("boostActive");
    }
  });

  contentBox.on("click", ".closeButton", function (e) {
    e.preventDefault();
    contentBox.animate(
      {
        width: 0,
        height: 0,
        opacity: 0,
      },
      300,
      function () {
        contentBox.hide();
      }
    );
    activeClass = null;
    $(".boost").removeClass("boostActive");
  });
});
