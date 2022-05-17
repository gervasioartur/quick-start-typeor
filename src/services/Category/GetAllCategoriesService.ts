import { AppDataSource } from '../../../data-source';
import { Category } from '../../entities/Category.entity';

export class GetAllCategoriesService {
  async execute() {
    const repo = AppDataSource.getRepository(Category);
    const categories = await repo.find();
    return categories;
  }
}
