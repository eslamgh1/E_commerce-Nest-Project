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
exports.CouponModel = exports.CouponSchema = exports.Coupon = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Coupon = class Coupon {
    code;
    amount;
    fromDate;
    toDate;
    createdBy;
    usedBy;
    deletedAt;
    restoredAt;
};
exports.Coupon = Coupon;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, minlength: 3, maxlength: 100, unique: true, trim: true, lowercase: true }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "fromDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "toDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: "User" }] }),
    __metadata("design:type", Array)
], Coupon.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: "User" }] }),
    __metadata("design:type", Array)
], Coupon.prototype, "usedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Coupon.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Coupon.prototype, "restoredAt", void 0);
exports.Coupon = Coupon = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], Coupon);
exports.CouponSchema = mongoose_1.SchemaFactory.createForClass(Coupon);
exports.CouponSchema.pre(["findOne", "find", "findOneAndUpdate"], async function (next) {
    const { paranoid, ...rest } = this.getQuery();
    if (paranoid === false) {
        this.setQuery({ ...rest, deletedAt: { $exists: true } });
    }
    else {
        this.setQuery({ ...rest, deletedAt: { $exists: false } });
    }
    next();
});
exports.CouponModel = mongoose_1.MongooseModule.forFeature([{ name: Coupon.name, schema: exports.CouponSchema }]);
//# sourceMappingURL=coupon.model.js.map