import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const makeApiRequest = () => {
    // console.log(`makeApiRequest`);
    axios(`/api/testWithCurrentUser`).then((response) => {
      console.log(`response`, response);
    });
  };
  //Псевдокод
  // fetch('http://realworld-docker.com/api/posts').then((response) => {
  //   setState({
  //     posts
  //   });
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          We are in dev 666
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>Make api request</button>
    </div>
  );
}

export default App;
