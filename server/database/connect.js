const mongoose = require('mongoose')

const ConnectToDataBase = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@newdb.9czhrtj.mongodb.net/?retryWrites=true&w=majority`)
        console.log('\x1b[32m%s\x1b[0m', "Connected to MongoDB!")
    }
    catch (error){
        console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error)
    }
}

module.exports = ConnectToDataBase