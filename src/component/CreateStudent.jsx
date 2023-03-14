import React from 'react'

const CreateStudent = ({name, age, email, onDataChange, onCreate}) => {
  const style = {
    width: '610px',
    margin: '20px',
    padding: '10px',
    border: '3px solid black'
  }
  return (
    <div style={style}>
      <input type="text" name='name' placeholder='이름입력' onChange={onDataChange} value={name}></input>&nbsp;&nbsp;
      <input type="text" name='age' placeholder='나이입력' onChange={onDataChange} value={age}></input>&nbsp;&nbsp;
      <input type="text" name='email' placeholder='이메일입력' onChange={onDataChange} value={email}></input>&nbsp;&nbsp;
      <button onClick={onCreate}>추가</button>
    </div>
  )
}

export default CreateStudent