import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="rounded bg-gray-50 border border-gray-100 flex flex-col  w-[30%] p-5">
        <h1 className="font-semibold text-3xl mb-2">Login</h1>
        <label htmlFor="Email" className="text-xl font-normal mb-1">
          Email
        </label>
        <input
          type="email"
          value=""
          placeholder="Enter youe email"
          name="email"
          className="w-full border border-gray-200 rounded-full text-sm p-2"
        />
        <label htmlFor="Password" className="text-xl font-normal mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="***"
          value=""
          className="w-full border border-gray-200 rounded-full text-sm p-2"
        />
        <button className="bg-emerald-600 text-white rounded-full p-2 my-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login
