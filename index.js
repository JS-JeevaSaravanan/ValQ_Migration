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
    modelCollapsedNodes: new Set(),
    activeSeries: ["base", "tgt"],
  };
};

const getDefaultNode = () => {
  return {
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
    secondaryKPIApplyToDescendants: "",
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
    lineageDisplay: "",
  };
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

let importedFileContent = "";
let importedFileName = "";

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

function migrateFileContent(content) {
  const importedData = JSON.parse(decompressText(content));
  const treeData = getTreeData(importedData);

  const importedTreeConfig = treeData?.treeConfig || [];
  const processedTreeConfig = processTreeConfig(importedTreeConfig);

  const newTreeData = getEmptyTreeData();
  newTreeData.treeConfig = processedTreeConfig;

  const compressedText = compressText(JSON.stringify(newTreeData));
  return compressedText;
}

function processTreeConfig(importedTreeConfig) {
  const [newTreeConfig, intermediateTreeConfig] = [[], []];
  const templateStructuresIdSet = new Set();

  for (let i = 0, len1 = importedTreeConfig.length; i < len1; i++) {
    const oldNode = importedTreeConfig[i];

    if (oldNode.cMeth === "T") {
      const templateStrcutId = oldNode.tmplNode;
      if (templateStrcutId && !templateStructuresIdSet.has(templateStrcutId)) {
        templateStructuresIdSet.add(templateStrcutId);
      }
      continue;
    }
    const newNode = getDefaultNode();

    for (let j = 0, len2 = PROPS_TO_COPY.length; j < len2; j++) {
      const prop = PROPS_TO_COPY[j];
      if (prop === "sMeth" && oldNode[prop] === "M") {
        // TODO: transfer to next loop
        continue;
      } else {
        newNode[prop] = oldNode[prop];
      }
    }
    intermediateTreeConfig.push(newNode);
  }

  let skipLvl = -1;
  for (let i = 0, len = intermediateTreeConfig.length; i < len; i++) {
    const node = intermediateTreeConfig[i];
    const { name, level } = node;
    if (templateStructuresIdSet.has(name)) {
      if (skipLvl === -1 || skipLvl > level) skipLvl = level;
      continue;
    } else if (skipLvl !== -1 && level > skipLvl) {
      continue;
    }
    if (level === skipLvl) skipLvl = -1;
    newTreeConfig.push(node);
  }

  return newTreeConfig;
}

function downloadFileContent(content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = url;
  downloadLink.download = `migrated_${importedFileName}.txt`;
  downloadLink.style.display = "block";
}

function processFileContent() {
  try {
    const processedContent = migrateFileContent(importedFileContent);
    downloadFileContent(processedContent);
  } catch (e) {
    alert("Migrate failed!");
    console.log(`Migrate failed! `, e);
  }
}

const uploadNewModelFile = () => {
  const handleFileRead = (e) => {
    const file = e.target.files[0];
    importedFileName = file.name;
    const uploadBtn = document.getElementById("uploadBtn");
    uploadBtn.innerHTML = importedFileName;
    const reader = new FileReader();
    reader.onloadend = (e) => {
      importedFileContent = e.target.result;
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
    AudioListener("File upload failed!");
    console.log(`File upload failed! `, e);
  }
};
