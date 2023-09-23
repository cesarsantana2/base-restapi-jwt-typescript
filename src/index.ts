import dotenv from 'dotenv';

import app from './app';
import './database';


dotenv.config();
// console.log(process.env.TESTING);


function main() {

    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));    
}

main();
