const express       = require('express');
const router        = express.Router();

const userRouter    = require('./auth');

router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.json({'message': 'A Basic Server API'})
})

module.exports = router;
