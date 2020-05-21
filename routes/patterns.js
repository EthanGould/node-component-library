var express = require('express');
var router = express.Router();

/* GET patterns listing. */
router.get('/:pattern', function(req, res) {
	res.render(req.params.pattern, { brand: req.query.brand });
});

module.exports = router;
