import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: 'all',
    timeframe: 'all',
    status: 'all'
  });

  useEffect(() => {
    // In a real app, fetch transaction data from your API
    const fetchTransactions = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/transactions');
        // const data = await response.json();
        // setTransactions(data);
        
        // Mock data for demo
        setTimeout(() => {
          setTransactions([
            {
              id: 'TXN123456',
              date: '2023-04-02T14:30:00',
              amount: 5000,
              type: 'donation',
              status: 'completed',
              donor: {
                id: 1,
                name: 'Amit Patel'
              },
              student: {
                id: 3,
                name: 'Ananya Patel'
              },
              paymentMethod: 'UPI',
              transactionFee: 50
            },
            {
              id: 'TXN123455',
              date: '2023-04-01T09:15:00',
              amount: 10000,
              type: 'donation',
              status: 'completed',
              donor: {
                id: 2,
                name: 'Pradeep Sharma'
              },
              student: {
                id: 1,
                name: 'Priya Sharma'
              },
              paymentMethod: 'Credit Card',
              transactionFee: 250
            },
            {
              id: 'TXN123454',
              date: '2023-03-29T16:45:00',
              amount: 15000,
              type: 'disbursement',
              status: 'completed',
              student: {
                id: 2,
                name: 'Rahul Verma'
              },
              institution: 'Delhi Technical University',
              purpose: 'Tuition Fee',
              reference: 'SPRING2023'
            },
            {
              id: 'TXN123453',
              date: '2023-03-25T11:20:00',
              amount: 7500,
              type: 'donation',
              status: 'completed',
              donor: {
                id: 3,
                name: 'Meera Gupta'
              },
              student: {
                id: 2,
                name: 'Rahul Verma'
              },
              paymentMethod: 'Net Banking',
              transactionFee: 75
            },
            {
              id: 'TXN123452',
              date: '2023-03-20T08:30:00',
              amount: 12000,
              type: 'disbursement',
              status: 'pending',
              student: {
                id: 1,
                name: 'Priya Sharma'
              },
              institution: 'IIT Mumbai',
              purpose: 'Hostel Fee',
              reference: 'HOSTEL2023-1'
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTransactions = transactions.filter(transaction => {
    // Type filter
    if (filters.type !== 'all' && transaction.type !== filters.type) {
      return false;
    }
    
    // Status filter
    if (filters.status !== 'all' && transaction.status !== filters.status) {
      return false;
    }
    
    // Timeframe filter
    if (filters.timeframe !== 'all') {
      const txnDate = new Date(transaction.date);
      const now = new Date();
      
      if (filters.timeframe === 'today') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (txnDate < today) return false;
      } else if (filters.timeframe === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        if (txnDate < weekAgo) return false;
      } else if (filters.timeframe === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        if (txnDate < monthAgo) return false;
      }
    }
    
    return true;
  });

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Transaction History</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Transaction Type</label>
            <select 
              name="type" 
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Types</option>
              <option value="donation">Donations</option>
              <option value="disbursement">Disbursements</option>
            </select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Timeframe</label>
            <select 
              name="timeframe" 
              value={filters.timeframe}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700 mb-2">Status</label>
            <select 
              name="status" 
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="spinner"></div>
          <p className="mt-4 text-gray-600">Loading transactions...</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.type === 'donation' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {transaction.type === 'donation' ? 'Donation' : 'Disbursement'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      ₹{transaction.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.type === 'donation' ? (
                        <div>
                          <div>From: {transaction.donor.name}</div>
                          <div>To: <Link to={`/student-profile/${transaction.student.id}`} className="text-blue-600 hover:underline">{transaction.student.name}</Link></div>
                          <div>Via: {transaction.paymentMethod}</div>
                        </div>
                      ) : (
                        <div>
                          <div>To: <Link to={`/student-profile/${transaction.student.id}`} className="text-blue-600 hover:underline">{transaction.student.name}</Link></div>
                          <div>Institution: {transaction.institution}</div>
                          <div>Purpose: {transaction.purpose}</div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : transaction.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!loading && filteredTransactions.length === 0 && (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-600">No transactions match your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Transactions;