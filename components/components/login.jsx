"use client";
import { getUserByEmail, login, getCurrentUser } from "@/lib/auth";

export default function LoginPage({ setToken }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Card Container */}
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={async (event) => {
            event.preventDefault();
            // Using FormData is generally safer/cleaner for TS than accessing targets directly
            const formData = new FormData(event.currentTarget);
            const email = formData.get("email");
            const password = formData.get("password");
            console.log(email, password);
            const val = await login(email, password);
            const payload = await getCurrentUser(val.token);
            setToken(val.token);
          }}
        >
          <div className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                {/* Optional Forgot Password Link */}
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Link (Optional) */}
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
