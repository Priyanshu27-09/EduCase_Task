import React from 'react';

const Login = () => {
  return (
    <div className="card">
      <h1>Signin to your PopX account</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur veritatis eligendi eveniet, cupiditate error.</p>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="btn primary">Login</button>
      </form>
    </div>
  );
};

export default Login;