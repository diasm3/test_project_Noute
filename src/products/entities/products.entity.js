"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Products = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Products.prototype, "id");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 100
        })
    ], Products.prototype, "type");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 50,
            unique: true
        })
    ], Products.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 300
        })
    ], Products.prototype, "description");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            "default": 1
        })
    ], Products.prototype, "price");
    Products = __decorate([
        (0, typeorm_1.Entity)()
    ], Products);
    return Products;
}(typeorm_1.BaseEntity));
exports.Products = Products;
