import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from API or local storage
    const fetchEmployees = async () => {
      const response = await fetch('/api/employees');
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await fetch(`/api/employees/${id}`, { method: 'DELETE' });
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/add-employee">Add Employee</Link>
      {employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} ({employee.id})
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              <Link to={`/employee/${employee.id}`}>Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
