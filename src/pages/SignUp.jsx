import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <SignUp signInUrl="login" />;
    </div>
  );
};

export default SignUpPage;
