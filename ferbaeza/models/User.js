import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Porfavor introduzca el nombbre"],
        maxlength: [20, 'Name cannot be more than 60 characters'],

    },
    surname:{
        type: String,
        require: [true, "Porfavor introduzca el apellido"],
        maxlength: [20, 'Name cannot be more than 60 characters'],

    }, 
    mail: {
        type: String,
        require: [true, "Porfavor introduzca el email"],
        maxlength: [220, 'Name cannot be more than 60 characters'],

    },
})
export default mongoose.models.User || mongoose.model("User", UserSchema)





//mongoose.models.Users || 

//despues de default declaramos un condicional
// al poner el || indicamos si no existe algun models.User
// que lo cree