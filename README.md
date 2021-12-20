# js-library-burnsco2
# Links
https://fbplaybooksample.herokuapp.com/landingpage.html

https://fbplaybooksample.herokuapp.com/documentation.html

# Getting started
link rel="stylesheet" href="js/FbPlaybook.css"
script defer type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
script defer type="text/javascript" type="text/javascript" src='js/FbPlaybook.js'

# Sample creating a book that is connected to a PlayDisplayer Object:
const field4 = new PlayDisplayer('large', 'Connected', 'someid');
const connectedbook = new playBook("Connected", field4, false, 'someid');
connectedbook.addPage("https://i.ibb.co/kSFmpZV/Hail-Mary-Out.png","Hail Mary Out","https://youtu.be/qyqCTMirNWg?t=289", ['straight-deep', 'mid-90-left', 'none', 'none', 'none', 'mid-90-right', 'straight-deep', 'pass-qb', 'none', 'hole-four-fb', 'none'] );