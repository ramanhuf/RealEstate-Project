
import PageContainer from "@/components/layout/PageContainer";
import { Separator } from "@/components/ui/separator";
import { Building, Users, Award, ThumbsUp } from "lucide-react";

const AboutPage = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-estate-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About PropertyHaven</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in the real estate journey, committed to helping you find the perfect property.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                PropertyHaven was founded in 2010 with a simple mission: to make real estate simple, transparent, and accessible for everyone. What started as a small team of passionate real estate enthusiasts has grown into a trusted name in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've helped thousands of clients find their dream homes, sell properties at the best possible price, and make smart investment decisions. Our approach combines local market expertise with personalized service to ensure our clients receive the attention and guidance they deserve.
              </p>
              <p className="text-gray-700">
                Today, PropertyHaven continues to innovate and evolve, staying ahead of market trends and leveraging technology to provide an exceptional real estate experience.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&auto=format&fit=crop"
                alt="Team meeting"
                className="rounded-lg shadow-md"
              />
              <div className="absolute -bottom-6 -left-6 bg-estate-secondary text-estate-dark p-4 rounded shadow-lg">
                <span className="block font-bold text-lg">Est. 2010</span>
                <span>13+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              At PropertyHaven, we're guided by our commitment to excellence and our core values that shape everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional real estate services that simplify the property journey, create meaningful connections, and help our clients achieve their real estate goals with confidence and ease.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted and innovative real estate company, known for our integrity, expertise, and unwavering commitment to client satisfaction across local and international markets.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-estate-primary bg-opacity-10 mb-4">
                <ThumbsUp className="h-6 w-6 text-estate-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and transparency in every interaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-estate-primary bg-opacity-10 mb-4">
                <Award className="h-6 w-6 text-estate-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to market analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-estate-primary bg-opacity-10 mb-4">
                <Users className="h-6 w-6 text-estate-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Client-Focused</h4>
              <p className="text-gray-600">
                We put our clients first, tailoring our services to meet their unique needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experienced professionals who lead our company and drive our vision forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop"
                alt="CEO"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Robert Williams</h3>
              <p className="text-estate-primary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                With over 20 years of real estate experience, Robert founded PropertyHaven with a vision to transform the industry.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop"
                alt="COO"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-estate-primary font-medium mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Sarah oversees all operations, ensuring that our clients receive exceptional service at every touchpoint.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop"
                alt="Sales Director"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">David Thompson</h3>
              <p className="text-estate-primary font-medium mb-2">Sales Director</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                David leads our sales team with his strategic approach and deep understanding of market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-estate-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-estate-secondary mb-2">1,200+</div>
              <p>Properties Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-estate-secondary mb-2">950+</div>
              <p>Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-estate-secondary mb-2">15+</div>
              <p>Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-estate-secondary mb-2">25+</div>
              <p>Expert Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it – here's what our clients have to say about working with PropertyHaven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with PropertyHaven was an absolute pleasure. They understood exactly what we were looking for and found us our dream home within our budget. The entire process was smooth and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Property Investor</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a property investor, I value expertise and market knowledge. The team at PropertyHaven consistently delivers outstanding results, providing valuable insights that have helped me make informed investment decisions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <p className="text-gray-600">
              We collaborate with trusted industry partners to provide comprehensive services to our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <Building className="h-16 w-16 text-gray-400" />
            </div>
            <div className="flex justify-center">
              <Building className="h-16 w-16 text-gray-400" />
            </div>
            <div className="flex justify-center">
              <Building className="h-16 w-16 text-gray-400" />
            </div>
            <div className="flex justify-center">
              <Building className="h-16 w-16 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default AboutPage;
