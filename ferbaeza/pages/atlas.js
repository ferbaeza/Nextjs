import dbConnect from '../lib/dbConnect' 
import firstApp from '../models/firstApp'


export default async function getServerSideProps(){
    try {
        await dbConnect();
            //const res = await firstApp.find({});

            const users = result.map((doc)=>{
            const user = doc.toObject();
            user._id = user._id.toString();
            return user;
        })

        console.log(user);

    }   catch (error) {
        console.log(error);
    }
}
