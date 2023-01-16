require('dotenv').config()
const mongoose = require('mongoose')

const uri = `mongodb+srv://${ process.env.MONGO_USER }:${ process.env.MONGO_PWD }@cluster0.fc068is.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true)
mongoose.connect(uri)