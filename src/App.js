import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message name="Hasantha"/> */}
      {/* <MyComponent name="Hasantha"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
    </div>
  );
}


// // This is a stateless component .
// function Welcome() {
//   return <h1>Hello World</h1>;
// }

// // This is a stateful class component 
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

export default App;
