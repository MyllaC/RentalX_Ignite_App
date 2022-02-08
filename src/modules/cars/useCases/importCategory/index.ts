/* eslint-disable import/prefer-default-export */
import { ImportCategoryController } from "./ImporteCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
