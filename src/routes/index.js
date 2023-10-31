import express from 'express';
import categoryRoutes from './categories.routes.mjs';

const router = express.Router();
router.use('/categories', categoryRoutes);

router.use('*', (req, res) => {
  res.status(404).json({
    code: 404,
    message: 'Not Found',
  });
});

export default router;
