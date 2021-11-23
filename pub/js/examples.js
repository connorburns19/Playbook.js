"use strict";

const body = $("body");

const book1 = new playBook("New York Giants Plays");
book1.addPage(
  "https://bestyouthfootballplays.com/wp-content/uploads/10-QB-Sneak-I-630x512.png",
  "QB Sneak",
  "https://youtu.be/qyqCTMirNWg?t=86"
);
book1.addPage(
  "https://bestflagfootballplays.com/wp-content/uploads/Hail-Mary-Trips.jpg",
  "Hail Mary",
  "https://youtu.be/qyqCTMirNWg?t=289"
);
book1.addPage(
  "https://www.dummies.com/wp-content/uploads/283523.image0.jpg",
  "Handoff",
  "https://youtu.be/qyqCTMirNWg?t=108"
);
book1.addPage(
  "https://lh6.googleusercontent.com/-r311fMqwGdQ/TXHLNj4yb2I/AAAAAAAARAE/lVNOIrGbpPA/s1600/Boise+St.+Hook+and+Lateral+Play2.png",
  "Lateral",
  "https://youtu.be/qyqCTMirNWg?t=191"
);
book1.addPage(
  "https://lh3.googleusercontent.com/proxy/PEgmaYfJiVz8yJu3VTXlHvAeDcm6JmsO6-3VhrNZq2BeDrnfEmPwFespwIZZiwh89STBhArIpuNUO5W7zlS3fjuFIomYFMYJQp0PLHmbCE3jd7INfoCKYkte-Xbwd4j_wxjL3CXKDVcBTkWKMw",
  "End Around",
  "https://youtu.be/qyqCTMirNWg?t=211"
);

const text = document.createElement("div");
text.className = "outer-text";
text.innerText =
  "The next use case: You are devloping for a football coach, \
however they want the view of the Playbook to be different for the team captain. \
They are able to add new plays to the Playbook so that the coach can view them after and approve them. In this case, as the devloper,\
you create a Playbook Object and call the allowUserCreatePlays method so that the captain can create new plays. (in order to add a play properly\
    you need to put a direct web link to an image as well as a video link ie. youtube)";
body.append(text);

const book2 = new playBook("New York Giants Plays");
book2.addPage(
  "https://bestyouthfootballplays.com/wp-content/uploads/10-QB-Sneak-I-630x512.png",
  "QB Sneak",
  "https://youtu.be/qyqCTMirNWg?t=86"
);
book2.addPage(
  "https://bestflagfootballplays.com/wp-content/uploads/Hail-Mary-Trips.jpg",
  "Hail Mary",
  "https://youtu.be/qyqCTMirNWg?t=289"
);
book2.addPage(
  "https://www.dummies.com/wp-content/uploads/283523.image0.jpg",
  "Handoff",
  "https://youtu.be/qyqCTMirNWg?t=108"
);
book2.addPage(
  "https://lh6.googleusercontent.com/-r311fMqwGdQ/TXHLNj4yb2I/AAAAAAAARAE/lVNOIrGbpPA/s1600/Boise+St.+Hook+and+Lateral+Play2.png",
  "Lateral",
  "https://youtu.be/qyqCTMirNWg?t=191"
);
book2.allowUserCreatePlays();

const text2 = document.createElement("div");
text2.className = "outer-text";
text2.innerText =
  "The final use case is related to something that is barely implemented yet. I am planning on maybe doing some SVG animations.\
  The basic thing that has been implemented is a Field object that allows you to create certain field formations. Right now,\
  the developer can make a T formation. This could be useuful for the first use case; the coach could display the formation for the players\
  to see.";
body.append(text2);

const fieldGen = new FieldGenerator();
fieldGen.makeTFormation();