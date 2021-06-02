import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World From NestJS Demo!';
  }

  getProducts():string[]{
    const products=['Books','Dress','Fruits'];
    return products;
  }

  getFruits(): object[] {
    const fruits = [
      { id: 1, name: "Apple"},
      { id: 2, name: "Jack Fruit"},
      { id: 3, name: "Mango"}
    ];
    return fruits;
  }
}
