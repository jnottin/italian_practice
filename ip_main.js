var inputArrayStrings = ['.ioInput', '.tuInput', '.luiInput', '.noiInput', '.voiInput', '.loroInput', '.translateInput']
var inputArray = [io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input]
var tense = "present",
  ioBox = document.querySelector(".ioInput"),
  tuBox = document.querySelector(".tuInput"),
  luiBox = document.querySelector(".luiInput"),
  noiBox = document.querySelector(".noiInput"),
  voiBox = document.querySelector(".voiInput"),
  loroBox = document.querySelector(".loroInput"),
  tranlsateBox = document.querySelector(".translateInput"),
  answerBoxes = [ioBox, tuBox, luiBox, noiBox, voiBox, loroBox, tranlsateBox]


const label1 = document.querySelector(".label1"),
  label2 = document.querySelector(".label2"),
  label3 = document.querySelector(".label3"),
  label4 = document.querySelector(".label4"),
  label5 = document.querySelector(".label5"),
  label6 = document.querySelector(".label6");

var labels = [label1, label2, label3, label4, label5, label6]
var italianLabels = ["io: ", "tu: ", "lui/lei: ", "noi: ", "voi: ", "loro: ", ]
var spanishLabels = ["yo: ", "tu: ", "él/ella/usted: ", "nosotros: ", "vosotros: ", "ellos: ", ]
var portugueseLabels = ["eu: ", "tu: ", "ele: ", "nós: ", "vós: ", "eles: ", ]


//SELECTING INPUT BOX VALUES
var inputArray = [ioBox.value, tuBox.value, luiBox.value, noiBox.value, voiBox.value, loroBox.value]
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
const starListButton = document.querySelector(".starButton");
const selectLanguageBtn = document.querySelector(".selectLanguageBtn");
const h3VerbToConjuText = document.querySelector(".h3VerbToConjuText");
const selectLanguageSpanish = document.querySelector(".selectLanguageSpanish");
const selectLanguageItalian = document.querySelector(".selectLanguageItalian");
const selectLanguagePortuguese = document.querySelector(".selectLanguagePortuguese");



//ADDING EVENT LISTENER TO BUTTON
showNewVerbBtn.addEventListener("click", showNewVerb);
checkAnswersBtn.addEventListener("click", checkIndividualAnswers);
resetVerbListBtn.addEventListener("click", resetVerbList);
checkBoxRegVerbs.addEventListener("change", checkBothCheckedRegLast);
checkBoxIrrVerbs.addEventListener("change", checkBothCheckedIrrLast);
checkBoxShowIrrConj.addEventListener("change", checkBoxIrrVerbConj);
starButton.addEventListener("click", starChangeOnOrOff);
selectLanguageSpanish.addEventListener("click", setALanguageSpanish);
selectLanguageItalian.addEventListener("click", setALanguageItalian);
selectLanguagePortuguese.addEventListener("click", setALanguagePortuguese);
// starListButton.addEventListener("click", loadStarVerbs);
// selectLanguageBtn.addEventListener("click", setALanguage);

pageLoad = () => {
  checkAnswersBtn.disabled = true;
  showNewVerbBtn.disabled = true;
  checkBoxShowIrrConj.disabled = true;
  checkBoxIrrVerbs.disabled = true;
  checkBoxRegVerbs.disabled = true;
  starButton.disabled = true;
  for (i in answerBoxes) {
    answerBoxes[i].disabled = true;
  }
}

