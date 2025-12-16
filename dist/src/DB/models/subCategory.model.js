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
exports.SubCategoryModel = exports.SubCategorySchema = exports.SubCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
let SubCategory = class SubCategory {
    name;
    slogan;
    slug;
    image;
    assetFolderId;
    brands;
    categories;
    createdBy;
    updatedBy;
    deletedAt;
    restoredAt;
};
exports.SubCategory = SubCategory;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true, minlength: 3, maxlength: 100, unique: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true, minlength: 3, maxlength: 50 }),
    __metadata("design:type", String)
], SubCategory.prototype, "slogan", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: function () { return (0, slugify_1.default)(this.name, { replacement: "-", lower: true, trim: true }); } }),
    __metadata("design:type", String)
], SubCategory.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], SubCategory.prototype, "assetFolderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: "Brand" }] }),
    __metadata("design:type", Array)
], SubCategory.prototype, "brands", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: "Category" }] }),
    __metadata("design:type", Array)
], SubCategory.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubCategory.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubCategory.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], SubCategory.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], SubCategory.prototype, "restoredAt", void 0);
exports.SubCategory = SubCategory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, strictQuery: true })
], SubCategory);
exports.SubCategorySchema = mongoose_1.SchemaFactory.createForClass(SubCategory);
exports.SubCategorySchema.pre(["updateOne", "findOneAndUpdate"], async function (next) {
    const update = this.getUpdate();
    if (update.name) {
        update.slug = (0, slugify_1.default)(update.name, { replacement: "-", lower: true, trim: true });
    }
    next();
});
exports.SubCategorySchema.pre(["findOne", "find", "findOneAndUpdate"], async function (next) {
    const { paranoid, ...rest } = this.getQuery();
    if (paranoid === false) {
        this.setQuery({ ...rest, deletedAt: { $exists: true } });
    }
    else {
        this.setQuery({ ...rest, deletedAt: { $exists: false } });
    }
    next();
});
exports.SubCategoryModel = mongoose_1.MongooseModule.forFeature([{ name: SubCategory.name, schema: exports.SubCategorySchema }]);
//# sourceMappingURL=subCategory.model.js.map