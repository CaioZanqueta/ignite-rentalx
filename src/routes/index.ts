import { Router } from 'express';

import { cagoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', cagoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };
