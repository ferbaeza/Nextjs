import dbConnect from '../lib/dbConnect' 
import Users from '../models/Users'





export default function Home({ dbusuarios }) {
    console.log(dbusuarios);
    return (
      <div>
  
        <main className="container">
          <h1 className="my-3 text-center">Movies</h1>
  
  
          {dbusuarios.map(({ name, _id, surnmae }) => (
            <div className="card mb-2" key={_id}>
              <div className="card-body">
                <p className="text-uppercase h5">{name}</p>
                <p className="fw-light">{surnmae}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }




export async function getServerSideProps() {
    try {
      await dbConnect();
        const result = await Users.find({});
        const dbusuarios = result.map((doc) => {
        const user = doc.toObject();
        user._id = user._id.toString();
        return user;
      });
      return { props: { dbusuarios } };
    } catch (error) {
      console.log(error);
    }
  }