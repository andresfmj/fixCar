const express   = require('express');
const morgan    = require('morgan');
const cors      = require('cors');

const env       = require('dotenv');
env.config();

const app       = express();
const routes    = require('./routes/index');

require('./config/database');

app.use(morgan(process.env.NODE_ENV === 'local' ? 'dev' : 'combined'))
app.use(cors());

app.use(express.json());

app.use('/', routes);

app.set('port', process.env.APP_PORT || 3131);

app.listen(app.get('port'), () => {
    console.log(`Server API is running at port ${app.get('port')}`);
});
