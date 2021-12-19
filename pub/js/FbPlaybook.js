"use strict";

function playBook(title, field, bool, parentid) {
  this.field = field
  this.plays = [];
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
  image2.src = "https://i.ibb.co/7YhctXj/instructions.png";
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
  back_button.innerText = "Back";
  const save_button = document.createElement("button")
  save_button.className = "save-button";
  save_button.type = "button";
  taskbar.appendChild(back_button);
  if (this.field != null && bool){
    save_button.innerText = "Save Custom Play to book"
    taskbar.appendChild(save_button)
    $(save_button).click(
      function (e) {
        e.preventDefault();
        

        let lte = this.field.ltemove[0]
        // console.log(lte).length
        if (lte == undefined){
          lte = 'none'
        }
        // else if (lte.length > 1){
        //   lte = this.field.ltename
        // }
        else{
          lte = this.field.ltename
          // lte = this.field.ltemove[0].name
          // console.log(this.field.ltemove[0])
          // console.log(lte)
        }


        let lt = this.field.ltmove[0]
        if (lt == undefined){
          lt = 'none'
        }
        else{
          lt = this.field.ltname
        }
        let lg = this.field.lgmove[0]
        if (lg == undefined){
          lg = 'none'
        }
        else{
          lg = this.field.lgname
        }
        let c = this.field.cmove[0]
        if (c == undefined){
          c = 'none'
        }
        else{
          c = this.field.cname
        }
        let rg = this.field.rgmove[0]
        if (rg == undefined){
          rg = 'none'
        }
        else{
          rg = this.field.rgname
        }
        let rt = this.field.rtmove[0]
        if (rt == undefined){
          rt = 'none'
        }
        else{
          rt = this.field.rtname
        }
        let rte = this.field.rtemove[0]
        if (rte == undefined){
          rte = 'none'
        }
        else{
          rte = this.field.rtename
        }
        let qb = this.field.qbmove[0]
        if (qb == undefined){
          qb = 'none'
        }
        else{
          qb = this.field.qbname
        }
        let lhb = this.field.lhbmove[0]
        if (lhb == undefined){
          lhb = 'none'
        }
        else{
          lhb = this.field.lhbname
        }
        let fb = this.field.fbmove[0]
        if (fb == undefined){
          fb = 'none'
        }
        else{
          fb = this.field.fbname
        }
        let rhb = this.field.rhbmove[0]
        // console.log(rhb)
        if (rhb == undefined){
          rhb = 'none'
        }
        else{
          rhb = this.field.rhbname
        }
        

        const list = [lte, lt, lg, c, rg, rt, rte, qb, lhb, fb, rhb]
        console.log(list)
        this.addPage('https://i.ibb.co/cbrDg02/grey.png', this.field.fieldtop.innerText, null, list)

        if (this.i === this.pages.length - 2) {
          this.page2.appendChild(this.pages[this.i + 1]);
        }

        
  


        
      }.bind(this)
    );

  }


  
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
  forward_button.innerText = "Forward";
  taskbar2.appendChild(this.title);
  taskbar2.appendChild(forward_button);
  this.page2.appendChild(taskbar2);
  bookdiv2.appendChild(this.page2);

  taskbar2.appendChild(this.title);
  const body = $('body')
  
  if (parentid == undefined){
    body.append(bookdiv2);

  }
  else{
    const par = document.getElementById(parentid)
    par.append(bookdiv2)
  }
  

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
  addPage: function (image, title, link, movelist) {
    console.log(movelist)
    
    
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
    if (this.field != undefined){
      const display = document.createElement("button")
    display.className = "link-button";
    display.type = "button";
    display.innerText = "Initialize Play";
    newpage.appendChild(display)
    $(display).click(
      function (e) {
        e.preventDefault();

        this.field.fieldtop.innerText = title
        const lte = generateMove(movelist[0], this.field.size)[0]
        // console.log(lte)
        if (lte == undefined){
          this.field.ltemove = []
        }
        else{
          this.field.ltemove = lte.steps

        }

        const lt = generateMove(movelist[1], this.field.size)[0]
        if (lt == undefined){
          this.field.ltmove = []
        }
        else{
          this.field.ltmove = generateMove(movelist[1], this.field.size)[0].steps

        }
        const lg = generateMove(movelist[2], this.field.size)[0]
        if (lg == undefined){
          this.field.lgmove = []
        }
        else{
          this.field.lgmove = generateMove(movelist[2], this.field.size)[0].steps

        }
        const c = generateMove(movelist[3], this.field.size)[0]
        if (c == undefined){
          this.field.cmove = []
        }
        else{
          this.field.cmove = generateMove(movelist[3], this.field.size)[0].steps

        }
        const rg = generateMove(movelist[4], this.field.size)[0]
        if (rg == undefined){
          this.field.rgmove = []
        }
        else{
          this.field.rgmove = generateMove(movelist[4], this.field.size)[0].steps

        }
        const rt = generateMove(movelist[5], this.field.size)[0]
        if (rt == undefined){
          this.field.rtmove = []
        }
        else{
          this.field.rtmove = generateMove(movelist[5], this.field.size)[0].steps

        }
        
        const rte = generateMove(movelist[6], this.field.size)[0]
        if (rte == undefined){
          this.field.rtemove = []
        }
        else{
          this.field.rtemove = generateMove(movelist[6], this.field.size)[0].steps

        }
        const qb = generateMove(movelist[7], this.field.size)[0]
        if (qb == undefined){
          this.field.qbmove = []
        }
        else{
          this.field.qbmove = generateMove(movelist[7], this.field.size)[0].steps

        }
        const lhb = generateMove(movelist[8], this.field.size)[0]
        if (lhb == undefined){
          this.field.lhbmove = []
        }
        else{
          this.field.lhbmove = generateMove(movelist[8], this.field.size)[0].steps

        }
        const fb = generateMove(movelist[9], this.field.size)[0]
        if (fb == undefined){
          this.field.fbmove = []
        }
        else{
          this.field.fbmove = generateMove(movelist[9], this.field.size)[0].steps

        }
        const rhb = generateMove(movelist[10], this.field.size)[0]
        if (rhb == undefined){
          this.field.rhbmove = []
        }
        else{
          this.field.rhbmove = generateMove(movelist[10], this.field.size)[0].steps

        }
        
  


        
      }.bind(this)
    );


    }
    

    this.pages.push(newpage);
  },
  allowUserCreatePlays: function (parentid) {
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
    formboxtitle.innerText = "Save Custom Play";
    formbox.className = "form-box";
    formbox.appendChild(formboxtitle);
    formbox.appendChild(forms);

    if (parentid == undefined){
      body.append(formbox);
  
    }
    else{
      const par = document.getElementById(parentid)
      par.append(formbox)
    }

    

    $(submit).click(
      function (e) {
        e.preventDefault();
        let lte = this.field.ltemove[0]
        // console.log(lte).length
        if (lte == undefined){
          lte = 'none'
        }
        // else if (lte.length > 1){
        //   lte = this.field.ltename
        // }
        else{
          lte = this.field.ltename
          // lte = this.field.ltemove[0].name
          // console.log(this.field.ltemove[0])
          // console.log(lte)
        }


        let lt = this.field.ltmove[0]
        if (lt == undefined){
          lt = 'none'
        }
        else{
          lt = this.field.ltname
        }
        let lg = this.field.lgmove[0]
        if (lg == undefined){
          lg = 'none'
        }
        else{
          lg = this.field.lgname
        }
        let c = this.field.cmove[0]
        if (c == undefined){
          c = 'none'
        }
        else{
          c = this.field.cname
        }
        let rg = this.field.rgmove[0]
        if (rg == undefined){
          rg = 'none'
        }
        else{
          rg = this.field.rgname
        }
        let rt = this.field.rtmove[0]
        if (rt == undefined){
          rt = 'none'
        }
        else{
          rt = this.field.rtname
        }
        let rte = this.field.rtemove[0]
        if (rte == undefined){
          rte = 'none'
        }
        else{
          rte = this.field.rtename
        }
        let qb = this.field.qbmove[0]
        if (qb == undefined){
          qb = 'none'
        }
        else{
          qb = this.field.qbname
        }
        let lhb = this.field.lhbmove[0]
        if (lhb == undefined){
          lhb = 'none'
        }
        else{
          lhb = this.field.lhbname
        }
        let fb = this.field.fbmove[0]
        if (fb == undefined){
          fb = 'none'
        }
        else{
          fb = this.field.fbname
        }
        let rhb = this.field.rhbmove[0]
        // console.log(rhb)
        if (rhb == undefined){
          rhb = 'none'
        }
        else{
          rhb = this.field.rhbname
        }
        

        const list = [lte, lt, lg, c, rg, rt, rte, qb, lhb, fb, rhb]
        console.log(list)
        this.addPage(formimage.value, formtitle.value, formlink.value, list)

        if (this.i === this.pages.length - 2) {
          this.page2.appendChild(this.pages[this.i + 1]);
        }

        // this.addPage(formimage.value, formtitle.value, formlink.value);
        if (this.i === this.pages.length - 2) {
          this.page2.appendChild(this.pages[this.i + 1]);
        }
      }.bind(this)
    );
  },
};

