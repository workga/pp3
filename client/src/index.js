import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';
  
function UncontrolledFormComponent() {  

  let inputRef = React.createRef(); 

  const handleClick = e => {  
    e.preventDefault(); 

    let inputValue = inputRef.current.value;

    if (!inputValue || inputValue.length === 0)
    {
        alert("You entered nothing!");
    }
    else
    {
        alert("Name is: " + inputValue);
    } 
      
  };  
  
  return (  
    <div>  
      <h3>Simple form</h3>

      <form>  
        <input type="text" ref={inputRef} />  
        <button onClick={handleClick}>  
          Submit  
        </button>  
      </form> 

    </div>  
  );  
} 

ReactDOM.render(
    <UncontrolledFormComponent />,
    document.getElementById('root')
);
