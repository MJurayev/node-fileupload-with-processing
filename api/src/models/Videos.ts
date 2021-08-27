import mongoose, { Model } from 'mongoose'

const videoSchema = new mongoose.Schema({
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    },
    playlist_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        default:'No Name'
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    },
    duration:{
        type:Number,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true
    }
})

const Video = mongoose.model('video',videoSchema)

export default Video