import React from 'react';
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { addProfile } from './requests/post';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notification, setNotification] = useState('')
  const [error, setError] = useState(false)
  const { register, handleSubmit,  formState: { errors }, reset } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = data => {
    const profile = { profile: {
      first_name: data.FirstName,
      last_name: data.SecondName,
      email: data.Email,
      phone_number: data.Phone,
      birth_date: data.Birth
    }}

    addProfile(profile).then(() => {
      setError(false)
      setNotification("Profile added to Klavyio list.")
    }).catch(() => {
      setError(true)
      setNotification("Something went wront.")
    })

    setTimeout(() => {
      setNotification('')
      reset();
    }, 5000);
  }

  return (
    <>
      <h1 className="title">Add Profile</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        placeholder='John'
        {...register("FirstName", {
          required: "This is required.",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "This input is letters only."
          },
          maxLength: {
            value: 22,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="FirstName"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
      <label>Second Name</label>
           <input
        placeholder='Doe'
        {...register("SecondName", {
          required: "This is required.",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "This input is letters only."
          },
          maxLength: {
            value: 22,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="SecondName"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />

      <label>Email</label>
      <input
        placeholder='john@example.com'
        {...register("Email", {
          required: "This is required.",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Must be a valid email."
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Email"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />

      <label>Phone Number</label>
      <input
        placeholder='999999999'
        {...register("Phone", {
          required: "This is required.",
          pattern: {
            value: /^[0-9+-]+$/,
            message: "This input is numbers only."
          },
          minLength: {
            value: 6,
            message: "Number is too short."
          },
          maxLength: {
            value: 14,
            message: "Number is too long."
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Phone"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />

      <label>Date of Birth</label>
      <input
        className='date'
        type="date"
        placeholder='Date of Birth'
        {...register("Birth", {
          required: "This is required.",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Birth"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
      
      <input className="submit-btn" value="Submit" type="submit" />
      { error === false ? <p className="message-success">{notification}</p> : <p className="message-error">{notification}</p>}
    </form>
    </>
  )
}

export default App
