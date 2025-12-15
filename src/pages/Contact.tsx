import React, { useState } from "react";

/* ---------- Icons ---------- */
const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    {/* <title>Hollow-knight SVG Icon</title> */}
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24.636 18.777c-6.75 0-11.069 1.765-11.069 1.765s-3.61-2.433-3.483-5.327s3.61-5.884 3.595-6.44s-1.575-.255-1.639-1.098s1.988-2.513 1.161-3.101s-7.283 2.163-7.283 11.227c0 7.387 5.01 9.113 5.534 10.321c.312.718-.003 8.32 2.83 13.215c2.275 3.928 7.183 4.281 10.449 4.135c4.977-.222 9.796-1.463 11.02-6.154s.239-9.987.716-11.005s6.2-5.42 5.566-11.498c-.715-6.87-5.8-11.38-7.506-9.86c-.731.653 1.352 2.18 1.256 2.99s-1.176.16-1.351 1.002s3.578 3.515 3.212 6.663c-.366 3.15-2.036 4.612-2.862 4.66s-5.741-1.495-10.146-1.495"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.207 31.998c2.735-.462 4.122 2.256 4.132 4.403s-1.084 3.178-2.765 3.189s-3.515-1.497-3.634-4.284c-.12-2.788 1.367-3.156 2.267-3.308m13.008-.133c-2.735-.461-4.122 2.256-4.133 4.404s1.085 3.178 2.766 3.189s3.514-1.497 3.634-4.285s-1.367-3.156-2.267-3.308"
    />
  </svg>
);
const LocationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    {/* <title>Zood-location SVG Icon</title> */}
    <g
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23.955 30.007s-11.038-10.207.252-12.014c0 0 10.673 1.405-.252 12.014" />
      <path d="M14.763 4.784s25.583 2.029 27.943 29.61M4.92 14.261S5.911 39.5 34.162 42.94" />
      <path d="M4.814 33.535s.06-24.951 28.112-28.916M14.28 43.094s25.87-.627 28.684-28.714" />
    </g>
    <circle
      cx="24"
      cy="24"
      r="21.5"
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ACCESS_KEY = "4c607e09-8a9d-4a9f-81e5-b778734afe25";

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="relative min-h-screen w-full py-24 px-6 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/Images/Backgrounds/HK -  (17).jpg')`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-6xl font-bold text-white">Get in Touch</h1>
          <p className="text-neutral-300 max-w-lg">
            Have a project in mind or just want to say hi? I'm always open to
            new ideas and collaborations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-700">
              <div className="p-4 rounded-full bg-neutral-800/50">
                {LocationIcon}
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-neutral-400">Mysore, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-700">
              <div className="p-4 rounded-full bg-neutral-800/50">
                {EmailIcon}
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a
                  href="mailto:syedsaadahmed77@gmail.com"
                  className="text-neutral-400 hover:text-primary-400"
                >
                  syedsaadahmed77@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={onSubmit}
            className="p-10 rounded-3xl bg-neutral-900/60 border border-neutral-700 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-xl bg-neutral-800 border border-neutral-700 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 rounded-xl bg-neutral-800 border border-neutral-700 text-white"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full px-6 py-4 rounded-xl bg-neutral-800 border border-neutral-700 text-white resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold"
              >
                Send Message
              </button>

              {sent && (
                <p className="text-green-400 text-center mt-4">
                  Message sent successfully.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
