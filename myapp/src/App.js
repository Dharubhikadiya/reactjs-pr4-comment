import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState([
    {
      name: '',
      email: '',
      salary: '',
    }
  ])

  const addmore = () => {
    let single = { name: '', email: '', address: '' };
    let data = [...input, single];
    console.log(data);
    setInput(data);
  }

  const deletedata = (index) => {
    let data = [...input];
    data.splice(index, 1);
    setInput(data);
  }

  const handlechange = (index, e) => {
    let data = [...input];
    data[index][e.target.name] = e.target.value;
    console.log(data);
    setInput(data)
  }

  return (
    <div className="App">
      <h1>React-Add & Delete Table Rows Dynamically</h1>
      <center>
        <table cellPadding={20} >
          <thead>
            <tr className='row'>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Salary</th>
              <th>
                <div className='btn'>
                  <button onClick={() => addmore()}>+</button>
                </div>
              </th>
            </tr>
          </thead>
          {
            input.map((item, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td><input type='text' name='name' onChange={(e) => handlechange(index, e)}></input></td>
                    <td><input type='text' name='email' onChange={(e) => handlechange(index, e)}></input></td>
                    <td><input type='text' name='salary' onChange={(e) => handlechange(index, e)}></input></td>
                    <td>
                      <div className='btn1'>
                        <button onClick={() => deletedata()}>Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </center>
    </div>
  );
}

export default App;
