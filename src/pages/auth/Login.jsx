import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded bg-gray-50 border border-gray-100 flex flex-col gap-5  w-[30%] p-5">
        <h1 className="font-semibold text-3xl mb-2">Login</h1>
        <div className='flex flex-col gap-5'>

          <label htmlFor="Email" className="text-xl font-normal">
            Email
          </label>
          <input
            type="email"

            placeholder="Enter youe email"
            {...register("email", { required: "Email is required" })}
            name="email"
            className="w-full border border-gray-200 rounded-full text-sm p-2"
          />
          {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col gap-5'>

          <label htmlFor="Password" className="text-xl font-normal">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is reuired" })}
            className="w-full border border-gray-200 rounded-full text-sm p-2"
          />
          {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>
        <button type='submit' className="cursor-pointer bg-emerald-600 text-white rounded-full p-2 my-2">
          Login
        </button>
        <div className='flex gap-2 items-center'>Don't have an account? <p className='text-lg font-semibold hover:underline cursor-pointer' onClick={() => navigate('/register')}>Register!</p></div>
      </form>
    </div>
  );
}

export default Login
