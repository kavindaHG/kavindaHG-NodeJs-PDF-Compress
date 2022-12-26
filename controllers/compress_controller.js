const db_connection =  require ('../db_configs/db_connection')
const PDFDocument = require("pdf-lib").PDFDocument;
const fs = require("fs");

const compress_controller = (req, res) => {
  const filePath = `./uploads/${req.file.originalname}`;
  const existingPdfBytes = fs.readFileSync(filePath);
  compressProcess(existingPdfBytes, req.file.originalname);
  return res.status(200).send("File Upload Successfull.");
}

const compressProcess = async (existingPdfBytes, originalName) => {
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const compressedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(`./uploads/compressed/${originalName}`, compressedPdfBytes);
  saveToDB(originalName, `./uploads/compressed/${originalName}`);

  fs.unlink(`./uploads/${originalName}`, (err) => {
    if (err) throw err;
    console.log(`${originalName} deleted`);
    });
  };

const saveToDB = (originalName, path) => {
    db_connection.query("INSERT INTO users_file (file_name, file_src) values (?,?)",
    [originalName , path],
    (error ,results)=>{
        if (error){
          console.log("An error occured : ", error)
        }
        if(results)
          console.log("File Saved to database Successfully")
      }
    )
}
  
module.exports = {
    compress_controller
}