import './App.css';
import './index.css';

function App() {
  return (
    <div className="App text-center bg-slate-400">
      <header className="App-header min-h-screen flex flex-col items-center justify-center">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className='p-3 uppercase text-lg'>
          Hire me
        </p>
        <a className='text-white hover:backdrop-brightness-50 hover:text-blue-500 px-7 py-1 hover:rounded-md font-bold text-xl' href='/'>
          Dennis Kipchumba
        </a>
      </header>
    </div>
  );
}

export default App;
