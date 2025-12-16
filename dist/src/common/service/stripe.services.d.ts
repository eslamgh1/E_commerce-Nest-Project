import Stripe from 'stripe';
export declare class StripeServices {
    private stripe;
    constructor();
    createCheckOutSession: ({ line_items, discounts, metadata, customer_email }: {
        line_items: [];
        discounts?: Stripe.Checkout.SessionCreateParams.Discount[];
        customer_email: string;
        metadata: {};
    }) => Promise<Stripe.Response<Stripe.Checkout.Session>>;
    createCoupon: ({ percent_off, }: {
        percent_off: number;
    }) => Promise<Stripe.Response<Stripe.Coupon>>;
    createRefundPayment: ({ payment_intent }: {
        payment_intent: any;
    }) => Promise<Stripe.Response<Stripe.Refund>>;
}
