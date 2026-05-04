import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="mb-12 mt-6 flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 text-white shadow-2xl md:flex-row md:p-12">
      <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-gray-700 bg-gray-800 md:h-48 md:w-48 transition-transform hover:scale-105 duration-300">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="Blogger Avatar"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Alex</span> 👋
        </h1>
        <h2 className="mb-4 text-xl font-medium text-gray-300 sm:text-2xl">
          Frontend Developer & Tech Enthusiast
        </h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Welcome to my digital garden! I write about modern web development, UI/UX design, and my journey building software. Stick around to learn and grow together.
        </p>
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-800 p-3 text-gray-300 transition-all hover:-translate-y-1 hover:bg-[#1DA1F2] hover:text-white hover:shadow-lg"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-800 p-3 text-gray-300 transition-all hover:-translate-y-1 hover:bg-[#333] hover:text-white hover:shadow-lg"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-800 p-3 text-gray-300 transition-all hover:-translate-y-1 hover:bg-[#0077b5] hover:text-white hover:shadow-lg"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
