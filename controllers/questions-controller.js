const questionService = require("../services/questions/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions()
        // res.send(questions)
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qzid']
        // const questions = questionService.findQuestionsForQuiz(quizId)
        // res.send(questions)
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params.quid
        questionService.findQuestionById(questionId)
            .then((question) => {
                res.send(question)
            })
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:quid", findQuestionById)
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
}
