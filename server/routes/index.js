const express       = require('express');
const router        = express.Router();

const userRouter    = require('./auth');
const clientRouter  = require('./clients');

router.use('/users', userRouter);
router.use('/clients', clientRouter);

router.get('/', (req, res) => {
    res.json({'message': 'A Basic Server API'})
})

module.exports = router;
