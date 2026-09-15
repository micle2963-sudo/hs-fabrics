"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type UserData = {
  name: string;
  email: string;
  profileImage?: string;
};

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
    >
      <path d="M4 8.5h3l1.5-2h7L17 8.5h3v10H4v-10Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
    >
      <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
    >
      <path d="M5 8.5h14l-1 12H6l-1-12Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
    >
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="m19 13.2 1.2.9-1.5 2.6-1.4-.5a7.5 7.5 0 0 1-1.5.9l-.2 1.5h-3l-.2-1.5a7.5 7.5 0 0 1-1.5-.9l-1.4.5-1.5-2.6 1.2-.9a7.3 7.3 0 0 1 0-1.8l-1.2-.9 1.5-2.6 1.4.5a7.5 7.5 0 0 1 1.5-.9l.2-1.5h3l.2 1.5a7.5 7.5 0 0 1 1.5.9l1.4-.5 1.5 2.6-1.2.9a7.3 7.3 0 0 1 0 1.8Z" />
    </svg>
  );
}

export default function AccountPage() {
  const [user, setUser] = useState<UserData | null>(null);

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editImage, setEditImage] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("hs-fabrics-user");
    const loggedIn = localStorage.getItem("hs-fabrics-logged-in");

    if (savedUser && loggedIn === "true") {
      try {
        const parsedUser: UserData = JSON.parse(savedUser);

        setUser(parsedUser);
        setEditName(parsedUser.name);
        setEditEmail(parsedUser.email);
        setEditImage(parsedUser.profileImage || "");
      } catch {
        localStorage.removeItem("hs-fabrics-user");
        localStorage.removeItem("hs-fabrics-logged-in");
      }
    }
  }, []);

  const notifyHeader = () => {
    window.dispatchEvent(
      new Event("hs-fabrics-user-updated")
    );
  };

  const openSettings = () => {
    if (!user) return;

    setEditName(user.name);
    setEditEmail(user.email);
    setEditImage(user.profileImage || "");

    setMessage("");
    setMessageType("");
    setSettingsOpen(true);
  };

  const cancelSettings = () => {
    if (!user) return;

    setEditName(user.name);
    setEditEmail(user.email);
    setEditImage(user.profileImage || "");

    setMessage("");
    setMessageType("");
    setSettingsOpen(false);
  };

  const handleProfileImage = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image.");
      setMessageType("error");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setMessage("Please choose an image smaller than 3MB.");
      setMessageType("error");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setEditImage(reader.result as string);

      setMessage("");
      setMessageType("");
    };

    reader.readAsDataURL(file);
  };

  const saveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    const cleanName = editName.trim();
    const cleanEmail = editEmail.trim().toLowerCase();

    if (!cleanName || !cleanEmail) {
      setMessage("Name and email cannot be empty.");
      setMessageType("error");
      return;
    }

    if (!cleanEmail.includes("@")) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    setSaving(true);
    setMessage("");

    const updatedUser: UserData = {
      name: cleanName,
      email: cleanEmail,
      profileImage: editImage || undefined,
    };

    localStorage.setItem(
      "hs-fabrics-user",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem(
      "hs-fabrics-logged-in",
      "true"
    );

    setUser(updatedUser);

    setEditName(updatedUser.name);
    setEditEmail(updatedUser.email);
    setEditImage(updatedUser.profileImage || "");

    notifyHeader();

    setMessage("Your changes have been saved successfully.");
    setMessageType("success");

    setSaving(false);

    setTimeout(() => {
      setSettingsOpen(false);
      setMessage("");
      setMessageType("");
    }, 1200);
  };

  const handleLogout = () => {
    localStorage.removeItem("hs-fabrics-logged-in");

    setUser(null);
    setSettingsOpen(false);
    setMessage("");
    setMessageType("");

    notifyHeader();
  };

  if (!user) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-[#f5f3ee] px-4 py-16">
          <div className="mx-auto max-w-md">
            <div className="rounded-[28px] border border-black/[0.08] bg-white p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#121212] text-[#D4C29A]">
                <SettingsIcon />
              </div>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B8975A]">
                HS Fabrics
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-[#121212]">
                Account Login Required
              </h1>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Please login or create an account to view your
                profile.
              </p>

              <Link
                href="/account"
                className="mt-7 block rounded-xl bg-[#121212] px-5 py-3.5 text-center text-sm font-medium text-white transition hover:bg-[#292929]"
              >
                Go to Account
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const initial =
    user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f3ee] px-4 py-10 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">

          {/* Page heading */}
          <div className="mb-8 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#B8975A]">
              HS Fabrics
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#121212] sm:text-4xl">
              My Account
            </h1>

            <p className="mt-2 text-sm text-black/45">
              Your personal space at HS Fabrics.
            </p>
          </div>

          {/* Main account card */}
          <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

            {/* Dark premium profile header */}
            <div className="relative overflow-hidden bg-[#121212] px-6 py-10 text-center sm:px-10 sm:py-12">

              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#B8975A]/20" />

              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-[#B8975A]/10" />

              {/* Profile image */}
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-[3px] border-[#D4C29A] bg-[#202020] shadow-[0_0_0_7px_rgba(184,151,90,0.08)] sm:h-32 sm:w-32">

                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-[#D4C29A]">
                    {initial}
                  </div>
                )}
              </div>

              <h2 className="relative mt-6 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Welcome, {user.name}!
              </h2>

              <p className="relative mt-2 text-sm text-white/50">
                {user.email}
              </p>

              {/* Active badge */}
              <div className="relative mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4C29A] text-[#121212]">
                  <CheckIcon />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4C29A]">
                  Account Active
                </span>
              </div>
            </div>

            {/* Account content */}
            <div className="p-6 sm:p-9">

              {/* Personal details */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B8975A]">
                    Personal Details
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#121212]">
                    Profile Information
                  </h3>
                </div>

                {/* Settings button */}
                <button
                  type="button"
                  onClick={openSettings}
                  className="flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-xs font-medium text-[#121212] transition hover:border-[#B8975A]/50 hover:bg-[#faf8f2]"
                >
                  <SettingsIcon />
                  <span className="hidden sm:inline">
                    Settings
                  </span>
                </button>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-black/[0.07] bg-[#f8f6f1] p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/40">
                    Full Name
                  </p>

                  <p className="mt-2 text-base font-medium text-[#121212]">
                    {user.name}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/[0.07] bg-[#f8f6f1] p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/40">
                    Email Address
                  </p>

                  <p className="mt-2 break-all text-base font-medium text-[#121212]">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Quick actions */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <Link
                  href="/wishlist"
                  className="group flex items-center justify-between rounded-2xl border border-black/[0.07] bg-white p-5 transition hover:border-[#B8975A]/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f1e8]">
                      <HeartIcon />
                    </span>

                    <div>
                      <p className="font-medium text-[#121212]">
                        Wishlist
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        View your saved items
                      </p>
                    </div>
                  </div>

                  <span className="text-black/30 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/shop"
                  className="group flex items-center justify-between rounded-2xl border border-black/[0.07] bg-white p-5 transition hover:border-[#B8975A]/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f1e8]">
                      <BagIcon />
                    </span>

                    <div>
                      <p className="font-medium text-[#121212]">
                        Shop Collection
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        Explore latest styles
                      </p>
                    </div>
                  </div>

                  <span className="text-black/30 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Security */}
              <div className="mt-8 rounded-2xl border border-[#B8975A]/20 bg-[#faf8f2] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#121212] text-[#D4C29A]">
                    <CheckIcon />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#121212]">
                      Your account is secure
                    </p>

                    <p className="mt-1 text-xs leading-5 text-black/45">
                      Your profile information is saved securely on
                      this device for a smoother HS Fabrics shopping
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom actions */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <Link
                  href="/shop"
                  className="rounded-xl bg-[#121212] px-5 py-3.5 text-center text-sm font-medium text-white transition hover:bg-[#292929]"
                >
                  Continue Shopping
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-black/15 px-5 py-3.5 text-sm font-medium text-[#121212] transition hover:bg-[#121212] hover:text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* ================= SETTINGS MODAL ================= */}
      {settingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[28px] border border-black/10 bg-white shadow-2xl">

            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-black/[0.07] px-6 py-5 sm:px-7">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B8975A]">
                  HS Fabrics
                </p>

                <h2 className="mt-1 text-xl font-semibold text-[#121212]">
                  Account Settings
                </h2>
              </div>

              <button
                type="button"
                onClick={cancelSettings}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-lg text-black/60 transition hover:bg-black/5"
                aria-label="Close settings"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={saveSettings}
              className="p-6 sm:p-7"
            >

              {/* Profile picture */}
              <div className="mb-7">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                  Profile Picture
                </p>

                <div className="flex items-center gap-5 rounded-2xl bg-[#f8f6f1] p-4">

                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#D4C29A] bg-[#121212]">

                    {editImage ? (
                      <img
                        src={editImage}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-[#D4C29A]">
                        {initial}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="profile-picture"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#121212] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#292929]"
                    >
                      <CameraIcon />
                      Change Photo
                    </label>

                    <input
                      id="profile-picture"
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImage}
                      className="hidden"
                    />

                    <p className="mt-2 text-[10px] text-black/40">
                      JPG, PNG or WEBP · Max 3MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="settings-name"
                  className="mb-2 block text-sm font-medium text-[#121212]"
                >
                  Full Name
                </label>

                <input
                  id="settings-name"
                  type="text"
                  value={editName}
                  onChange={(e) =>
                    setEditName(e.target.value)
                  }
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B8975A] focus:ring-2 focus:ring-[#B8975A]/15"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="settings-email"
                  className="mb-2 block text-sm font-medium text-[#121212]"
                >
                  Email Address
                </label>

                <input
                  id="settings-email"
                  type="email"
                  value={editEmail}
                  onChange={(e) =>
                    setEditEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B8975A] focus:ring-2 focus:ring-[#B8975A]/15"
                />
              </div>

              {/* Info */}
              <div className="mb-6 rounded-xl border border-[#B8975A]/20 bg-[#faf8f2] p-4">
                <p className="text-xs leading-5 text-black/50">
                  Changes will only be applied when you press
                  <span className="font-semibold text-[#121212]">
                    {" "}
                    Save Changes
                  </span>
                  .
                </p>
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mb-5 rounded-xl px-4 py-3 text-center text-sm ${
                    messageType === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Save / Cancel */}
              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={cancelSettings}
                  disabled={saving}
                  className="rounded-xl border border-black/15 px-4 py-3.5 text-sm font-medium text-[#121212] transition hover:bg-black hover:text-white disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#121212] px-4 py-3.5 text-sm font-medium text-white transition hover:bg-[#292929] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}