import React, { useState, useEffect } from 'react';

// Define the Customer interface
interface Customer {
  id?: number;  // Optional, depending on whether the backend provides it
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerForm = () => {
  const [formData, setFormData] = useState<Customer>({ name: '', email: '', phone: '', address: '' });
  const [customers, setCustomers] = useState<Customer[]>([]); // Explicitly define the type

  useEffect(() => {
    fetch('/api/customers', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())
      .then((data: Customer[]) => setCustomers(data)) // Ensure TypeScript knows this is a Customer array
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newCustomer: Customer = await response.json(); // Get the actual stored customer data
        setCustomers([...customers, newCustomer]); // Append with correct type
        setFormData({ name: '', email: '', phone: '', address: '' }); // Reset form
      } else {
        console.error('Failed to add customer');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <h3>Customers</h3>
      <ul>
        {customers.map((customer, index) => (
          <li key={customer.id || index}>
            {customer.name} - {customer.email} - {customer.phone} - {customer.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerForm;