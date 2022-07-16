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
exports.Users = void 0;
var class_validator_1 = require("class-validator");
var order_entity_1 = require("../../orders/entities/order.entity");
var typeorm_1 = require("typeorm");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Users.prototype, "id");
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 128,
            unique: true
        })
    ], Users.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 20,
            unique: true
        })
    ], Users.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, typeorm_1.Column)({
            type: 'varchar',
            "default": 'mbti',
            length: 10
        })
    ], Users.prototype, "gender");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return order_entity_1.Orders; }, function (order) { return order.user; }),
        (0, typeorm_1.JoinColumn)({ name: 'id' })
    ], Users.prototype, "order");
    Users = __decorate([
        (0, typeorm_1.Entity)()
    ], Users);
    return Users;
}(typeorm_1.BaseEntity));
exports.Users = Users;