function PlayDisplayer(size, name, parentid){
  this.size = size
  this.name = name
  const fieldtop = document.createElement("div")
  this.fieldtop = fieldtop
  
  
  const field = document.createElement("div")
  const frontline = document.createElement("div")
  
  const mid = document.createElement("div")
  
  const backline = document.createElement("div")
  


  this.lte = document.createElement("div")

  this.lte.innerText = '\nLTE'
  this.lte.id = 'lte' + this.name
  
  
  


  this.lt = document.createElement("div")
  
  this.lt.innerText = '\nLT'
  this.lt.id = 'lt' + this.name
  


  this.lg = document.createElement("div")
  
  this.lg.innerText = '\nLG'
  this.lg.id = 'lg' + this.name
  


  this.c = document.createElement("div")
  
  this.c.innerText = '\nC'
  this.c.id = 'c' + this.name
  


  this.rg = document.createElement("div")

  this.rg.innerText = '\nRG'
  this.rg.id = 'rg' + this.name


  this.rt = document.createElement("div")

  this.rt.innerText = '\nRT'
  this.rt.id = 'rt' + this.name
  


  this.rte = document.createElement("div")

  this.rte.innerText = '\nRTE'
  this.rte.id = 'rte' + this.name
  

  




  this.qb = document.createElement("div")
  
  this.qb.innerText = '\nQB'
  this.qb.id = 'qb' + this.name
  

  this.lhb = document.createElement("div")
  
  this.lhb.innerText = '\nLHB'
  this.lhb.id = 'lhb' + this.name

  this.fb = document.createElement("div")
  
  this.fb.innerText = '\nFB'
  this.fb.id = 'fb' + this.name
  

  this.rhb = document.createElement("div")

  this.rhb.innerText = '\nRHB'
  this.rhb.id = 'rhb' + this.name
  

  frontline.append(this.lte)
  frontline.append(this.lt)
  frontline.append(this.lg)
  frontline.append(this.c)
  frontline.append(this.rg)
  frontline.append(this.rt)
  frontline.append(this.rte)
  backline.append(this.lhb)
  backline.append(this.fb)
  backline.append(this.rhb)
  mid.append(this.qb)

  field.append(frontline)
  field.append(mid)
  field.append(backline)
  const playbutton = document.createElement('button')
  playbutton.type = "button";
  playbutton.innerText = 'Play Animation'
  const resetbutton = document.createElement('button')
  resetbutton.type = "button";
  resetbutton.innerText = 'Reset'
  field.append(playbutton)
  field.append(resetbutton)
  
  fieldtop.innerText = this.name
  

  //Hardcode play to start
  this.ltemove = []
  this.ltename = 'none'

  this.ltmove = []
  this.ltname = 'none'

  this.lgmove = []
  this.lgname = 'none'

  this.cmove = []
  this.cname = 'none'

  this.rgmove = []
  this.rgname = 'none'
  this.rtmove = []
  this.rtname = 'none'

  this.rtemove = []
  this.rtename = 'none'
  this.qbmove = []
  this.qbname = 'none'
  this.lhbmove = []
  this.lhbname = 'none'

  this.fbmove = []
  this.fbname = 'none'

  this.rhbmove = []
  this.rhbname = 'none'
  this.rtemove = []
  this.rtename = 'none'

  /////////Styles///////////
  if(this.size === 'xx-large'){
    fieldtop.className = 'field-top'
    frontline.className = 'front'
    mid.className = 'mid-back'
    backline.className = 'mid-back'
    field.className = 'field'
    this.lte.classList.add('player')
    
    this.lt.classList.add('player')
    this.rhb.classList.add('player')
    this.fb.classList.add('player')
    this.lhb.classList.add('player')
    this.rte.classList.add('player')
    this.rg.classList.add('player')
    this.c.classList.add('player')
    this.lg.classList.add('player')
    this.rt.classList.add('player')
    this.qb.classList.add('player')

  }
  else if(this.size === 'x-large'){
    fieldtop.className = 'field-top-x-large'
    frontline.className = 'front-x-large'
    mid.className = 'mid-back-x-large'
    backline.className = 'mid-back-x-large'
    field.className = 'field-x-large'
    this.lte.classList.add('player-x-large')
    
    this.lt.classList.add('player-x-large')
    this.rhb.classList.add('player-x-large')
    this.fb.classList.add('player-x-large')
    this.lhb.classList.add('player-x-large')
    this.rte.classList.add('player-x-large')
    this.rg.classList.add('player-x-large')
    this.c.classList.add('player-x-large')
    this.lg.classList.add('player-x-large')
    this.rt.classList.add('playe-x-large')
    this.qb.classList.add('player-x-large')
    this.rt.classList.add('player-x-large')

  }
  else if(this.size === 'large'){
    fieldtop.className = 'field-top-large'
    frontline.className = 'front-large'
    mid.className = 'mid-back-large'
    backline.className = 'mid-back-large'
    field.className = 'field-large'
    this.lte.classList.add('player-large')
    
    this.lt.classList.add('player-large')
    this.rhb.classList.add('player-large')
    this.fb.classList.add('player-large')
    this.lhb.classList.add('player-large')
    this.rte.classList.add('player-large')
    this.rg.classList.add('player-large')
    this.c.classList.add('player-large')
    this.lg.classList.add('player-large')
    this.rt.classList.add('playe-large')
    this.qb.classList.add('player-large')
    this.rt.classList.add('player-large')

  }



  /////////////////////////
  

  $(playbutton).click(
    function () {
      // console.log('success')
      // console.log(this.lte)
      // $('#lte').animate(lteanimate.obj, lteanimate.speed)
      animateinsequence(this.ltemove, '#lte' + this.name)
      animateinsequence(this.ltmove, '#lt' + this.name)
      animateinsequence(this.lgmove, '#lg' + this.name)
      animateinsequence(this.cmove, '#c' + this.name)
      animateinsequence(this.rgmove, '#rg' + this.name)
      animateinsequence(this.rtmove, '#rt' + this.name)
      
      animateinsequence(this.rtemove, '#rte' + this.name)
      animateinsequence(this.qbmove, '#qb' + this.name)
      animateinsequence(this.lhbmove, '#lhb' + this.name)
      animateinsequence(this.fbmove, '#fb' + this.name)
      animateinsequence(this.rhbmove, '#rhb' + this.name)
      
      

      

      
     
      }

    .bind(this)
  );


  $(resetbutton).click(function () {
  
  $('#lte' + this.name).removeAttr('style')
  $('#lt' + this.name).removeAttr('style')
  $('#lg' + this.name).removeAttr('style')
  $('#c' + this.name).removeAttr('style')
  $('#rg' + this.name).removeAttr('style')
  $('#rt' + this.name).removeAttr('style')
  $('#rte' + this.name).removeAttr('style')
  $('#qb' + this.name).removeAttr('style')
  $('#lhb' + this.name).removeAttr('style')
  $('#fb' + this.name).removeAttr('style')
  $('#rhb' + this.name).removeAttr('style')
  

   
    

}
    

    .bind(this)
  );
  const fullfield = document.createElement('div')
  fullfield.append(fieldtop)
  fullfield.append(field)
  const body = $("body");
  
  if (parentid == undefined){
    // body.append(fieldtop)
    // body.append(field);
    body.append(fullfield)
    

  }
  else{
    const par = document.getElementById(parentid)
    // par.append(fieldtop)
    // par.append(field)
    par.append(fullfield)
  }
  
  

  


}

