"use strict";

function playBook(title) {
  this.pages = [];
  this.i = 0;
  this.title = document.createElement("div");
  this.title.className = "title";
  this.title.innerText = title;

  const default1 = document.createElement("div");
  default1.className = "page-content";
  const default2 = document.createElement("div");
  default2.className = "page-content";
  const image1 = document.createElement("img");
  image1.className = "page-image";
  image1.src = "https://i.ibb.co/hyx1q6c/playbook.png";
  const image2 = document.createElement("img");
  image2.className = "page-image2";
  image2.src = "https://i.ibb.co/Yjzfyg3/yuhhh.png";
  default1.appendChild(image1);
  default2.appendChild(image2);
  this.pages.push(default1);
  this.pages.push(default2);

  const bookdiv2 = document.createElement("div");
  bookdiv2.className = "pages-container";
  this.page1 = document.createElement("div");
  this.page1.className = "page-item";
  const taskbar = document.createElement("div");
  taskbar.className = "task-bar";
  const back_button = document.createElement("button");
  back_button.className = "left-button";
  back_button.type = "button";
  back_button.innerText = "Flip Back";

  taskbar.appendChild(back_button);
  taskbar.appendChild(this.title);

  this.page1.appendChild(taskbar);

  bookdiv2.appendChild(this.page1);

  this.page2 = document.createElement("div");
  this.page2.className = "page-item";
  const taskbar2 = document.createElement("div");
  taskbar2.className = "task-bar";
  const forward_button = document.createElement("button");
  forward_button.className = "right-button";
  forward_button.type = "button";
  forward_button.innerText = "Flip Forward";
  taskbar2.appendChild(this.title);
  taskbar2.appendChild(forward_button);
  this.page2.appendChild(taskbar2);
  bookdiv2.appendChild(this.page2);

  taskbar2.appendChild(this.title);
  const body = $("body");
  body.append(bookdiv2);

  if (this.page1.children.length === 1) {
    this.page1.appendChild(this.pages[this.i]);
  }
  if (this.page2.children.length === 1) {
    this.page2.appendChild(this.pages[this.i + 1]);
  }
  $(forward_button).click(
    function () {
      if (this.pages.length === 3 && this.i != this.pages.length - 1) {
        this.page1.removeChild(this.page1.lastChild);
        this.page2.removeChild(this.page2.lastChild);
        this.i += 2;
        this.page1.appendChild(this.pages[this.i]);
      } else if (
        this.pages.length >= 4 &&
        this.i < this.pages.length - 2 &&
        this.pages.length % 2 == 0
      ) {
        this.page1.removeChild(this.page1.lastChild);
        this.page2.removeChild(this.page2.lastChild);

        this.i += 2;

        this.page1.appendChild(this.pages[this.i]);
        this.page2.appendChild(this.pages[this.i + 1]);
      } else if (
        this.pages.length >= 4 &&
        this.i < this.pages.length - 1 &&
        this.pages.length % 2 != 0
      ) {
        this.page1.removeChild(this.page1.lastChild);
        this.page2.removeChild(this.page2.lastChild);

        this.i += 2;

        this.page1.appendChild(this.pages[this.i]);
        if (this.pages[this.i + 1] != null) {
          this.page2.appendChild(this.pages[this.i + 1]);
        }
      }
    }.bind(this)
  );
  $(back_button).click(
    function () {
      if (this.pages.length === 3 && this.i === 2) {
        this.page1.removeChild(this.page1.lastChild);

        this.i -= 2;

        this.page1.appendChild(this.pages[this.i]);
        this.page2.appendChild(this.pages[this.i + 1]);
      } else if (
        this.pages.length >= 4 &&
        this.i - 2 >= 0 &&
        this.pages.length % 2 == 0
      ) {
        this.page1.removeChild(this.page1.lastChild);
        this.page2.removeChild(this.page2.lastChild);

        this.i -= 2;

        this.page1.appendChild(this.pages[this.i]);
        this.page2.appendChild(this.pages[this.i + 1]);
      } else if (
        this.pages.length >= 4 &&
        this.i - 2 >= 0 &&
        this.pages.length % 2 != 0
      ) {
        if (this.i === this.pages.length - 1) {
          this.page1.removeChild(this.page1.lastChild);
        } else {
          this.page1.removeChild(this.page1.lastChild);
          this.page2.removeChild(this.page2.lastChild);
        }

        this.i -= 2;

        this.page1.appendChild(this.pages[this.i]);
        this.page2.appendChild(this.pages[this.i + 1]);
      }
    }.bind(this)
  );
}
playBook.prototype = {
  addPage: function (image, title, link) {
    const newpage = document.createElement("div");
    newpage.className = "page-content";
    const img = document.createElement("img");
    img.className = "page-image";
    img.src = image;
    newpage.appendChild(img);
    const pagetitle = document.createElement("div");
    pagetitle.className = "page-title";
    pagetitle.innerText = title;
    newpage.appendChild(pagetitle);

    if (link != null) {
      const linkcontainer = document.createElement("div");
      linkcontainer.className = "link-button-container";

      const linkbutton = document.createElement("button");
      linkbutton.className = "link-button";
      linkbutton.type = "button";
      linkbutton.innerText = "Open Video";

      const linked = document.createElement("a");
      linked.href = link;
      linked.target = "_blank";
      linked.appendChild(linkbutton);
      linkcontainer.appendChild(linked);

      newpage.appendChild(linkcontainer);
    }

    this.pages.push(newpage);
  },
  allowUserCreatePlays: function () {
    const body = $("body");
    const formbox = document.createElement("div");
    formbox.hidden = false;

    const formboxtitle = document.createElement("div");
    const forms = document.createElement("form");
    forms.className = "forms";
    forms.id = "addPlayForm";
    const formtitle = document.createElement("input");
    formtitle.id = "titleid";
    formtitle.type = "text";
    formtitle.placeholder = "Name of play";
    const formimage = document.createElement("input");
    formimage.id = "imageid";
    formimage.type = "text";
    formimage.placeholder = "Link to image";
    const formlink = document.createElement("input");
    formlink.id = "linkid";
    formlink.type = "text";
    formlink.placeholder = "Link to video";
    const submit = document.createElement("input");
    submit.id = "submitid";
    submit.type = "submit";
    submit.value = "Add Play";
    forms.appendChild(formtitle);
    forms.appendChild(formimage);
    forms.appendChild(formlink);
    forms.appendChild(submit);
    formboxtitle.className = "form-title";
    formboxtitle.innerText = "Add Plays";
    formbox.className = "form-box";
    formbox.appendChild(formboxtitle);
    formbox.appendChild(forms);
    body.append(formbox);

    $(submit).click(
      function (e) {
        e.preventDefault();

        this.addPage(formimage.value, formtitle.value, formlink.value);
        if (this.i === this.pages.length - 2) {
          this.page2.appendChild(this.pages[this.i + 1]);
        }
      }.bind(this)
    );
  },
};

