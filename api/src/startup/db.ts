import mongose from 'mongoose'

mongose.connect('mongodb://localhost:27017/video-service')
    .then((connection)=>{
        console.log("Db connected")
    })
    .catch((err)=>{
        console.log("DB error ", err)
    })