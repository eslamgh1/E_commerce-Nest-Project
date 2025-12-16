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
exports.OtpModel = exports.OtpSchema = exports.Otp = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("../../common");
const hash_1 = require("../../common/security/hash");
let Otp = class Otp {
    code;
    createdBy;
    type;
    expiresAt;
};
exports.Otp = Otp;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, trim: true }),
    __metadata("design:type", String)
], Otp.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Otp.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, enum: common_1.otpTypeEnum }),
    __metadata("design:type", String)
], Otp.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], Otp.prototype, "expiresAt", void 0);
exports.Otp = Otp = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Otp);
exports.OtpSchema = mongoose_1.SchemaFactory.createForClass(Otp);
exports.OtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
exports.OtpSchema.pre("save", async function (next) {
    if (this.isModified("code")) {
        this.plainCode = this.code;
        this.is_new = this.isNew;
        this.code = await (0, hash_1.Hash)({ plainText: this.code });
        await this.populate([
            {
                path: "createdBy",
                select: "email",
            }
        ]);
    }
    next();
});
exports.OtpSchema.post("save", function (doc, next) {
    const that = this;
    if (that.is_new) {
        common_1.eventEmitter.emit(doc.type, {
            otp: that.plainCode,
            email: doc.createdBy.email
        });
    }
    next();
});
exports.OtpModel = mongoose_1.MongooseModule.forFeature([{ name: Otp.name, schema: exports.OtpSchema }]);
//# sourceMappingURL=otp.models.js.map