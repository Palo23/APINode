const { Router } = require('express');
const router = Router();

//routes
router.get('/test', (req, res) => {
    const data = {
        "Name": "Luis",
        "Lastname": "Espinoza"
    };
    res.json(data);
});

module.exports = router;