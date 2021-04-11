import {useParams} from "react-router-dom";
import React, { useState } from 'react';
/* カスタムフック */
import useStorage from '../hooks/storage';
const Edit = () => {
    const [items, putItems, editItems, clearItems] = useStorage();
    //get ID(index) from url
    const {index} = useParams();
    //get student by ID(index)
    const student = items.slice(index, index+1);
    console.log(student);
    const [name, setName] = useState(student.name);
    const [grade, setGrade] = useState(student.grade);
    const [id, setId] = useState(student.id);
    
    const handleChangeName = e => setName(e.target.value);
    const handleChangeGrade = e => setGrade(e.target.value);
    const handleChangeId = e => setId(e.target.value);
    
    const handleEdit = item => {
        editItems(item);
    };
    
    const onEdit = () => {
        if (!name || !grade || !id) return;
        setId('');
        setGrade('');
        setName('');
        handleEdit({name, grade, id});
    };
    
    return (
    <div>
        <article className="panel is-danger">
            <div className="panel-heading">
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-calendar-check"></i>
                  </span>
                  <span>EDIT A STUDENT </span>
                </span>
            </div>   
        </article>
        <div className="panel-block">
          <input
            class="input"
            type="text"
            placeholder="名前を入力してください"
            value={name}
            onChange={handleChangeName}
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
          />
        </div>
        <div className="panel-block">
          <input
            class="input"
            type="number"
            placeholder="idを入力してください"
            value={id}
            onChange={handleChangeId}
          />
        </div>
        <input className="input" type="submit" value="Edit" onClick={onEdit}/>
    </div>
    );
}

export default Edit;