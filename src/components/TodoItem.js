import {Link} from 'react-router-dom';
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
              <i  onClick={() => onDelete(index)}
                  className='btn btn-danger student-delete far fa-trash-alt'></i>
              <Link to={`/edit/${index}`}>
                <i className='btn btn-danger student-delete far fa-edit'></i>
              </Link>
              
            </td>
          </tr>
        </table>
    
    </label>
   </div>
  );
}

export default TodoItem;