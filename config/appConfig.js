module.exports = {
    db : {
        user     : process.env.KLICK_DB_USER,
        password : process.env.KLICK_PASSWORD,
        database : process.env.KLICK_DB_NAME,
        socketPath: '/tmp/mysql.sock',
    },
    port: process.env.PORT || 5000
};
