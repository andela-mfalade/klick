module.exports = {
    db : {
        host     : process.env.KLICK_HOST,
        user     : process.env.KLICK_DB_USER,
        password : process.env.KLICK_PASSWORD,
        database : process.env.KLICK_DB_NAME,
    },
    port: process.env.PORT || 5000
};
