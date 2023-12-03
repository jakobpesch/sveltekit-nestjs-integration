import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { handler } from '../svelte-build/handler.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const handler = await import('../svelte-build/handler.js');
  app.use(handler);
  await app.listen(3000);
}
bootstrap();
