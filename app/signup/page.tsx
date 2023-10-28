import { SignupForm } from "./components/SignupForm";

const Signup = () => {
  return (
    <section className="h-screen flex justify-center sm:items-center mt-7 sm:mt-0">
      <div className="max-w-lg w-full px-3">
        <h1 className="text-3xl sm:text-4xl font-thin text-center my-6 sm:my-10">
          CREATE AN ACCOUNT
        </h1>
        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;
