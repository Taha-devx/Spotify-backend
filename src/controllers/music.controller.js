const musicModel = require('../models/music.model');
const {uploadFile} = require('../service/storage.service');
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');



async function createMusic(req, res){

    
    const { title } = req.body;
    const file = req.file;  
    
    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({
        message: "Music created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

}

async function createAlbum(req, res){

    const {title, music} = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        music: music
    })

    res.status(201).json({
        message: "Album created successfully",
        album:{
            id: album._id,
            title: album.title,
            artist: album.artist,
            music: album.music
        }
    })

}

async function getAllMusic(req, res){
    const musics = await musicModel.find().populate("artist", "username");

    res.status(200).json({
        message: "All musics feteched successfully",
        musics: musics
    })
}

async function getAllAlbums(req, res){
    const album = await musicModel.find().populate("artist", "username").populate("musics");

    res.status(200).json({
        message: "Album feteched successfully",
        albums: albums
    })
}


module.exports = {createMusic, createAlbum, getAllMusic, getAllAlbums};