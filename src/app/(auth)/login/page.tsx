import LoginForm from '@/components/forms/auth/Login';

const Login = () => {
  return (
    <div className='layout flex min-h-[calc(100vh-5rem)] items-center justify-between gap-5'>
      <section className='hidden h-[calc(100vh-6rem)] w-3/5 rounded-lg bg-accent lg:block'></section>

      <section className='w-full lg:w-2/5'>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
