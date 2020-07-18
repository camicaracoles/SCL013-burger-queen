import React, {useState} from 'react';
import '../img/App.css';
import 'firebase/auth';
import { db , auth } from '../firebase-Config';
import ComponentsDataHours from '../ComponentsDataHours';
import {Link} from 'react-router-dom';

export const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [job, setJob] = useState('');


  const register = (e) => {
     const res = auth.createUserWithEmailAndPassword(email,password)

.then(res=>{
  console.log(res)

  // guarda los datos del usuario
  db.collection('usuario').doc(res.user.uid).set({
  uid: res.user.uid,
  name:name,
  job:job,
  email:res.user.email,

 })

 setName('')
setEmail('')
setPasword('')
setError('')
setJob('')

})

.catch(error=>{
  console.log(error);
  if(error.code === 'invalid/user-not-found'){
    setError('⚠️ Debe ingresar un correo electrónico')
    return
}

if(error.code === 'auth/weak-password'){
  setError('⚠️ Contraseña es incorrecta')
  return
}
if(error.code === 'auth/email-already-in-use'){
  setError('⚠️ Cuenta ya existe')
  return
}


});

  console.log(email,password);    }


  return (

    <div className="App">

    <div className='fondo'>

      <div id='contenedorLogin'>

        <div className='dia'>
                 <ComponentsDataHours />
          </div>

            <input className='inputRegistro' placeholder='Ingrese su nombre' type='text'id='nombre' value ={name} onChange={(ev)=> setName(ev.target.value)}></input>
            <input className='inputRegistro' placeholder='Ingrese su email' type='email' id='email' value={email} onChange={(ev)=> setEmail(ev.target.value)}></input>
            <input className='inputRegistro'placeholder='Ingrese su contrtaseña' type='password' value={password} id='password' onChange={(ev)=> setPasword(ev.target.value)}></input>
            <input className='inputRegistro' placeholder='Ingrese su oficio' type='text'id='oficio' value ={job} onChange={(ev)=> setJob(ev.target.value)}></input>
            <button className='btnEntrada' onClick= {register}>Registrate</button>
            <p>¿Ya tienes cuenta?</p><Link to='/login'>Inicia sesión</Link>
            <div className='error'>
              {error}
            </div>
           </div>

      </div>


    </div>

  );
}
