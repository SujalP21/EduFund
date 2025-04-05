import React, { useState } from 'react';

const PaymentForm = ({ studentId, studentName, amount, onSuccess }) => {
  const [paymentAmount, setPaymentAmount] = useState(amount || 100);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setMessage('');

    // This would be replaced with actual payment gateway integration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage('Payment successful! Thank you for your contribution.');
      setIsProcessing(false);
      if (onSuccess) {
        onSuccess({
          studentId,
          amount: paymentAmount,
          date: new Date().toISOString(),
          transactionId: `TX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
        });
      }
    } catch (error) {
      setMessage('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Support {studentName || "this student"}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 mb-2">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            min="10"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
                className="mr-2"
              />
              UPI
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="wallet"
                checked={paymentMethod === 'wallet'}
                onChange={() => setPaymentMethod('wallet')}
                className="mr-2"
              />
              Wallet
            </label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="mb-6">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="mb-6">
            <label htmlFor="upiId" className="block text-gray-700 mb-2">
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              placeholder="name@ybl"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-2 px-4 ${
            isProcessing
              ? 'bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white font-bold rounded transition duration-200`}
        >
          {isProcessing ? 'Processing...' : `Donate $${paymentAmount}`}
        </button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded ${message.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2">
          <strong>100% of your donation</strong> goes directly to the student's education
        </p>
        <p>
          Your donation is secured by blockchain technology and will only be used for educational purposes.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;