"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === "signup" && !name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!email.trim() || !password.trim()) {
      setMessage("Please complete your email and password.");
      return;
    }

    setMessage(
      mode === "login"
        ? "Login submitted. Connect your backend/authentication service to enable real accounts."
        : "Account request submitted. Connect your backend/authentication service to enable real accounts."
    );
  };

  return (
    <>
      <Header />

      <main className="bg-[#f8f7f3]">
        <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              HS Fabrics
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              My account
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1100px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-12 lg:py-20">
          <div className="border border-black/10 bg-white p-6 sm:p-9">
            <div className="grid grid-cols-2 border-b border-black/10">
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setMessage("");
                }}
                className={`border-b-2 pb-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition ${
                  mode === "login"
                    ? "border-black text-black"
                    : "border-transparent text-black/35"
                }`}
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setMessage("");
                }}
                className={`border-b-2 pb-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition ${
                  mode === "signup"
                    ? "border-black text-black"
                    : "border-transparent text-black/35"
                }`}
              >
                Create account
              </button>
            </div>

            <form onSubmit={submit} className="mt-8">
              {mode === "signup" && (
                <Field
                  label="Full name"
                  value={name}
                  onChange={setName}
                  placeholder="Your name"
                />
              )}

              <div className={mode === "signup" ? "mt-5" : ""}>
                <Field
                  label="Email address"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>

              <div className="mt-5">
                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.17em]">
                    Password
                  </span>

                  <div className="relative mt-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Your password"
                      className="w-full border border-black/10 bg-[#f8f7f3] px-4 py-3.5 pr-20 text-sm"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-semibold uppercase tracking-[0.12em] text-black/40"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>
              </div>

              {mode === "login" && (
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    onClick={() =>
                      setMessage(
                        "Password recovery can be connected once authentication is added."
                      )
                    }
                    className="text-[9px] text-black/40 underline underline-offset-4"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {message && (
                <div className="mt-5 border border-black/10 bg-[#f1f0eb] px-4 py-3 text-xs leading-5 text-black/60">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full bg-black py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                {mode === "login" ? "Sign in" : "Create account"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
              Why create an account?
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Keep your HS Fabrics experience together.
            </h2>

            <div className="mt-8 space-y-6">
              <Benefit
                title="Track your orders"
                text="Keep your order information organized in one place."
              />

              <Benefit
                title="Save favourites"
                text="Your wishlist makes it easier to come back to pieces you love."
              />

              <Benefit
                title="Faster checkout"
                text="Save your details for a smoother future shopping experience."
              />
            </div>

            <Link
              href="/shop"
              className="mt-9 inline-flex w-fit border border-black px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em]"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[9px] font-semibold uppercase tracking-[0.17em]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border border-black/10 bg-[#f8f7f3] px-4 py-3.5 text-sm"
      />
    </label>
  );
}

function Benefit({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-l border-black/15 pl-5">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/50">{text}</p>
    </div>
  );
}