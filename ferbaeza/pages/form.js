import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';

/*function createUser() {
    const [state, setState] = useState({
        name: "Fer",
        email: "fbaeza@gmail.com"
    });
    const name = state.name;
    const email = state.email;


    function setmail(){
        setState(prevState => {
            return {...prevState, email : prevState.email}
        });
        console.log(email)
    }

    <Head>
                <title>Formulario</title>
            </Head>
            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <div className="contador">
            </div>
            <div>
                <form className="w-auto m-auto text-center  mt-20">
                    <input className="data" type='text' placeholder="name"></input>
                    <input  className="data" type='text' placeholder="email"></input>
                    <button  className="btn" type='submit' placeholder="send">Send</button>


                </form>
                <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
                <span className="text-2xl mx-4">{name}</span>
                <span className="text-2xl mx-4">{email}</span>
            </div>

            </div>




*/



function Form() {
    const registerUser = async event => {
      event.preventDefault()
      let registers=[];
       let data={
          name:"",
          mail:""
      }
      registers.push(data);

  
      const res = await fetch('/api/register', {
        body: JSON.stringify({
          name: event.target.name.value,
          mail: event.target.mail.value

        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      console.log(res);
      console.log(data);
      console.log(registers);

  
      const result = await res.json()
    }
  
    return (
        <>
            <Head>
                <title>Formulario</title>
            </Head>
            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <div className="w-auto m-auto text-center">
            
            <div className="text-center pb-2 mb-27 w-auto m-auto">
                <form onSubmit={registerUser} className="mt-20">
                    <label className="btn" htmlFor="name">Name</label>
                    <input className="data" id="name" name="name" type="text" autoComplete="name" required />
                    <label className="btn" htmlFor="mail">Email</label>
                    <input className="data" id="mail" name="mail" type="text" autoComplete="name" required />
                    <button className="btn" type="submit">Register</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form;