import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoryUseCase.execute();

    return res.status(200).json(all);
  }
}

export { ListCategoriesController };
