import dbConnect from '../lib/dbConnect' 
import firstApp from '../models/firstApp'




function Home({ users }) {
    console.log(users);
    return (
      <div>
  
        <main className="container">
          <h1 className="my-3 text-center">Users</h1>
  
  
          {users.map(({ _id, name, surname, mail }) => (
            <div className="card mb-2" key={_id}>
              <div className="card-body">
                <p className="text-uppercase h5">{name}</p>
                <p className="fw-light">{surname}</p>
                <p className="fw-light">{mail}</p>

                <div>
                  <Link href="/[id]/edit" as={`/${_id}/edit`}>
                    <a className="btn btn-warning me-2">Editar</a>
                  </Link>
                  <Link href="/[id]" as={`/${_id}`}>
                    <a className="btn btn-info">Visualizar</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }

export async function getServerSideProps(){
    try {
        await dbConnect();
        
            const res = await firstApp.find({});

            const users = result.map((doc)=>{
            const user = doc.toObject();
            user._id = user._id.toString();
            return user;
        })

        console.log(res);

        return {props: {name: fer }};
    }   catch (error) {
        console.log(error);
    }
}
export default Home()