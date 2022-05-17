//category
import { Router } from 'express';
import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { GetAllCategoriesController } from './/controllers/Category/GetAllCategoriesController';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';

//video
import { CreateVideoController } from './controllers/video/CreateVideoContoller';
import { GetAllVideosController } from './controllers/video/GetAllVideosController';

const routes = Router();

/**
 * [x] C - CREATE
 * [x] R - READ
 * [x] U - UPDATE
 * [x] D - DELETE
 */

//category
routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

//video
routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos',new GetAllVideosController().handle)

export { routes };
