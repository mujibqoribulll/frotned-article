'use client';
import ButtonText from '@/components/buttons/button-text';
import Image from 'next/image';
import Link from 'next/link';
import { useFunctionHook } from './store/useFunctionsHook';

const Login = () => {
  const {
    stateLogin,
    formState: { errors, isValid },
    function: { handleSubmit, onSubmit, register },
  } = useFunctionHook();

  return (
    <section className="from-cyan-50 to-white bg-gradient-to-b">
      <div className="flex justify-evenly h-screen items-center container mx-auto gap-x-5">
        <div className="flex-1 flex flex-col gap-y-3">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-semibold text-gray-700">
              Welcome Back
            </h2>
            <p className="text-base text-md text-center text-gray-700">
              Don't have an account?
              <Link href={'/register'}>
                <span className="text-purple-500 text-sm "> Sign up</span>
              </Link>
            </p>
          </div>
          <form
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="username" className="w-full">
              <h2 className="text-purple-500 text-md">Username</h2>
              <input
                type="text"
                id="username"
                {...register('username')}
                className="focus:outline-none border border-purple-500 p-[6px] w-full rounded-md text-purple-500 placeholder:text-purple-500"
              />
              {errors?.username?.message && (
                <p className="text-sm text-red-500 font-sans">
                  {errors?.username?.message}
                </p>
              )}
            </label>
            <label htmlFor="password" className="w-full">
              <h2 className="text-purple-500 text-md">Password</h2>
              <input
                type="password"
                id="password"
                {...register('password')}
                className="focus:outline-none border border-purple-500 p-[6px] w-full rounded-md text-purple-500 placeholder:text-purple-500"
              />
              {errors?.password?.message && (
                <p className="text-sm text-red-500 font-sans">
                  {errors?.password?.message}
                </p>
              )}
            </label>
            <ButtonText
              title="Sign in"
              type="submit"
              disable={!isValid}
              loading={stateLogin?.loading === 'pending'}
            />
          </form>
        </div>
        <div className="flex-1 hidden lg:inline">
          <Image
            src="/images/login.svg"
            alt="login"
            width={300}
            height={200}
            layout="responsive"
            className="items-center"
          />
          <p className="text-justify text-sm text-gray-400 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus,
            numquam maxime impedit ab, quibusdam nisi tempora officiis, placeat
            culpa incidunt nobis totam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
