var express = require('express');
var router = express.Router();

var applicationController = require('../admin/applicationController');

/* applications list get. */
router.get('/application/list/:page*?', applicationController.application_list);

/* create application */
router.get('/application/create/', applicationController.applicatin_create);

/* application update*/
router.get('/application/update/:id', applicationController.applicatin_update);

/* application view. */
router.get('/application/view/:id', applicationController.application_view);

module.exports = router;