import React, { useState } from 'react';

const AddEmployee = ({ history }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    country: '',
    zip: ''
  });
  const [contactMethods, setContactMethods] = useState([]);

  const handleAddContact = () => {
    setContactMethods([...contactMethods, { contact_method: '', value: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, address, contactMethods };
    await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    });
    history.push('/');
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <h2>Address</h2>
        <label>
          Line1:
          <input type="text" value={address.line1} onChange={(e) => setAddress({ ...address, line1: e.target.value })} />
        </label>
        <label>
          City:
          <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
        </label>
        <label>
          Country:
          <input type="text" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
        </label>
        <label>
          Zip:
          <input type="text" value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} />
        </label>
        <h2>Contact Methods</h2>
        {contactMethods.map((contact, index) => (
          <div key={index}>
            <label>
              Method:
              <select value={contact.contact_method} onChange={(e) => {
                const newContacts = [...contactMethods];
                newContacts[index].contact_method = e.target.value;
                setContactMethods(newContacts);
              }}>
                <option value="EMAIL">Email</option>
                <option value="PHONE">Phone</option>
              </select>
            </label>
            <label>
              Value:
              <input type="text" value={contact.value} onChange={(e) => {
                const newContacts = [...contactMethods];
                newContacts[index].value = e.target.value;
                setContactMethods(newContacts);
              }} />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddContact}>Add Contact Method</button>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
