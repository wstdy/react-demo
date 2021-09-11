const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'xxx'
})

connection.connect()


const mysqlUtil = {
    query: function(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    reject(error)
                };
                resolve(results)
            });
        })
    }
}



exports.mysqlUtil = mysqlUtil;