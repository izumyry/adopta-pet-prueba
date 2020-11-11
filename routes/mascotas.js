const router = require('express').Router();

const {	
	crearMascota,
	obtenerMascotas,
	modificarMascota,
    eliminarMascota,
} = require('../controllers/mascotas')

const auth = require('./auths');

router.get('/', auth.opcional, obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
router.put('/:id', auth.requerido, modificarMascota)
router.delete('/:id',auth.requerido, eliminarMascota)

module.exports = router;
