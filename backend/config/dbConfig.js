import mongoose from 'mongoose';



const connectToDb = async() => {
    const url = await process.env.MONGO_URI;
    try {
        const connection = await mongoose.connect(
            url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }) 
            console.log(`MongoDb connected ${connection.connection.host}`)
    }
    catch (e) {
        console.log(e.message)
    }

}


export default connectToDb;