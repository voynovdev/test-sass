import logo from './logo.svg';
import './App.css';
import './styles1.scss'
import { useState } from 'react';


function MyButton() {
	const [count, setCount] = useState(0);
	
	function handleClick() {
		setCount(count+1)
	}

	return (
		<>
			<button onClick={handleClick}>Clicked {count} times</button>
			<ul className='numbers'>
				<li className='number-1'>1</li>
				<li className='number-2'>2</li>
				<li className='number-3'>3</li>
				<li className='number-4'>4</li>
				<li className='number-5'>5</li>
				<li className='number-6'>6</li>
				<li className='number-7'>7</li>
				<li className='number-8'>8</li>
				<li className='number-9'>9</li>
				<li className='number-10'>10</li>
			</ul>
		</>
	);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

				<MyButton />
      </header>
    </div>
  );
}

export default App;
