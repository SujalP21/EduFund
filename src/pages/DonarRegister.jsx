import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProfileForm from '../components/ProfileForm.jsx';

const DonarRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    occupation: '',
    organization: '',
    interestsAreas: [],
    donationPreference: 'monthly',
    taxDocuments: null,
    profileImage: null,
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interestsAreas: [...formData.interestsAreas, value] });
    } else {
      setFormData({ 
        ...formData, 
        interestsAreas: formData.interestsAreas.filter(interest => interest !== value) 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Donor registration data:", formData);
    
    // After successful registration, redirect to donor dashboard
    navigate('/donor-dashboard');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center text-blue-600">Donor Registration</h1>
          <p className="text-center mb-6 text-gray-600">Join our community of changemakers who are transforming students' lives through education.</p>
          
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNum}
                  </div>
                  <div className="text-xs mt-1">
                    {stepNum === 1 ? 'Account' : stepNum === 2 ? 'Profile' : 'Preferences'}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-1 mt-4">
              <div 
                className="bg-blue-600 h-1 transition-all" 
                style={{ width: `${(step - 1) / 2 * 100}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="state">State/Province</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="zipCode">ZIP/Postal Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="organization">Organization (if applicable)</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="profileImage">Profile Image</label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    accept="image/*"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="bio">Short Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us a bit about yourself and why you're interested in supporting students."
                  ></textarea>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Donation Preferences</h2>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Areas of Interest</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {['STEM Education', 'Arts & Humanities', 'Vocational Training', 'Medical Education',
                      'Women in Education', 'Rural Education', 'Special Needs', 'First-Generation Students'].map(area => (
                      <div key={area} className="flex items-center">
                        <input
                          type="checkbox"
                          id={area}
                          name="interestsAreas"
                          value={area}
                          checked={formData.interestsAreas.includes(area)}
                          onChange={handleInterestChange}
                          className="mr-2"
                        />
                        <label htmlFor={area}>{area}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Donation Preference</label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="monthly"
                        name="donationPreference"
                        value="monthly"
                        checked={formData.donationPreference === 'monthly'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="monthly">Monthly Donation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="oneTime"
                        name="donationPreference"
                        value="oneTime"
                        checked={formData.donationPreference === 'oneTime'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="oneTime">One-time Donation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="quarterly"
                        name="donationPreference"
                        value="quarterly"
                        checked={formData.donationPreference === 'quarterly'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="quarterly">Quarterly</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-1" htmlFor="taxDocuments">Tax Documents (Optional)</label>
                  <input
                    type="file"
                    id="taxDocuments"
                    name="taxDocuments"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload any tax documents needed for donation receipts.</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsAgree"
                      name="termsAgree"
                      required
                      className="mr-2"
                    />
                    <label htmlFor="termsAgree" className="text-sm">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                  >
                    Complete Registration
                  </button>
                </div>
              </div>
            )}
          </form>
          
          <p className="text-center mt-6 text-sm">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonarRegister;