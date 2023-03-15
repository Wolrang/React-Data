import React, {useState} from 'react'
import UpdateStudent from './UpdateStudent';

function Student({ student, onRemove, onDataChange, onCompleteClick }) {
  let [cnt, setCnt] = useState(0);
  
  const onUpdateClick = () => {
      if (cnt === 0) {
          setCnt(1);
      }
  };

  return (
      <div>
          <h4>이름 : {student.name}</h4>
          <h4>나이 : {student.age}세</h4>
          <h4>이메일 : {student.email}</h4>
          <button onClick={onUpdateClick}>변경</button>
          &nbsp; / &nbsp;
          <button onClick={() => onRemove(student.id)}>삭제</button>
          {cnt === 1 && ( 
              <UpdateStudent 
              student={student}
              onDataChange={onDataChange}
              onCompleteClick={onCompleteClick}
              setCnt={setCnt}
              />
          )}
          <hr />
          
      </div>
  );
}

Student.defaultProps = {};

export default Student;