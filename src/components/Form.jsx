import "../styles/global.css"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { addProfile } from '../requests/post';

export function Form() {
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
      <div className="w-screen h-screen bg-dark-700 pt-20">
        <form
          className='flex flex-col mx-auto max-w-md bg-gray-900  py-8 px-12 rounded-md mix-blend-difference shadow-normal'
          onSubmit={handleSubmit(onSubmit)}
        >
        <h1
          className="text-center text-gray-100 text-4xl font-bold mb-5 mt-"
          >
          Add Profile
        </h1>
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
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
              <p
                className="text-red-400 italic"
                key={type}>{message}
              </p>
            ))
          }
        />
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder='Last Name'
          {...register("LastName", {
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
          name="LastName"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p
                className="text-red-400 italic"
                key={type}>{message}
              </p>
            ))
          }
        />
  
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder='Email'
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
              <p
                className="text-red-400 italic"
                key={type}>{message}
              </p>
            ))
          }
        />
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder='Phone'
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
              <p
                className="text-red-400 italic"
                key={type}>{message}
              </p>
            ))
          }
        />
  
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
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
              <p
                className="text-red-400 italic"
                key={type}>{message}
              </p>
            ))
          }
        />

        <input 
          className="mt-8 px-6 py-4 rounded font-bold text-gray-900 text-sm uppercase bg-gray-100  shadow-sm shadow-blue-400 hover:bg-gray-300 hover:cursor-pointer"
          value="Submit Profile"
          type="submit"
        />
  
        { error === false ? <p className="message-success">{notification}</p> : <p className="message-error">{notification}</p>}
      </form>
      </div>
    )
  }
  