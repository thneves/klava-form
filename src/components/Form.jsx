import "../styles/global.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addProfile } from "../requests/post";
import { FlashError, FlashSuccess } from "./FlashMessages";

export function Form() {
  const [error, setError] = useState(false);
  const [notification, setNotification] = useState("invisible");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    const profile = {
      profile: {
        first_name: data.FirstName,
        last_name: data.SecondName,
        email: data.Email,
        phone_number: data.Phone,
        birth_date: data.Birth,
      },
    };

    addProfile(profile)
      .then(() => {
        setError(false);
        setNotification("visible");
      })
      .catch(() => {
        setError(true);
        setNotification("visible");
      });

    setTimeout(() => {
      setNotification("invisible");
      reset();
    }, 5000);
  };

  return (
    <div className="w-screen h-screen bg-dark-700 pt-8">
      <form
        className="flex flex-col mx-auto max-w-md bg-gray-900  mt-3 py-8 px-12 rounded-md  shadow-normal"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-gray-100 text-4xl font-bold mb-5 mt-">
          Klaviyo Profile
        </h1>
        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1 focus:border-gray-100 focus:border-none"
          placeholder="First Name"
          {...register("FirstName", {
            required: "This is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "This input is letters only.",
            },
            maxLength: {
              value: 22,
              message: "This input exceed maxLength.",
            },
          })}
        />
        <p className="text-red-400 italic">{errors.FirstName?.message}</p>

        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder="Last Name"
          {...register("LastName", {
            required: "This is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "This input is letters only.",
            },
            maxLength: {
              value: 22,
              message: "This input exceed maxLength.",
            },
          })}
        />
        <p className="text-red-400 italic">{errors.LastName?.message}</p>

        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder="Email"
          {...register("Email", {
            required: "This is required.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Must be a valid email.",
            },
          })}
        />
        <p className="text-red-400 italic">{errors.Email?.message}</p>

        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          placeholder="Phone"
          {...register("Phone", {
            required: "This is required.",
            pattern: {
              value: /^[0-9+-]+$/,
              message: "This input is numbers only.",
            },
            minLength: {
              value: 6,
              message: "Number is too short.",
            },
            maxLength: {
              value: 14,
              message: "Number is too long.",
            },
          })}
        />
        <p className="text-red-400 italic">{errors.Phone?.message}</p>

        <input
          className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 mt-4 mb-1"
          type="date"
          placeholder="Date of Birth"
          {...register("Birth", {
            required: "This is required.",
          })}
        />
        <p className="text-red-400 italic">{errors.Birth?.message}</p>

        <input
          className="mt-8 px-6 py-4 rounded font-bold text-gray-900 text-sm uppercase bg-gray-100  shadow-sm shadow-blue-400 hover:bg-gray-300 hover:cursor-pointer"
          value="Submit Profile"
          type="submit"
        />
      </form>
      <div className={notification}>
        {error ? <FlashError /> : <FlashSuccess />}
      </div>
    </div>
  );
}
