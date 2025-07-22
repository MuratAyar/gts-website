// src/pages/LoginPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/GTS_logo.png";
import banner from "../../../assets/login_banner.jpg";
import googleIcon from "../../../assets/google-icon.png";

/**
 * Login page – lighter spacing: form biraz yukarı, footer sayfanın
 * altında kalacak şekilde ekstra alt marjin eklendi.
 */
const LoginPage: React.FC = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [navbarH, setNavbarH]   = useState(0);
  const [footerH, setFooterH]   = useState(0);
  const navigate = useNavigate();

  // measure header height (footer serbestçe aşağı kaysın)
  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (nav) setNavbarH(nav.getBoundingClientRect().height);
    if (footer) setFooterH(footer.getBoundingClientRect().height);
  }, []);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/feed");
    } catch (err: any) {
      const msg = err.response?.data?.error ?? "Login failed. Please try again.";
      setError(msg);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-start overflow-hidden bg-brand-900"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: navbarH + 16,          // header kadar + 1 rem
        paddingBottom: footerH + 160,      // footer + ekstra 10 rem; ilk ekranda görünmez
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-brand-900/70 backdrop-blur-sm" />

      {/* form */}
      <div className="relative z-10 mb-24 w-full max-w-md rounded-lg bg-brand-800/75 p-6 shadow-lg ring-1 ring-black/10">
        <div className="space-y-6">
          <a href="/" className="flex items-center text-2xl font-semibold text-white">
            <img src={logo} alt="GTS" className="mr-2 h-8 w-8" />
            GTS&nbsp;Cranes
          </a>
          <h1 className="text-2xl font-bold text-white md:text-3xl">Sign in to your account</h1>

          {error && (
            <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">{error}</div>
          )}

          <form className="space-y-4" onSubmit={loginUser}>
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
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>
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
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-white/80">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-white/30 bg-brand-800 focus:ring-brand-500" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              Sign in
            </button>

            <a
              href="http://localhost:5000/api/auth/google"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <img src={googleIcon} alt="Google" className="h-5 w-5" /> Sign in with Google
            </a>

            <p className="text-center text-sm text-white/80">
              Don’t have an account yet?{' '}
              <a href="/register" className="font-semibold text-brand-400 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
