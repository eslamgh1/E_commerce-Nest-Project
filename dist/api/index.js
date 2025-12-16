"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const common_1 = require("@nestjs/common");
const path_1 = __importDefault(require("path"));
const appModulePath = path_1.default.join(__dirname, '..', 'dist', 'src', 'app.module.js');
const { AppModule } = require(appModulePath);
let bootstrapPromise = null;
let cachedServer = null;
async function bootstrap() {
    const server = (0, express_1.default)();
    const adapter = new platform_express_1.ExpressAdapter(server);
    const app = await core_1.NestFactory.create(AppModule, adapter, {
        logger: false,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        stopAtFirstError: true,
    }));
    await app.init();
    return server;
}
async function handler(req, res) {
    try {
        if (!cachedServer) {
            if (!bootstrapPromise) {
                bootstrapPromise = bootstrap();
            }
            cachedServer = await bootstrapPromise;
        }
        cachedServer(req, res);
    }
    catch (err) {
        console.error('Nest bootstrap error:', err);
        res.status(500).send('Internal Server Error');
    }
}
//# sourceMappingURL=index.js.map