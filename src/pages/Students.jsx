import React, { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';
import { Link } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    educationLevel: 'all',
    fundingGoal: 'all',
    sortBy: 'recent'
  });

  useEffect(() => {
    // In a real app, this would fetch from your API
    const fetchStudents = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/students.json');
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        // For demo purposes, use mock data
        setStudents([
          {
            id: 1,
            name: 'Priya Sharma',
            age: 18,
            location: 'Mumbai',
            education: 'High School Graduate',
            goal: 'Computer Science Degree',
            story: 'First in my family to attend college. Passionate about AI and its applications.',
            fundingGoal: 400000,
            fundingReceived: 125000,
            image: 'https://placeholder.com/150'
          },
          {
            id: 2,
            name: 'Rahul Verma',
            age: 19,
            location: 'Delhi',
            education: 'High School Graduate',
            goal: 'Engineering Degree',
            story: 'Passionate about renewable energy solutions. Want to build sustainable tech.',
            fundingGoal: 350000,
            fundingReceived: 200000,
            image: 'https://placeholder.com/150'
          },
          {
            id: 3,
            name: 'Ananya Patel',
            age: 20,
            location: 'Ahmedabad',
            education: '2nd Year Undergraduate',
            goal: 'Complete Medical Degree',
            story: 'Working part-time to support education. Dream of serving in rural healthcare.',
            fundingGoal: 500000,
            fundingReceived: 275000,
            image: 'https://placeholder.com/150'
          }
        ]);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredStudents = students.filter(student => {
    if (filters.educationLevel !== 'all' && student.education !== filters.educationLevel) {
      return false;
    }
    
    if (filters.fundingGoal === 'below300k' && student.fundingGoal >= 300000) {
      return false;
    } else if (filters.fundingGoal === 'above300k' && student.fundingGoal < 300000) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'fundingNeeded') {
      const aRemaining = a.fundingGoal - a.fundingReceived;
      const bRemaining = b.fundingGoal - b.fundingReceived;
      return bRemaining - aRemaining;
    } else if (filters.sortBy === 'percentComplete') {
      const aPercent = (a.fundingReceived / a.fundingGoal) * 100;
      const bPercent = (b.fundingReceived / b.fundingGoal) * 100;
      return aPercent - bPercent;
    }
    // Default: most recent (by id for mock data)
    return b.id - a.id;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Students Seeking Support</h1>
        <Link 
          to="/student-register" 
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Register as Student
        </Link>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Education Level</label>
            <select 
              name="educationLevel" 
              value={filters.educationLevel}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Levels</option>
              <option value="High School Graduate">High School Graduate</option>
              <option value="2nd Year Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Funding Goal</label>
            <select 
              name="fundingGoal" 
              value={filters.fundingGoal}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Amounts</option>
              <option value="below300k">Below ₹300,000</option>
              <option value="above300k">Above ₹300,000</option>
            </select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Sort By</label>
            <select 
              name="sortBy" 
              value={filters.sortBy}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="recent">Most Recent</option>
              <option value="fundingNeeded">Funding Needed</option>
              <option value="percentComplete">Completion Percentage</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="spinner"></div>
          <p className="mt-4 text-gray-600">Loading students...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}

      {!loading && filteredStudents.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600">No students match your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Students;