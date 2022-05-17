import { AppDataSource } from '../../../data-source';
import { Category } from '../../entities/Category.entity';
import { Video } from '../../entities/Video.entity';

type VideoRequest = {
  name: string;
  desciption: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    desciption,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const repo = AppDataSource.getRepository(Video);
    const repoCategory = AppDataSource.getRepository(Category);
    if (!(await repoCategory.findOne({ where: { id: category_id } }))) {
      return new Error('Category not found!');
    }
    const video = repo.create({ name, desciption, duration, category_id });
    await repo.save(video);
    return video;
  }
}
