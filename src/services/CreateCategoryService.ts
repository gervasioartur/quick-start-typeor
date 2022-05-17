import { AppDataSource } from '../../data-source';
import { Category } from '../entities/Category.entity';

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    if (await repo.findOne({ where: { name } })) {
      return new Error('Category already existis!');
    }
    const category = repo.create({ name, description });
    await repo.save(category);
    return category;
  }
}
