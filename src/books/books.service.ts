import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ) {}
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  books = [
    { id: 1, name: "The Holy Quran", category: "Islamic" },
    { id: 2, name: "Learn JavaScript", category: "Acadamic"},
    { id: 3, name: "The Sahih Bokhari", category: "Islamic"},
    { id: 4, name: "The Equivalent TypeScript", category: "Acadamic"},
    { id: 5, name: "Simple React", category: "Acadamic"},
    { id: 6, name: "Arob Boshonto", category: "Islamic"},
    { id: 7, name: "At-Tawhid", category: "Islamic"},
  ]

  // findAll() {
  //   return this.books;
  // }
  
  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.books[--id];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const myCurBooks = this.books.find( book => book.id == id);
    // myCurBooks["name"] = "The Sohih Muslim";
    updateBookDto.name && (myCurBooks.name = updateBookDto.name);
    updateBookDto.category && (myCurBooks.category=updateBookDto.category);
    return this.books;
  }

  remove(id: number) {
    const removedBook= this.books.findIndex( b => b.id == id );
     this.books.splice( removedBook, 1 );
     return this.books;
  }

  add(book:CreateBookDto){
    return this.bookRepository.save(book);
  }
}
