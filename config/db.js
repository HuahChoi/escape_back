var mysql = require('mysql');
const db = mysql.createPool({
    host : 'bdcb.cafe24app.com',
    user : 'chlgusdn1832',
    password : 'A357wmdrj!@',
    database : 'chlgusdn1832',
    port:3306
});

module.exports = db;