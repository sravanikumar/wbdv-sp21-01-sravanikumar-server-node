// let questions = require('./questions.json')
const questionsModel = require("../../db/questions/questions-model")

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsModel.find()
    // return questions
}

findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
}

const findQuestionById = (quid) => {
    return questions.find((question) => {
        return question._id === quid;
    })
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