PlayDisplayer.prototype = {

  connectPlaybook: function(playBook){
    this.playBook = playBook
  },

  spawnSandbox: function (edit, parentid){
    
    const body = $('body')
    // if (parentid != undefined){
    //   body = $(parentid)[0]
    // }
    
    

    const shell = document.createElement('div')
    shell.className = 'sandbox'

    const forms = document.createElement("forms2");
    const formsaddcurrentplay = document.createElement("forms2");
    forms.className = "forms2";
    forms.id = "sandboxform" + this.name;
    const LTE = document.createElement("select")
    LTE.name = 'Left Tight End'
    const LTElabel = document.createElement('label')
    LTElabel.for = 'Left Tight End'
    LTElabel.innerText = 'LTE: '
    
    const LT = document.createElement("select")
    LT.name = 'Left Tackle'
    const LTlabel = document.createElement('label')
    LTlabel.for = 'Left Tackle'
    LTlabel.innerText = 'LT: '
    const LG = document.createElement("select")
    LG.name = 'Left Guard'
    const LGlabel = document.createElement('label')
    LGlabel.for = 'Left Guard'
    LGlabel.innerText = 'LG: '
    const C = document.createElement("select")
    C.name = 'Center'
    const Clabel = document.createElement('label')
    Clabel.for = 'Left Tight End'
    Clabel.innerText = 'C: '
    const RG = document.createElement("select")
    RG.name = 'Right Guard'
    const RGlabel = document.createElement('label')
    RGlabel.for = 'Right Guard'
    RGlabel.innerText = 'RG: '
    const RT = document.createElement("select")
    RT.name = 'Right Tackle'
    const RTlabel = document.createElement('label')
    RTlabel.for = 'Right Tackle'
    RTlabel.innerText = 'RT: '
    const RTE = document.createElement("select")
    RTE.name = 'Right Tight End'
    const RTElabel = document.createElement('label')
    RTElabel.for = 'Right Tight End'
    RTElabel.innerText = 'RTE: '
    const QB = document.createElement("select")
    QB.name = 'Quarterback'
    const QBlabel = document.createElement('label')
    QBlabel.for = 'Quarterback'
    QBlabel.innerText = 'QB: '
    const LHB = document.createElement("select")
    LHB.name = 'Left Halfback'
    const LHBlabel = document.createElement('label')
    LHBlabel.for = 'Left Halfback'
    LHBlabel.innerText = 'LHB: '
    const FB = document.createElement("select")
    FB.name = 'Fullback'
    const FBlabel = document.createElement('label')
    FBlabel.for = 'Fullback'
    FBlabel.innerText = 'FB: '
    const RHB = document.createElement("select")
    RHB.name = 'Right Halfback'
    const RHBlabel = document.createElement('label')
    RHBlabel.for = 'Right Halfback'
    RHBlabel.innerText = 'RHB: '

    const moveslist = getValidMoveList()
    
    const all = [LTE, LT, LG, C, RG, RT, RTE, QB, LHB, FB, RHB]
    for (let i = 0; i < all.length; i++){
      let optdeafult = document.createElement('option')
      optdeafult.value = 'none'
      optdeafult.innerText = 'none'
      all[i].append(optdeafult)
      for (let j = 0; j < moveslist.length; j++){
        let option = document.createElement('option')
        option.value = moveslist[j].name
        option.innerText = moveslist[j].name
        all[i].append(option)

      }
      
      
      


    }
    forms.append(LTElabel)
    forms.append(LTE)
    forms.append(LTlabel)
    forms.append(LT)
    forms.append(LGlabel)
    forms.append(LG)
    forms.append(Clabel)
    forms.append(C)
    forms.append(RGlabel)
    forms.append(RG)
    forms.append(RTlabel)
    forms.append(RT)
    forms.append(RTElabel)
    forms.append(RTE)
    forms.append(QBlabel)
    forms.append(QB)
    forms.append(LHBlabel)
    forms.append(LHB)
    forms.append(FBlabel)
    forms.append(FB)
    forms.append(RHBlabel)
    forms.append(RHB)

    const submit = document.createElement("input");
    submit.id = "confirmid" + this.name;
    submit.type = "submit";
    submit.value = "Confirm Animations";

    forms.append(submit)
    
    shell.append(forms)

    if (parentid == undefined){
      body.append(shell)
      
  
    }
    else{
      const par = document.getElementById(parentid)
      par.append(shell)
     
    }
    

    $(submit).click(
      function (e) {
        e.preventDefault();
        this.setLTEMove(LTE.value)
        this.setLTMove(LT.value)
        this.setLGMove(LG.value)
        this.setCMove(C.value)
        this.setRGMove(RG.value)
        this.setRTMove(RT.value)
        this.setRTEMove(RTE.value)
        this.setQBMove(QB.value)
        this.setLHBMove(LHB.value)
        this.setFBMove(FB.value)
        this.setRHBMove(RHB.value)
        this.fieldtop.innerText = 'Sandbox'
      }.bind(this)
    );

    if(this.size === 'xx-large'){
      shell.className = 'sandbox'
      forms.className = "forms2";

    }
    else if (this.size == 'large'){
      shell.className = 'sandbox-large'
      forms.className = "forms2";

    }

    const formtitle = document.createElement("input");
    formtitle.id = "titleid " + this.name;
    formtitle.type = "text";
    formtitle.placeholder = "Name of play";
    const formimage = document.createElement("input");
    formimage.id = "imageid" + this.name;
    formimage.type = "text";
    formimage.placeholder = "Link to image";
    const formlink = document.createElement("input");
    formlink.id = "linkid" + this.name;
    formlink.type = "text";
    formlink.placeholder = "Link to video";
    const submit2 = document.createElement("input");
    submit.id = "submitid" + this.name;
    submit2.type = "submit";
    submit2.value = "Set Custom Name";

    formsaddcurrentplay.appendChild(formtitle);
    // formsaddcurrentplay.appendChild(formimage);
    // formsaddcurrentplay.appendChild(formlink);
    formsaddcurrentplay.appendChild(submit2);
    if (edit){
      shell.append(formsaddcurrentplay)

    }
    $(submit2).click(
      function (e) {
        e.preventDefault();
        this.fieldtop.innerText = formtitle.value
      }.bind(this)
    );
    



  },

  setLTEMove: function (move) {
    const newmove = generateMove(move, this.size)  
    if(newmove[0] == undefined){
      this.ltemove = []
    }
    else{
      this.ltemove = newmove[0].steps
      this.ltename = newmove[0].name

    }
    

  },
  setLTMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.ltmove = []
    }
    else{
      this.ltmove = newmove[0].steps
      this.ltname = newmove[0].name

    }
    
  },
  setLGMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.lgmove = []
    }
    else{
      this.lgmove = newmove[0].steps
      this.lgname = newmove[0].name

    }
    
  },
  setCMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.cmove = []
    }
    else{
      this.cmove = newmove[0].steps
      this.cname = newmove[0].name

    }
    
  },
  setRGMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.rgmove = []
    }
    else{
      this.rgmove = newmove[0].steps
      this.rgname = newmove[0].name

    }
    
  },
  setRTMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.rtmove = []
    }
    else{
      this.rtmove = newmove[0].steps
      this.rtname = newmove[0].name

    }
    
  },
  setRTEMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.rtemove = []
    }
    else{
      this.rtemove = newmove[0].steps
      this.rtename = newmove[0].name

    }
    
  },
  setQBMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.qbmove = []
    }
    else{
      this.qbmove = newmove[0].steps
      this.qbname = newmove[0].name

    }
    
  },
  setLHBMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.lhbmove = []
    }
    else{
      this.lhbmove = newmove[0].steps
      this.lhbname = newmove[0].name

    }
    
  },
  setFBMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.fbmove = []
    }
    else{
      this.fbmove = newmove[0].steps
      this.fbname = newmove[0].name

    }
    
  },
  setRHBMove: function (move) {
    const newmove = generateMove(move, this.size)
    if(newmove[0] == undefined){
      this.rhbmove = []
    }
    else{
      this.rhbmove = newmove[0].steps
      this.rhbname = newmove[0].name

    }
    
    
  }

};

