const getDefaultSlidesData = () => [
  {
    id: "2",
    activeNodeName: null,
    title: "All Scenarios",
    layoutType: "layout_seven",
    predefinedSlideComponentIndex: 2,
    isPredefinedLayoutContent: true,
    isScenarioSlide: true,
    layoutData: {
      label: "Row View",
      hierarchy: {
        parents: [
          {
            id: "parent0",
            children: [
              {
                id: "parent0_child0",
              },
              {
                id: "parent0_child1",
              },
              {
                id: "parent0_child2",
                children: [
                  {
                    id: "parent0_child2_child0",
                  },
                  {
                    id: "parent0_child2_child1",
                  },
                ],
              },
            ],
          },
        ],
      },
      slideMosaicInitialValue: {
        [0]: {
          direction: "column",
          first: "parent0_child0",
          second: {
            direction: "column",
            first: "parent0_child1",
            second: {
              direction: "row",
              first: "parent0_child2_child0",
              second: "parent0_child2_child1",
              splitPercentage: 40,
            },
            splitPercentage: 30,
          },
          splitPercentage: 20,
        },
        [1]: {
          direction: "column",
          first: "parent0_child0",
          second: {
            direction: "column",
            first: "parent0_child1",
            second: {
              direction: "row",
              first: "parent0_child2_child0",
              second: "parent0_child2_child1",
              splitPercentage: 75,
            },
            splitPercentage: 20,
          },
          splitPercentage: 8,
        },
      },
    },
    predefinedLayoutContent: {
      parent0_child0: 6,
      parent0_child1: 8,
      parent0_child2_child0: 9,
      parent0_child2_child1: 11,
    },
    sidePanelContent: {
      menu: [
        {
          index: 13,
          tabIcon: "Note",
          name: "Notes",
          isDynamicTabName: true,
          tabStyleConfig: {
            minWidth: "35.55px",
            maxWidth: "70px",
          },
        },
        {
          index: 14,
          tabIcon: "Warning",
          name: "Violations",
          tabStyleConfig: {
            width: "61.02px",
          },
        },
      ],
    },
    icon: "valq light-minimal-toolbar slide-icon",
  },
  {
    id: "3",
    title: "Scenario Comparison",
    isPredefined: true,
    predefinedSlideComponentIndex: 10,
    isScenarioSlide: true,
    icon: "valq light-minimal-toolbar slide-icon",
  },
];

let importedFileContent = "";
let importedFileName = "";

const dropFileSectionDiv =
  document.getElementsByClassName("drop-file-section")[0];
dropFileSectionDiv.style.display = "block";
const successSectionDiv = document.getElementsByClassName("success-section")[0];
successSectionDiv.style.display = "none";
const failureSectionDiv = document.getElementsByClassName("failure-section")[0];
failureSectionDiv.style.display = "none";

const fileNameDivs = document.getElementsByClassName("fileName-text");

function downloadFileContent2(content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.getElementById("download-file-link");
  downloadLink.href = url;
  downloadLink.download = `${importedFileName}`;
}

function compressText(str) {
  return LZString.compressToBase64(str);
}

function decompressText(str) {
  return LZString.decompressFromBase64(str);
}

function migrateFileContent(content) {
  const importedData = JSON.parse(decompressText(content));
  
  try {   
    importedData.presentationSlidesConfig.slidesConfig =  getDefaultSlidesData();
  } catch (e) {
    console.log(e, "presentation default not changed");
  }

  const compressedText = compressText(JSON.stringify(importedData));
  return compressedText;
}

function processFileContent2() {
  try {
    const processedContent = migrateFileContent(importedFileContent);
    dropFileSectionDiv.style.display = "none";
    successSectionDiv.style.display = "block";
    downloadFileContent2(processedContent);
  } catch (e) {
    dropFileSectionDiv.style.display = "none";
    failureSectionDiv.style.display = "block";
    console.log(`Migrate failed! `, e);
  }
}

const uploadNewModelFile2 = () => {
  const handleFileRead = (e) => {
    const file = e.target.files[0];
    importedFileName = file.name;

    Array.from(fileNameDivs).forEach(function (element) {
      element.innerHTML = `${importedFileName}.txt`;
    });

    const reader = new FileReader();
    reader.onloadend = (e) => {
      importedFileContent = e.target.result;
      processFileContent2();
    };
    reader.readAsText(file);
  };

  try {
    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", ".txt");
    fileInput.onchange = handleFileRead;
    fileInput.click();
  } catch (e) {
    console.log(`File upload failed! `, e);
  }
};

const uploadAndProcess = () => {
  uploadNewModelFile2();
};
