import { MdAttachEmail, MdAddCall } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-400 flex items-center justify-center px-2">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="/hkh.png"
            alt="Contact"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="md:w-1/2 text-black">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

          <div className="space-y-6 text-lg">

            <div className="flex items-center gap-4">
              <MdAttachEmail className="text-3xl text-yellow-300" />
              <p>info@dimsolutions.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsappSquare className="text-3xl text-green-300" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <MdAddCall className="text-3xl text-blue-200" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapLocationDot className="text-3xl text-red-300" />
              <p>123 Tech Park, Chennai, Tamil Nadu - 600001</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;