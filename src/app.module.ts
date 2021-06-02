import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdemo',
      entities: [Book, Department],
      synchronize: true,
    }),
    ProductsModule, BooksModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
