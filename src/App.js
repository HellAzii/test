import React from 'react'
import Test from './Test'

import Progres from './Progres/progres';



const App = () => {
  const nameUser = (name) => {
    console.log(name)
    if (name?.toString()){
      return name
    } else {
      return 'name nety'
    }

  }
  console.log(toString()) 
 return (
    <Test name='Igor' nameUser={nameUser}/>
 )

}


export default App;
