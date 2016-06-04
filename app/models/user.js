var mysql = require('mysql'),
    config = require(process.cwd() + '/config/appConfig'),
    dbCred = config.db;

var connection = mysql.createConnection(dbCred);
var processor = {retrieveUserInfo: retrieveUserInfo};

function retrieveUserInfo(username, cb) {
    var query = "SELECT * from userinfo WHERE username=$1" + username + "'";
    connection.query(query, function(err, rows, fields) {
        if (!err) {
            if (rows === undefined || rows.length == 0) {
                addNewUser(username, cb);
            } else {
                cb(rows[0]);
            }
        }
        else {
            console.log('Error performing Query.');
        }
    });
}


function addNewUser(username, cb) {
    var query = "INSERT INTO userinfo VALUES ('" + username + "', 1000, 30, 18, 1)";
    connection.query(query, function(err, rows, fields) {
        if (!err) {
            cb({
                username: username,
                coins: 1000,
                breads: 30,
                carrot: 18,
                diamond: 5
            });
        }
        else {
            console.log('Error Adding New User.');
        }
    });
}


module.exports = processor;
