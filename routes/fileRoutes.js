const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');

const upload = multer({ dest: 'uploads/' });

// Route to upload file
router.post('/upload', upload.single('file'), fileController.uploadFile);

// Route to get all files
router.get('/files', fileController.getAllFiles);

module.exports = router;
