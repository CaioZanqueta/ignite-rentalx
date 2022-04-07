import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const cagoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

cagoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

cagoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.status(200).json(all);
});

export { cagoriesRoutes };
