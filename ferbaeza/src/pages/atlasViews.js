import dbConnect from '../../lib/dbConnect' 
import User from '../../models/User'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


const Index = ({ users }) => (
  <>
    <Head>
        <title>Atlas</title>
    </Head>
    <div className="back">
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
    <div className="back">
        <Link href="/newatlas">
            <a>New</a>
        </Link>
    </div>  

    {users.map((user) => (
        <div key={user._id}>
          <div className="card">
            <h5 className="user-name">{user.name}</h5>
            <div className="main-content">
              <p className="user-name">Nombre: {user.name}</p>
              <p className="owner">Apellido: {user.surname}</p>
              <p className="mail">Email: {user.mail}</p>
  
              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${user._id}`}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
    )
  
  
  /* Retrieves user(s) data from mongodb database */
  export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await User.find({})
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })
  
    return { props: { users: users } }
  }
  
  export default Index
  