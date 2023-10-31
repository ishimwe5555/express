import { Router } from 'express';
import { categoryController } from '../controllers/index.mjs';
const router = Router();

router.get('/', categoryController.getCategories);

export default router;
