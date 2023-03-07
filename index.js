const EMPTY_TREE_DATA = {
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
  templateFilterRules: {},
  scenarios: [
    {
      name: "1",
      title: "Scenario 1",
      descr: "",
      defaultDescr: "",
      compare: true,
      simVar: [],
    },
  ],
  activeScenario: "1",
  waterFallType: "V",
  modelCollapsedNodes: [],
  activeSeries: ["base", "tgt"],
};

const DEFAULT_NODE_DATA = {
  aMeth: "S",
  cfRuleId: 0,
  cfApplyToDescendants: false,
  cfType: "G",
  cfMax: 10,
  cfMid: 0,
  cfMin: -10,
  cfValueType: "percentage",
  cfMinColor: "#FF0000",
  cfMidColor: "#FFBF00",
  cfInterColor: "#FFFFFF",
  cfMaxColor: "#008000",
  cMeth: "",
  compositeNodes: "",
  dec: 0,
  derived: "",
  deriveChildren: false,
  derivedSim: "",
  derivedSimMeth: "P",
  descr: "",
  detailPageType: "DEFAULT",
  footer: "",
  formula: "",
  header: "",
  hideStatus: "",
  linkedModelID: "",
  linkedModelNode: "",
  linkUpToLevel: null,
  lSimNode: "",
  level: 0,
  linkNode: "",
  locked: "",
  manAct: "",
  manTgt: "",
  max: null,
  min: null,
  name: "TOP",
  nodeType: "",
  noDetail: "",
  notes: "",
  prefix: "",
  rowMap: "",
  scale: "X",
  secondaryKPIType: "",
  secondaryKPI1Formula: "",
  secondaryKPI1Scale: "X",
  secondaryKPI1Decimal: 0,
  secondaryKPI1Prefix: "",
  secondaryKPI1Suffix: "",
  secondaryKPI1Type: "",
  secondaryKPI1Label: "",
  secondaryKPI1Display: "X",
  secondaryKPI2Scale: "X",
  secondaryKPI2Decimal: 0,
  secondaryKPI2Prefix: "",
  secondaryKPI2Suffix: "",
  secondaryKPI2Formula: "",
  secondaryKPI2Type: "",
  secondaryKPI2Label: "",
  secondaryKPI2Display: "X",
  secondaryKPI3Scale: "X",
  secondaryKPI3Decimal: 0,
  secondaryKPI3Prefix: "",
  secondaryKPI3Suffix: "",
  secondaryKPI3Formula: "",
  secondaryKPI3Type: "",
  secondaryKPI3Label: "",
  secondaryKPI3Display: "X",
  secondaryKPITemplate: "",
  secondaryKPIApplyToDescendants: false,
  secondaryKPIFromNode: "",
  sourceNode: "",
  sMeth: "P",
  style: "",
  suffix: "",
  title: "New Node",
  tmplNode: "",
  tmplPrefix: "",
  tmplTPrefix: "",
  trend: "X",
  trendSim: "X",
  wAvgNode: "",
  _formulaBkp: "",
  _subModelAdj: false,
  _subModelAdjName: "",
  _isUsedAsTemplate: false,
  lineageDisplay: "",
};

const PROPS_TO_COPY = [
  "aMeth",
  "cMeth",
  "compositeNodes",
  "dec",
  "derived",
  "descr",
  "formula",
  "hideStatus",
  "lSimNode",
  "level",
  "linkNode",
  "locked",
  "manAct",
  "manTgt",
  "max",
  "min",
  "name",
  "nodeType",
  "prefix",
  "rowMap",
  "scale",
  "sourceNode",
  "sMeth",
  "style",
  "suffix",
  "title",
  "trend",
  "trendSim",
  "wAvgNode",
  "_formulaBkp",
];

function compressText(str) {
  return LZString.compressToBase64(str);
}

function decompressText(str) {
  return LZString.decompressFromBase64(str);
}

function getTreeData(exportObject) {
  const keys = Object.keys(exportObject);
  const treeKey = keys.find((key) => key.startsWith("tree"));
  return exportObject[treeKey].properties;
}

function processTreeConfig(importedTreeConfig) {
  const newTreeConfig = [];
  importedTreeConfig.forEach((oldNode) => {
    const newNode = clone(DEFAULT_NODE_DATA);
    PROPS_TO_COPY.forEach((prop) => (newNode[prop] = oldNode[prop]));
    newTreeConfig.push(newNode);
  });
  return newTreeConfig;
}

function transfer() {
  const compressTextArea = document.getElementById("compress-textArea");
  const text = compressTextArea.value;

  if (!text) {
    alert("Please give valid input");
    return;
  }

  const importedData = JSON.parse(decompressText(text));
  const treeData = getTreeData(importedData);

  const importedTreeConfig = treeData?.treeConfig || [];
  const processedTreeConfig = processTreeConfig(importedTreeConfig);

  const newTreeData = clone(EMPTY_TREE_DATA);
  newTreeData.treeConfig = processedTreeConfig;

  const compressedText = compressText(JSON.stringify(newTreeData));
  const compressedTextArea = document.getElementById("compressed-textArea");
  compressedTextArea.value = compressedText;
}

function uploadFile() {
  const handleFileRead = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const fileContent = e.target.result;
      const compressTextArea = document.getElementById("compress-textArea");
      compressTextArea.value = fileContent;
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
}

function downloadFile() {
  const compressedTextArea = document.getElementById("compressed-textArea");
  const textContent = compressedTextArea.value;
  if (!textContent) {
    alert("Please give valid input");
    return;
  }

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + textContent);
  element.setAttribute("download", "exportFile");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function processFileContent() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please choose file to process it!");
  }
  const reader = new FileReader();

  reader.onload = function (event) {
    const content = event.target.result;
    const processedContent = migrateFileContent(content);
    downloadFileContent(processedContent);
  };

  reader.readAsText(file);
}

function migrateFileContent(content) {
  const importedData = JSON.parse(decompressText(content));
  const treeData = getTreeData(importedData);

  const importedTreeConfig = treeData?.treeConfig || [];
  const processedTreeConfig = processTreeConfig(importedTreeConfig);

  const newTreeData = clone(EMPTY_TREE_DATA);
  newTreeData.treeConfig = processedTreeConfig;

  const compressedText = compressText(JSON.stringify(newTreeData));
  return compressedText;
}

function downloadFileContent(content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = url;
  downloadLink.download = "processed_file.txt";
  downloadLink.style.display = "block";
}
