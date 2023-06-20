const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/user');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();
        // Routes
        this.routes()
    }

    middlewares() {
        // CORS
        this.app.use(cors());
           
        // Read and Parse Body
        this.app.use(express.json());

        // Public Directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }

}



module.exports = Server;