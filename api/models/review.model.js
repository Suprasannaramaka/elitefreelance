import { timeStamp } from 'console';
import mongoose from 'mongoose';
const {Schema} = mongoose;

const  reviewSchema = newSchema(
    {
    gigId:{
        type: String,
        required:true,
    },
    gigId:{
        type: String,
        required:true,
    },
    gigId:{
        type: String,
        required:true,
    },
    gigId:{
        type: String,
        required:true,
    },
    gigId:{
        type: String,
        required:true,
    },
    gigId:{
        type: String,
        required:true,
    },
},
{
    timeStamps:true,
}
);
export default mongoose.model('Review', reviewSchema);