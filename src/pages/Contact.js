import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, AlertCircle, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        else if (!/^[a-zA-Z\s]+$/.test(value)) error = "Name can only contain letters and spaces";
        break;
      case "mobile":
        if (!value.trim()) error = "Mobile number is required";
        else if (!/^[0-9]{10}$/.test(value)) error = "Mobile number must be 10 digits";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email address";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validate field if it's been touched before
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    const newTouched = {};
    
    Object.keys(formData).forEach(key => {
      newTouched[key] = true;
      newErrors[key] = validateField(key, formData[key]);
    });
    
    setTouched(newTouched);
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=karun.rawat@ece.iitr.ac.in&su=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      setIsSubmitted(true);
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
        setIsSubmitted(false);
      }, 1500);
    }
  };

  const getInputClass = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border text-blue-900 placeholder-blue-400 focus:outline-none transition-all";
    
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200`;
    } else if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500 bg-green-50 focus:ring-2 focus:ring-green-200`;
    }
    
    return `${baseClass} border-blue-100 bg-white focus:ring-2 focus:ring-blue-200`;
  };

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
    
      {/* Contact Info */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white/90 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-indigo-800 mb-2">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Reach out for research opportunities, collaborations, or any queries.
            </p>
            <div className="flex flex-col gap-3 text-indigo-700 font-medium">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5" />
                <span>karun.rawat@ece.iitr.ac.in</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-5 h-5" />
                <span>+91 1332 228 4830</span>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <img
              src={require("../assets/karun-sir.png")}
              alt="Dr. Karun Rawat"
              className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-indigo-100 object-cover"
            />
            <div className="mt-2 text-indigo-900 font-semibold">Prof. Karun Rawat</div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-lg p-8 md:p-10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Join Our Research Team</h2>
            <p className="text-lg text-indigo-700 max-w-3xl mx-auto leading-relaxed">
              We are actively looking for motivated PhD students and research associates (RAs) to join our group! 
              Send us your CV and let's discuss the exciting possibilities ahead.
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClass("name")}
                    />
                    {errors.name && touched.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      name="mobile"
                      type="text"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClass("mobile")}
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.mobile}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClass("email")}
                    />
                    {errors.email && touched.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClass("subject")}
                    />
                    {errors.subject && touched.subject && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your research interests and background..."
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClass("message")}
                  />
                  {errors.message && touched.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  disabled={isSubmitted}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitted ? "Processing..." : "Send Application"}
                </button>
                <p className="text-sm text-indigo-700">
                  📎 This will open Gmail with your message. Please attach your CV manually.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/90 rounded-3xl shadow-lg p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-indigo-600" />
            <h3 className="text-2xl font-bold text-indigo-900">Visit Our Lab</h3>
          </div>
          <p className="text-indigo-800 mb-6 text-lg">
            Room 201 N, Dept. of ECE, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand – 247667
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.019139078529!2d77.89317777467417!3d29.863721875015127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36f987684d3%3A0x530fb6a5675855d3!2sDepartment%20of%20Electronics%20and%20Communication%20Engineering!5e0!3m2!1sen!2sin!4v1753441117183!5m2!1sen!2sin" 
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
              title="IIT Roorkee ECE Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;