import { useState, useEffect } from 'react';

// key of localStorage
const STORAGE_KEY = 'students';
/* global localStorage */

export default function useCustomHook() {
  const [students, setStudents] = useState([]);
  
  // Get students to localStorage
  useEffect(() => {
    const saveStudents = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveStudents) setStudents(saveStudents);
  }, []);
  
  // Insert a new student to list
  const insertNewStudent = student => {
    setStudents([
      ...students,
      student,
    ]);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }
  
  // Edit a student in student list
  const editStudent = newStudent => {
    let indexOfStudent;
    for (const student of students) {
      if (student.id === newStudent.id)
        indexOfStudent = students.indeOf(student);
    }
    
    setStudents([
      ...students.slice(0, indexOfStudent),
      newStudent,
      ...students.slice(indexOfStudent + 1),
    ]);
  }
  
  // Delete all students
  const deleteAllStudents = () => {
    setStudents([]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
 
 return [students, insertNewStudent, editStudent, deleteAllStudents];
}