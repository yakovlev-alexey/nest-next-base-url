import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  root(): string {
    return 'APP_URL';
  }
}
