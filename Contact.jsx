import { useState } from "react";

export default function Contact() {
  const [fallbackEmail, setFallbackEmail] = useState(false);

  const handleEmailClick = () => {
    try {
      window.location.href =
        "mailto:sriramxyz2022@gmail.com?subject=Enquiry%20from%20CodexLabs%20Website&body=Hi%20CodexLabs%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20regarding...";
      
      // If the browser blocks mailto, show fallback after a short delay
      setTimeout(() => {
        setFallbackEmail(true);
        navigator.clipboard.writeText("sriramxyz2022@gmail.com").catch(() => {});
      }, 1000);
    } catch (err) {
      setFallbackEmail(true);
      navigator.clipboard.writeText("sriramxyz2022@gmail.com").catch(() => {});
    }
  };

  return (
    <section
      id="contact"
      className="px-8 py-16 text-center bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Contact Us
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
        Reach out for collaborations, training, or services. We’d love to hear from you!
      </p>

      {/* QR Code */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/codexlabs-qr.png"
          alt="CodexLabs QR Code"
          className="w-40 h-40 rounded-lg shadow-md"
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <a
          href="tel:+916304956378"
          className="text-lg text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          📞 +91 6304956378
        </a>
      </div>

      {/* Send Email Button */}
      <button
        onClick={handleEmailClick}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Send Email
      </button>

      {/* Fallback Email if button doesn't work */}
      {fallbackEmail && (
        <div className="mt-4 text-gray-800 dark:text-gray-200">
          📧 If the email button didn’t work, you can reach us at:{" "}
          <span className="font-semibold">sriramxyz2022@gmail.com</span>
          <br />
          (Copied to clipboard ✅)
        </div>
      )}
    </section>
  );
}
