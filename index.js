const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const todos = [
    {
        id: 1,
        title: 'clean',
        userId: 1,
        completed: false
    },
    {
        id: 2,
        title: 'walk',
        userId: 1,
        completed: true
    },
];

app.get('/', (req, res) => {
    return res.send('welcome home')
});


app.get('/todos', (req, res) => {
    return res.send(todos);
});


app.post('/todos', (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    return res.send(newTodo);
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    delete todos[index];
    return res.send("item deleted successfully")
})
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body.todo;
    console.log('id', id)
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    todos[index] = newData;
    return res.send("item updated successfully")
})
app.listen(80, () => { console.log('app is running on port 80') });