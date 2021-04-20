const questionsDao = require("../../daos/questions-dao")

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid)
}

const findQuestionById = (quid) => {
    return questionsDao.findQuestionById(quid)
}

const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}

