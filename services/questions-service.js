let questions = require('./questions.json')

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => {
        question.quizId === quizId
    })
}

const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findQuestionsForQuiz,
    updateQuestion,
    deleteQuestion
}

