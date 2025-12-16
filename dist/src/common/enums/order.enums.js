"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusEnum = exports.paymentMethodEnum = void 0;
var paymentMethodEnum;
(function (paymentMethodEnum) {
    paymentMethodEnum["cash"] = "CASH";
    paymentMethodEnum["visa"] = "VISA";
})(paymentMethodEnum || (exports.paymentMethodEnum = paymentMethodEnum = {}));
var orderStatusEnum;
(function (orderStatusEnum) {
    orderStatusEnum["pending"] = "PENDING";
    orderStatusEnum["paid"] = "PAID";
    orderStatusEnum["placed"] = "PLACED";
    orderStatusEnum["delivered"] = "DELIVERED";
    orderStatusEnum["canceled"] = "CANCELED";
    orderStatusEnum["refunded"] = "REFUNDED";
})(orderStatusEnum || (exports.orderStatusEnum = orderStatusEnum = {}));
//# sourceMappingURL=order.enums.js.map