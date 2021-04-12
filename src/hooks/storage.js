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
  
  // Edit a student in student lists
  const editItems = newItem => {
    const indexOfStudent = items.findIndex((item) => item.item.id === newItem.id);
    
    const editedItems = [
      ...items.slice(0, indexOfStudent),
      {
        item: newItem,
        done: false,
      },
      ...items.slice(indexOfStudent + 1),
    ];
    setItems(editedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editedItems));
  }

  // Delete all students
  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, editItems, clearItems];
}