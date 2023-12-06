const myEle1 = document.getElementById("sec1");
myEle1.style.display = "flex";

//visibilty nie usuwa elementu ale go nie usuwa z Flow DOM
//- czyli zajmuje miejsce nadal a jak uzyje displey:none to juz footer podejdzie na górę

const myEle2 = document.getElementById("sec2");
myEle2.style.display = "none";

const myEle3 = document.getElementById("sec3");
myEle3.style.display = "none";

const myEle4 = document.getElementById("sec4");
myEle4.style.display = "none";

const myLogowanie = document.getElementById("sec5");
myLogowanie.style.display = "none";

const myArt1 = document.getElementById("art1");
myArt1.onclick = function () {
  myEle1.style.display = "none";
  myEle2.style.display = "flex";
};

const myArt2 = document.getElementById("art2");
myArt2.onclick = function () {
  myEle1.style.display = "none";
  myEle3.style.display = "flex";
};

const myArt3 = document.getElementById("art3");
myArt3.onclick = function () {
  myEle1.style.display = "none";
  myEle4.style.display = "flex";
};

const myLogowanieButton = document.getElementById("logowanie");
myLogowanieButton.onclick = function () {
  myEle1.style.display = "none";
  myEle2.style.display = "none";
  myEle3.style.display = "none";
  myEle4.style.display = "none";
  myLogowanie.style.display = "flex";
};

const myLogo = document.getElementById("logo");
myLogo.onclick = function () {
  myEle1.style.display = "flex";
  myEle2.style.display = "none";
  myEle3.style.display = "none";
  myEle4.style.display = "none";
  myLogowanie.style.display = "none";
  console.log("dupa");
};
