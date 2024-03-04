import React from "react";
import FormField from "../../components/formfield";
import Logo from "../../components/logo";
import Button from "../../components/button";

function RegisterPage() {
  return (
    <div
      className="min-h-screen
      bg-[#121212] 
      flex justify-center 
      items-center"
    >
      <div
        className="mx-auto
       w-full flex justify-center items-center"
      >
        <div
          className="mt-5 
        flex w-full flex-col 
        items-start 
        justify-start p-6 
        md:w-1/2 lg:px-10"
        >
          {/* ... other content ... */}
          <div className="w-full">
            <Logo />
            <h1 className="mb-2 text-5xl font-extrabold text-white">
              Register
            </h1>
            {/* ... other content ... */}
            <FormField label="First name" placeholder="First name" />
            <FormField label="Last name" placeholder="Last name" />
            <FormField label="Email" placeholder="Email" />
            <FormField label="Username" placeholder="Username" />
            <FormField
              label="Password"
              placeholder="Password"
              type="password"
            />
            <Button btnname="Create Account" />
            {/* ... other content ... */}
            <p className="my-2 text-sm font-light text-white mt-5">
              Already registered?
              <span className="mx-2 cursor-pointer font-bold hover:underline">
                Sign in to your account
              </span>
            </p>
          </div>
          {/* ... other content ... */}
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
