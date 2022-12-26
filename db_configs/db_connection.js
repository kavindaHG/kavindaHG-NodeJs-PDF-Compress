const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'file_upload'
})

connection.connect(function(err){
    if(err) throw err

    console.log("Successfully Connected to the database");
})

module.exports = connection