"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./module/user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const common_2 = require("./common");
const brand_module_1 = require("./module/brand/brand.module");
const category_module_1 = require("./module/category/category.module");
const product_module_1 = require("./module/product/product.module");
const cart_module_1 = require("./module/cart/cart.module");
const coupon_module_1 = require("./module/coupon/coupon.module");
const subCategory_module_1 = require("./module/subcategory/subCategory.module");
const order_module_1 = require("./module/order/order.module");
const gateway_module_1 = require("./module/gateway/gateway.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const review_module_1 = require("./module/review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: './config/.env',
                isGlobal: true
            }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 5000
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URL_LOCAL, {
                onConnectionCreate: (connection) => {
                    connection.on('connected', () => console.log(`Mongo DB connected successfully ${process.env.DB_URL_LOCAL}`));
                    connection.on('disconnected', () => console.log(`Mongo DB disconnected successfully ${process.env.DB_URL_LOCAL}`));
                    return connection;
                }
            }),
            gateway_module_1.GatewayModule,
            user_module_1.UserModule,
            brand_module_1.BrandModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            coupon_module_1.CouponModule,
            subCategory_module_1.SubCategoryModule,
            order_module_1.OrderModule,
            review_module_1.ReviewModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, common_2.S3Service],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map