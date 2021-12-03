import {connect, connection} from 'mongoose'

export async function dbConnect(){
    const db = await connect(process.env.MONGODB_URI)  
}
console.log("Mongodb Conectado correctamente!!");
console.log(dbConnect.connections[0].readyState);

connection.on("connected", ()=>{
    console("Mongoose connected");
});
connection.on("error", (err)=>{
    console(err);
});



/*

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
    
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

*/