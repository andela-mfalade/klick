var userUtils = {
    loginUser: function (req, res) {
        console.log(req.body);
        res.send({hello: "This works too"});
    }
}

module.exports = userUtils;
