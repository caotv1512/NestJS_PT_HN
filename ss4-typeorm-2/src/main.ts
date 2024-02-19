import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config()
async function bootstrap() {
  const PORT = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, ()=>{
    console.log(`Server started on: http://localhost:${PORT}`)
  });
}
bootstrap();
