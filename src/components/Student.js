import React, { useState } from 'react';

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

function Student() {
  const [items, putItems, editItems, clearItems] = useStorage();
  const [students, setStudents] = useState([]);
  
  const [filter, setFilter] = useState('all');

  const displayItems = items.filter(item => {
    if (filter === 'all') return true;
    else return item.item.grade === filter;
  });
  
  const handleCheck = checked => {
    console.log(items)
    const newItems = items.map(item => {
      if (item.item.id === checked.item.id) {
        item.done = !item.done;
      }
      return item;
    });
    
    putItems(newItems);
  };
  
  const handleAdd = item => {
    putItems([...items, { item, done: false }]);
  }; 
  
  const handleDelete = studentId => {
    alert("Are you sure want to delete?");
    
    let newStudents = [...items];
    newStudents.splice(studentId, 1);
    putItems(newStudents);
  }
  
  
  const handleFilterChange = (value) => {
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
          key={item.item.id}
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