import useStorage from '../hooks/storage';
function TodoItem({ item, index, onCheck, onDelete }) {
  // const [deleteStudent,deleteAllStudents] = useStorage();
 
  const handleChange = () => {
    onCheck(item);
  }

  return (
   <div>
    <label className="panel-block">
   
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      
        <table id="customers">
        
          <tr>
            <td>{item.item.id}</td>
            <td>{item.item.name}</td>
            <td>{item.item.grade}</td>
            <td> 
          
          
            <button onClick={() => onDelete(index)}
                  className='book-delete'> Delete </button>
            </td>
          </tr>
        </table>
    
    </label>
   </div>
  );
}

export default TodoItem;