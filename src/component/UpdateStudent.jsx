import React from 'react';

function UpdateStudent({ student, onDataChange, onCompleteClick, setCnt }) {
  const style = {
    width: "640px",
    margin: "20px",
    padding: "10px",
    border: "3px solid green"
  };

  const onCntChange = () => {
    setCnt(0);
  };

  return (
    <div style={ style }>
      <input
        type="text"
        name="name"
        placeholder="이름입력"
        onChange={onDataChange}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        name="age"
        placeholder="나이입력"
        onChange={onDataChange}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        name="email"
        placeholder="이메일입력"
        onChange={onDataChange}
      />
      &nbsp;&nbsp;
      <button
        onClick={() => {
          onCompleteClick(student.id);
          onCntChange();
        }}
      >
        변경완료
      </button>
    </div>
  );
}

export default UpdateStudent;