module.exports = (app) => {
    const add = (rq, rs) => {
        const a = parseInt(rq.params['paramA']);
        const b = parseInt(rq.params['paramB']);
        rs.send(`${a + b}`)
    }

    app.get('/add/:paramA/:paramB', add)

    app.get('/', function (req, res) {
        res.send('Hello World')
    })
}


