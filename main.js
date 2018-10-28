//STATIC VARIABLES
var verbTense = "";

// SELECTING INPUT BOXES
var ioBox = document.querySelector(".ioInput");
var tuBox = document.querySelector(".tuInput");
var luiBox = document.querySelector(".luiInput");
var noiBox = document.querySelector(".noiInput");
var voiBox = document.querySelector(".voiInput");
var loroBox = document.querySelector(".loroInput");
var tranlsateBox = document.querySelector(".translateInput");
var answerBoxes = [ioBox, tuBox, luiBox, noiBox, voiBox, loroBox, tranlsateBox]

const label1 = document.querySelector(".label1");
const label2 = document.querySelector(".label2");
const label3 = document.querySelector(".label3");
const label4 = document.querySelector(".label4");
const label5 = document.querySelector(".label5");
const label6 = document.querySelector(".label6");

var labels = [label1, label2, label3, label4, label5, label6]
var italianLabels = ["io: ", "tu: ", "lui/lei: ", "noi: ", "voi: ", "loro: ",]
var spanishLabels = ["yo: ", "tu: ", "él/ella/usted: ", "nosotros: ", "vosotros: ", "ellos: ",]
var portugueseLabels = ["eu: ", "tu: ", "ele: ", "nós: ", "vós: ", "eles: ",]


//SELECTING INPUT BOX VALUES
var inputBoxes = [ioBox.value, tuBox.value, luiBox.value, noiBox.value, voiBox.value, loroBox.value]
var inputs = ["io", "tu", "lui", "noi", "voi", "loro", "translate"];

//EFFECT OF BUTTON CLICK
const verbInsertPlacement = document.querySelector(".verbH3Insert");
const messageAllAnswersCorrect = document.querySelector(".messageAllAnswersCorrect");

//SELECTING THE BUTTON
const showNewVerbBtn = document.querySelector(".showNewVerbBtn");
const checkAnswersBtn = document.querySelector(".checkAnswersBtn");
const resetVerbListBtn = document.querySelector(".resetVerbListBtn");
const checkBoxRegVerbs = document.querySelector(".checkBoxRegVerbs");
const checkBoxIrrVerbs = document.querySelector(".checkBoxIrrVerbs");
const checkBoxShowIrrConj = document.querySelector(".checkBoxShowIrrConj");
const starButton = document.querySelector(".starButton");
const starListButton = document.querySelector(".starListButton");
const selectLanguageBtn = document.querySelector(".selectLanguageBtn");
const h3VerbToConjuText = document.querySelector(".h3VerbToConjuText");
const selectLanguageSpanish = document.querySelector(".selectLanguageSpanish");
const selectLanguageItalian = document.querySelector(".selectLanguageItalian");
const selectLanguagePortuguese = document.querySelector(".selectLanguagePortuguese");
const selectVerbTensePresent = document.querySelector(".selectVerbTensePresent");
const selectVerbTensePast = document.querySelector(".selectVerbTensePast");
const selectVerbTenseFuture = document.querySelector(".selectVerbTenseFuture");
const selectVerbTenseBtn = document.querySelector(".selectVerbTenseBtn");
const insertStarList = document.querySelector(".insertStarList");
const navBar = document.querySelector(".nav-bar");



//ADDING EVENT LISTENER TO BUTTON
showNewVerbBtn.addEventListener("click", showNewVerb);
checkAnswersBtn.addEventListener("click", checkIndividualAnswers);
resetVerbListBtn.addEventListener("click", resetVerbList);
checkBoxRegVerbs.addEventListener("change", checkBothCheckedRegLast);
checkBoxIrrVerbs.addEventListener("change", checkBothCheckedIrrLast);
checkBoxShowIrrConj.addEventListener("change", checkBoxIrrVerbConj);
starButton.addEventListener("click", starChangeOnOrOff);
starListButton.addEventListener("click", loadStarVerbs);
// selectLanguageBtn.addEventListener("click", setALanguage);
selectLanguageSpanish.addEventListener("click", setALanguageSpanish);
selectLanguageItalian.addEventListener("click", setALanguageItalian);
selectLanguagePortuguese.addEventListener("click", setALanguagePortuguese);
selectVerbTensePresent.addEventListener("click", setAVerbTensePresent);
selectVerbTensePast.addEventListener("click", setAVerbTensePast);
selectVerbTenseFuture.addEventListener("click", setAVerbTenseFuture);

function pageLoad() {
    selectLanguageBtn.boxShadow = "5px 10px 20px red inset";
    checkAnswersBtn.disabled = true;
    showNewVerbBtn.disabled = true;
    insertStarList.style.display = "none";
    // starListButton.disabled = true;
    selectVerbTenseBtn.disabled = true;
    checkBoxShowIrrConj.disabled = true;
    checkBoxIrrVerbs.disabled = true;
    checkBoxRegVerbs.disabled = true;
    starButton.disabled = true;
    for (var i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].disabled = true;
    }
}