function FieldGenerator() {
  this.fields = [];
}

FieldGenerator.prototype = {
  makeTFormation: function () {
    const field = document.createElement("div");
    //Note: Created the image in Figma, and exported as SVG code This section will likely completely change in order to work for animations
    // but this is just to get an idea of what it could potentially look like.
    field.innerHTML =
      '<svg width="969" height="583" viewBox="0 0 969 583" fill="none" xmlns="http://www.w3.org/2000/svg">\
      <g id="T Formation">\
      <rect width="969" height="583" fill="white"/>\
      <g id="Field">\
      <rect id="Field_2" width="969" height="583" fill="#107000"/>\
      <g id="QB">\
      <circle id="QB_2" cx="485" cy="448" r="28" fill="black"/>\
      <path id="QB_3" d="M483.506 448.01C483.506 448.834 483.375 449.545 483.113 450.143C482.852 450.736 482.484 451.201 482.012 451.537L483.535 452.732L482.768 453.441L480.969 452.012C480.688 452.082 480.391 452.117 480.078 452.117C479.406 452.117 478.811 451.953 478.291 451.625C477.771 451.293 477.367 450.822 477.078 450.213C476.793 449.6 476.646 448.891 476.639 448.086V447.471C476.639 446.65 476.781 445.926 477.066 445.297C477.352 444.668 477.754 444.188 478.273 443.855C478.797 443.52 479.395 443.352 480.066 443.352C480.754 443.352 481.357 443.518 481.877 443.85C482.4 444.182 482.803 444.66 483.084 445.285C483.365 445.906 483.506 446.633 483.506 447.465V448.01ZM482.381 447.459C482.381 446.455 482.18 445.682 481.777 445.139C481.379 444.592 480.809 444.318 480.066 444.318C479.359 444.318 478.801 444.59 478.391 445.133C477.984 445.672 477.775 446.422 477.764 447.383V448.01C477.764 448.986 477.967 449.756 478.373 450.318C478.783 450.881 479.352 451.162 480.078 451.162C480.805 451.162 481.367 450.898 481.766 450.371C482.164 449.84 482.369 449.08 482.381 448.092V447.459ZM485.24 452V443.469H488.029C488.955 443.469 489.65 443.66 490.115 444.043C490.584 444.426 490.818 444.992 490.818 445.742C490.818 446.141 490.705 446.494 490.479 446.803C490.252 447.107 489.943 447.344 489.553 447.512C490.014 447.641 490.377 447.887 490.643 448.25C490.912 448.609 491.047 449.039 491.047 449.539C491.047 450.305 490.799 450.906 490.303 451.344C489.807 451.781 489.105 452 488.199 452H485.24ZM486.365 448.01V451.08H488.223C488.746 451.08 489.158 450.945 489.459 450.676C489.764 450.402 489.916 450.027 489.916 449.551C489.916 448.523 489.357 448.01 488.24 448.01H486.365ZM486.365 447.107H488.064C488.557 447.107 488.949 446.984 489.242 446.738C489.539 446.492 489.688 446.158 489.688 445.736C489.688 445.268 489.551 444.928 489.277 444.717C489.004 444.502 488.588 444.395 488.029 444.395H486.365V447.107Z" fill="white"/>\
      </g>\
      <g id="LHB">\
      <circle id="LHB_2" cx="429" cy="524" r="28" fill="black"/>\
      <path id="LHB_3" d="M420.121 527.08H424.164V528H418.99V519.469H420.121V527.08ZM432.004 528H430.873V524.057H426.572V528H425.447V519.469H426.572V523.137H430.873V519.469H432.004V528ZM434.002 528V519.469H436.791C437.717 519.469 438.412 519.66 438.877 520.043C439.346 520.426 439.58 520.992 439.58 521.742C439.58 522.141 439.467 522.494 439.24 522.803C439.014 523.107 438.705 523.344 438.314 523.512C438.775 523.641 439.139 523.887 439.404 524.25C439.674 524.609 439.809 525.039 439.809 525.539C439.809 526.305 439.561 526.906 439.064 527.344C438.568 527.781 437.867 528 436.961 528H434.002ZM435.127 524.01V527.08H436.984C437.508 527.08 437.92 526.945 438.221 526.676C438.525 526.402 438.678 526.027 438.678 525.551C438.678 524.523 438.119 524.01 437.002 524.01H435.127ZM435.127 523.107H436.826C437.318 523.107 437.711 522.984 438.004 522.738C438.301 522.492 438.449 522.158 438.449 521.736C438.449 521.268 438.312 520.928 438.039 520.717C437.766 520.502 437.35 520.395 436.791 520.395H435.127V523.107Z" fill="white"/>\
      </g>\
      <g id="FB">\
      <circle id="FB_2" cx="485" cy="524" r="28" fill="black"/>\
      <path id="FB_3" d="M483.695 524.232H480.115V528H478.99V519.469H484.275V520.395H480.115V523.312H483.695V524.232ZM485.623 528V519.469H488.412C489.338 519.469 490.033 519.66 490.498 520.043C490.967 520.426 491.201 520.992 491.201 521.742C491.201 522.141 491.088 522.494 490.861 522.803C490.635 523.107 490.326 523.344 489.936 523.512C490.396 523.641 490.76 523.887 491.025 524.25C491.295 524.609 491.43 525.039 491.43 525.539C491.43 526.305 491.182 526.906 490.686 527.344C490.189 527.781 489.488 528 488.582 528H485.623ZM486.748 524.01V527.08H488.605C489.129 527.08 489.541 526.945 489.842 526.676C490.146 526.402 490.299 526.027 490.299 525.551C490.299 524.523 489.74 524.01 488.623 524.01H486.748ZM486.748 523.107H488.447C488.939 523.107 489.332 522.984 489.625 522.738C489.922 522.492 490.07 522.158 490.07 521.736C490.07 521.268 489.934 520.928 489.66 520.717C489.387 520.502 488.971 520.395 488.412 520.395H486.748V523.107Z" fill="white"/>\
      </g>\
      <g id="RHB">\
      <circle id="RHB_2" cx="541" cy="524" r="28" fill="black"/>\
      <path id="RHB_3" d="M534.119 524.549H532.115V528H530.984V519.469H533.809C534.77 519.469 535.508 519.688 536.023 520.125C536.543 520.562 536.803 521.199 536.803 522.035C536.803 522.566 536.658 523.029 536.369 523.424C536.084 523.818 535.686 524.113 535.174 524.309L537.178 527.93V528H535.971L534.119 524.549ZM532.115 523.629H533.844C534.402 523.629 534.846 523.484 535.174 523.195C535.506 522.906 535.672 522.52 535.672 522.035C535.672 521.508 535.514 521.104 535.197 520.822C534.885 520.541 534.432 520.398 533.838 520.395H532.115V523.629ZM544.941 528H543.811V524.057H539.51V528H538.385V519.469H539.51V523.137H543.811V519.469H544.941V528ZM546.939 528V519.469H549.729C550.654 519.469 551.35 519.66 551.814 520.043C552.283 520.426 552.518 520.992 552.518 521.742C552.518 522.141 552.404 522.494 552.178 522.803C551.951 523.107 551.643 523.344 551.252 523.512C551.713 523.641 552.076 523.887 552.342 524.25C552.611 524.609 552.746 525.039 552.746 525.539C552.746 526.305 552.498 526.906 552.002 527.344C551.506 527.781 550.805 528 549.898 528H546.939ZM548.064 524.01V527.08H549.922C550.445 527.08 550.857 526.945 551.158 526.676C551.463 526.402 551.615 526.027 551.615 525.551C551.615 524.523 551.057 524.01 549.939 524.01H548.064ZM548.064 523.107H549.764C550.256 523.107 550.648 522.984 550.941 522.738C551.238 522.492 551.387 522.158 551.387 521.736C551.387 521.268 551.25 520.928 550.977 520.717C550.703 520.502 550.287 520.395 549.729 520.395H548.064V523.107Z" fill="white"/>\
      </g>\
      <g id="C">\
      <circle id="C_2" cx="485" cy="373" r="28" fill="black"/>\
      <path id="C_3" d="M488.266 374.293C488.16 375.195 487.826 375.893 487.264 376.385C486.705 376.873 485.961 377.117 485.031 377.117C484.023 377.117 483.215 376.756 482.605 376.033C482 375.311 481.697 374.344 481.697 373.133V372.312C481.697 371.52 481.838 370.822 482.119 370.221C482.404 369.619 482.807 369.158 483.326 368.838C483.846 368.514 484.447 368.352 485.131 368.352C486.037 368.352 486.764 368.605 487.311 369.113C487.857 369.617 488.176 370.316 488.266 371.211H487.135C487.037 370.531 486.824 370.039 486.496 369.734C486.172 369.43 485.717 369.277 485.131 369.277C484.412 369.277 483.848 369.543 483.438 370.074C483.031 370.605 482.828 371.361 482.828 372.342V373.168C482.828 374.094 483.021 374.83 483.408 375.377C483.795 375.924 484.336 376.197 485.031 376.197C485.656 376.197 486.135 376.057 486.467 375.775C486.803 375.49 487.025 374.996 487.135 374.293H488.266Z" fill="white"/>\
      </g>\
      <g id="LG">\
      <circle id="LG_2" cx="409" cy="373" r="28" fill="black"/>\
      <path id="LG_3" d="M404.121 376.08H408.164V377H402.99V368.469H404.121V376.08ZM415.359 375.881C415.07 376.295 414.666 376.605 414.146 376.812C413.631 377.016 413.029 377.117 412.342 377.117C411.646 377.117 411.029 376.955 410.49 376.631C409.951 376.303 409.533 375.838 409.236 375.236C408.943 374.635 408.793 373.938 408.785 373.145V372.4C408.785 371.115 409.084 370.119 409.682 369.412C410.283 368.705 411.127 368.352 412.213 368.352C413.104 368.352 413.82 368.58 414.363 369.037C414.906 369.49 415.238 370.135 415.359 370.971H414.234C414.023 369.842 413.352 369.277 412.219 369.277C411.465 369.277 410.893 369.543 410.502 370.074C410.115 370.602 409.92 371.367 409.916 372.371V373.068C409.916 374.025 410.135 374.787 410.572 375.354C411.01 375.916 411.602 376.197 412.348 376.197C412.77 376.197 413.139 376.15 413.455 376.057C413.771 375.963 414.033 375.805 414.24 375.582V373.666H412.266V372.752H415.359V375.881Z" fill="white"/>\
      </g>\
      <g id="RG">\
      <circle id="RG_2" cx="558" cy="373" r="28" fill="black"/>\
      <path id="RG_3" d="M554.119 373.549H552.115V377H550.984V368.469H553.809C554.77 368.469 555.508 368.688 556.023 369.125C556.543 369.562 556.803 370.199 556.803 371.035C556.803 371.566 556.658 372.029 556.369 372.424C556.084 372.818 555.686 373.113 555.174 373.309L557.178 376.93V377H555.971L554.119 373.549ZM552.115 372.629H553.844C554.402 372.629 554.846 372.484 555.174 372.195C555.506 371.906 555.672 371.52 555.672 371.035C555.672 370.508 555.514 370.104 555.197 369.822C554.885 369.541 554.432 369.398 553.838 369.395H552.115V372.629ZM564.684 375.881C564.395 376.295 563.99 376.605 563.471 376.812C562.955 377.016 562.354 377.117 561.666 377.117C560.971 377.117 560.354 376.955 559.814 376.631C559.275 376.303 558.857 375.838 558.561 375.236C558.268 374.635 558.117 373.938 558.109 373.145V372.4C558.109 371.115 558.408 370.119 559.006 369.412C559.607 368.705 560.451 368.352 561.537 368.352C562.428 368.352 563.145 368.58 563.688 369.037C564.23 369.49 564.562 370.135 564.684 370.971H563.559C563.348 369.842 562.676 369.277 561.543 369.277C560.789 369.277 560.217 369.543 559.826 370.074C559.439 370.602 559.244 371.367 559.24 372.371V373.068C559.24 374.025 559.459 374.787 559.896 375.354C560.334 375.916 560.926 376.197 561.672 376.197C562.094 376.197 562.463 376.15 562.779 376.057C563.096 375.963 563.357 375.805 563.564 375.582V373.666H561.59V372.752H564.684V375.881Z" fill="white"/>\
      </g>\
      <g id="RT">\
      <circle id="RT_2" cx="632" cy="373" r="28" fill="black"/>\
      <path id="RT_3" d="M628.119 373.549H626.115V377H624.984V368.469H627.809C628.77 368.469 629.508 368.688 630.023 369.125C630.543 369.562 630.803 370.199 630.803 371.035C630.803 371.566 630.658 372.029 630.369 372.424C630.084 372.818 629.686 373.113 629.174 373.309L631.178 376.93V377H629.971L628.119 373.549ZM626.115 372.629H627.844C628.402 372.629 628.846 372.484 629.174 372.195C629.506 371.906 629.672 371.52 629.672 371.035C629.672 370.508 629.514 370.104 629.197 369.822C628.885 369.541 628.432 369.398 627.838 369.395H626.115V372.629ZM637.811 369.395H635.068V377H633.949V369.395H631.213V368.469H637.811V369.395Z" fill="white"/>\
      </g>\
      <g id="LT">\
      <circle id="LT_2" cx="335" cy="373" r="28" fill="black"/>\
      <path id="LT_3" d="M331.121 376.08H335.164V377H329.99V368.469H331.121V376.08ZM340.725 369.395H337.982V377H336.863V369.395H334.127V368.469H340.725V369.395Z" fill="white"/>\
      </g>\
      <g id="RTE">\
      <circle id="RTE_2" cx="709" cy="373" r="28" fill="black"/>\
      <path id="RTE_3" d="M703.119 373.549H701.115V377H699.984V368.469H702.809C703.77 368.469 704.508 368.688 705.023 369.125C705.543 369.562 705.803 370.199 705.803 371.035C705.803 371.566 705.658 372.029 705.369 372.424C705.084 372.818 704.686 373.113 704.174 373.309L706.178 376.93V377H704.971L703.119 373.549ZM701.115 372.629H702.844C703.402 372.629 703.846 372.484 704.174 372.195C704.506 371.906 704.672 371.52 704.672 371.035C704.672 370.508 704.514 370.104 704.197 369.822C703.885 369.541 703.432 369.398 702.838 369.395H701.115V372.629ZM712.811 369.395H710.068V377H708.949V369.395H706.213V368.469H712.811V369.395ZM718.898 373.057H715.201V376.08H719.496V377H714.076V368.469H719.438V369.395H715.201V372.137H718.898V373.057Z" fill="white"/>\
      </g>\
      <g id="LTE">\
      <circle id="LTE_2" cx="262" cy="373" r="28" fill="black"/>\
      <path id="LTE_3" d="M255.121 376.08H259.164V377H253.99V368.469H255.121V376.08ZM264.725 369.395H261.982V377H260.863V369.395H258.127V368.469H264.725V369.395ZM270.812 373.057H267.115V376.08H271.41V377H265.99V368.469H271.352V369.395H267.115V372.137H270.812V373.057Z" fill="white"/>\
      </g>\
      </g>\
      </g>\
      </svg>';

    const body = $("body");
    body.append(field);

    this.fields.push(field);
  },
};
