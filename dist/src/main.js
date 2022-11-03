"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configurationService = app.get(config_1.ConfigService);
    await app.listen(configurationService.get('port'));
}
bootstrap().then(() => console.log('inicializou'));
//# sourceMappingURL=main.js.map