function setAVerbTensePast() {
    verbTense = "passato";
    selectVerbTenseBtn.innerText = "Verb Tense: Past"
    resetVerbList()
}

function setAVerbTensePresent() {
    verbTense = "presente";
    selectVerbTenseBtn.innerText = "Verb Tense: Present"
    resetVerbList()
}

function setAVerbTenseFuture() {
    verbTense = "futuro";
    selectVerbTenseBtn.innerText = "Verb Tense: Future"
    resetVerbList()
}

function settingsForLanguageSelected() {
    if (languageSelected === "italian") {
        document.querySelector('.banner-image').src = "img/italy_banner.jpg";
        document.querySelector('body').style.backgroundColor = "#534630";
        document.querySelector('.verb-section').style.backgroundColor = "rgba(209, 228, 232, .9)";
        for (var i = 0; i < labels.length; i++) {
            labels[i].innerText = italianLabels[i]
        }
        selectLanguageBtn.innerText = "Language: Italian"
    } else if (languageSelected === "spanish") {
        document.querySelector('.banner-image').src = "img/spain_banner.jpg";
        document.querySelector('body').style.backgroundColor = "rgba(247, 178, 103";
        document.querySelector('.verb-section').style.backgroundColor = "rgba(143, 191, 237, .9)";
        for (var i = 0; i < labels.length; i++) {
            labels[i].innerText = spanishLabels[i]
        }
        selectLanguageBtn.innerText = "Language: Spanish"
    } else if (languageSelected === "portuguese") {
        document.querySelector('.banner-image').src = "img/portugal_banner.jpg";
        document.querySelector('body').style.backgroundColor = "rgba(119, 100, 114";
        document.querySelector('.verb-section').style.backgroundColor = "rgba(255, 174, 89, .9)";
        for (var i = 0; i < labels.length; i++) {
            labels[i].innerText = portugueseLabels[i]
        }
        selectLanguageBtn.innerText = "Language: Portuguese"
    }
}


var languageSelected = "globe"
function setALanguageSpanish() {
    verbObjects = verbObjectsSpanish
    languageSelected = "spanish"
    settingsForLanguageSelected()
    resetVerbList()
    selectVerbTenseBtn.disabled = false;
}

function setALanguagePortuguese() {
    verbObjects = verbObjectsPortuguese
    languageSelected = "portuguese"
    settingsForLanguageSelected()
    resetVerbList()
    selectVerbTenseBtn.disabled = false;
}

function setALanguageItalian() {
    verbObjects = verbObjectsItalian
    languageSelected = "italian"
    settingsForLanguageSelected()
    resetVerbList()
    selectVerbTenseBtn.disabled = false;
}

function clearStarListForAllLang() {
    var ulItalian = document.getElementById("myStarListItalian");
    while (ulItalian.firstChild) ulItalian.removeChild(ulItalian.firstChild);
    var ulSpanish = document.getElementById("myStarListSpanish");
    while (ulSpanish.firstChild) ulSpanish.removeChild(ulSpanish.firstChild);
    var ulPortuguese = document.getElementById("myStarListPortuguese");
    while (ulPortuguese.firstChild) ulPortuguese.removeChild(ulPortuguese.firstChild);
}

var createLi = "";
var starListItem = "";
var starList = [];
var starListItalian = [];
var starListSpanish = [];
var starListPortuguese = [];
var noVerbs = 0;
var starListShow = "off"
function loadStarVerbs() {
    if (starListShow === "on") {
        starListShow = "off"
        insertStarList.style.display = "none";
        clearStarListForAllLang()
    } else if (starListShow === "off") {
        insertStarList.style.display = "block";
        starListSettingsPerLanguage()
        starListShow = "on"
        starListUpdateVerbs()
    }
}

