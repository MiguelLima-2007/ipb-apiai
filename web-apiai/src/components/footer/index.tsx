"use client";

import { FaYoutube, FaSpotify } from "react-icons/fa6";
import { SiApplepodcasts } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-green-900 text-gray-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Texto */}
        <p className="text-sm whitespace-nowrap">
          © {new Date().getFullYear()} Igreja Presbiteriana de Apiaí. Design por{" "}
          <a href="https://github.com/MiguelLima-2007">Miguel Cunha de Lima</a>
        </p>

        {/* Ícones */}
        <div className="flex items-center gap-3">
          <a
            className="flex items-center justify-center w-12 h-12 border-2 border-white/60 rounded-full hover:bg-white/20 transition-colors"
            href="https://open.spotify.com/playlist/5dicUQQ4wzjOcWQeeFZobF"
          >
            <FaSpotify size={22} />
          </a>

          <a
            className="flex items-center justify-center w-12 h-12 border-2 border-white/60 rounded-full hover:bg-white/20 transition-colors"
            href="https://podcasts.apple.com/us/podcast/igreja-presbiteriana-de-apia%C3%AD/id1548307322?l=es-MX"
          >
            <SiApplepodcasts size={22} />
          </a>
          <a
            className="flex items-center justify-center w-12 h-12 border-2 border-white/60 rounded-full hover:bg-white/20 transition-colors"
            href="https://www.youtube.com/@ipbApiai"
          >
            <FaYoutube size={22} />
          </a>
          <a
            className="flex items-center justify-center w-12 h-12 border-2 border-white/60 rounded-full hover:bg-white/20 transition-colors"
            href="https://www.facebook.com/IPApiai/"
          >
            <FaFacebook size={22} />
          </a>
          <a
            className="flex items-center justify-center w-12 h-12 border-2 border-white/60 rounded-full hover:bg-white/20 transition-colors"
            href="https://www.instagram.com/ipb_apiai/"
          >
            <FiInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
