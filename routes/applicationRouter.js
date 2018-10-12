var express = require('express');
var router = express.Router();

var applicationController = require('../controllers/applicationController');

/* create application form. */
router.get('/create', applicationController.applicatin_form_get);

/* applications save  form data post */
router.post('/', applicationController.applicatin_save_post);

/* application update. */
router.get('/update:id', applicationController.applicatin_form_get);

/* delete application by id*/
router.post('/delete:id', applicationController.applicatin_delete_post);

/* applications get by id. */
router.get('/:id', applicationController.application_byid_get);

/* applications list get. */
router.get('/', applicationController.application_list_get);

module.exports = router;