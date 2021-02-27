import data from './data.json'
import MyCard from './compoentens/card'
import './App.css';
import {useState} from 'react'
import axios from 'axios';

function   App() {
  const [ favors ,setFavors] = useState ([])

   console.log(data)

  function Item(props) {
    return <MyCard {...props}/>;
 }
  const handleToggle= (index)=> {if(!favors.includes(index) ){
    setFavors(oldarray=>[...oldarray, index])
    }else{
    const newArray = favors.filter(fav=> fav != index)
    
    setFavors(newArray)
    }}
 function MyList() {
    return (
     <ul>
       {data.map((item,key) => <Item {...item} favors={favors} index ={key} addFav={handleToggle}   On_toggle ={true} />
       )}
       </ul>
       )};


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {MyList() }
        {/* <MyCard /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
