const multer = require('multer');

const storage = multer.memoryStorage(); // Store file as a Buffer in memory

const upload = multer({ storage });

module.exports = upload;