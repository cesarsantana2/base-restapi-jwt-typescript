import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// const MONGO_KEY = MONGO_PASSWORD;
const MONGO_ADDRESS = process.env.MONGO_URL || "backup";
mongoose.connect(MONGO_ADDRESS, {
    writeConcern: {
        w: 'majority'
      }
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));    