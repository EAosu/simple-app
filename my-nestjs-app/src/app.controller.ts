import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('/submit-form')
  submitForm(@Body() data: any) {
    console.log('Received data:', data);
    return { message: 'Data received successfully!' };
  }
}
