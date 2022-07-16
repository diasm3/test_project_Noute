"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("../config");
var users_repository_1 = require("../src/users/users.repository");
var products_module_1 = require("./products/products/products.module");
var products_service_1 = require("./products/products.service");
var products_repository_1 = require("./products/products.repository");
var products_controller_1 = require("./products/products.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(config_1.typeORMConfig),
                typeorm_1.TypeOrmModule.forFeature([users_repository_1.UserRepository, products_repository_1.ProductsRepository]),
                products_module_1.ProductsModule,
                // ProductsRepository,
            ],
            controllers: [app_controller_1.AppController, products_controller_1.ProductsController],
            providers: [app_service_1.AppService, products_service_1.ProductsService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
