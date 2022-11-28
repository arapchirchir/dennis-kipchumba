import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className='p-3'>
          Welcome to my profile
        </p>
        <a className='text-white hover:backdrop-brightness-50 hover:text-blue-500 px-7 py-1 hover:rounded-md' href='/'>
          Dennis Kipchumba
        </a>
      </header>
    </div>
  );
}

export default App;
