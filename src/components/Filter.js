import { useState } from 'react';

function Filter({ value, onChange }) {

  // const handleClick = (key, e) => {
  //   e.preventDefault();
  //   onChange(key);
  // };
  
  const onChangeSelect = (event) => {
    console.log(event.target.value);
    onChange(event.target.value);
  }

  return (
    <div className="panel-tabs">
      <table id="customers1">
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>
              GRADE
              <select name="grade" id="grade" onChange={onChangeSelect}>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </td>
            <td>DELETE</td>
          </tr>
        </table>
     
    </div>
  );
}

export default Filter