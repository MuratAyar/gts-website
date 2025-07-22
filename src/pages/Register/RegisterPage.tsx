// src/pages/RegisterPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/GTS_logo.png";
import banner from "../../assets/login_banner.jpg";
import googleIcon from "../../assets/google-icon.png";

/**
 * Registration page – tweaked vertical spacing so header, form and
 * footer are visible on a single viewport with minimal gaps.
 */
const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [navbarH, setNavbarH] = useState(0);
  const [footerH, setFooterH] = useState(0);

  const navigate = useNavigate();

  // measure header & footer heights (once)
  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    setNavbarH(nav ? nav.getBoundingClientRect().height : 0);
    setFooterH(footer ? footer.getBoundingClientRect().height : 0);
  }, []);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:5000/api/register", {
        name: fullName,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/feed");
    } catch (err: any) {
      const msg = err.response?.data?.error ?? "Registration failed. Please try again.";
      setError(msg);
    }
  };

  // vertical padding (16px top & bottom) in addition to header / footer height
  const vPad = 16; // px

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden bg-brand-900"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: navbarH + vPad,
        paddingBottom: footerH + vPad,
        minHeight: `calc(100vh - ${navbarH + footerH}px)`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-brand-900/70 backdrop-blur-sm" />

      {/* form box */}
      <div className="relative z-10 mb-4 w-full max-w-md rounded-lg bg-brand-800/80 p-6 shadow-lg ring-1 ring-black/10">
        <div className="space-y-6">
          {/* logo + title */}
          <a href="/" className="flex items-center text-2xl font-semibold text-white">
            <img src={logo} alt="GTS" className="mr-2 h-8 w-8" />
            GTS&nbsp;Cranes
          </a>

          <h1 className="text-2xl font-bold text-white md:text-3xl">Create your account</h1>

          {error && (
            <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">{error}</div>
          )}

          <form className="space-y-4" onSubmit={registerUser}>
            {/* full name */}
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>

            {/* password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>

            {/* confirm */}
            <div>
              <label htmlFor="confirm" className="mb-2 block text-sm font-medium text-white">
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>

            {/* terms */}
            <label className="flex items-center gap-2 text-sm text-white/80">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-white/30 bg-brand-800 focus:ring-brand-500"
              />
              I agree to the&nbsp;
              <a href="/terms-and-conditions" className="text-brand-400 hover:underline">
                Terms &amp; Conditions
              </a>
            </label>

            {/* sign up btn */}
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              Sign up
            </button>

            {/* Google */}
            <a
              href="http://localhost:5000/api/auth/google"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <img src={googleIcon} alt="Google" className="h-5 w-5" />
              Sign up with Google
            </a>

            <p className="text-center text-sm text-white/80">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-brand-400 hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;