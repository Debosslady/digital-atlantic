 "use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function JoinData() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const nigerDeltaStates = ["Bayelsa", "Rivers", "Delta", "Akwa Ibom", "Edo", "Cross River"];
  const interestAreas = ["Volunteer", "Donation", "Advocacy", "Media"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.state || !formData.interest) {
      setError("Please fill in all fields.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Send to backend/API
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", state: "", interest: "" });
  };

  return (
    <main className="min-h-screen bg-background py-2 md:py-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Join the Movement
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
            Sign Up to Make a Difference — or reach out to us directly
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT COLUMN – Join Form */}
          <div className="order-2 lg:order-1">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">
                  Thank You for Joining!
                </h3>
                <p className="text-green-700 mb-6">
                  We've received your information. You'll hear from us soon about how you can get involved.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary/80 font-medium underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-primary/10 space-y-6"
              >
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg text-center">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-foreground/80 mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-white"
                  >
                    <option value="">Select your state</option>
                    {nigerDeltaStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground/80 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-white"
                  >
                    <option value="">Select your interest</option>
                    {interestAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN – Contact Us + Connect With Us */}
          <div className="order-1 lg:order-2 space-y-12">
            {/* Contact Us */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Contact Us
              </h3>
              <ul className="space-y-5 text-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <span>
                    Port Harcourt, Rivers State<br />
                    Niger Delta Region, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                  <a href="tel:+234xxxxxxxxxx" className="hover:text-secondary transition-colors">
                    +234 (0) XXX XXX XXXX
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
                  <a
                    href="mailto:info@digitalatlanticrepublic.org"
                    className="hover:text-secondary transition-colors"
                  >
                    info@digitalatlanticrepublic.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-6 mb-6">
                <a
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-10 h-10" />
                </a>
                <a
                  href="https://wa.me/234xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-10 h-10" />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-10 h-10" />
                </a>
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-10 h-10" />
                </a>
              </div>
              <p className="text-foreground/70 text-sm">
                Follow us for real-time updates, live event coverage, and stories from the movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}