function starListUpdateVerbs() {
    if (starList.length !== 0) {
        if (starListItalian !== 0) {
            for (var i = 0; i < starListItalian.length; i++) {
                createLi = document.createElement("LI");
                starListAppend = starListItalian[i].charAt(0).toUpperCase() + starListItalian[i].slice(1);
                starListItem = document.createTextNode(starListAppend);
                createLi.appendChild(starListItem);
                document.getElementById("myStarListItalian").appendChild(createLi);
            }
        } else if (starListItalian === 0) {
            var ulItalian = document.getElementById("myStarListItalian");
            while (ulItalian.firstChild) ulItalian.removeChild(ulItalian.firstChild);
        }
        if (starListSpanish !== 0) {
            for (var i = 0; i < starListSpanish.length; i++) {
                createLi = document.createElement("LI");
                starListAppend = starListSpanish[i].charAt(0).toUpperCase() + starListSpanish[i].slice(1);
                starListItem = document.createTextNode(starListAppend);
                createLi.appendChild(starListItem);
                document.getElementById("myStarListSpanish").appendChild(createLi);
            }
        } else if (starListSpanish === 0) {
            var ulSpanish = document.getElementById("myStarListSpanish");
            while (ulSpanish.firstChild) ulSpanish.removeChild(ulSpanish.firstChild);
        }
        if (starListPortuguese !== 0) {
            for (var i = 0; i < starListPortuguese.length; i++) {
                createLi = document.createElement("LI");
                starListAppend = starListPortuguese[i].charAt(0).toUpperCase() + starListPortuguese[i].slice(1);
                starListItem = document.createTextNode(starListAppend);
                createLi.appendChild(starListItem);
                document.getElementById("myStarListPortuguese").appendChild(createLi);
            }
        } else if (starListPortuguese === 0) {
            var ulPortuguese = document.getElementById("myStarListPortuguese");
            while (ulPortuguese.firstChild) ulPortuguese.removeChild(ulPortuguese.firstChild);
        }
    }
}


function starListSettingsPerLanguage() {
    if (languageSelected === "globe") {
        document.querySelector('.insertStarList').style.backgroundColor = "rgba(176, 203, 139, .9)";
    } else if (languageSelected === "italian") {
        document.querySelector('.insertStarList').style.backgroundColor = "rgba(209, 228, 232, .9)";
    } else if (languageSelected === "spanish") {
        document.querySelector('.insertStarList').style.backgroundColor = "rgba(143, 191, 237, .9)";
    } else if (languageSelected === "portuguese") {
        document.querySelector('.insertStarList').style.backgroundColor = "rgba(255, 174, 89, .9)";
    }
}


var starStatus = "off"
function resetStar() {
    if (languageSelected === "italian" && starListItalian.indexOf(verbInserted) === -1) {
        starButton.style.backgroundColor = "rgb(252, 255, 232)";
        starStatus = "off"
    } else if (languageSelected === "italian" && starListItalian.indexOf(verbInserted) !== -1) {
        starButton.style.backgroundColor = "#FAFF17";
        starStatus = "on"
    }
    if (languageSelected === "spanish" && starListSpanish.indexOf(verbInserted) === -1) {
        starButton.style.backgroundColor = "rgb(252, 255, 232)";
        starStatus = "off"
    } else if (languageSelected === "spanish" && starListSpanish.indexOf(verbInserted) !== -1) {
        starButton.style.backgroundColor = "#FAFF17";
        starStatus = "on"
    }
    if (languageSelected === "portuguese" && starListPortuguese.indexOf(verbInserted) === -1) {
        starButton.style.backgroundColor = "rgb(252, 255, 232)";
        starStatus = "off"
    } else if (languageSelected === "portuguese" && starListPortuguese.indexOf(verbInserted) !== -1) {
        starButton.style.backgroundColor = "#FAFF17";
        starStatus = "on"
    }
}

function starChangeOnOrOff() {
    if (starStatus === "off") {
        starButton.style.backgroundColor = "#FAFF17";
        starStatus = "on"
        if (starList.indexOf(verbInserted) === -1) {
            starList.push(verbInserted);
        }
        if (languageSelected === "italian") {
            starListItalian.push(verbInserted);
        } else if (languageSelected === "spanish") {
            starListSpanish.push(verbInserted);
        } else if (languageSelected === "portuguese") {
            starListPortuguese.push(verbInserted);
        }
    } else if (starStatus === "on") {
        starButton.style.backgroundColor = "rgb(252, 255, 232)";
        var starListRemoveIndex = starList.indexOf(verbInserted)
        starList.splice(starListRemoveIndex, 1);
        starStatus = "off"
        if (languageSelected === "italian") {
            var starListItalianRemoveIndex = starListItalian.indexOf(verbInserted)
            starListItalian.splice(starListItalianRemoveIndex, 1);
        } else if (languageSelected === "spanish") {
            var starListSpanishRemoveIndex = starListSpanish.indexOf(verbInserted)
            starListSpanish.splice(starListSpanishRemoveIndex, 1);
        } else if (languageSelected === "portuguese") {
            var starListPortugueseRemoveIndex = starListPortuguese.indexOf(verbInserted)
            starListPortuguese.splice(starListPortugueseRemoveIndex, 1);
        }
    }
}


function checkBoxIrrVerbConj() {
    if (checkBoxShowIrrConj.checked === true) {
        if (verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form === "irregular") {
            for (var i = 0; i < answerBoxes.length; i++) {
                if (verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.irrPlaces[i] === "yes") {
                    answerBoxes[i].style.backgroundColor = "yellow";
                } else if (verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.irrPlaces[i] === "no") {
                    answerBoxes[i].style.backgroundColor = "";
                }
            }
        } else if (verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form === "regular") {
        }
    } else if (checkBoxShowIrrConj.checked === false) {
        for (var i = 0; i < answerBoxes.length; i++) {
            answerBoxes[i].style.backgroundColor = "";
        }
    }
}

