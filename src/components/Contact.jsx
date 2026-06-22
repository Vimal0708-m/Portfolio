import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_1due30c";
const EMAILJS_TEMPLATE_ID = "template_1lnnmmb";
const EMAILJS_PUBLIC_KEY = "dCKjMfpnG6ll7KgHJ";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact submit clicked", {
      form: form.current,
      data: formData,
    });

    // Check if credentials are configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error("❌ EmailJS credentials are missing. Check Contact.jsx.");
      console.error(
        "📋 Setup Guide:\n1. Go to emailjs.com\n2. Copy Public Key, Service ID, Template ID\n3. Make sure Contact.jsx values are set correctly",
      );
      return;
    }

    if (!form.current) {
      toast.error("❌ Contact form not found. Refresh the page.");
      console.error("Contact form ref is null.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS result", result);

      if (result.text === "OK") {
        toast.success("✅ Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Check browser console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "murmuv776@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <Toaster position="top-center" />
      <section
        id="contact"
        className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Let's create something amazing together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-linear-to-r ${info.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer group`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl sm:text-3xl shrink-0 group-hover:scale-125 transition-transform">
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm opacity-90">
                        {info.label}
                      </p>
                      <p className="text-base sm:text-lg font-semibold truncate">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <div className="pt-4 sm:pt-8">
                <h4 className="text-lg sm:text-xl font-semibold mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={18} className="sm:scale-100 scale-90" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 border-2 border-transparent rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:bg-slate-600"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-300"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 border-2 border-transparent rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:bg-slate-600"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-300"></div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 border-2 border-transparent rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:bg-slate-600 resize-none"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-300"></div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
