function TodoItem({ item, onCheck }) {
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
          </tr>
        </table>
    
    </label>
   </div>
  );
}

export default TodoItem;