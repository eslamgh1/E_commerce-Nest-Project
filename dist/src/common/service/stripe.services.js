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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeServices = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = __importDefault(require("stripe"));
let StripeServices = class StripeServices {
    stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
    constructor() { }
    createCheckOutSession = async ({ line_items, discounts, metadata, customer_email }) => {
        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email,
            metadata,
            success_url: 'http://localhost:3000/order/success',
            cancel_url: 'http://localhost:3000/order/cancel',
            line_items,
            discounts,
        });
        return session;
    };
    createCoupon = async ({ percent_off, }) => {
        const coupon = await this.stripe.coupons.create({
            percent_off,
            duration: "once"
        });
        return coupon;
    };
    createRefundPayment = async ({ payment_intent }) => {
        const refund = await this.stripe.refunds.create({
            payment_intent,
            reason: "requested_by_customer"
        });
        return refund;
    };
};
exports.StripeServices = StripeServices;
exports.StripeServices = StripeServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeServices);
//# sourceMappingURL=stripe.services.js.map