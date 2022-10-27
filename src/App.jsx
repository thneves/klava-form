import { useState } from "react"
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const {Group, Label, Control} = {...Form}

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="App">
      <div>
      </div>
      <h1>Add Klaviyo Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          First Name
        </Label>
        <Control type="text" placeholder="First name" {...register("First name")} />
      </Group>

      <Group>
        <Label>Last Name</Label>
        <Control type="text" placeholder="Last name" {...register("Last name")} />
      </Group>
      <Group>
        <Label>Email</Label>
        <Control type="text" placeholder="Email" {...register("Email")} />
      </Group>
      <Group>
        <Label>Phone Number</Label>
        <Control  type="tel" placeholder="Phone Number" {...register("Phone Number")} />
      </Group>
      <Group>
        <Label>Date of Birth</Label>
        <Control type="date" {...register("Date of Birth")} />

        <Button type="submit" >
          Send
        </Button>
      </Group>
    </form>
    </div>
  )
}

export default App
