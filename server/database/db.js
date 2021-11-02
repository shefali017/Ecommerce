import mongoose from 'mongoose'



const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce.qp7hs.mongodb.net/ECOM?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log(error.message)
    }
    
}

export default Connection;