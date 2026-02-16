// components/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageCircle, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Brand + About + Social Media */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-5">
                Digital Atlantic Republic
              </h3>
              <p className="text-white/80 leading-relaxed max-w-sm">
                A peaceful, constitutional movement for resource control, self-determination, and justice in the Niger Delta.
              </p>
            </div>

            {/* Connect With Us – now under the first column */}
            <div>
              <h4 className="text-xl font-heading font-semibold mb-5">
                Connect With Us
              </h4>
              <div className="flex items-center gap-6">
                <a
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-7 h-7" />
                </a>
                <a
                  href="https://wa.me/234xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-7 h-7" />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-7 h-7" />
                </a>
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
              <p className="mt-5 text-white/60 text-sm">
                Follow for updates, live events, and community stories.
              </p>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>
                  Port Harcourt, Rivers State<br />
                  Niger Delta Region, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+234xxxxxxxxxx" className="hover:text-accent transition-colors">
                  +234 (0) XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@digitalatlanticrepublic.org" className="hover:text-accent transition-colors">
                  info@digitalatlanticrepublic.org
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-accent transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-10 border-t border-white/20 text-center text-white/60 text-sm">
          <p>
            © 2026 Digital Atlantic Republic. All rights reserved.
          </p>
          <p className="mt-2">
            A peaceful movement for the people of Bayelsa, Rivers, Delta, Akwa Ibom, Edo, and Cross River.
          </p>
        </div>
      </div>
    </footer>
  );
}