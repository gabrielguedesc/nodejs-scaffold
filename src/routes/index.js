const router = require('express');

const routes = router.Router();

routes.get('/', (_, res) => res.json({ result: 'Hello World' }));

module.exports = routes;
