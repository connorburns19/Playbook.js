"use strict";

const body = $("body");

// const book1 = new playBook("New York Giants Plays");



// book1.addPage(
//   "https://bestyouthfootballplays.com/wp-content/uploads/10-QB-Sneak-I-630x512.png",
//   "QB Sneak",
//   "https://youtu.be/qyqCTMirNWg?t=86"
// );
// book1.addPage(
//   "https://bestflagfootballplays.com/wp-content/uploads/Hail-Mary-Trips.jpg",
//   "Hail Mary",
//   "https://youtu.be/qyqCTMirNWg?t=289"
// );
// book1.addPage(
//   "https://www.dummies.com/wp-content/uploads/283523.image0.jpg",
//   "Handoff",
//   "https://youtu.be/qyqCTMirNWg?t=108"
// );
// book1.addPage(
//   "https://lh6.googleusercontent.com/-r311fMqwGdQ/TXHLNj4yb2I/AAAAAAAARAE/lVNOIrGbpPA/s1600/Boise+St.+Hook+and+Lateral+Play2.png",
//   "Lateral",
//   "https://youtu.be/qyqCTMirNWg?t=191"
// );
// book1.addPage(
//   "https://upload.wikimedia.org/wikipedia/commons/d/dc/Yost_tackle_over_lea.jpg",
//   "End Around",
//   "https://youtu.be/qyqCTMirNWg?t=211"
// );

const text = document.createElement("div");
text.className = "outer-text";
text.innerText =
  "The next use case: You are devloping for a football coach, \
however they want the view of the Playbook to be different for the team captain. \
They are able to add new plays to the Playbook so that the coach can view them after and approve them. In this case, as the devloper,\
you create a Playbook Object and call the allowUserCreatePlays method so that the captain can create new plays. (in order to add a play properly\
    you need to put a direct web link to an image as well as a video link ie. youtube)";
body.append(text);

const book2 = new playBook("");
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


const text2 = document.createElement("div");
text2.className = "outer-text";
text2.innerText =
  "The final use case is related to something that is barely implemented yet. I am planning on maybe doing some SVG animations.\
  The basic thing that has been implemented is a Field object that allows you to create certain field formations. Right now,\
  the developer can make a T formation. This could be useuful for the first use case; the coach could display the formation for the players\
  to see.";
body.append(text2);
text2.id = 'text'




const field = new PlayDisplayer('xx-large', 'one');
field.setLTEMove('deep-90-right')
field.setRTEMove('mid-90-left')
field.setRTMove('short-90-left')
// field.setLHBMove('hole-four-lhb')
// field.setRHBMove('hole-eight-rhb')
field.setQBMove('pass-qb')
field.setFBMove('hole-four-fb')
field.spawnSandbox('text')


const field2 = new PlayDisplayer('large', 'Offence');
field2.setLTEMove('deep-90-right')
field2.setRTEMove('mid-90-left')
field2.setRTMove('short-90-right')
// field.setLHBMove('hole-four-lhb')
// field.setRHBMove('hole-eight-rhb')
field2.setQBMove('pass-qb')
field2.setFBMove('hole-five-fb')
field2.spawnSandbox(true)
const book1 = new playBook("", field2);



book1.addPage(
  "https://i.ibb.co/kSFmpZV/Hail-Mary-Out.png",
  "Hail Mary Out",
  "https://youtu.be/qyqCTMirNWg?t=289",
  ['straight-deep', 'mid-90-left', 'none', 'none', 'none', 'mid-90-right', 'straight-deep', 'pass-qb', 'none', 'hole-four-fb', 'none']
);
book1.addPage(
  "https://i.ibb.co/vsRPBKF/Left-Handoff-FB.png",
  "Left Handoff FB",
  null,
  ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'hand-off-left-qb', 'hole-one-lhb', 'hole-two-fb', 'hole-five-rhb']
);
book1.addPage(
  "https://i.ibb.co/xhpXQV7/Criss-Cross.png",
  "CrissCross",
  null,
  ['hole-eight-rhb', 'none', 'none', 'none', 'none', 'none', 'hole-one-fb', 'pass-1b', 'none', 'hole-six-rhb', 'none']
);

// book1.allowUserCreatePlays()



