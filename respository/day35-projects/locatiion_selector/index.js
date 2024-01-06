var country = [
  {
    code: "ind",
    value: "India",
  },
  {
    code: "usa",
    value: "America",
  },
  {
    code: "indo",
    value: "Indonesia",
  },
  {
    code: "rus",
    value: "Russia",
  },
  {
    code: "jpn",
    value: "Japan",
  },
];

// Address Data
var refMainContainer = document.querySelector(".mainContainer");

var countryTextField = document.createElement("ul");
countryTextField.setAttribute("class", "countryTextFieldUl");

var countryTextFieldLabel = document.createElement("li");
countryTextFieldLabel.setAttribute("class", "countryTextFieldLabel");
countryTextFieldLabel.innerHTML = "Address";

var countryTextFieldTextArea = document.createElement("li");
var countryTextFieldTextAreaEl = document.createElement("textarea");
countryTextFieldTextAreaEl.setAttribute("class", "countryTextFieldTextAreaEl");
countryTextFieldTextArea.appendChild(countryTextFieldTextAreaEl);

countryTextField.appendChild(countryTextFieldLabel);
countryTextField.appendChild(countryTextFieldTextArea);
refMainContainer.appendChild(countryTextField);

// Country Dropdown
var countryNameUl = document.createElement("ul");
countryNameUl.setAttribute("class", "countryName");

var countryNameList = document.createElement("li");
countryNameList.setAttribute("class", "countryNameListlabel");
countryNameList.innerHTML = "Select country";

var countryNameSelectList = document.createElement("li");
var countryDropdown = document.createElement("select");
countryDropdown.setAttribute("class", "countryDropdown");

// state
var stateNameUl = document.createElement("ul");
stateNameUl.setAttribute("class", "stateName countryName");

var stateNameList = document.createElement("li");
stateNameList.setAttribute("class", "stateNameList countryNameListlabel");
stateNameList.innerHTML = "Select State";

var stateNameSelectList = document.createElement("li");
var stateDropdown = document.createElement("select");
stateDropdown.setAttribute("class", "stateDropdown countryDropdown");
stateDropdown.style.width = "120px";

// district variables
var districtNameUl = document.createElement("ul");
districtNameUl.setAttribute("class", "districtName countryName");

var districtLabel = document.createElement("li");
districtLabel.setAttribute("class", "districtLabel countryNameListlabel");
districtLabel.innerHTML = "Select District";

var districtNameSelectList = document.createElement("li");
var districtDropdown = document.createElement("select");
districtDropdown.setAttribute("class", "districtDropdown countryDropdown");
districtDropdown.setAttribute("id", "districtSelected");
districtDropdown.style.width = "120px";

var idVal;
for (var i = 0; i < country.length; i++) {
  idVal = "country" + (i + 1);

  var countryOption = document.createElement("option");

  countryOption.setAttribute("id", idVal);
  countryOption.innerHTML = country[i].value;
  countryDropdown.append(countryOption);
  countryNameSelectList.append(countryDropdown);
}

countryNameUl.appendChild(countryNameList);
countryNameUl.appendChild(countryNameSelectList);
refMainContainer.appendChild(countryNameUl);

// appending happening

stateNameSelectList.append(stateDropdown);
stateNameUl.appendChild(stateNameList);
stateNameUl.appendChild(stateNameSelectList);
refMainContainer.appendChild(stateNameUl);

districtNameSelectList.appendChild(districtDropdown);
districtNameUl.appendChild(districtLabel);
districtNameUl.appendChild(districtNameSelectList);
refMainContainer.appendChild(districtNameUl);

// * State Information

var stateInfo = {
  indiaState: [
    {
      code: "AP",
      value: "Andhra pradesh",
    },
    {
      code: "MP",
      value: "Madhya pradesh",
    },
    {
      code: "UP",
      value: "Uttar pradesh",
    },
    {
      code: "asm",
      value: "Assam",
    },
    {
      code: "Bhr",
      value: "Bihar",
    },
  ],
  americaState: [
    {
      code: "Ab",
      value: "Alabama",
    },
    {
      code: "Az",
      value: "Arizona",
    },
    {
      code: "Ak",
      value: "Alaska",
    },
    {
      code: "Aks",
      value: "Arkansas",
    },
    {
      code: "Dw",
      value: "Delaware",
    },
  ],
  indonesiaState: [
    {
      code: "HP",
      value: "Highland Papua",
    },
    {
      code: "SP",
      value: "Southwest Papua",
    },
    {
      code: "WP",
      value: "West Papua",
    },
    {
      code: "Stp",
      value: "South Papua",
    },
    {
      code: "DNS",
      value: "DeNorth Sumatra",
    },
  ],
  rusriaState: [
    {
      code: "AKg",
      value: "Arkhangelsk",
    },
    {
      code: "bkrt",
      value: "Bashkortostan",
    },
    {
      code: "Cb",
      value: "Chelyabinsk",
    },
    {
      code: "Dg",
      value: "Dagestan",
    },
    {
      code: "Ist",
      value: "Ingushetiya",
    },
  ],
  japanState: [
    {
      code: "hokka",
      value: "Hokkaido",
    },
    {
      code: "kyus",
      value: "Kyushu",
    },
    {
      code: "shik",
      value: "Shikoku",
    },
    {
      code: "kant",
      value: "Kanto",
    },
    {
      code: "Niig",
      value: "Niigata",
    },
  ],
};

