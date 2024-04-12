import React, { useState } from 'react';
import mastercardLogo from './mastercard.jpg';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handlePayment = () => {
    
    console.log('Payment processing...');
  };

  const expiryYears = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <div className="bg-grey">
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-black rounded-md shadow-md flex flex-wrap">
      <div className="w-full md:w-1/2 p-2">
      <h2 className="text-xl font-semibold text-white mb-2">Accepted Cards</h2>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-2">Visa</span>
          <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
        </h2>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-300 mb-1">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2 mb-2 md:mb-0">
            <label htmlFor="expiryMonth" className="block text-gray-300 mb-1">Expiry Month:</label>
            <select
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="">Select Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label htmlFor="expiryYear" className="block text-gray-300 mb-1">Expiry Year:</label>
            <select
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="">Select Year</option>
              {expiryYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-300 mb-1">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-1">Name on Card:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name on card"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2">
        <h2 className="text-xl font-semibold text-white mb-4">Billing Address</h2>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-300 mb-1">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-300 mb-1">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-gray-300 mb-1">ZIP Code:</label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Enter your ZIP code"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-300 mb-1">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
            required
            className="w-full px-3 py-2 border border-gray-700 bg-gray-200 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 md:ml-auto md:mt-0 mt-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Pay Now</button>
      </div>
    </div>
    </div>
  );
};

export default PaymentGateway;