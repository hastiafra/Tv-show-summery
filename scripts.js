 let linkCss = document.createElement("link");

 linkCss.innerHTML ='<link rel="stylesheet" href="styles.css">';

document.querySelector("head").appendChild(linkCss);

document.querySelector("body");

let principal= document.querySelector("main");

let hOne = document.createElement("h1");
hOne.innerHTML ="The best How I Met Your Mother episode (according to fans)";

principal.appendChild(hOne);


let paragraph = document.createElement("p");
paragraph.innerHTML="As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
principal.appendChild(paragraph);


let hTwo = document.createElement("h2");
hTwo.innerHTML="The Slap Bet (Season 2, Episode 9)";
principal.appendChild(hTwo);


let p2 = document.createElement("p");
p2.innerHTML="IMDB Rating: 9.5";
principal.appendChild(p2);



let image= document.createElement("img");

principal.appendChild(image);

image.src="images/robin-sparkles.jpg";


let p3 = document.createElement("p");
p3.innerHTML="In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased."
principal.appendChild(p3);
let p4 = document.createElement("p");
p4.innerHTML="In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."
principal.appendChild(p4);


let link1 = document.createElement("a");
link1.innerHTML="Source"

link1.href ="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
principal.appendChild(link1);