var stateOption;

var indiaId;
var indiaCount;

document.querySelector("#country1").addEventListener("click", () => {
  indiaCount = 1;
  stateDropdown.innerHTML = "";

  for (var key in stateInfo.indiaState) {
    stateOption = document.createElement("option");
    indiaId = "#indiaId" + indiaCount;
    stateOption.setAttribute("id", indiaId);
    indiaCount++;
    stateOption.innerHTML = stateInfo.indiaState[key].value;
    stateDropdown.append(stateOption);
  }

  var districtOption;
  document.getElementById("#indiaId1").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[0].indiaDisrict.andPra[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indiaId2").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[0].indiaDisrict.madPra[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indiaId3").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[0].indiaDisrict.utrPra[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indiaId4").addEventListener("click", () => {
     districtDropdown.innerHTML = "";
     for (var index = 0; index < 5; index++) {
       districtOption = document.createElement("option");
       districtOption.innerHTML = districtInfo[0].indiaDisrict.asmr[index];
       districtDropdown.appendChild(districtOption);
     }
   });

  document.getElementById("#indiaId5").addEventListener("click", () => {
      districtDropdown.innerHTML = "";
      for (var index = 0; index < 5; index++) {
        districtOption = document.createElement("option");
        districtOption.innerHTML = districtInfo[0].indiaDisrict.bir[index];
        districtDropdown.appendChild(districtOption);
      }
    });
});

var americaId;
var americaCount = 1;

document.querySelector("#country2").addEventListener("click", () => {
  americaCount = 1;
  stateDropdown.innerHTML = "";
  for (var key in stateInfo.americaState) {
    stateOption = document.createElement("option");
    americaId = "#americaId" + americaCount;
    stateOption.setAttribute("id", americaId);
    americaCount++;
    stateOption.innerHTML = stateInfo.americaState[key].value;
    stateDropdown.append(stateOption);
  }
  document.getElementById("#americaId1").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[1].usaDisrict.Alabama[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#americaId2").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[1].usaDisrict.Alabama[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#americaId3").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[1].usaDisrict.Alaska[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#americaId4").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[1].usaDisrict.Arkansas[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#americaId5").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[1].usaDisrict.Delaware[index];
      districtDropdown.appendChild(districtOption);
    }
  });
});

var indonesiaId;
var indonesiaCount;

document.querySelector("#country3").addEventListener("click", () => {
  indonesiaCount = 1;
  stateDropdown.innerHTML = "";
  for (var key in stateInfo.indonesiaState) {
    stateOption = document.createElement("option");
    indonesiaId = "#indonesiaId" + indonesiaCount;
    stateOption.setAttribute("id", indonesiaId);
    indonesiaCount++;
    stateOption.innerHTML = stateInfo.indonesiaState[key].value;
    stateDropdown.append(stateOption);
  }

  document.getElementById("#indonesiaId1").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[2].indoDisrict.Highland_Papua[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indonesiaId2").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[2].indoDisrict.Southwest_Papua[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indonesiaId3").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[2].indoDisrict.West_Papua[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indonesiaId4").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[2].indoDisrict.South_Papua[index];
      districtDropdown.appendChild(districtOption);
    }
  });

  document.getElementById("#indonesiaId5").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[2].indoDisrict.DeNorth_Sumatra[index];
      districtDropdown.appendChild(districtOption);
    }
  });
});

var russiaId;
var russiaCount;
document.querySelector("#country4").addEventListener("click", () => {
  russiaCount = 1;
  stateDropdown.innerHTML = "";
  for (var key in stateInfo.rusriaState) {
    stateOption = document.createElement("option");
    russiaId = "#russiaId" + russiaCount;
    stateOption.setAttribute("id", russiaId);
    russiaCount++;
    stateOption.innerHTML = stateInfo.rusriaState[key].value;
    stateDropdown.append(stateOption);
  }
  document.getElementById("#russiaId1").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[3].russiaDisrict.Arkhangelsk[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#russiaId2").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[3].russiaDisrict.Bashkortostan[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#russiaId3").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[3].russiaDisrict.Chelyabinsk[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#russiaId4").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[3].russiaDisrict.Dagestan[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#russiaId5").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML =
        districtInfo[3].russiaDisrict.Ingushetiya[index];
      districtDropdown.appendChild(districtOption);
    }
  });
});

