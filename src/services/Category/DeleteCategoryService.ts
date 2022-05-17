import { AppDataSource } from '../../../data-source';
import { Category } from '../../entities/Category.entity';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Category);
    if (!(await repo.findOne({ where: { id } }))) {
      return new Error('Category not found!');
    }
    await repo.delete(id);
  }
}
