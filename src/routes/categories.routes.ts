import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const cagoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

cagoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'Category Already exists!' });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

cagoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.status(200).json(all);
});

export { cagoriesRoutes };
