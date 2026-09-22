const express = require('express'); // import the Express library
const app = express(); // create an Express application instance
const bodyParser = require('body-parser'); // import body-parser middleware to parse request bodies
const cors = require('cors'); // import CORS middleware to allow cross-origin requests
const port = process.env.PORT || 5000; // choose the port from environment or default to 5000

// support parsing of application/json type POST data
app.use(bodyParser.json()); // parse JSON request bodies and assign to req.body

app.use(cors({
    origin: '*' // allow requests from any origin
}));

// support parsing of application/x-www-form-urlencoded form data
app.use(bodyParser.urlencoded({extended: true})); // parse form data and support nested objects

app.get('/', (req, res) => {
    res.send('Hello world'); // respond to GET / with plain text
})

const todoInMemory = [
    {
        id: 1,
        items: "Practise React",
        status: "Pending"
    },
    {
        id: 2,
        items: "Having Dinner",
        status: "Pending"
    },
    {
        id: 3,
        items: "Attending Lecture",
        status: "Improgress"
    }
];

app.get('/todos', (req, res) => {
    res.status(500); // set the HTTP status code to 500
    res.json({
        error: true,
        message: 'Invalid Input'
    });
    // The following code is commented out, so it does not run.
    // If uncommented, it would return the todo list.
    //  [
    //    {
    //     id:1,
    //     items:"Practise React",
    //     status: "Pending"
    // },
    // {
    //     id:2,
    //     items:"Having Dinner",
    //     status: "Pending"
    // },
    // {
    //     id:3,
    //     items:"Attending Lecture",
    //     status: "Improgress"
    // }
    // ]
})

const personInMemory = [{
    name: 'DEEPAK SINGH',
    email: 'iamdsingh10@gmail.com',
    mobile: '07318837985'
}]; // in-memory array storing person objects

app.get('/persons', (req, res) => {
    setTimeout(() => {
        res.status(200).json(personInMemory); // respond with the person list after 200ms
    }, 200);
});

app.get('/persons/:id', (req, res) => {
    const id = Number(req.params.id); // convert route parameter to a number
    res.status(200).json(personInMemory.filter(p => p.id)[0]);
    // This attempts to find a person by id, but the filter is incorrect.
    // It currently returns the first person with any truthy id property.
});

let personId = 2; // starting id for new persons
function isEmailAlreadyRegistered(emailToRegister) {
    return personInMemory.some(({email}) => email === emailToRegister);
    // return true if any person in memory already uses this email
}

app.post('/persons', (req, res) => {
    const { email, name, mobile } = req.body; // extract fields from request body

    if (!email || !name || !mobile) {
        return res.status(400).json({
            success: false,
            error: {
                errorCode: 'INVALID_INPUT',
                errorMessage: 'Name, email and mobile are required.'
            }
        });
    }

    if (isEmailAlreadyRegistered(email)) {
        return res.status(400).json({
            success: false,
            error: {
                errorCode: 'EMAIL_ALREADY_REGISTERED',
                errorMessage: `Email is ${email} already registered`
            }
        });
    }

    const person = {
        id: personId++, // assign a new id and then increment the counter
        name,
        email,
        mobile
    };

    personInMemory.push(person); // add the new person to the in-memory array

    return res.status(200).json({
        success: true,
        person
    });
});

app.post('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id); // get the todo id from the URL
    todoInMemory.some(todo => {
        if (todo.id === todoId) {
            todo.status = req.body.status; // update the todo status in memory
            return true; // stop iterating once the todo is updated
        }
        return false;
    });

    res.status(200);
    res.json({
        success: true,
        todoList: todoInMemory // return the full todo list after the update
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    // start the server and print the active port
})