settingsForLanguageSelected = () => {
  //I would do the loop first, but its likely personal opinion
  for (i in labels) {
    if (languageSelected === "italian") {
      document.querySelector('.banner-image').src = "img/italy_banner.jpg";
      document.querySelector('body').style.backgroundColor = "#534630";
      document.querySelector('.verb-section').style.backgroundColor = "rgba(209, 228, 232, .9)";
      labels[i].innerText = italianLabels[i]
    } else if (languageSelected === "spanish") {
      document.querySelector('.banner-image').src = "img/spain_banner.jpg";
      document.querySelector('body').style.backgroundColor = "rgba(247, 178, 103";
      document.querySelector('.verb-section').style.backgroundColor = "rgba(143, 191, 237, .9)";
      labels[i].innerText = spanishLabels[i]
    } else if (languageSelected === "portuguese") {
      document.querySelector('.banner-image').src = "img/portugal_banner.jpg";
      document.querySelector('body').style.backgroundColor = "rgba(119, 100, 114";
      document.querySelector('.verb-section').style.backgroundColor = "rgba(255, 174, 89, .9)";
      labels[i].innerText = portugueseLabels[i]
    }
    // if (languageSelected === "italian") {
    //   document.querySelector('.banner-image').src = "img/italy_banner.jpg";
    //   document.querySelector('body').style.backgroundColor = "#534630";
    //   document.querySelector('.verb-section').style.backgroundColor = "rgba(209, 228, 232, .9)";
    //   for ( i in labels) {
    //     labels[i].innerText = italianLabels[i]
    //   }
    // } else if (languageSelected === "spanish") {
    //   document.querySelector('.banner-image').src = "img/spain_banner.jpg";
    //   document.querySelector('body').style.backgroundColor = "rgba(247, 178, 103";
    //   document.querySelector('.verb-section').style.backgroundColor = "rgba(143, 191, 237, .9)";
    //   for ( i in labels) {
    //     labels[i].innerText = spanishLabels[i]
    //   }
    // } else if (languageSelected === "portuguese") {
    //   document.querySelector('.banner-image').src = "img/portugal_banner.jpg";
    //   document.querySelector('body').style.backgroundColor = "rgba(119, 100, 114";
    //   document.querySelector('.verb-section').style.backgroundColor = "rgba(255, 174, 89, .9)";
    //   for ( i in labels) {
    //     labels[i].innerText = portugueseLabels[i]
    //   }
    // }
  }
}

var languageSelected = "italian"
setALanguageSpanish = () => {
  verbTenses = verbTensesSpanish
  languageSelected = "spanish"
  settingsForLanguageSelected()
  resetVerbList()
}

setALanguagePortuguese = () => {
  verbTenses = verbTensesPortuguese
  languageSelected = "portuguese"
  settingsForLanguageSelected()
  resetVerbList()
}

setALanguageItalian = () => {
  verbTenses = verbTensesItalian
  languageSelected = "italian"
  settingsForLanguageSelected()
  resetVerbList()
}

var createLi = "",
  starListItem = "",
  starList = [];

loadStarVerbs = () => {
  if (starList.length !== 0) {
    for (i in starList) {
      createLi = document.createElement("LI");
      starListItem = document.createTextNode(starList[i]);
      createLi.appendChild(starListItem);
      document.getElementById("myList").appendChild(starListItem);
    }
  } else {
    createLi = document.createElement("LI");
    starListItem = document.createTextNode("NO VERBS WERE STARED");
    createLi.appendChild(starListItem);
    document.getElementById("myList").appendChild(starListItem);
  }
}

var starStatus = "off"

resetStar = () => {
  if (starList.indexOf(verbInserted) === -1) {
    starButton.style.backgroundColor = "rgb(252, 255, 232)";
    starStatus = "off"
  } else if (starList.indexOf(verbInserted) !== -1) {
    starButton.style.backgroundColor = "#FAFF17";
    starStatus = "on"
  }
}

starChangeOnOrOff = () => {
  if (starStatus === "off") {
    starButton.style.backgroundColor = "#FAFF17";
    starStatus = "on"
    if (starList.indexOf(verbInserted) === -1) {
      starList.push(verbInserted);
    }
  } else if (starStatus === "on") {
    starButton.style.backgroundColor = "rgb(252, 255, 232)";
    var starListRemoveIndex = starList.indexOf(verbInserted)
    starList.splice(starListRemoveIndex, 1);
    starStatus = "off"
  }
}

checkBoxIrrVerbConj = () => {
  if (checkBoxShowIrrConj.checked === true) {
    if (verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form === "irregular") {
      for (var i = 0; i < answerBoxes.length; i++) {
        if (verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.irrPlaces[i] === "yes") {
          answerBoxes[i].style.backgroundColor = "yellow";
        } else if (verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.irrPlaces[i] === "no") {
          answerBoxes[i].style.backgroundColor = "";
        }
      }
    } else if (verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form === "regular") {}
  } else if (checkBoxShowIrrConj.checked === false) {
    for (var i = 0; i < answerBoxes.length; i++) {
      answerBoxes[i].style.backgroundColor = "";
    }
  }
}

