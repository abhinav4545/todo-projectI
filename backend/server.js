const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

let employees = [];
let currentId = 1;

app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.get('/api/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id == req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send('Employee not found');
  }
});

app.post('/api/employees', (req, res) => {
  const newEmployee = { ...req.body, id: currentId++ };
  employees.push(newEmployee);
  res.json(newEmployee);
});

app.delete('/api/employees/:id', (req, res) => {
  employees = employees.filter(e => e.id != req.params.id);
  res.send('Employee deleted');
});

app.listen(5000, () => console.log('Server running on port 5000'));
