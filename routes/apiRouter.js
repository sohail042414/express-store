var express = require('express');
var router = express.Router();

var applicationController = require('../api/applicationController');

/* save application  form data post */
router.post('/application', applicationController.applicatin_create_post);

/* delete application by id*/
router.delete('/application/', applicationController.applicatin_delete);

/* application update. */
router.put('/application/', applicationController.application_update_put);

/* applications list get. */
router.get('/application_list/:page', applicationController.application_list_get);

/* get application by id */
router.get('/application/:id', applicationController.applicatin_get);

module.exports = router;