checkBothCheckedRegLast = () => {
  if (checkBoxRegVerbs.checked === true && checkBoxIrrVerbs.checked === true) {
    checkBoxRegVerbs.checked = false
    alert("You cannot check both Irregular only and Regular Only. Pick only one or do not select either to get the full verb list.")
  } else {
    resetFromCheckBox()
  }
}

checkBothCheckedIrrLast = () => {
  if (checkBoxRegVerbs.checked === true && checkBoxIrrVerbs.checked === true) {
    checkBoxIrrVerbs.checked = false
    alert("You cannot check both Irregular only and Regular Only. Pick only one or do not select either to get the full verb list.")
  } else {
    resetFromCheckBox()
  }
}

// Reset VERBS FROM CHECK LIST
resetFromCheckBox = () => {
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

showOnlyRegVerbs = () => {
  verbList = [];
  verbListNotShown = [];
  verbListShown = [];
  for (i in verbTenses) {
    verbList.push(verbTenses[i].verb)
    for (i in verbTenses) {
      if (verbTenses[i][verbList[i]].presente.reg_o_irr.form === "regular") {
        verbListNotShown.push(verbTenses[i].verb)
      }
    }
    showNewVerb()
  }
}
showOnlyIrrVerbs = () => {
  verbList = [];
  verbListNotShown = [];
  verbListShown = [];
  for (i in verbTenses) {
    verbList.push(verbTenses[i].verb)
  }
  for (i in verbTenses) {
    if (verbTenses[i][verbList[i]].presente.reg_o_irr.form === "irregular") {
      verbListNotShown.push(verbTenses[i].verb)
    }
  }
  showNewVerb()
}

//OBJECT FOR VERB TENSES
// REMEMBER WHEN MAKING NEW OBJECT, MUST CALL EACH VERB OBJECT BY THEIR VERBINSERTED NAME
var verbTensesItalian = [{
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
        // passato_prossimo: {
        //   ess_o_aver: "avere",
        //   io: "ho potuto",
        //   tu: "hai potuto",
        //   lui: "ha potuto",
        //   noi: "abbiamo potuto",
        //   voi: "avete potuto",
        //   loro: "hanno potuto",
        //   reg_o_irr: {
        //     form: "regular",
        //   },
        // },
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
        }
      }
    },
  ],
  verbTensesSpanish = [{
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
        // passato_prossimo: {
        //   ess_o_aver: "avere",
        //   io: "ho potuto",
        //   tu: "hai potuto",
        //   lui: "ha potuto",
        //   noi: "abbiamo potuto",
        //   voi: "avete potuto",
        //   loro: "hanno potuto",
        //   reg_o_irr: {
        //     form: "regular",
        //   },
        // },
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
        }
      }
    },
  ],
  verbTensesPortuguese = [{
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
        // passato_prossimo: {
        //   ess_o_aver: "avere",
        //   io: "ho potuto",
        //   tu: "hai potuto",
        //   lui: "ha potuto",
        //   noi: "abbiamo potuto",
        //   voi: "avete potuto",
        //   loro: "hanno potuto",
        //   reg_o_irr: {
        //     form: "regular",
        //   },
        // },
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
        }
      }
    },
  ];

var verbTenses = verbTensesItalian
// VERB ARRAY FOR SELECTION
var verbList = [],
  verbListNotShown = [],
  verbListShown = [];

makeVerbLists = () => {
  verbList = [];
  verbListNotShown = [];
  verbListShown = [];
  for (i in verbTenses) {
    verbList.push(verbTenses[i].verb)
    verbListNotShown.push(verbTenses[i].verb)
  }
  showNewVerb()
}

var verbInserted = "";
var randomVerbIndex = 0;

updateNotShownNShownLists = () => {
  verbListShown.push(verbInserted);
  verbListNotShown.splice(verbListNotShown.indexOf(verbInserted), 1);
}

