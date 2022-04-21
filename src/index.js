//create a const where i am going to work on.
const dogListUL = document.querySelector(".dogs-list");
const mainSection = document.querySelector(".main__dog-section");
const plusButton = document.querySelector(".dogs-list__button--add");
const goodOrBadButton = document.querySelector(".dogCardButton");

//create the dog list elements - for each dog on the data list, pass the dog.name to the createDogListItem fucntion
data.forEach((dog) => {
  const dogButton = createDogListItem(dog.name);
  dogButton.addEventListener("click", () => {
    createDogCard(dog);
  });
  dogListUL.append(dogButton);
});

//function to create and return the dog buttons.
function createDogListItem(dogName) {
  const newButton = document.createElement("li");
  newButton.setAttribute("class", "dogs-list__button");
  newButton.innerText = dogName;
  return newButton;
}

//fucntion to create dog card, and replace the currently displayed element with the new dog card created.
function createDogCard(dog) {
  //first remove the main sections current contents
  mainSection.innerHTML = "";

  //create card elements
  const cardH2 = document.createElement("h2");
  cardH2.innerText = dog.name;

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", dog.image);
  cardImg.setAttribute("alt", "");

  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "main__dog-section__desc");

  const cardH3 = document.createElement("h3");
  cardH3.innerText = "Bio";
  cardDiv.append(cardH3);

  const cardP = document.createElement("p");
  cardP.innerText = dog.bio;
  cardDiv.append(cardP);

  const cardDiv2 = document.createElement("div");
  cardDiv2.setAttribute("class", "main__dog-section__btn");

  // create a variable for dog behaviour
  let dogBehaviour;
  if (!dog.isGoodDog) {
    dogBehaviour = " Yes!";
  } else {
    dogBehaviour = " No!";
  }

  const cardEm = document.createElement("em");
  cardEm.innerText = "Is naughty?";
  const cardP2 = document.createElement("p");
  cardP2.innerText = dogBehaviour;

  cardDiv2.append(cardEm);
  cardDiv2.append(cardP2);

  const cardButton = document.createElement("button");

  // create a variable for dog behaviour Button
  let behaviourButton;
  if (!dog.isGoodDog) {
    behaviourButton = "Good Dog";
  } else {
    behaviourButton = "Bad Dog";
  }
  cardButton.innerText = behaviourButton;
  cardDiv2.append(cardButton);

  //append card elements
  mainSection.append(cardH2);
  mainSection.append(cardImg);
  mainSection.append(cardDiv);
  mainSection.append(cardDiv2);

  cardButton.addEventListener("click", () => {
    updateButtonStatus(dog);
  });
}

//working on the add button here
plusButton.addEventListener("click", () => {
  //first remove the main sections current contents
  mainSection.innerHTML = "";
  //then create the form elements
  const H2 = document.createElement("h2");
  H2.innerText = "Add a new Dog";

  const form = document.createElement("form");
  form.setAttribute("class", "form");

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("placeholder", "Name");

  const inputUrl = document.createElement("input");
  inputUrl.setAttribute("type", "url");
  inputUrl.setAttribute("id", "image");
  inputUrl.setAttribute("name", "image");
  inputUrl.setAttribute("placeholder", "URL");

  const inputText = document.createElement("textarea");
  inputText.setAttribute("rows", "5");
  inputText.setAttribute("id", "bio");
  inputText.setAttribute("name", "bio");
  inputText.setAttribute("placeholder", "Text");

  //radio buttons
  const inputRadioGood = document.createElement("input");
  inputRadioGood.setAttribute("type", "radio");
  inputRadioGood.setAttribute("id", "good");
  inputRadioGood.setAttribute("name", "attitude");
  inputRadioGood.setAttribute("value", "good");
  //radio buttons
  const inputRadioNaughty = document.createElement("input");
  inputRadioNaughty.setAttribute("type", "radio");
  inputRadioNaughty.setAttribute("id", "naughty");
  inputRadioNaughty.setAttribute("name", "attitude");
  inputRadioNaughty.setAttribute("value", "naughty");

  const inputSubmit = document.createElement("button");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("id", "submit");
  inputSubmit.setAttribute("name", "submit");
  inputSubmit.setAttribute("value", "Let's add a dog!");
  inputSubmit.setAttribute("class", "form__button");
  inputSubmit.innerText = "Let's add a dog!";

  //create a labels for inputs
  const labelName = document.createElement("label");
  labelName.innerText = "Dog's name";

  const labelUrl = document.createElement("label");
  labelUrl.innerText = "Dog's picture";

  const labelBio = document.createElement("label");
  labelBio.innerText = "Dog's bio";

  const labelRadioGood = document.createElement("label");
  labelRadioGood.innerText = "Good Dog";
  labelRadioGood.setAttribute("for", "good");

  const labelRadioNaughty = document.createElement("label");
  labelRadioNaughty.innerText = "Naughty Dog";
  labelRadioNaughty.setAttribute("for", "naughty");

  //append elements and labels to form
  form.append(labelName);
  form.append(inputName);
  form.append(labelUrl);
  form.append(inputUrl);
  form.append(labelBio);
  form.append(inputText);
  form.append(labelRadioGood);
  form.append(inputRadioGood);
  form.append(labelRadioNaughty);
  form.append(inputRadioNaughty);
  form.append(inputSubmit);
  mainSection.append(H2);
  mainSection.append(form);

  // create a new dog when form is submitted
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //pass the input name to the createDogListItem() to create a new dog button
    const newDog = createDogListItem(event.target[0].value);
    //add this new dog item to the buttons list
    dogListUL.insertBefore(newDog, dogListUL.children[1]);

    //decide if the input is good or naughty and pass that data for the CreateDogCard().
    let isDogGood = true;
    if (event.target[3].checked === true) {
      isDogGood = true;
    } else {
      isDogGood = false;
    }

    //add eventlistener to this new item
    newDog.addEventListener("click", () => {
      newDogsDataFromForm = {
        name: event.target[0].value,
        image: event.target[1].value,
        bio: event.target[2].value,
        isGoodDog: isDogGood,
      };
      createDogCard(newDogsDataFromForm);
    });
  });
});

//update button status
function updateButtonStatus(dog) {
  if (dog.isGoodDog === true) {
    dog.isGoodDog = false;
  } else if (dog.isGoodDog === false) {
    dog.isGoodDog = true;
  }
  createDogCard(dog);
}
