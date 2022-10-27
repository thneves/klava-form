import React from 'react';
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { addProfile } from './requests/post';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [notication, setNotification] = useState(' ')
  const { register, handleSubmit,  formState: { errors } } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = data => {
    const profile = {profile: {
      first_name: data.FirstName,
      last_name: data.SecondName,
      email: data.Email,
      phone_number: data.Phone,
      birth_date: data.Birth
    }}


    let message = addProfile(profile)
    console.log(message);
  };

  return (
    <>
    
      <h1 className="title">Add Profile</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder='First Name'
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
           <input
        placeholder='Second Name'
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

      <input
        placeholder='Email Address'
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

           <input
        placeholder='Phone Number'
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
            value: 12,
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
      
      <input value="Submit" type="submit" />

    </form>
    </>
  )
}

export default App
