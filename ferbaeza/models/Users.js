import mongoose from "mongoose";

const UsersVistaSchema = new mongoose.Schema({
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
export default mongoose.model("Users", UsersVistaSchema)

//mongoose.models.Users || 





//despues de default declaramos un condicional
// al poner el || indicamos si no existe algun models.User
// que lo cree