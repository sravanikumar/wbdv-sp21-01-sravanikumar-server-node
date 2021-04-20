const quizzesDao = require("../../daos/quizzes-dao")

const createQuiz = () => {}

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qid) => {
    return quizzesDao.findQuizById(qid)
}

const updateQuiz = () => {}

const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}

