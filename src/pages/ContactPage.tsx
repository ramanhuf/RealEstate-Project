
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/data";
import { toast } from "sonner";
import { PhoneCall, Mail, MapPin, Clock, Send } from "lucide-react";

interface LocationState {
  agent?: string;
}

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agent: "",
  });
  
  const [loading, setLoading] = useState(false);

  // Extract agent from location state if available
  useEffect(() => {
    const state = location.state as LocationState;
    if (state && state.agent) {
      setFormData(prev => ({ ...prev, agent: state.agent }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agent: formData.agent, // Keep the agent selection
      });
    }, 1500);
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-estate-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with all your real estate needs.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to buy, sell, or just have questions about the real estate market, our team is ready to assist you. Reach out using any of the contact methods below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-estate-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-estate-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      1234 Real Estate Ave<br />
                      Metro City, CA 92101
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-estate-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <PhoneCall className="h-6 w-6 text-estate-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567<br />
                      Sales: (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-estate-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-estate-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@propertyhaven.com<br />
                      sales@propertyhaven.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-estate-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-estate-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 mb-6">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.6043457909044!2d-117.16117138471126!3d32.7157391806624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954abbc2cf3ed%3A0xb5f966e8a54450de!2sDowntown%20San%20Diego%2C%20San%20Diego%2C%20CA%2092101!5e0!3m2!1sen!2sus!4v1649458149368!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="agent" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Agent (Optional)
                  </label>
                  <select
                    id="agent"
                    name="agent"
                    value={formData.agent}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                  >
                    <option value="">Any Agent</option>
                    {agents.map(agent => (
                      <option key={agent.id} value={agent.name}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-estate-primary hover:bg-estate-accent text-white flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ContactPage;
