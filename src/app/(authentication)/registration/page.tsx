import RegistrationForm from "@/modules/features/AuthForm/RegistrationForm";
import Link from "next/link";

const Registration = () => {
  return (
    <div className="flex grow flex-col">
      <h1 className="mb-10 text-[3.5rem] text-gray-600">Sign up</h1>
      <RegistrationForm />
      <div className="text-md mt-10 flex justify-center text-gray-600">
        <p className="mr-2">Have an account?</p>
        <Link className="font-bold" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Registration;
