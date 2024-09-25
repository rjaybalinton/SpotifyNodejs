const express = require('express');
const multer = require('multer');
const router = express.Router();
const main = require('../controller/MainController');
const path = require('path');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Routes
router.get('/', main.getAllSongs);
router.get('/song/:id', main.getSong);
router.get('/add', (req, res) => res.render('add')); // Render add song form
router.post('/add', upload.fields([{ name: 'songFile' }, { name: 'imageFile' }]), main.addSong); 
router.post('/delete/:id', main.deleteSong); // For deleting a song
router.get('/edit/:id', main.getEditSong); // Edit form view
router.post('/edit/:id', upload.fields([{ name: 'songFile' }, { name: 'imageFile' }]), main.editSong);

module.exports = router;
