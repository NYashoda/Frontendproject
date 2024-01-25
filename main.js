const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo:
      "url('photo1.jpeg')",
    name: "Yashoda N",
  
    description:
      "Me And My Family Are Permanent Customers Of tanishq Jewelers. They Never Say No For Any Design And Manufacture Jewelry To Remember.They Keep Excquisite Designs And Are Ready To Do Anykind Of Customisation As Well. I Ordered A Personalized Ring For My Fiance And It Has Come Out So Nice.A Name Which Maintains Quality. 5 Star To tanishq Jewelers."
  },

  {
    photo:
      "url('photo3.jpeg')",
    name: "Chaithra G",
    
    description:
      "They Have The Best Collection Of Jwellery And At Reasonable Prices. You Can Also Customise Your Jwellery As Per Your Need. They Also Were Very Much Polite And Have A Good Service Too. Even They Delivered The Jwellery To Me, When I Requested Them If They Could Deliver If Possible. Thank You So Much. Had A Very Good Experience!!"
  },

  {
    photo:
      "url('photo4.jpeg')",
    name: "kishore ",
    
    description:
      "I Ordered Two Rings In COD When The Gold Price Was 3980 Per Gram, Due To Lockdown It Was Delivered To Me After A Month At The Same 3980 Per Gram(When I Recieved The Product Price Was 4500pergram) This Made Me To Before Trust Giriraj For Future Purchases. Timely Response. The Design Was Same As In The Image And Persons Who Received The Product Were Extremely Satisfied."
  },

  {
    photo:
      "url('photo5.jpeg')",
    name: "Madhu",
    
    description:
      "I Was Scared At First To Buy Jewellery Online. But tanishq Jewellers Made It Hassle-Free. I Loved The Chain. Simple And Elegant For Daily Use. It Was Customized As Per My Requirements. Invoice Was Transparent. Quick Home Delivery."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});