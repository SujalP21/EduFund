import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // In a real app, fetch student data from your API
    const fetchStudentData = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/students/${id}`);
        // const data = await response.json();
        // setStudent(data);
        
        // Mock data for demo
        setTimeout(() => {
          setStudent({
            id: parseInt(id),
            name: 'Priya Sharma',
            age: 18,
            location: 'Mumbai, Maharashtra',
            education: 'High School Graduate',
            school: 'Delhi Public School',
            goal: 'Bachelor of Technology in Computer Science',
            targetInstitution: 'Indian Institute of Technology, Mumbai',
            story: 'I come from a family of farmers in rural Maharashtra. Despite financial challenges, Ive always excelled academically. I scored in the top 1% of my state board exams and have been selected for admission to IIT Mumbai  Computer Science program. However, my family cannot afford the tuition and living expenses. My dream is to become a software engineer and create technology that can help rural communities like mine. Your support will help me become the first person in my family to receive higher education.',
            achievements: [
              'National Merit Scholarship recipient',
              'State-level Mathematics Olympiad Gold Medalist',
              'School topper for 3 consecutive years',
              'Developed a mobile app for local farmers market'
            ],
            fundingGoal: 400000,
            fundingReceived: 125000,
            supporters: 28,
            image: 'https://placeholder.com/150',
            timeline: 'Admission deadline: June 30, 2023'
          });
          
          setUpdates([
            {
              id: 1,
              date: '2023-02-15',
              title: 'Admission Confirmed!',
              content: 'I have received my official admission letter from IIT Mumbai! Thank you to everyone who has supported me so far. I am now working on securing enough funds to pay the first semester fees.'
            },
            {
              id: 2,
              date: '2023-01-20',
              title: 'Cleared Entrance Examination',
              content: 'I am excited to share that I have cleared the IIT-JEE Advanced examination with a rank that qualifies me for Computer Science program. This is a big step toward my dream!'
            }
          ]);
          
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleDonateClick = () => {
    setShowDonationForm(!showDonationForm);
  };

  const calculateProgress = () => {
    if (!student) return 0;
    const percentage = (student.fundingReceived / student.fundingGoal) * 100;
    return Math.min(percentage, 100);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="spinner mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading student profile...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Student Not Found</h2>
        <p className="mb-6">The student profile you're looking for doesn't exist or has been removed.</p>
        <Link to="/students" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
          Browse All Students
        </Link>
      </div>
    );
  }

  const progressPercentage = calculateProgress();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/students" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Students
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-32 h-32 rounded-full bg-white p-1 mb-4 md:mb-0 md:mr-6">
              <img 
                src={student.image || "/api/placeholder/128/128"} 
                alt={student.name} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{student.name}</h1>
              <p className="text-indigo-100">{student.age} years • {student.location}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-indigo-900 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  {student.education}
                </span>
                <span className="bg-indigo-900 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  {student.goal}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Funding Goal: ₹{student.fundingGoal.toLocaleString()}</h2>
            <div className="bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-blue-600 h-4 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>₹{student.fundingReceived.toLocaleString()} raised ({progressPercentage.toFixed(1)}%)</span>
              <span>₹{(student.fundingGoal - student.fundingReceived).toLocaleString()} to go</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Supported by {student.supporters} donors
            </div>
          </div>

          <div className="mb-8">
            <button 
              onClick={handleDonateClick}
              className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
            >
              Support {student.name}'s Education
            </button>
          </div>

          {showDonationForm && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
              <PaymentForm studentId={student.id} studentName={student.name} />
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <p className="text-gray-700 whitespace-pre-line">{student.story}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Educational Goal</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Current Education:</h3>
                <p>{student.education} at {student.school}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Target Education:</h3>
                <p>{student.goal} at {student.targetInstitution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Timeline:</h3>
                <p>{student.timeline}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <ul className="list-disc pl-5 space-y-2">
              {student.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Updates</h2>
            {updates.length > 0 ? (
              <div className="space-y-4">
                {updates.map(update => (
                  <div key={update.id} className="border-l-4 border-blue-600 pl-4">
                    <div className="text-sm text-gray-500">
                      {new Date(update.date).toLocaleDateString('en-US', {
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="font-semibold">{update.title}</h3>
                    <p className="text-gray-700">{update.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No updates yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;