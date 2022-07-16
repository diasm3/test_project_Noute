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
exports.Sales = void 0;
var order_entity_1 = require("../../orders/entities/order.entity");
var products_entity_1 = require("../../products/entities/products.entity");
var typeorm_1 = require("typeorm");
var Sales = /** @class */ (function (_super) {
    __extends(Sales, _super);
    function Sales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Sales.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({})
    ], Sales.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return products_entity_1.Products; }, function (products) { return products.id; })
    ], Sales.prototype, "products");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return order_entity_1.Orders; }, function (orders) { return orders.id; })
    ], Sales.prototype, "orders");
    Sales = __decorate([
        (0, typeorm_1.Entity)()
    ], Sales);
    return Sales;
}(typeorm_1.BaseEntity));
exports.Sales = Sales;
