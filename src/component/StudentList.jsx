import React, {useRef, useState} from 'react'
import Student from './Student'
import CreateStudent from './CreateStudent'

const StudentList = () => {
  const [students, setStudents] = useState([
    {
      id : 'st001',
      name : '김남준',
      age : 28,
      email: 'rm@gmail.com'
    },
    {
      id : 'st002',
      name : '김석진',
      age : 30,
      email: 'jin@gmail.com'
    },
    {
      id : 'st003',
      name : '민윤기',
      age : 29,
      email: 'suga@gmail.com'
    }
  ])

  const nextId = useRef(4);

  const [inputs1, setInputs1] = useState({
    name: '',
    age: '',
    email: ''
  })

  const {name, age, email} = inputs1;

  const onDataChange1 = (e) => {
    const {name, value} = e.target;

    setInputs1({
      ...inputs1,
      [name] : value
    })
  }

  const onCreate = () => {
    const student = {
      id: 'st00' + nextId.current,
      name,
      age,
      email
    }
    setStudents([...students, student])

    setInputs1({
      name: '',
      age: '',
      email: ''
    })
    nextId.current +=1;
  }

  const onRemove = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }
  
  const [inputs2, setInputs2] = useState({
    name: "",
    age: "",
    email: ""
  })

  const onDataChange2 = (e) => {
    const {name, value} = e.target

    setInputs2({
      ...inputs2,
      [name] : value
    })
  }

  const onCompleteClick = (id) => {
    const student = {
      id: id,
      name: inputs2.name,
      age: inputs2.age,
      email: inputs2.email
    }

    setStudents(
      students
      .filter((student) => student.id !== id)
      .concat(student)
      .sort((a,b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1
        return 0
      })
    )

    setInputs2({
      name: "",
      age: "",
      email: ""
    })
  }

  return (
    <div>
      <CreateStudent
      name={name}
      age={age}
      email={email}
      onDataChange={onDataChange1}
      onCreate={onCreate}
      >

      </CreateStudent>
      {students.map((student) => (<Student student = {student} key={student.id} onRemove={onRemove} onDataChange={onDataChange2} onCompleteClick={onCompleteClick}></Student>))}
    </div>
  )
}

export default StudentList