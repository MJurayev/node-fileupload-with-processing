import {Application, json, urlencoded } from 'express';
import videoRoute from '../routes/videos'

export default (app:Application)=>{
    app.use(json());
    app.use(urlencoded({extended:true}))
    app.use('/api/video',videoRoute )
}