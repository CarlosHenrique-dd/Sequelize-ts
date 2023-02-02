import express from 'express';

import { User } from './model/User';

const app = express();

User.sync();

app.listen(3333, () => {
	console.log('Server is running on port 3333');
});
