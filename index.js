import {
  compressToBase64,
  decompressFromBase64,
  decompressFromUint8Array,
} from "lz-string";

const decompressText = (text = "") => {
  console.log("decompressText: ");
  return;
  return decompressFromBase64(text);
};

const compressText = (text) => {
  return compressToBase64(text);
};
