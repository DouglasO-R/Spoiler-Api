import { Router } from "express";
import { spoilerController } from "./../controllers";
import { validateMiddleware } from "./../utils/spoilerValidation";
const router = Router();

router.post('/',validateMiddleware,spoilerController.create);
router.get('/', spoilerController.index);
router.get('/:id', spoilerController.show);
router.put('/:id', spoilerController.update);
router.delete('/:id', spoilerController.delet);

export default router;
