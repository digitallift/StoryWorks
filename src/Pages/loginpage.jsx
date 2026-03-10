import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-[#091323] min-h-screen pt-19 flex bg-black text-white">
      {/* Left Section */}
      <div className="hidden md:flex bg-[#091323] w-1/2 items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="flex justify-center mb-6">
            <div className="border border-orange-500 p-3 rounded-md">
              <span className="text-orange-500 font-bold">SW</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold">
            Hire Top <span className="text-orange-500">Creators</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Find, manage, and collaborate with the best freelance creators for
            your brand.
          </p>

          <div className="flex justify-center gap-10 mt-10 text-center">
            <div>
              <h3 className="text-orange-500 font-semibold">1K+</h3>
              <p className="text-md text-gray-400">Creators</p>
            </div>

            <div>
              <h3 className="text-orange-500 font-semibold">Fast</h3>
              <p className="text-md text-gray-400">Hiring</p>
            </div>

            <div>
              <h3 className="text-orange-500 font-semibold">Project</h3>
              <p className="text-md text-gray-400">Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-[#091323] flex w-full md:w-1/2 py-5 items-center justify-center px-6">
        <div className="w-full max-w-xl ">
          <p className="text-orange-400 text-md mb-2">Business Account</p>

          <h2 className="text-3xl font-semibold mb-2">Welcome back</h2>
          <p className="text-gray-400 mb-6">Sign in to manage your projects</p>

          {/* Google Login */}
          <button className="w-full border border-gray-700 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-900 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full mt-2 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Sign In */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition">
            Sign In
          </button>

          {/* Footer Links */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Don't have an account?{" "}
            <span className="text-orange-500 cursor-pointer">Sign up</span>
          </p>

          <p className="text-center text-gray-500 mt-2 text-sm">
            Are you a creator?{" "}
            <span className="text-orange-500 cursor-pointer">Sign in here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
