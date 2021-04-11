import React, { useState } from 'react';

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';


/* ライブラリ */
import {getKey} from "../lib/util";

function Student() {
  const [items, putItems, clearItems] = useStorage();
  const [students, setStudents] = useState([]);
  
  const [filter, setFilter] = React.useState('all');

  const displayItems = items.filter(item => {
    if (filter === 'all') return true;
    else return item.item.grade === filter;
  });
  
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };
  
  const handleAdd = item => {
    putItems([...items, { key: getKey(), item, done: false }]);
  }; 
  
  const handleDelete = studentId => {
    alert("Are you sure want to delete?");
    console.log(studentId);
    let newStudents = [...items];
    newStudents.splice(studentId, 1);
    putItems(newStudents);
  }
  
  
  const handleFilterChange = (value) => {
    console.log(value);
    setFilter(value);
  }

  return (
    <article className="panel is-danger">
      <div className="panel-heading">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-calendar-check"></i>
          </span>
          <span>STUDENT MANAGMENT </span>
        </span>
      </div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map((item,index) => (
        <TodoItem 
          key={item.key}
          item={item}
          index={index}
          onCheck={handleCheck}
          onDelete = {handleDelete}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>

    </article>
  );
}

export default Student;