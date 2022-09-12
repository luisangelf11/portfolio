import React, {useState} from "react";
import styled from "styled-components";
import {MdEmail} from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
    name: "",
    email: "",
    subject: "",
    comments: ""
}

export default function ContactForm() {
    const [form, setForm] = useState(initialValues);
    const handelChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        toast.loading("Enviando mensaje", {
          duration: 3000
        });
        fetch("https://formsubmit.co/ajax/luisangelf491@gmail.com", 
        {
            method: "POST",
            body: new FormData(e.target)
        })
        .then((res)=> res.ok? res.json(): Promise.reject(res))
        .then((json)=>{
            toast.success("Mensaje enviado correctamente", {
              duration: 4000
            });
        })
        .catch((err) =>{
            toast.error("¡UPS! Ocurrió un error inesperado", {
              duration: 4000
            });
        });

        setForm(initialValues);
    }
  return (
    <Contact id="contact">
        <br />
      <form onSubmit={handelSubmit}>
        <MdEmail className="icon" />
        <h3>Contactar</h3>
        <input name="name" type="text" value={form.name} placeholder="Nombre" onChange={handelChange} required />
        <input name="email" type="email" value={form.email} placeholder="E-mail" onChange={handelChange} required />
        <input
          name="subject"
          type="text"
          value={form.subject}
          placeholder="Asunto"
          onChange={handelChange}
          required
        />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          value={form.comments}
          placeholder="Mensaje"
          onChange={handelChange}
          maxLength="250"
          required
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </Contact>
  );
}

const Contact = styled.section`
  width: 100%;
  height: 480px;
  display:block ;
  background-color: #ccc;
  margin-top: 10px;

  form{
    width:300px;
    height:430px;
    margin:auto;
    border-radius:4px ;
    border:1px solid #333;
    background-color:#fff;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    color: #333;
    letter-spacing:10px;

    @media(max-width:500px){
      font-size: 20px;
    }
  }

  .icon{
    font-size:60px;
    display:block;
    color:#333;
    margin:auto;
  }

  input[type="text"], input[type="email"]{
    display:block;
    margin:10px auto;
    width:250px;
    padding:5px;
    border:1px solid #333;
    border-radius:3px ;
    outline:0;
    transition:all .3s ease-in-out;
  }

  input[type="submit"]{
    display:block;
    margin:35px auto;
    width:200px;
    padding:10px;
    outline:0;
    transition:all .3s ease-in-out;
    border:0;
    background-color:#333;
    color:#fff;
    text-transform:uppercase;
    border-radius:20px 50px;
    cursor:pointer;
  }

  input[type="submit"]:hover{
    opacity: .75;
  }

  textarea{
    display:block;
    margin:5px auto;
    width:250px;
    padding:5px;
    border:1px solid #333;
    border-radius:3px ;
    outline:0;
    transition:all .3s ease-in-out;
    resize:none;
    height:100px;
  }

  textarea:focus{
    border:1px solid royalblue;
  }

  input[type="text"]:focus{
    border:1px solid royalblue;
  }

  input[type="email"]:focus{
    border:1px solid royalblue;
  }
`;
