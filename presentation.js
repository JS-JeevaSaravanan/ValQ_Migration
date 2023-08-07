const getEmptyTreeData = () => {
  return {
    simulateTabNotes: {},
    PeriodColumn: 1,
    PeriodToColumn: 12,
    primaryDisplayValue: "sel",
    scale: "0.00a",
    scaleSuffixK: "k",
    scaleSuffixM: "m",
    scaleSuffixB: "b",
    PctVarAmber: 0,
    PctVarGreen: 10,
    PctVarRed: -10,
    nodeMapping: "text",
    nodeMappingSep: ":",
    nodeUniqueIdCounter: 10000,
    zeroDisplay: "-",
    negativeDisplay: "(0)",
    useConstants: true,
    activeTopNode: "",
    dispLevels: 1,
    zoom: 100,
    hint: "Hint: Hover over a node and drag the slider left or right to simulate changes",
    onClickDefault: "E",
    nodeStyle: "S",
    nodeTrend: true,
    nodeVar: true,
    nodeSecVal: true,
    nodeOperand: true,
    nodeStatus: "V",
    cfValueType: "percentage",
    withComparison: false,
    levelNames: {},
    periods: 1,
    periodsLabels: "Total",
    valTextSper: "Mth",
    valTextLper: "Month",
    valTextSptd: "YtD",
    valTextLptd: "YtD",
    valTextStotal: "FY",
    valTextLtotal: "Full Year",
    valTextSsel: "Sim",
    valTextLsel: "Sim. Months",
    secValDispper: "total",
    secValDispptd: "total",
    secValDisptotal: "per",
    secValDispsel: "total",
    colorNodePrimaryFont: "#000000",
    colorNodeSecondaryFont: "#777777",
    globalFont: "Inforiver Sans",
    additionalSeries: [],
    addComparisonSeries: false,
    canVasTheme: "Light",
    simulationTable: {
      displaySettings: {
        headerFontColor: "#333333",
        textColor: "#333333",
        enableRowHover: "rowAlternate",
        rowHoverTextColor: "#212121",
        rowEvenColor: "#f5f5f5",
        rowOddColor: "#ffffff",
        rowHoverColor: "#f5f5f5",
        columnSpacing: "off",
        columnSpacingValue: 2,
        theme: "trafficlights",
        conditionalFormatting: false,
        showNodeCount: false,
        showEmptyNode: true,
        highlightNodeImpact: true,
        rowHeight: 24,
        layout: "HIERARCHICAL",
        pivotMode: "none",
        lockSize: false,
        autoWrap: false,
      },
      periodWiseFilters: {},
      pinnedNodes: [],
      generalFilter: [
        {
          filterKey: "trend",
          checked: false,
        },
        {
          filterKey: "base",
          checked: false,
        },
        {
          filterKey: "simChangeAbs",
          checked: false,
        },
        {
          filterKey: "simChangePct",
          checked: false,
        },
        {
          filterKey: "tgt",
          checked: false,
        },
        {
          filterKey: "varAbs",
          checked: false,
        },
        {
          filterKey: "varPct",
          checked: false,
        },
      ],
    },
    secKPIs: {
      secondaryKPIType: "",
      secondaryKPI1: {
        label: "",
        scale: "X",
        decimal: "0",
        prefix: "",
        suffix: "",
        formula: "",
        display: "X",
        type: "",
      },
      secondaryKPI2: {
        label: "",
        scale: "X",
        decimal: "0",
        prefix: "",
        suffix: "",
        formula: "",
        display: "X",
        type: "",
      },
      secondaryKPI3: {
        label: "",
        scale: "X",
        decimal: "0",
        prefix: "",
        suffix: "",
        formula: "",
        display: "X",
        type: "",
      },
      customKpiNodes: [],
    },
    colorSim: "#2E8AB8",
    colorNodeBg: "#FFFFFF",
    opacityNodeBg: "0.9",
    colorNodeBorder: "#000000",
    opacityNodeBorder: "0.2",
    colorNodeBgDerived: "rgba(246, 248, 251, 0)",
    opacityNodeBgDerived: "0.9",
    colorLinks: "#666666",
    colorNodeBorderFocus: "#2E8AB8",
    colorCanvasBase: "#F1F5F9",
    colorCanvas1: "#C5DADC",
    colorCanvas2: "#91ABBF",
    colorCanvas3: "#CFDDE7",
    decimalSeparator: ".",
    thousandSeparator: ",",
    treeConfig: [],
    templateListConfig: [],
    replaceTemplateConfigs: [],
    insertTemplateConfigs: [],
    scenarios: [
      {
        name: "1",
        title: "Scenario 1",
        descr: "",
        defaultDescr: "",
        compare: true,
        simVar: [],
        baseSeriesId: "",
        isDefaultScenario: true,
        disabled: false,
      },
    ],
    activeScenario: "1",
    waterFallType: "V",
    modelCollapsedNodes: [],
    activeSeries: ["base", "tgt"],
  };
};

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
  downloadLink.download = `migrated ${importedFileName}`;
}

function compressText(str) {
  return LZString.compressToBase64(str);
}

function decompressText(str) {
  return LZString.decompressFromBase64(str);
}

function migrateFileContent(content) {
  const importedData = JSON.parse(decompressText(content));
  const newData = getEmptyTreeData();
  if (importedData) {
    newData.treeConfig = importedData.treeConfig;
    newData.templateListConfig = importedData.templateListConfig;
    newData.nodeUniqueIdCounter = importedData.nodeUniqueIdCounter;
  }
  const compressedText = compressText(JSON.stringify(newData));
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