function checkBothCheckedRegLast() {
    if (checkBoxRegVerbs.checked === true && checkBoxIrrVerbs.checked === true) {
        checkBoxRegVerbs.checked = false
        alert("You cannot check both Irregular only and Regular Only. Pick only one or do not select either to get the full verb list.")
    } else {
        resetFromCheckBox()
    }
}

function checkBothCheckedIrrLast() {
    if (checkBoxRegVerbs.checked === true && checkBoxIrrVerbs.checked === true) {
        checkBoxIrrVerbs.checked = false
        alert("You cannot check both Irregular only and Regular Only. Pick only one or do not select either to get the full verb list.")
    } else {
        resetFromCheckBox()
    }
}

// Reset VERBS FROM CHECK LIST
function resetFromCheckBox() {
    clearBoxes()
    resetStar()
    if (checkBoxIrrVerbs.checked === false && checkBoxRegVerbs.checked === false) {
        resetVerbList()
    } else {
        verbListShown = []
        checkIndexUsedArray = []
        if (checkBoxRegVerbs.checked === true) {
            showOnlyRegVerbs()
        } else if (checkBoxIrrVerbs.checked === true) {
            showOnlyIrrVerbs()
        }
    }
}

function showOnlyRegVerbs() {
    verbList = [];
    verbListNotShown = [];
    verbListShown = [];
    for (var i = 0; i < verbObjects.length; i++) {
        verbList.push(verbObjects[i].verb)
    }
    for (var i = 0; i < verbObjects.length; i++) {
        if (verbObjects[i][verbList[i]][verbTense].reg_o_irr.form === "regular") {
            verbListNotShown.push(verbObjects[i].verb)
        }
    }
    showNewVerb()
}

function showOnlyIrrVerbs() {
    verbList = [];
    verbListNotShown = [];
    verbListShown = [];
    for (var i = 0; i < verbObjects.length; i++) {
        verbList.push(verbObjects[i].verb)
    }
    for (var i = 0; i < verbObjects.length; i++) {
        if (verbObjects[i][verbList[i]][verbTense].reg_o_irr.form === "irregular") {
            verbListNotShown.push(verbObjects[i].verb)
        }
    }
    showNewVerb()
}

//OBJECT FOR VERB TENSES


