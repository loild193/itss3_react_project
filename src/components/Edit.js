import {useParams, useHistory} from "react-router-dom";
import React, { useState, useEffect } from 'react';
/* カスタムフック */
import useStorage from '../hooks/storage';
const Edit = () => {
    const [items, putItems, editItems] = useStorage();
    //get ID(index) from url
    const {index} = useParams();
    const history = useHistory();
    //get student by ID(index)
    
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [id, setId] = useState('');
    
    useEffect(() => {
      const student = items[index]?.item;

      setName(student?.name);
      setGrade(student?.grade);
      setId(student?.id);
    }, [items]);
    
    const handleChangeName = e => setName(e.target.value);
    const handleChangeGrade = e => setGrade(e.target.value);
    const handleChangeId = e => setId(e.target.value);
    
    const handleEdit = item => {
        editItems(item);
        history.push('/');
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
            disabled={true}
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