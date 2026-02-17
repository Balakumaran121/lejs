import React from 'react'

const Login = () => {
  return (
    <div className="rounded bg-gray-50 border border-gray-100">
      <h1>Login</h1>
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        value="email"
        placeholder="Enter youe email"
        name="email"
      />
      <label htmlFor="Password">Password</label>
      <input type="password" placeholder="***" value={""} />
    </div>
  );
}

export default Login
