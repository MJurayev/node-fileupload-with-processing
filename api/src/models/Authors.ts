import mongoose, { Model } from 'mongoose'

const videoSchema = new mongoose.Schema({
    playlists:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"playlists"
    }

})

const Video = mongoose.model('video',videoSchema)

export default Video