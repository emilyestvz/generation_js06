import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTurma(): string {
    return 'Turma JavaScript 06';
  }
}
