const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// App
const app = express();

// Middleware
const middleware = [
    morgan('dev'),
    cors(),
    express.urlencoded({ extended: true }),
    express.json()
];
app.use(middleware);

// Import Routers
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');

// App routes
app.use('/api', studentRouter);
app.use('/api/', teacherRouter);


// Database Connection
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'production') {
        console.log('Live Database Connection Successfully!')
    } else {
        mongoose.connect('mongodb://localhost:27017/Students', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => console.log('Local Database Connection Successfully'))
            .catch(err => console.error(err))
    }
})