getRandomVerb = verbTensesLength => {
  randomVerbIndex = Math.floor(Math.random() * verbTensesLength);
  verbInserted = verbTenses[randomVerbIndex].verb
  //Below shows if verb is in VerbListShown
  if (verbListShown.indexOf(verbInserted) !== -1) {
    getRandomVerb(verbTenses.length)
  } else {
    if (checkBoxRegVerbs.checked === true && verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form === "regular") {
      updateNotShownNShownLists()
    } else if (checkBoxRegVerbs.checked === true && verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form !== "regular") {
      getRandomVerb(verbTenses.length)
    } else if (checkBoxIrrVerbs.checked === true && verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form === "irregular") {
      updateNotShownNShownLists()
    } else if (checkBoxIrrVerbs.checked === true && verbTenses[randomVerbIndex][verbInserted].presente.reg_o_irr.form !== "irregular") {
      getRandomVerb(verbTenses.length)
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
    getRandomVerb(verbTenses.length);
    verbInsertPlacement.innerText =
      verbInserted.charAt(0).toUpperCase() + verbInserted.slice(1);
    checkBoxShowIrrConj.checked = false
    checkBoxIrrVerbConj()
    clearBoxes()
    if (starList.indexOf(verbInserted) !== -1) {
      resetStar()
    } else {
      resetStar()
    }
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
  // document.querySelector('.ioInput').value = "";
  // document.querySelector('.ioInput').style.border = "";
  // document.querySelector('.tuInput').value = "";
  // document.querySelector('.tuInput').style.border = "";
  // document.querySelector('.luiInput').value = "";
  // document.querySelector('.luiInput').style.border = "";
  // document.querySelector('.noiInput').value = "";
  // document.querySelector('.noiInput').style.border = "";
  // document.querySelector('.voiInput').value = "";
  // document.querySelector('.voiInput').style.border = "";
  // document.querySelector('.loroInput').value = "";
  // document.querySelector('.loroInput').style.border = "";
  // document.querySelector('.translateInput').value = "";
  // document.querySelector('.translateInput').style.border = "";

  //here is how
  //see InputArrayStrings at top of page
  for (i in inputArrayStrings) {
    document.querySelector(i).value = "";
    document.querySelector(i).style.border = "";

  }
}

// CHECKING INDIVIDUAL ANSWERS
checkIndividualAnswers = () => {
  // // Getting the values from boxes
  // io_input = document.querySelector(".ioInput").value.toLowerCase();
  // tu_input = document.querySelector(".tuInput").value.toLowerCase();
  // lui_input = document.querySelector(".luiInput").value.toLowerCase();
  // noi_input = document.querySelector(".noiInput").value.toLowerCase();
  // voi_input = document.querySelector(".voiInput").value.toLowerCase();
  // loro_input = document.querySelector(".loroInput").value.toLowerCase();
  // tranlsate_input = document.querySelector(".translateInput").value.toLowerCase();
  for (i in inputArray) {
    i = document.querySelector(inputArrayStrings[i]).value.toLowerCase();
  }
  //I would probably host these are the top of the page, since var
  var inputs = ["io", "tu", "lui", "noi", "voi", "loro", "translate"];

  for (i in inputArray) {
    if (inputArray[i] === verbTenses[randomVerbIndex][verbInserted].presente[inputs[i]]) {
      answerBoxes[i].style.border = "4px solid green";
    } else {
      answerBoxes[i].style.border = "4px solid red";
    }
  }
  if (tranlsate_input === verbTenses[randomVerbIndex][verbInserted].translate) {
    document.querySelector(".translateInput").style.border = "4px solid green";
  } else {
    document.querySelector(".translateInput").style.border = "4px solid red";
  }
  checkAllAnswersCorr(...inputArray)
}

checkAllAnswersCorr = (io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input) => {
  if (io_input === verbTenses[randomVerbIndex][verbInserted].presente.io &&
    tu_input === verbTenses[randomVerbIndex][verbInserted].presente.tu &&
    lui_input === verbTenses[randomVerbIndex][verbInserted].presente.lui &&
    noi_input === verbTenses[randomVerbIndex][verbInserted].presente.noi &&
    voi_input === verbTenses[randomVerbIndex][verbInserted].presente.voi &&
    loro_input === verbTenses[randomVerbIndex][verbInserted].presente.loro &&
    tranlsate_input === verbTenses[randomVerbIndex][verbInserted].translate) {
    messageAllAnswersCorrect.innerText = "Great job, you got this verb right! Click 'SHOW NEW VERB' to try another!";
  } else {
    messageAllAnswersCorrect.innerText = "";
  }
}

resetVerbList = () => {
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
  for (i in answerBoxes) {
    answerBoxes[i].disabled = false;
  }
  checkBoxRegVerbs.checked === true ? checkBoxRegVerbs.checked = false : null
  checkBoxIrrVerbs.checked === true ? checkBoxIrrVerbs.checked = false : null;
  checkBoxShowIrrConj.checked = false
  showNewVerb()
  resetVerbListBtn.style.display = "none";
}