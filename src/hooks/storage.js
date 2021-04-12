import { useState, useEffect } from 'react';

const STORAGE_KEY = 'students';
/* global localStorage */

export default function useStorage() {
  const [items, setItems] = useState([]);
  
  // Get students from localStorage
  useEffect(() => {
    const saveStudents = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveStudents) {
      setItems(saveStudents)
    }
    else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  // Insert a new student to list
  const putItems = items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(items);
  };
  
  // Edit a student in student list
  const editItems = newItem => {
    let indexOfStudent;
    for (const item of items) {
      if (item.id === newItem.id)
        indexOfStudent = items.indexOf(item);
    }
    
    setItems([
      ...items.slice(0, indexOfStudent),
      newItem,
      ...items.slice(indexOfStudent + 1),
    ]);
  }

  // Delete all students
  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, editItems, clearItems];
}