import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-600">About EduFund</h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At EduFund, we believe that education is a fundamental right, not a privilege. 
              Our mission is to bridge the education gap by connecting generous donors with 
              talented students from underprivileged backgrounds who lack the financial means 
              to pursue higher education.
            </p>
            <p className="mb-4">
              Through our innovative blockchain-powered platform, we're creating a transparent, 
              efficient ecosystem where every donation directly impacts a student's educational journey.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">For Students</h3>
                <p>Create a profile showcasing your academic achievements, aspirations, and financial needs. Connect with donors who believe in your potential.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">For Donors</h3>
                <p>Browse student profiles and contribute directly to their education. Track the impact of your donations and earn recognition for your generosity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">Blockchain Trust</h3>
                <p>Our platform uses blockchain technology to ensure transparency and accountability. Every donation is tracked and used exclusively for educational purposes.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">250+</h3>
                <p className="text-gray-700">Students Supported</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">$500K+</h3>
                <p className="text-gray-700">Funds Raised</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">95%</h3>
                <p className="text-gray-700">Graduation Rate</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="mb-6">
              EduFund is built by a passionate team of educators, technologists, and social entrepreneurs 
              who believe in the power of education to transform lives and communities.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {/* Team members would go here - placeholder for now */}
              {["CEO & Founder", "CTO", "Head of Operations", "Community Manager"].map((role, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-3"></div>
                  <h3 className="font-semibold">Team Member</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
            <p className="mb-6">
              Whether you're a student seeking support, a donor looking to make a difference, 
              or a partner organization interested in collaboration, we'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 mr-4">
                Apply as a Student
              </button>
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700">
                Become a Donor
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;