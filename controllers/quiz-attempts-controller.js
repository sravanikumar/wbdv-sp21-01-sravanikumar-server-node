const quizAttemptsDao = require("../daos/quiz-attempts-dao")

module.exports = (app) => {
    const findAttemptsForQuiz = (req, res) => {
        quizAttemptsDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts))
    }

    const createAttempt = (req, res) => {
        quizAttemptsDao.createAttempt( req.params.qid, req.body)
            .then(attempt => res.send(attempt))
    }

    app.post('/api/quizzes/:qid/attempts', createAttempt)
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz)
}