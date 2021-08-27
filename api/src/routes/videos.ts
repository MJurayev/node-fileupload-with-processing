import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import Video from "../models/Videos";
import Busboy from 'busboy'
import fs from 'fs'
import path from "path";
const router:Router = Router()


router.get('/', async (req:Request, res:Response) => {
    const videos = await Video.find({})
    return res.status(200).json({
        success:true,
        body:videos
    })
})


router.post('/', async (req:Request, res:Response) => {``
    const busboy = new Busboy({ headers:req.headers })
    const dateNow =( Date.now() + Math.random()).toString()
    const uploadDir:string = "uploads/videos"
    
    busboy.on('file', (fieldname, file, filename,encoding, mimetype ) => {
        const videoPath = `${uploadDir}/${dateNow}_${filename}`
        var newVideo = fs.createWriteStream(videoPath)
        console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
        // file.setMaxListeners(0)
        file.on('data', function(data) {
            data
            file.pipe(newVideo);
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
        });
        file.on('end', function() {
            newVideo.close()
            console.log('File [' + fieldname + '] Finished');
        })
    })
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        console.log('Field [' + fieldname + ']: value: '+val+ ' fieldnameTruncated:'+fieldnameTruncated)
    });
    busboy.on('finish', function() {
        console.log('Done parsing form!');
        res.json({
            success:true
        })
    });
    req.pipe(busboy);
})

export default router