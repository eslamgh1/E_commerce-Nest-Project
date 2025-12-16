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
exports.UserModel = exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enums_1 = require("../../common/enums");
const hash_1 = require("../../common/security/hash");
let User = class User {
    fName;
    lName;
    userName;
    email;
    password;
    age;
    confirmed;
    role;
    gender;
    provider;
    changecredentailAt;
    otp;
    wishList;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true, minlength: 3, maxlength: 100 }),
    __metadata("design:type", String)
], User.prototype, "fName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true, minlength: 3, maxlength: 100 }),
    __metadata("design:type", String)
], User.prototype, "lName", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get() {
            return `${this.fName} ${this.lName}`;
        },
        set(v) {
            this.fName = v.split(" ")[0];
            this.lName = v.split(" ")[1];
        }
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 100, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, minLength: 15, maxLength: 90 }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], User.prototype, "confirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enums_1.userRole, default: enums_1.userRole.USER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enums_1.userGender, default: enums_1.userGender.MALE }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enums_1.userProvider, default: enums_1.userProvider.LOCAL }),
    __metadata("design:type", String)
], User.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], User.prototype, "changecredentailAt", void 0);
__decorate([
    (0, mongoose_1.Virtual)(),
    __metadata("design:type", Object)
], User.prototype, "otp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: "Product" }] }),
    __metadata("design:type", Array)
], User.prototype, "wishList", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await (0, hash_1.Hash)({ plainText: this.password });
    }
    next();
});
exports.UserSchema.virtual("otp", {
    ref: "Otp",
    localField: "_id",
    foreignField: "createdBy"
});
exports.UserModel = mongoose_1.MongooseModule.forFeature([{ name: User.name, schema: exports.UserSchema }]);
//# sourceMappingURL=user.models.js.map