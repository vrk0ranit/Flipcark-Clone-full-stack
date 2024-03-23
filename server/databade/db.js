import mongoose from 'mongoose'

export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce.s3xqv9u.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce`
    try {
       await  mongoose.connect(URL, {  useNewUrlParser: true });
       console.log(`Database connected succesfully`);
    } catch (error) {
        console.log(`Error while connecting with the database`, error.message);
    }
}

export default Connection;