function getValidMoveList(){
  const straightdeep = {name: 'straight-deep', steps:[{name: 'straight-deep', obj: {bottom: 500}, speed: 1000}]}
  const deepcutright = {name: 'deep-90-right', steps: [{name: 'straight-deep', obj: {bottom: 500}, speed: 1000}, {name:'right-cut', obj: {left: 400}, speed: 1000}]}
  const midcutright = {name: 'mid-90-right', steps: [{name: 'straight-mid', obj: {bottom: 300}, speed: 1000}, {name:'right-cut', obj: {left: 400}, speed: 1000}]}
  const shortcutright = {name: 'short-90-right', steps: [{name: 'straight-close', obj: {bottom: 200}, speed: 700}, {name:'right-cut', obj: {left: 400}, speed: 1000}]}
  const deepcutleft = {name: 'deep-90-left', steps: [{name: 'straight-deep', obj: {bottom: 500}, speed: 1000}, {name:'left-cut', obj: {right: 400}, speed: 1000}] }
  const midcutleft = {name: 'mid-90-left', steps: [{name: 'straight-mid', obj: {bottom: 300}, speed: 1000}, {name:'left-cut', obj: {right: 400}, speed: 1000}] }
  const shortcutleft = {name: 'short-90-left', steps: [{name: 'straight-close', obj: {bottom: 200}, speed: 700}, {name:'right-cut', obj: {right: 400}, speed: 1000}] }
  const holeonelhb = {name: 'hole-one-lhb', steps: [{name: 'hole-one-lhb', obj: {right: 250, bottom: 200}, speed: 900}]}
  const holetwolhb = {name: 'hole-two-lhb', steps: [{name: 'hole-two-lhb', obj: {right: 150, bottom: 200}, speed: 900}]}
  const holethreelhb = {name: 'hole-three-lhb', steps: [{name: 'hole-three-lhb', obj: {right: 25, bottom: 200}, speed: 900}]}
  const holefourlhb = {name: 'hole-four-lhb', steps: [{name: 'hole-four-lhb', obj: {left: 30, bottom: 200}, speed: 900}]}
  const holefiverhb = {name: 'hole-five-rhb', steps: [{name: 'hole-five-rhb', obj: {right: 30, bottom: 200}, speed: 900}]}
  const holesixrhb = {name: 'hole-six-rhb', steps: [{name: 'hole-six-rhb', obj: {left: 30, bottom: 200}, speed: 900}]}
  const holesevenrhb = {name: 'hole-seven-rhb', steps: [{name: 'hole-seven-rhb', obj: {left: 150, bottom: 200}, speed: 900}]}
  const holeeightrhb = {name: 'hole-eight-rhb', steps: [{name: 'hole-eight-rhb', obj: {left: 250, bottom: 200}, speed: 900}]}
  const qbhandoffleft = {name: 'hand-off-left-qb', steps: [{name: 'hand-off-left-qb', obj: {right: 50}, speed: 200}]}
  const qbhandoffright = {name: 'hand-off-right-qb', steps: [{name: 'hand-off-right-qb', obj: {left: 50}, speed: 200}]}
  const holeonefb = {name: 'hole-one-fb', steps: [{name: 'hole-one-fb', obj: {right: 375, bottom: 200}, speed: 900}]}
  const holetwofb = {name: 'hole-two-fb', steps: [{name: 'hole-two-fb', obj: {right: 250, bottom: 200}, speed: 900}]}
  const holethreefb = {name: 'hole-three-fb', steps: [{name: 'hole-three-fb', obj: {right: 150, bottom: 200}, speed: 900}]}
  const holefourfb = {name: 'hole-four-fb', steps: [{name: 'hole-four-fb', obj: {right: 50, bottom: 200}, speed: 900}]}
  const holefivefb = {name: 'hole-five-fb', steps: [{name: 'hole-five-fb', obj: {left: 50, bottom: 200}, speed: 900}]}
  const holesixfb = {name: 'hole-six-fb', steps: [{name: 'hole-six-fb', obj: {left: 150, bottom: 200}, speed: 900}]}
  const holesevenfb = {name: 'hole-seven-fb', steps: [{name: 'hole-seven-fb', obj: {left: 250, bottom: 200}, speed: 900}]}
  const holeeightfb = {name: 'hole-eight-fb', steps: [{name: 'hole-eight-fb', obj: {left: 375, bottom: 200}, speed: 900}]}
  const fallbackqb = {name: 'pass-qb', steps: [{name: 'pass-qb', obj: {top: 100}, speed: 1100}]}

  const moveslist = [straightdeep, deepcutright, midcutright, shortcutright, 
    deepcutleft, midcutleft, shortcutleft, holeonelhb, holetwolhb, holethreelhb, 
    holefourlhb, holefiverhb, holesixrhb, holesevenrhb, holeeightrhb, qbhandoffleft, 
    qbhandoffright, holeonefb, holetwofb, holethreefb, holefourfb, holefivefb, holesixfb, holesevenfb, holeeightfb, fallbackqb]
  return moveslist
}
function getValidMoveListLarge (){
  
  const straightdeep = {name: 'straight-deep', steps:[{name: 'straight-deep', obj: {bottom: 350}, speed: 1000}]}
  const deepcutright = {name: 'deep-90-right', steps: [{name: 'straight-deep', obj: {bottom: 350}, speed: 1000}, {name:'right-cut', obj: {left: 280}, speed: 1000}]}
  const midcutright = {name: 'mid-90-right', steps: [{name: 'straight-mid', obj: {bottom: 210}, speed: 1000}, {name:'right-cut', obj: {left: 280}, speed: 1000}]}
  const shortcutright = {name: 'short-90-right', steps: [{name: 'straight-close', obj: {bottom: 140}, speed: 700}, {name:'right-cut', obj: {left: 280}, speed: 1000}]}
  const deepcutleft = {name: 'deep-90-left', steps: [{name: 'straight-deep', obj: {bottom: 350}, speed: 1000}, {name:'left-cut', obj: {right: 280}, speed: 1000}] }
  const midcutleft = {name: 'mid-90-left', steps: [{name: 'straight-mid', obj: {bottom: 210}, speed: 1000}, {name:'left-cut', obj: {right: 280}, speed: 1000}] }
  const shortcutleft = {name: 'short-90-left', steps: [{name: 'straight-close', obj: {bottom: 140}, speed: 700}, {name:'right-cut', obj: {right: 280}, speed: 1000}] }
  const holeonelhb = {name: 'hole-one-lhb', steps: [{name: 'hole-one-lhb', obj: {right: 175, bottom: 140}, speed: 900}]}
  const holetwolhb = {name: 'hole-two-lhb', steps: [{name: 'hole-two-lhb', obj: {right: 105, bottom: 140}, speed: 900}]}
  const holethreelhb = {name: 'hole-three-lhb', steps: [{name: 'hole-three-lhb', obj: {right: 18, bottom: 140}, speed: 900}]}
  const holefourlhb = {name: 'hole-four-lhb', steps: [{name: 'hole-four-lhb', obj: {left: 21, bottom: 140}, speed: 900}]}
  const holefiverhb = {name: 'hole-five-rhb', steps: [{name: 'hole-five-rhb', obj: {right: 21, bottom: 140}, speed: 900}]}
  const holesixrhb = {name: 'hole-six-rhb', steps: [{name: 'hole-six-rhb', obj: {left: 21, bottom: 140}, speed: 900}]}
  const holesevenrhb = {name: 'hole-seven-rhb', steps: [{name: 'hole-seven-rhb', obj: {left: 105, bottom: 140}, speed: 900}]}
  const holeeightrhb = {name: 'hole-eight-rhb', steps: [{name: 'hole-eight-rhb', obj: {left: 175, bottom: 140}, speed: 900}]}
  const qbhandoffleft = {name: 'hand-off-left-qb', steps: [{name: 'hand-off-left-qb', obj: {right: 35}, speed: 200}]}
  const qbhandoffright = {name: 'hand-off-right-qb', steps: [{name: 'hand-off-right-qb', obj: {left: 35}, speed: 200}]}
  const holeonefb = {name: 'hole-one-fb', steps: [{name: 'hole-one-fb', obj: {right: 263, bottom: 140}, speed: 900}]}
  const holetwofb = {name: 'hole-two-fb', steps: [{name: 'hole-two-fb', obj: {right: 175, bottom: 140}, speed: 900}]}
  const holethreefb = {name: 'hole-three-fb', steps: [{name: 'hole-three-fb', obj: {right: 105, bottom: 140}, speed: 900}]}
  const holefourfb = {name: 'hole-four-fb', steps: [{name: 'hole-four-fb', obj: {right: 35, bottom: 140}, speed: 900}]}
  const holefivefb = {name: 'hole-five-fb', steps: [{name: 'hole-five-fb', obj: {left: 35, bottom: 140}, speed: 900}]}
  const holesixfb = {name: 'hole-six-fb', steps: [{name: 'hole-six-fb', obj: {left: 105, bottom: 140}, speed: 900}]}
  const holesevenfb = {name: 'hole-seven-fb', steps: [{name: 'hole-seven-fb', obj: {left: 175, bottom: 140}, speed: 900}]}
  const holeeightfb = {name: 'hole-eight-fb', steps: [{name: 'hole-eight-fb', obj: {left: 263, bottom: 140}, speed: 900}]}
  const fallbackqb = {name: 'pass-qb', steps: [{name: 'pass-qb', obj: {top: 70}, speed: 1100}]}

  const moveslist = [straightdeep, deepcutright, midcutright, shortcutright, 
    deepcutleft, midcutleft, shortcutleft, holeonelhb, holetwolhb, holethreelhb, 
    holefourlhb, holefiverhb, holesixrhb, holesevenrhb, holeeightrhb, qbhandoffleft, 
    qbhandoffright, holeonefb, holetwofb, holethreefb, holefourfb, holefivefb, holesixfb, holesevenfb, holeeightfb, fallbackqb]
  return moveslist
}

function generateMove(move, size){

  if (size === 'xx-large'){
    const moveslist = getValidMoveList()
    const newmove = moveslist.filter(m => m.name === move)
    console.log(newmove)
  
    return newmove
    

  }

  else if (size === 'large'){
    const moveslist = getValidMoveListLarge()
    const newmove = moveslist.filter(m => m.name === move)
  
    return newmove

  }
  
  const moveslist = getValidMoveList()
  const newmove = moveslist.filter(m => m.name === move)
  
  return newmove


}

function animateinsequence(list, player){
  if (list !== []){
    for (let i=0; i < list.length; i+=1){
      $(player).animate(list[i].obj, list[i].speed)
  
  
    }
    
  }
  
}






/////////////////////////////////////