// REMEMBER WHEN MAKING NEW OBJECT, MUST CALL EACH VERB OBJECT BY THEIR VERBINSERTED NAME
var verbObjectsItalian = [
    {
        verb: "potere",
        potere: {
            translate: "to be able",
            participio_presente: "potente",
            gerundio: "potendo",
            participio_passato: "potuto",
            presente: {
                io: "posso",
                tu: "puoi",
                lui: "può",
                noi: "possiamo",
                voi: "potete",
                loro: "possono",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            passato: {
                io: "ho potuto",
                tu: "hai potuto",
                lui: "ha potuto",
                noi: "abbiamo potuto",
                voi: "avete potuto",
                loro: "hanno potuto",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "potrò",
                tu: "potrai",
                lui: "potrà",
                noi: "potremo",
                voi: "potrete",
                loro: "potranno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "essere",
        essere: {
            translate: "to be",
            participio_presente: "essente",
            gerundio: "essendo",
            participio_passato: "stato",
            presente: {
                io: "sono",
                tu: "sei",
                lui: "è",
                noi: "siamo",
                voi: "siete",
                loro: "sono",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
            passato: {
                ess_o_aver: "essere",
                io: "sono stato",
                tu: "sei stato",
                lui: "è stato",
                noi: "siamo stati",
                voi: "siete stati",
                loro: "sono stati",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "sarò",
                tu: "sarai",
                lui: "sarà",
                noi: "saremo",
                voi: "sarete",
                loro: "saranno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "avere",
        avere: {
            translate: "to have",
            participio_presente: "avente",
            gerundio: "avendo",
            participio_passato: "avuto",
            presente: {
                io: "ho",
                tu: "hai",
                lui: "ha",
                noi: "abbiamo",
                voi: "avete",
                loro: "hanno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                }
            },
            passato: {
                ess_o_aver: "avere",
                io: "ho avuto",
                tu: "hai avuto",
                lui: "ha avuto",
                noi: "abbiamo avuto",
                voi: "avete avuto",
                loro: "hanno avuto",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "avrò",
                tu: "avrai",
                lui: "avrà",
                noi: "avremo",
                voi: "avrete",
                loro: "avranno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "salire",
        salire: {
            translate: "to go up",
            participio_presente: "salente",
            gerundio: "salendo",
            participio_passato: "salito",
            presente: {
                io: "salgo",
                tu: "sali",
                lui: "sale",
                noi: "saliamo",
                voi: "salite",
                loro: "salgono",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "no", "no", "no", "no", "yes"]
                }
            },
            passato: {
                ess_o_aver: "essere",
                io: "sono salito",
                tu: "sei salito",
                lui: "è salito",
                noi: "siamo saliti",
                voi: "siete saliti",
                loro: "sono saliti",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "salirò",
                tu: "salirai",
                lui: "salirà",
                noi: "saliremo",
                voi: "salirete",
                loro: "saliranno",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "colpire",
        colpire: {
            translate: "to hit",
            participio_presente: "colpente",
            gerundio: "colpendo",
            participio_passato: "colpito",
            presente: {
                io: "colpisco",
                tu: "colpisci",
                lui: "colpisce",
                noi: "colpiamo",
                voi: "colpite",
                loro: "colpiscono",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "no", "no", "yes"]
                },
            },
            passato: {
                ess_o_aver: "avere",
                io: "ho colpito",
                tu: "hai colpito ",
                lui: "ha colpito",
                noi: "abbiamo colpito",
                voi: "avete colpito",
                loro: "hanno colpito",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "colpirò",
                tu: "colpirai",
                lui: "colpirà",
                noi: "colpiremo",
                voi: "colpirete",
                loro: "colpiranno",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "andare",
        andare: {
            translate: "to go",
            participio_presente: "andante",
            gerundio: "andando",
            participio_passato: "andato",
            presente: {
                io: "vado",
                tu: "vai",
                lui: "va",
                noi: "andiamo",
                voi: "andate",
                loro: "vanno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "no", "no", "yes"]
                },
            },
            passato: {
                ess_o_aver: "essere",
                io: "sono andato",
                tu: "sei andato",
                lui: "è andato",
                noi: "siamo andati",
                voi: "siete andati",
                loro: "sono andati",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "andrò",
                tu: "andrai",
                lui: "andrà",
                noi: "andremo",
                voi: "andrete",
                loro: "andranno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "cenare",
        cenare: {
            translate: "to eat dinner",
            participio_presente: "cenante",
            gerundio: "cenando",
            participio_passato: "cenato",
            presente: {
                io: "ceno",
                tu: "ceni",
                lui: "cena",
                noi: "ceniamo",
                voi: "cenate",
                loro: "cenano",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                ess_o_aver: "avere",
                io: "ho cenato",
                tu: "hai cenato",
                lui: "ha cenato",
                noi: "abbiamo cenati",
                voi: "avete cenati",
                loro: "hanno cenati",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "cenerò",
                tu: "cenerai",
                lui: "cenerà",
                noi: "ceneremo",
                voi: "cenerete",
                loro: "ceneranno",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "mangiare",
        mangiare: {
            translate: "to eat",
            participio_presente: "mangiante",
            gerundio: "mangiando",
            participio_passato: "mangiato",
            presente: {
                io: "mangio",
                tu: "mangi",
                lui: "mangia",
                noi: "mangiamo",
                voi: "mangiate",
                loro: "mangiano",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                ess_o_aver: "avere",
                io: "ho mangiato",
                tu: "hai mangiato",
                lui: "è mangiato",
                noi: "abbiamo mangiati",
                voi: "avete mangiati",
                loro: "hanno mangiati",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "mangerò",
                tu: "mangerai",
                lui: "mangerà",
                noi: "mangeremo",
                voi: "mangerete",
                loro: "mangeranno",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        }
    },
];

var verbObjectsSpanish = [
    {
        verb: "poder",
        poder: {
            translate: "to be able",
            participio_presente: "potente",
            gerundio: "podiendo",
            participio_passato: "puesto",
            presente: {
                io: "puedo",
                tu: "puedes",
                lui: "puede",
                noi: "podemos",
                voi: "podéis",
                loro: "pueden",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "no", "no", "yes"]
                },
            },
            passato: {
                io: "pude",
                tu: "pudiste",
                lui: "pudo",
                noi: "pudimos",
                voi: "pudisteis",
                loro: "pudieron",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
            futuro: {
                io: "podré",
                tu: "podrás",
                lui: "podrá",
                noi: "podremos",
                voi: "podréis",
                loro: "podrán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "ser",
        ser: {
            translate: "to be",
            participio_presente: "essente",
            gerundio: "siendo",
            participio_passato: "sido",
            presente: {
                io: "soy",
                tu: "eres",
                lui: "es",
                noi: "somos",
                voi: "sois",
                loro: "son",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
        passato: {
            io: "fui",
            tu: "fuiste",
            lui: "fue",
            noi: "fuimos",
            voi: "fuisteis",
            loro: "fueron",
            reg_o_irr: {
                form: "irregular",
                irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
            },
        },
        futuro: {
            io: "seré",
            tu: "serás",
            lui: "será",
            noi: "seremos",
            voi: "seréis",
            loro: "seran",
            reg_o_irr: {
                form: "irregular",
                irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
            },
        },
    },
    {
        verb: "tener",
        tener: {
            translate: "to have",
            participio_presente: "avente",
            gerundio: "teniendo",
            participio_passato: "tenido",
            presente: {
                io: "tengo",
                tu: "tienes",
                lui: "tiene",
                noi: "tenemos",
                voi: "tenéis",
                loro: "tienen",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "no", "no", "yes"]
                }
            },
            passato: {
                io: "tuve",
                tu: "tuviste",
                lui: "tuvo",
                noi: "tuvimos",
                voi: "tuvisteis",
                loro: "tuvieron",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
            futuro: {
                io: "tendré",
                tu: "tendrás",
                lui: "tendrá",
                noi: "tendremos",
                voi: "tendréis",
                loro: "tendrán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "subir",
        subir: {
            translate: "to go up",
            participio_presente: "salente",
            gerundio: "subiendo",
            participio_passato: "subido",
            presente: {
                io: "subo",
                tu: "subes",
                lui: "sube",
                noi: "subimos",
                voi: "subís",
                loro: "suben",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                io: "subí",
                tu: "subiste",
                lui: "subió",
                noi: "subimos",
                voi: "subisteis",
                loro: "subieron",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "subiré",
                tu: "subirás",
                lui: "subirá",
                noi: "subiremos",
                voi: "subirais",
                loro: "subirán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "golpear",
        golpear: {
            translate: "to hit",
            participio_presente: "colpente",
            gerundio: "golpeando",
            participio_passato: "golpeado",
            presente: {
                io: "golpeo",
                tu: "golpeas",
                lui: "golpea",
                noi: "golpeamos",
                voi: "golpeáis",
                loro: "golpean",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            passato: {
                io: "golpeé",
                tu: "golpeaste",
                lui: "golpeó",
                noi: "golpeamos",
                voi: "golpeasteis",
                loro: "golpearon",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "golpearé",
                tu: "golpearás",
                lui: "golpeará",
                noi: "golperemos",
                voi: "golpearéis",
                loro: "golpearán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "ir",
        ir: {
            translate: "to go",
            participio_presente: "andante",
            gerundio: "yendo",
            participio_passato: "ido",
            presente: {
                io: "voy",
                tu: "vas",
                lui: "va",
                noi: "vamos",
                voi: "vais",
                loro: "van",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
            passato: {
                io: "fui",
                tu: "fuiste",
                lui: "fue",
                noi: "fuimos",
                voi: "fuisteis",
                loro: "fueron",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "iré",
                tu: "irás",
                lui: "irá",
                noi: "iremos",
                voi: "iréis",
                loro: "irán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "cenar",
        cenar: {
            translate: "to eat dinner",
            participio_presente: "cenante",
            gerundio: "cenando",
            participio_passato: "cenado",
            presente: {
                io: "ceno",
                tu: "cenas",
                lui: "cena",
                noi: "cenamos",
                voi: "cenáis",
                loro: "cenan",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                io: "cené",
                tu: "cenaste",
                lui: "cenó",
                noi: "cenamos",
                voi: "cenasteis",
                loro: "cenaron",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
            futuro: {
                io: "cenaré",
                tu: "cenarás",
                lui: "cenará",
                noi: "cenaremos",
                voi: "cenaréis",
                loro: "cenarán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                },
            },
        },
    },
    {
        verb: "comer",
        comer: {
            translate: "to eat",
            participio_presente: "mangiante",
            gerundio: "comiendo",
            participio_passato: "comido",
            presente: {
                io: "como",
                tu: "comes",
                lui: "come",
                noi: "comemos",
                voi: "coméis",
                loro: "comen",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                io: "comí",
                tu: "comiste",
                lui: "comió",
                noi: "comimos",
                voi: "comisteis",
                loro: "comieron",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "comeré",
                tu: "comerás",
                lui: "comerá",
                noi: "comeremos",
                voi: "comeréis",
                loro: "comerán",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        }
    },
];

var verbObjectsPortuguese = [
    {
        verb: "poder",
        poder: {
            translate: "to be able",
            participio_presente: "potente",
            gerundio: "podendo",
            participio_passato: "podido",
            presente: {
                io: "posso",
                tu: "podes",
                lui: "pode",
                noi: "podemos",
                voi: "podeis",
                loro: "podem",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "no", "no", "no", "no", "no"]
                },
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "ser",
        ser: {
            translate: "to be",
            participio_presente: "essente",
            gerundio: "sendo",
            participio_passato: "sido",
            presente: {
                io: "sou",
                tu: "és",
                lui: "é",
                noi: "somos",
                voi: "sois",
                loro: "são",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
        },
    },
    {
        verb: "ter",
        ter: {
            translate: "to have",
            participio_presente: "avente",
            gerundio: "tendo",
            participio_passato: "tido",
            presente: {
                io: "tenho",
                tu: "tens",
                lui: "tem",
                noi: "temos",
                voi: "tendes",
                loro: "tem",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "no", "yes", "yes"]
                }
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "subir",
        subir: {
            translate: "to go up",
            participio_presente: "salente",
            gerundio: "subindo",
            participio_passato: "subido",
            presente: {
                io: "subo",
                tu: "sobes",
                lui: "sobe",
                noi: "subimos",
                voi: "subis",
                loro: "sobem",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["no", "yes", "yes", "no", "no", "yes"]
                }
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "golpear",
        golpear: {
            translate: "to hit",
            participio_presente: "colpente",
            gerundio: "golpeando",
            participio_passato: "golpeado",
            presente: {
                io: "golpeio",
                tu: "golpeias",
                lui: "golpeia",
                noi: "golpeamos",
                voi: "golpeais",
                loro: "golpeiam",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["no", "yes", "yes", "no", "no", "yes"]
                },
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "ir",
        ir: {
            translate: "to go",
            participio_presente: "andante",
            gerundio: "indo",
            participio_passato: "ido",
            presente: {
                io: "vou",
                tu: "vais",
                lui: "vai",
                noi: "vamos",
                voi: "ides",
                loro: "vão",
                reg_o_irr: {
                    form: "irregular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "yes", "yes"]
                },
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "jantar",
        jantar: {
            translate: "to eat dinner",
            participio_presente: "cenante",
            gerundio: "jantando",
            participio_passato: "jantado",
            presente: {
                io: "janto",
                tu: "jantas",
                lui: "janta",
                noi: "jantamos",
                voi: "jantais",
                loro: "jantam",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]

                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        },
    },
    {
        verb: "comer",
        comer: {
            translate: "to eat",
            participio_presente: "mangiante",
            gerundio: "comendo",
            participio_passato: "comido",
            presente: {
                io: "como",
                tu: "comes",
                lui: "come",
                noi: "comemos",
                voi: "comeis",
                loro: "comem",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: []
                }
            },
            passato: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
            futuro: {
                io: "",
                tu: "",
                lui: "",
                noi: "",
                voi: "",
                loro: "",
                reg_o_irr: {
                    form: "regular",
                    irrPlaces: ["yes", "yes", "yes", "yes", "no", "yes"]
                },
            },
        }
    },
];

var verbObjects = verbObjectsItalian



// VERB ARRAY FOR SELECTION
var verbList = [];
var verbListNotShown = [];
var verbListShown = [];

function makeVerbLists() {
    verbList = [];
    verbListNotShown = [];
    verbListShown = [];
    for (var i = 0; i < verbObjects.length; i++) {
        verbList.push(verbObjects[i].verb)
        verbListNotShown.push(verbObjects[i].verb)
    }
    showNewVerb()
}

var verbInserted = "";
var randomVerbIndex = 0;

function updateNotShownNShownLists() {
    verbListShown.push(verbInserted);
    verbListNotShown.splice(verbListNotShown.indexOf(verbInserted), 1);
}

function getRandomVerb(verbObjectsLength) {
    randomVerbIndex = Math.floor(Math.random() * verbObjectsLength);
    verbInserted = verbObjects[randomVerbIndex].verb
    //Below shows if verb is in VerbListShown
    if (verbListShown.indexOf(verbInserted) !== -1) {
        getRandomVerb(verbObjects.length)
    } else {
        if (checkBoxRegVerbs.checked === true && verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form === "regular") {
            updateNotShownNShownLists()
        } else if (checkBoxRegVerbs.checked === true && verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form !== "regular") {
            getRandomVerb(verbObjects.length)
        } else if (checkBoxIrrVerbs.checked === true && verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form === "irregular") {
            updateNotShownNShownLists()
        } else if (checkBoxIrrVerbs.checked === true && verbObjects[randomVerbIndex][verbInserted][verbTense].reg_o_irr.form !== "irregular") {
            getRandomVerb(verbObjects.length)
        } else if (checkBoxIrrVerbs.checked === false && checkBoxRegVerbs.checked === false) {
            /// if none of the boxes are checked
            updateNotShownNShownLists()
        }
    }
}

//ACTION FROM BUTTON CLICK
function showNewVerb() {
    if (verbListNotShown.length !== 0) {
        messageAllAnswersCorrect.innerText = "";
        getRandomVerb(verbObjects.length);
        verbInsertPlacement.innerText =
            verbInserted.charAt(0).toUpperCase() + verbInserted.slice(1);
        checkBoxShowIrrConj.checked = false
        checkBoxIrrVerbConj()
        clearBoxes()
        resetStar()
    } else {
        messageAllAnswersCorrect.innerText = "";
        verbInsertPlacement.innerText = "Great job, you learned all the verbs! Click the 'RESET VERB LIST' button to study the verbs again.";
        showResetButton();
    }
}

function showResetButton() {
    resetVerbListBtn.style.display = "inline";
    checkAnswersBtn.style.display = "none";
    showNewVerbBtn.style.display = "none";
    tranlsateBox.style.display = "none";
    //Not working, disabled the whole time for some reason
    // h3VerbToConjuText.style.display = "none";
    // starButton.style.display = "none";
    checkBoxShowIrrConj.disabled = true;
    checkBoxIrrVerbs.disabled = true;
    checkBoxRegVerbs.disabled = true;
    starButton.disabled = true;
}

//CLEAR BOXES WHEN showNewVerb IS CLICKED
function clearBoxes() {
    //?? how can I shorten this?
    document.querySelector('.ioInput').value = "";
    document.querySelector('.ioInput').style.border = "";
    document.querySelector('.tuInput').value = "";
    document.querySelector('.tuInput').style.border = "";
    document.querySelector('.luiInput').value = "";
    document.querySelector('.luiInput').style.border = "";
    document.querySelector('.noiInput').value = "";
    document.querySelector('.noiInput').style.border = "";
    document.querySelector('.voiInput').value = "";
    document.querySelector('.voiInput').style.border = "";
    document.querySelector('.loroInput').value = "";
    document.querySelector('.loroInput').style.border = "";
    document.querySelector('.translateInput').value = "";
    document.querySelector('.translateInput').style.border = "";
}



// CHECKING INDIVIDUAL ANSWERS
function checkIndividualAnswers() {
    // Getting the values from boxes
    io_input = document.querySelector(".ioInput").value.toLowerCase();
    tu_input = document.querySelector(".tuInput").value.toLowerCase();
    lui_input = document.querySelector(".luiInput").value.toLowerCase();
    noi_input = document.querySelector(".noiInput").value.toLowerCase();
    voi_input = document.querySelector(".voiInput").value.toLowerCase();
    loro_input = document.querySelector(".loroInput").value.toLowerCase();
    tranlsate_input = document.querySelector(".translateInput").value.toLowerCase();

    var inputBoxes = [io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input]
    var inputs = ["io", "tu", "lui", "noi", "voi", "loro", "translate"];

    for (var i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i] === verbObjects[randomVerbIndex][verbInserted][verbTense][inputs[i]]) {
            answerBoxes[i].style.border = "4px solid green";
        } else {
            answerBoxes[i].style.border = "4px solid red";
        }
    }
    if (tranlsate_input === verbObjects[randomVerbIndex][verbInserted].translate) {
        document.querySelector(".translateInput").style.border = "4px solid green";
    } else {
        document.querySelector(".translateInput").style.border = "4px solid red";
    }
    checkAllAnswersCorr(io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input)
}

function checkAllAnswersCorr(io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input) {
    if (io_input === verbObjects[randomVerbIndex][verbInserted][verbTense].io
        && tu_input === verbObjects[randomVerbIndex][verbInserted][verbTense].tu
        && lui_input === verbObjects[randomVerbIndex][verbInserted][verbTense].lui
        && noi_input === verbObjects[randomVerbIndex][verbInserted][verbTense].noi
        && voi_input === verbObjects[randomVerbIndex][verbInserted][verbTense].voi
        && loro_input === verbObjects[randomVerbIndex][verbInserted][verbTense].loro
        && tranlsate_input === verbObjects[randomVerbIndex][verbInserted].translate) {
        messageAllAnswersCorrect.innerText = "Great job, you got this verb right! Click 'SHOW NEW VERB' to try another!";
    } else {
        messageAllAnswersCorrect.innerText = "";
    }
}

function resetVerbList() {
    makeVerbLists()
    checkAnswersBtn.style.display = "inline";
    showNewVerbBtn.style.display = "inline";
    tranlsateBox.style.display = "inline";
    //Not working, disabled the whole time for some reason
    // h3VerbToConjuText.style.display = "inline";
    // starButton.style.display = "inline";
    checkBoxShowIrrConj.disabled = false;
    starButton.disabled = false;
    showNewVerbBtn.disabled = false;
    checkAnswersBtn.disabled = false;
    checkBoxIrrVerbs.disabled = false;
    checkBoxRegVerbs.disabled = false;
    starListShow = "off"
    insertStarList.style.display = "none";
    clearStarListForAllLang()
    // starListButton.disabled = false;
    // selectVerbTenseBtn.disabled = false;
    for (var i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].disabled = false;
    }
    if (checkBoxRegVerbs.checked === true) {
        checkBoxRegVerbs.checked = false;
    }
    if (checkBoxIrrVerbs.checked === true) {
        checkBoxIrrVerbs.checked = false;
    }
    checkBoxShowIrrConj.checked = false
    showNewVerb()
    resetVerbListBtn.style.display = "none";
}
