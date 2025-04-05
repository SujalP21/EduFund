import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample featured students data
  const featuredStudents = [
    {
      id: 1,
      name: 'Priya Sharma',
      image: '/api/placeholder/300/300',
      school: 'Delhi Public School',
      goal: 75000,
      raised: 45000,
      story: 'Aspiring computer scientist from a rural village seeking support for her education.',
    },
    {
      id: 2,
      name: 'Arjun Patel',
      image: '/api/placeholder/300/300',
      school: 'St. Xavier\'s College',
      goal: 90000,
      raised: 60000,
      story: 'First-generation college student pursuing engineering to help his community.',
    },
    {
      id: 3,
      name: 'Zara Ahmed',
      image: '/api/placeholder/300/300',
      school: 'Bangalore University',
      goal: 120000,
      raised: 70000,
      story: 'Passionate about sustainable agriculture and rural development.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empower Dreams Through Education</h1>
          <p className="text-xl max-w-3xl mb-8">
            Connect with talented students from underprivileged backgrounds and fund their education.
            Your contribution today can change someone's tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/students" className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Support a Student
            </Link>
            <Link to="/student-register" className="bg-blue-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Apply for Scholarship
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How EduFund Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Students share their academic achievements, financial needs, and aspirations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fund Education</h3>
              <p className="text-gray-600">
                Donors contribute directly to students they want to support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Impact</h3>
              <p className="text-gray-600">
                Follow students' progress and see the real impact of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Students */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Students</h2>
            <Link to="/students" className="text-blue-600 hover:text-blue-800 font-medium">
              See All Students →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                  <p className="text-gray-600 mb-2">{student.school}</p>
                  <p className="text-gray-700 mb-4">{student.story}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{Math.round((student.raised / student.goal) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(student.raised / student.goal) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span>₹{student.raised.toLocaleString()}</span>
                      <span>₹{student.goal.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/student-profile/${student.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Support Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Students Supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50M+</div>
              <p className="text-blue-100">Funds Raised</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Graduation Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Student" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Rahul Mehra</h3>
                  <p className="text-gray-600">Computer Science, IIT Bombay</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Thanks to EduFund, I was able to attend one of India's top institutions. The platform not only provided financial support but also connected me with mentors who guided me throughout my academic journey."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Donor" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Sanjay Gupta</h3>
                  <p className="text-gray-600">Donor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've donated to several students through EduFund, and the transparency is remarkable. I can see exactly how my contributions are helping these students achieve their dreams. It's incredibly rewarding."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our community of donors and students working together to bridge the education gap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor-register" className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Become a Donor
            </Link>
            <Link to="/student-register" className="bg-blue-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Apply for Scholarship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;