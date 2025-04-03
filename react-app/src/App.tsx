import './App.css';
import { io } from 'socket.io-client';

function App() {
  const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:8080';
  const socket = io(URL);

  // function onFormSubmit(){
  //   console.log(form)
  //   console.log(message?.value);
  //   socket.emit('message', {name: name?.value, message: message?.value})
  // }
  // form?.addEventListener('submit', (e)=>{
  //     e.preventDefault();
  //     console.log(message?.value);
  //     socket.emit('message', {name: name?.value, message: message?.value})
  // })
  // socket.on('message', (msg: any)=>{
  //     let p = document.createElement("p");
  //     p.innerHTML = `${msg.name}: ${msg.message}`;
  //     messageArea?.append(p);
  // })

  return (
    <div className="App">
      <header className="App-header">
        <h3>A group chat using socket.io and Node.js</h3>
      </header>
      <h4>Send any message to the group</h4>
      <form id="form" >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input type="text" id="message" placeholder="Message"/>
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
      </form>
      <div>
        <h4>Messages:</h4>
        <div id="messageArea"></div>
      </div>
    </div>
  );
}

export default App;
