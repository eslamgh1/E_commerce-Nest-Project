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
exports.CartModel = exports.cartSchema = exports.Cart = exports.CartProduct = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CartProduct = class CartProduct {
    productId;
    quantity;
    finalPrice;
};
exports.CartProduct = CartProduct;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Product", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CartProduct.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], CartProduct.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], CartProduct.prototype, "finalPrice", void 0);
exports.CartProduct = CartProduct = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], CartProduct);
let Cart = class Cart {
    products;
    createdBy;
    subTotal;
    deletedAt;
    restoredAt;
};
exports.Cart = Cart;
__decorate([
    (0, mongoose_1.Prop)({ type: [CartProduct] }),
    __metadata("design:type", Array)
], Cart.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Cart.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Cart.prototype, "subTotal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Cart.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Cart.prototype, "restoredAt", void 0);
exports.Cart = Cart = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], Cart);
exports.cartSchema = mongoose_1.SchemaFactory.createForClass(Cart);
exports.cartSchema.pre("save", async function (next) {
    this.subTotal = this.products.reduce((total, product) => total + (product.quantity * product.finalPrice), 0);
    next();
});
exports.cartSchema.pre(["findOne", "find", "findOneAndUpdate"], async function (next) {
    const { paranoid, ...rest } = this.getQuery();
    if (paranoid === false) {
        this.setQuery({ ...rest, deletedAt: { $exists: true } });
    }
    else {
        this.setQuery({ ...rest, deletedAt: { $exists: false } });
    }
    next();
});
exports.CartModel = mongoose_1.MongooseModule.forFeature([{ name: Cart.name, schema: exports.cartSchema }]);
//# sourceMappingURL=cart.model.js.map