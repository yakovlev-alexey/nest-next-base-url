import { Controller, Get, Render } from '@nestjs/common';

@Controller('/docs')
export class DocsController {
  @Get()
  @Render('index')
  index() {
    return {};
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
