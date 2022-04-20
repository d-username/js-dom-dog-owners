//create a const where i am going to append the buttons.
const dogListUL = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

//create the buttons from the data
for (let i = 0; i < data.length; i++) {
  const currentDog = data[i];
  //create the 6 buttons
  const buttonLi = document.createElement("li");
  //edit 6 buttons
  buttonLi.setAttribute("class", "dogs-list__button");
  buttonLi.innerText = currentDog.name;
  //append 6 buttons
  dogListUL.append(buttonLi);

  //add event listener - click - for each button
  buttonLi.addEventListener("click", function () {
    const oldSection = document.querySelector(".main__dog-section");
    oldSection.remove();
    // THIS CAN BE IN A SEPARATE FUNCTION -----------------------
    //add new Section
    const newSection = document.createElement("section");
    newSection.setAttribute("class", "main__dog-section");
    main.append(newSection);
    //add H2
    const cardH2 = document.createElement("h2");
    cardH2.innerHTML = currentDog.name;
    newSection.append(cardH2);
    //add Image
    const img = document.createElement("img");
    img.src = currentDog.image;
    img.width = 256;
    newSection.append(img);
    //add div
    const div = document.createElement("div");
    div.setAttribute("class", "main__dog-section__desc");
    newSection.append(div);
    //add h3 and p to div
    const cardH3 = document.createElement("h3");
    cardH3.innerHTML = "Bio";
    div.append(cardH3);
    const cardP = document.createElement("p");
    cardP.innerHTML = currentDog.bio;
    div.append(cardP);
    //add bottom div
    const bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("class", "main__dog-section__btn");
    newSection.append(bottomDiv);
    //add p and button to bottom div
    const bottomP = document.createElement("p");
    bottomP.innerHTML = "Is naughty?" + currentDog.isGoodDog;
    bottomDiv.append(bottomP);
    const bottomButton = document.createElement("button");
    bottomButton.innerHTML = "Good";
    bottomDiv.append(bottomButton);
  });
}
