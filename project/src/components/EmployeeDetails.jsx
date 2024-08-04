import React, { useState, useEffect } from 'react';

const EmployeeDetails = ({ match }) => {
  const [employee, setEmployee] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(`/api/employees/${id}`);
      const data = await response.json();
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country}, {employee.address.zip}</p>
      <h2>Contact Methods</h2>
      <ul>
        {employee.contactMethods.map((contact, index) => (
          <li key={index}>
            {contact.contact_method}: {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;
