const quizService = require('../services/quizzes/quiz-service')


module.exports = (app) => {

    const findAllQuizzes = (req, res) =>
        quizService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
        // res.send(quizService.findAllQuizzes())

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        const quiz = quizService.findQuizById(quizId)
        res.json(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)


}