var japanId;
var japanCount;

document.querySelector("#country5").addEventListener("click", () => {
  japanCount = 1;
  stateDropdown.innerHTML = "";
  for (var key in stateInfo.japanState) {
    stateOption = document.createElement("option");
    japanId = "#japanId" + japanCount;
    stateOption.setAttribute("id", japanId);
    japanCount++;
    stateOption.innerHTML = stateInfo.japanState[key].value;
    stateDropdown.append(stateOption);
  }
  document.getElementById("#japanId1").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[4].japanDisrict.Hokkaido[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#japanId2").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[4].japanDisrict.Kyushu[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#japanId3").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[4].japanDisrict.Shikoku[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#japanId4").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[4].japanDisrict.Kanto[index];
      districtDropdown.appendChild(districtOption);
    }
  });
  document.getElementById("#japanId5").addEventListener("click", () => {
    districtDropdown.innerHTML = "";
    for (var index = 0; index < 5; index++) {
      districtOption = document.createElement("option");
      districtOption.innerHTML = districtInfo[4].japanDisrict.Niigata[index];
      districtDropdown.appendChild(districtOption);
    }
  });
});

var districtInfo = [
  {
    indiaDisrict: {
      andPra: ["anil", "sunil", "kapil", "shamil", "kaabil"],
      madPra: ["rewa", "ujjain", "indore", "vidisha", "merath"],
      utrPra: ["patna", "kallu", "hilelu", "aara", "kareja"],
      asmr: ["paani", "neer", "jal", "ksheer", "samudra"],
      bir: ["kintu", "chintu", "anshu", "babli", "ramdhari"],
    },
  },
  {
    usaDisrict: {
      Alabama: ["john1", "john2", "john3", "john4", "john5"],
      Arizona: ["teena1", "teena2", "teena3", "teena4", "teena5"],
      Alaska: ["kareena1", "kareena2", "kareena3", "kareena4", "kareena5"],
      Arkansas: ["tony1", "tony2", "tony3", "tony4", "tony5"],
      Delaware: ["kakkar1", "kakkar2", "kakkar3", "kakkar4", "kakkar5"],
    },
  },
  {
    indoDisrict: {
      Highland_Papua: ["kris1", "kris1", "kris3", "kris4", "kris5"],
      Southwest_Papua: ["spider1", "spider2", "spider3", "spider4", "spider5"],
      West_Papua: [
        "superman1",
        "superman2",
        "superman3",
        "superman4",
        "superman5",
      ],
      South_Papua: ["ironman1", "ironman2", "ironman3", "ironman4", "ironman5"],
      DeNorth_Sumatra: ["flash1", "flash2", "flash3", "flash4", "flash5"],
    },
  },
  {
    russiaDisrict: {
      Arkhangelsk: ["dishoom1", "dishoom2", "dishoom3", "dishoom4", "dishoom5"],
      Bashkortostan: ["haddi1", "haddi2", "haddi3", "haddi4", "haddi5"],
      Chelyabinsk: ["ghadi1", "ghadi2", "ghadi3", "ghadi4", "ghadi5"],
      Dagestan: ["watch1", "watch2", "watch3", "watch4", "watch5"],
      Ingushetiya: ["ear1", "ear2", "ear3", "ear4", "ear5"],
    },
  },
  {
    japanDisrict: {
      Hokkaido: ["tear1", "tear2", "tear3", "tear4", "tear5"],
      Kyushu: ["fear1", "fear2", "fear3", "fear4", "fear5"],
      Shikoku: ["care1", "care2", "care3", "care4", "care5"],
      Kanto: ["taker1", "taker2", "taker3", "taker4", "taker5"],
      Niigata: ["dinner1", "dinner2", "dinner3", "dinner4", "dinner5"],
    },
  },
];

// document
//   .querySelector("#districtSelected")
//   .addEventListener("change", function (event) {
//     if (event.target.id === "indiaId1") {
//       for (var index = 0; index < 5; index++) {
//         districtOption = document.createElement("option");
//         districtOption.innerHTML = districtInfo[0].indiaDisrict.andPra[index];
//         districtDropdown.appendChild(districtOption);
//       }
//     }
//   });
