class Api {
    constructor(router) {
        this.router = router;
    }
    appStarted() {
        this.router.get('/appStarted', function (req, res) {
            res.send("appStarted")
        })
    }
}
module.exports = Api