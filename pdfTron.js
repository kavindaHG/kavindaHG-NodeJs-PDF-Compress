var convertapi = require("convertapi")("tXdAKeXpnSMgZYbX");
const compressProcess = () => {
  var resultPromise = convertapi.convert("pdf", {
    File: "./uploads/javanotes5.pdf",
    PageRange: "1-10",
    PdfResolution: "150",
  });
};

module.exports = { compressProcess };
