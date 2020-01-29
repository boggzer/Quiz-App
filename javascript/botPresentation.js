// let toggleRulesBtn = document.querySelector('#toggleRulesBtn').addEventListener('click', toggleRulesPage);
// let toggleBotBtn = document.querySelector('#toggleBotBtn');
// toggleBotBtn.addEventListener('click', toggleBotPage);


let newGameWhiteCon = document.querySelector('.newGameWhiteCon');
// let botContainer = document.querySelector('#botPresentation');

let enterUsername = document.querySelector('.enterUsername');

let selectBotsForm = document.querySelector('.select-bots-form');

// selectBotsForm.classList.add('toggleHide');
// enterUsername.classList.add('toggleHide');




let rulesContainer = document.querySelector('.rules');

let botContainer = document.createElement('div');
botContainer.classList.add('toggleHide');



// BUTTONS TOGGLE/////////

//////// TOGGLE X

//botInfoToggle.addEventListener('click', toggleBotSelection);





//// TOGGLE ?????/////

// let botInfoToggle = document.createElement('i');
// botInfoToggle.setAttribute('class', 'fa fa-times botCross');
// botInfoToggle.setAttribute('aria-hidden', 'true');
// botInfoToggle.setAttribute('style', 'font-size: 2rem;');









/////////// PRINT THE STUFF/////////////////////
function printBotContainer() {

    botContainer.setAttribute('id', 'botPresentation');

    // botContainer.classList.add('hide');
    newGameWhiteCon.appendChild(botContainer);
    // selectBotsForm.appendChild(botInfoToggle);





}



/////////////////BOTS////////////////

let bot1 = new BotProfile('DumbBert', 'guesses wrong all the time. He likes to call himself a glue connoisseur', 'DumbBert.svg');
let bot2 = new BotProfile('AverageBert', 'he likes to guess the average number. He’s like every average Joe.', 'AverageBert.svg');
let bot3 = new BotProfile('RandomBert', 'always guesses randomly. He loves soft things especially on the floors and walls', 'RandomBert.svg');
let bot4 = new BotProfile('LowBert', 'he loves to guess the lowest number. He’s not the most confident.', 'LowBert.svg');
let bot5 = new BotProfile('HighBert', ' guesses the highest number. His favorite activity is walking in the forest and picking mushrooms.', 'HighBert.svg');
let bot6 = new BotProfile('SmartBert', 'guesses right on turn three. He says he’s as smart as Albert Einstein bet we are all pretty sure he cheats.', 'SmartBert.svg');


function BotProfile(name, description, img, arrow) {
    this.name = name;
    this.description = description;
    this.imgSrc = img;
    this.arrow = arrow;

    this.profile = document.createElement("section");
    this.image = document.createElement('img');
    this.title = document.createElement('h2');
    this.title.innerHTML = this.name;

    this.text = document.createElement('h4');
    this.text.innerHTML = this.description;

    this.iconDown = document.createElement('i');
    this.iconDown.setAttribute('class', 'fa fa-chevron-down arrowDown');
    this.iconDown.setAttribute('aria-hidden', 'true');
    this.iconDown.setAttribute('style', 'font-size: 2rem;');

    let botSelectionToggle = document.createElement('i');
    botSelectionToggle.setAttribute('class', 'fa fa-times botCross');
    botSelectionToggle.setAttribute('aria-hidden', 'true');
    botSelectionToggle.setAttribute('style', 'font-size: 2rem;');

    botSelectionToggle.addEventListener('click', toggleBotInfo);


    botContainer.appendChild(botSelectionToggle);




    this.draw = function () {
        this.profile.classList.add('botProfilDiv');
        this.image.classList.add('botPhoto');
        this.image.setAttribute('src', './assets/' + img);
        this.title.classList.add('botTitle');
        this.text.classList.add('botDescription');

        this.profile.appendChild(this.iconDown);
        this.profile.appendChild(this.image);
        this.profile.appendChild(this.title);
        this.profile.appendChild(this.text);
        botContainer.appendChild(this.profile);
    }

}


printBotContainer();
bot1.draw();
bot2.draw();
bot3.draw();
bot4.draw();
bot5.draw();
bot6.draw();


//////////////TOGGLE////////////////////
function toggleBotInfo() {

    selectBotsForm.classList.remove('toggleHide');
    enterUsername.classList.remove('toggleHide');

    botContainer.classList.add('toggleHide');

}

function toggleBotSelection() {
    selectBotsForm.classList.add('toggleHide');
    enterUsername.classList.add('toggleHide');

    botContainer.classList.remove('toggleHide');
}