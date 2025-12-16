"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_enums_1 = require("../../common/enums/order.enums");
let Order = class Order {
    userID;
    cart;
    coupon;
    totalPrice;
    address;
    phone;
    paymentMethod;
    status;
    arriveAt;
    paymentIntent;
    orderChanges;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Cart", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "cart", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Coupon" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "coupon", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: order_enums_1.paymentMethodEnum, required: true }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: order_enums_1.orderStatusEnum, required: true }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now() + 3 * 24 * 60 * 60 * 1000 }),
    __metadata("design:type", Date)
], Order.prototype, "arriveAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Order.prototype, "paymentIntent", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            paidAt: Date,
            deliveredAt: Date,
            deliveredBy: { type: mongoose_2.Types.ObjectId, ref: "User" },
            canceledAt: Date,
            canceledBy: { type: mongoose_2.Types.ObjectId, ref: "User" },
            refundAt: Date,
            refundBy: { type: mongoose_2.Types.ObjectId, ref: "User" },
        }
    }),
    __metadata("design:type", Object)
], Order.prototype, "orderChanges", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
exports.OrderModel = mongoose_1.MongooseModule.forFeature([{ name: Order.name, schema: exports.OrderSchema }]);
//# sourceMappingURL=order.model.js.map