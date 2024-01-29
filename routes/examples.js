const express = require('express');
const router = express.Router();

const ExampleController = require('../controllers/ExampleController');

// route bookstore
router.get('/books', ExampleController.getAllBook)
router.get('/books/:id', ExampleController.getIdBook)
router.get('/books/jenis/:jenis', ExampleController.getJenisBook)

router.put('/books/:id', ExampleController.editBook)

router.post('/books/', ExampleController.storeBook)

router.delete('/books/:id', ExampleController.deleteBook)

// end route books

router.get('/', ExampleController.index);

module.exports = router;