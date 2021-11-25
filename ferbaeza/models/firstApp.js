import mongoose from "mongoose";

const UsersVista = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Porfavor introduzca el nombbre"]
    },
    surname:{
        type: String,
        require: [true, "Porfavor introduzca el apellido"]
    }, 
    mail: {
        type: String,
        require: [true, "Porfavor introduzca el email"]
    },
})
export default mongoose.models.firstApp || mongoose.model("firstApp", UsersVista)

//despues de default declaramos un condicional
// al poner el || indicamos si no existe algun models.User
// que lo cree