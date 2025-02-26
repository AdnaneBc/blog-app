import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <SignIn signUpUrl="signup" />;
    </div>
  );
};

export default Login;
