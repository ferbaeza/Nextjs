import { useState } from 'react'
import { useRouter } from 'next/router'
//import { mutate } from 'swr'
import Head from 'next/head'
import Link from 'next/link'


const Form = ({ formId, userForm, forNewUser = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: userForm.name,
    surname: userForm.surname,
    mail: userForm.mail,
  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/users/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update users')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/atlasViews')
    } catch (error) {
      setMessage('Failed to add user')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure user info is filled for user name, surname, and email */
  const formValidate = () => {
    let err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.surname) err.surname = 'Surname is required'
    if (!form.mail) err.mail = 'Email is required'
    return err
  }

  return (
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
          <Link href="/atlasViews">
            <a className="
            text-2xl text-gray-600 bg-gray-400 rounded-l rounded-r pl-2 pr-2">Back</a>
          </Link>
      </div> 

      <form id={formId} onSubmit={handleSubmit} className="text-center flex flex-col w-40 m-auto mt-32">
        <label
          className="w-auto text-center text-2xl text-indigo-500 rounded-l rounded-r mt-4"
          htmlFor="name">Name</label>
        <input
          className="w-auto text-white placeholder-white text-center bg-gray-400 rounded-l rounded-r mt-4"
          placeholder="Introduzca el nombre"
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label
        className="w-auto text-center text-2xl text-indigo-500 rounded-l rounded-r mt-4"
        htmlFor="surname">Surname</label>
        <input
          className="w-auto text-white placeholder-white text-center bg-gray-400 rounded-l rounded-r mt-4"
          placeholder="Introduzca el apellido"
          type="text"
          maxLength="20"
          name="surname"
          value={form.owner_name}
          onChange={handleChange}
          required
        />

        <label
        className="w-auto text-center text-2xl text-indigo-500 rounded-l rounded-r mt-4"
        htmlFor="mail">Mail</label>
        <input
          className="w-auto text-white placeholder-white text-center bg-gray-400 rounded-l rounded-r mt-4"
          placeholder="Introduzca el mail"
          type="text"
          maxLength="30"
          name="mail"
          value={form.species}
          onChange={handleChange}
          required
        />
        <button type="submit" className="
        text-center text-3xl text-white rounded-l rounded-r bg-indigo-600 mt-9">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form
