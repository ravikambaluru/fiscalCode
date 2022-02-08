const {server,cors,config,helmet, express}=require('./includes/include');

// using cors middleware for setting cors headers

server.use(cors());

// using helmet.js for improving security of application 
server.use(helmet());


// using express.json for parsing POST requests
server.use(express.json());

// including routes to be available on app.js
const routes=require('./routes/api/routes');

// setting routes on middleware for intercepting requests
server.use('/api/v1',routes);

// fetching server details from config files as per ENVIRONMENT
const serverInfo=config.get('serverDetails');



// starting server
server.listen(serverInfo.port,()=>{
    console.log("server started on port "+serverInfo.port);
});