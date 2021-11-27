import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  //throw new Error(
    console.log('Please define the MONGODB_URI environment variable inside .env.local')
  
}
const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log("Mongodb Conectado correctamente!!")
    
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default dbConnect;
