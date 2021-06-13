const mongoose = require('mongoose')
const IdeaModel = require('../models/ideaModel')

mongoose.connect('mongodb://localhost:27017/IdeaV1', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const seedDB = async () => {
    await IdeaModel.deleteMany({});
    for (let i = 1; i <= 50; i++) {
        const idea = new IdeaModel({
            author: `60c5ddb2b171e75a48810f52`,
            title: `idea${i}`,
            description: `this is the description of idea${i}this is the description of idea${i}this is the description of idea${i}`,
        })
        await idea.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})