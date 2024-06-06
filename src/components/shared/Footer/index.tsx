import { Bell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import CustomButton from "../CustomButton";

const Footer = () => {
  return (
    <main className="w-full bg-slate-200 px-4 shadow-lg mt-10 py-4 -mb-2">
      <footer className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left mb-4 md:mb-3">
          <Link href="/">
            <p className="text-2xl font-semibold text-center">Startek AU</p>
          </Link>
          <p className="mt-4 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Startek x{" "}
            <Link
              href="https://github.com/pawandai"
              className="hover:underline"
            >
              Pawandai
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-800 mb-2">Subscribe to Our Newsletter:</p>
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border-2 mb-2 outline-none border-slate-700 focus:border-slate-950 rounded-md bg-transparent"
          />
          <CustomButton
            icon={<Bell />}
            title="Subscribe"
            otherStyles="bg-slate-300"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-slate-800 mb-2 md:text-left text-center">
            Follow Us:
          </p>
          <div className="flex space-x-4 pb-4">
            <Link
              href="https://www.facebook.com/starteknp"
              className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com/starteknp"
              target="_blank"
              className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/starteknp/"
              target="_blank"
              className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCZ9yNb94w_SFsz7rQ1LGkyw"
              target="_blank"
              className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400"
            >
              <Youtube size={24} />
            </Link>
          </div>
          <Link
            href="/policy"
            target="_blank"
            className="flex items-center justify-center hover:underline text-slate-800 md:justify-start"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
