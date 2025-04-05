import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext'; // You'll need to create this context

const DonorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Simulate fetching dashboard data
    setTimeout(() => {
      setDashboardData({
        donationsTotal: 155000,
        studentsSupported: 12,
        impactScore: 87,
        recentDonations: [
          { id: 1, student: 'Priya Sharma', amount: 15000, date: '2025-03-25', status: 'completed' },
          { id: 2, student: 'Rahul Mehra', amount: 20000, date: '2025-03-15', status: 'completed' },
          { id: 3, student: 'Arjun Patel', amount: 25000, date: '2025-02-28', status: 'completed' }
        ],
        supportedStudents: [
          { id: 1, name: 'Priya Sharma', image: '/api/placeholder/100/100', progress: 65, goal: 75000, program: 'Computer Science' },
          { id: 2, name: 'Rahul Mehra', image: '/api/placeholder/100/100', progress: 80, goal: 60000, program: 'Engineering' },
          { id: 3, name: 'Arjun Patel', image: '/api/placeholder/100/100', progress: 90, goal: 90000, program: 'Medicine' }
        ],
        impactUpdates: [
          { id: 1, student: 'Priya Sharma', date: '2025-03-20', update: 'Scored top marks in the mid-term examination.' },
          { id: 2, student: 'Rahul Mehra', date: '2025-02-15', update: 'Selected for a prestigious internship program.' },
          { id: 3, student: 'Arjun Patel', date: '2025-01-25', update: 'Published research paper in a national journal.' }
        ],
        rewards: [
          { id: 1, name: 'Bronze Donor', description: 'Donated to 5+ students', achieved: true },
          { id: 2, name: 'Silver Donor', description: 'Donated to 10+ students', achieved: true },
          { id: 3, name: 'Gold Donor', description: 'Donated to 25+ students', achieved: false },
          { id: 4, name: 'Impact Champion', description: 'Donated more than ₹100,000', achieved: true }
        ],
        recommendedStudents: [
          { id: 4, name: 'Zara Ahmed', image: '/api/placeholder/100/100', goal: 120000, raised: 70000, program: 'Agriculture' },
          { id: 5, name: 'Vikram Singh', image: '/api/placeholder/100/100', goal: 85000, raised: 40000, program: 'Data Science' }
        ]
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Donor Dashboard</h1>
              <p className="text-blue-100">Welcome back, {user?.name || 'Donor'}</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
              Make a New Donation
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-6 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'students'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('donations')}
              className={`px-6 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'donations'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Donations
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`px-6 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'impact'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Impact
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`px-6 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'rewards'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Rewards
            </button>
          </nav>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">Total Donations</h3>
                  <div className="text-3xl font-bold">₹{dashboardData.donationsTotal.toLocaleString()}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">Students Supported</h3>
                  <div className="text-3xl font-bold">{dashboardData.studentsSupported}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">Impact Score</h3>
                  <div className="text-3xl font-bold">{dashboardData.impactScore}</div>
                </div>
              </div>
              
              {/* Recent Donations */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dashboardData.recentDonations.map((donation) => (
                        <tr key={donation.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{donation.student}</td>
                          <td className="px-6 py-4 whitespace-nowrap">₹{donation.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{donation.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {donation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Recommended Students */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Recommended Students</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dashboardData.recommendedStudents.map((student) => (
                    <div key={student.id} className="border rounded-lg overflow-hidden flex">
                      <img src={student.image} alt={student.name} className="w-24 h-24 object-cover" />
                      <div className="p-4 flex-1">
                        <h3 className="font-semibold">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.program}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>₹{student.raised.toLocaleString()}</span>
                            <span>₹{student.goal.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-blue-600 h-1.5 rounded-full" 
                              style={{ width: `${(student.raised / student.goal) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'students' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Students You Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboardData.supportedStudents.map((student) => (
                  <div key={student.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center">
                        <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="ml-4">
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.program}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{student.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Goal: ₹{student.goal.toLocaleString()}
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                          View Profile
                        </button>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                          Donate Again
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'donations' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Donation History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashboardData.recentDonations.map((donation) => (
                      <tr key={donation.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{donation.student}</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹{donation.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{donation.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {donation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Receipt</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'impact' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
              
              {/* Impact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-blue-600 text-sm font-medium mb-1">Lives Changed</h3>
                  <div className="text-3xl font-bold">{dashboardData.studentsSupported}</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-blue-600 text-sm font-medium mb-1">Success Rate</h3>
                  <div className="text-3xl font-bold">100%</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-blue-600 text-sm font-medium mb-1">Impact Score</h3>
                  <div className="text-3xl font-bold">{dashboardData.impactScore}</div>
                </div>
              </div>
              
              {/* Student Updates */}
              <h3 className="text-lg font-semibold mb-4">Latest Updates from Students</h3>
              <div className="space-y-4">
                {dashboardData.impactUpdates.map((update) => (
                  <div key={update.id} className="bg-white p-4 border rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">{update.student}</span>
                      <span className="text-gray-500 text-sm">{update.date}</span>
                    </div>
                    <p className="mt-2 text-gray-700">{update.update}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'rewards' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Donor Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardData.rewards.map((reward) => (
                  <div 
                    key={reward.id} 
                    className={`border rounded-lg p-4 text-center ${
                      reward.achieved ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {reward.achieved ? (
                      <div className="text-green-500 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="text-gray-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    <h3 className="font-semibold">{reward.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                    {reward.achieved && (
                      <div className="mt-2 text-xs text-green-500 font-semibold">ACHIEVED</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;