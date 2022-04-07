import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const cagoriesRoutes = Router();

cagoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

cagoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

export { cagoriesRoutes };
