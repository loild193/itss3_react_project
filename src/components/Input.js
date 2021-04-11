import React, { useState } from 'react';

function Input( { onAdd } ) {
  const [name, setName] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [id, setId] = React.useState('');

  const handleChangeName = e => setName(e.target.value);
    const handleChangeGrade = e => setGrade(e.target.value);
    const handleChangeId = e => setId(e.target.value);
  
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      if (!name || !grade || !id) return;
      onAdd(id);
      setId('');
      onAdd(grade);
      setGrade('');
      onAdd(name);
      setName('');
    }
  };
  
  const onSubmit = () => {
    if (!name || !grade || !id) return;
    setId('');
    setGrade('');
    setName('');
    onAdd({name, grade, id});
  }
  
  const onSubmit2 = (e) => {
    if (e.keyCode !== 13) return;
    if (!name || !grade || !id) return;
    setId('');
    setGrade('');
    setName('');
    onAdd({name, grade, id});
  }

  return (
 <div>
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="名前を入力してください"
        value={name}
        onChange={handleChangeName}
        onKeyDown={onSubmit2}
      />
    </div>
    
     <div className="panel-block">
      <input
        class="input"
        type="number"
        min='1'
        max='5'
        placeholder="GRADEを入力してください"
        value={grade}
        onChange={handleChangeGrade}
        onKeyDown={onSubmit2}
      />
      </div>
      <div className="panel-block">
      <input
        class="input"
        type="number"
        placeholder="idを入力してください"
        value={id}
        onChange={handleChangeId}
        onKeyDown={onSubmit2}
      />
      </div>
      <input className="input" type="submit" value="Submit" onClick={onSubmit} onKeyDown={handleKeyDown} />
  </div> 
  );
}

export default Input;