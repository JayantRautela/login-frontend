import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    alert("Signed in");
    setName("")
    setEmail("")
    setPassword("")
    setNumber("")
    setUsername("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          type="text" 
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="email" 
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
          type="tel" 
          placeholder="Enter Your Mobile Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button value="Sign Up"/>
      </form>
    </div>
  )
}

export default Signup
