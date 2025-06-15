'use client';
import ButtonText from '@/components/buttons/button-text';
import Checked from '@/components/checked';
import { OPTIONS_TYPE_USER } from '@/constant/auth.constant';
import Image from 'next/image';
import Link from 'next/link';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { useFunctionHook } from './store/useFunctionsHook';

export const Register = () => {
  const {
    control,
    stateRegister,
    formState: { errors, isLoading, isValid },
    function: { register, handleSubmit, onSubmit, getValues },
  } = useFunctionHook();

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'transparent',
      border: '1px solid #9333ea',
      borderRadius: '0.375rem',
      boxShadow: state.isFocused ? '0 0 0 1px #9333ea' : 'none',
      outline: 'none',
      color: '#9333ea',
      '&:hover': {
        borderColor: '#9333ea',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#9333ea',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9333ea',
    }),
    input: (base) => ({
      ...base,
      color: '#9333ea',
    }),
  };

  return (
    <section className="from-cyan-50 to-white bg-gradient-to-b ">
      <div className="flex justify-evenly h-screen items-center container mx-auto gap-x-5">
        <div className="flex-1 flex flex-col gap-y-3">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-semibold text-gray-700">
              Create a free account
            </h2>
            <p className="text-base text-md text-center text-gray-700">
              Already have an account?
              <Link href={'/login'}>
                <span className="text-purple-500 text-sm "> Sign in</span>
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
                className={`focus:outline-none border ${
                  errors?.username ? 'border-red-500' : 'border-purple-500'
                } p-[6px] w-full rounded-md text-purple-500 placeholder:text-purple-500`}
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
                className={`focus:outline-none border ${
                  errors?.password ? 'border-red-500' : 'border-purple-500'
                } p-[6px] w-full rounded-md text-purple-500 placeholder:text-purple-500`}
              />
              {errors?.password?.message && (
                <p className="text-sm text-red-500 font-sans">
                  {errors?.password?.message}
                </p>
              )}
            </label>
            <label htmlFor="role" className="w-full">
              <h2 className="text-purple-500 text-md">Role</h2>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    options={OPTIONS_TYPE_USER}
                    placeholder="Select a role"
                    styles={customStyles}
                    onChange={(e) => {
                      field.onChange(e?.value);
                    }}
                  />
                )}
              />
              {errors?.role?.message && (
                <p className="text-sm text-red-500 font-sans">
                  {errors?.role?.message}
                </p>
              )}
            </label>
            <div className="flex justify-start gap-x-3">
              <Controller
                name="check"
                control={control}
                render={({ field }) => (
                  <Checked
                    isChecked={field?.value}
                    onPress={() => field.onChange(!field.value)}
                  />
                )}
              />

              <p className="text-sm font-semibold text-gray-300">
                I agree to the
                <span className="underline">Terms of Services</span> and
                <span className="underline">Privacy Policy.</span>
              </p>
            </div>
            <ButtonText
              title="Sign up"
              type="submit"
              disable={!isValid && getValues('check')}
              loading={stateRegister?.loading === 'pending'}
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

export default Register;
