const {express,controller,validate}=require('../../includes/include');

const routes=express.Router();

routes.post('/post/citizen-data',validate,controller);

module.exports=routes;