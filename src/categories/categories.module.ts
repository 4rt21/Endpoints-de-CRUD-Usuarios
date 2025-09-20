import { Module } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

Module({
  providers: [CategoriesRepository],
  exports: [CategoriesRepository],
});
export class CategoriesModule {}
