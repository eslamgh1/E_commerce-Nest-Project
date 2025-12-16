"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBRepo = void 0;
class DBRepo {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return this.model.create(data);
    }
    async findOne({ filter, projection, options, }) {
        return this.model.findOne(filter, projection, options);
    }
    async find({ filter, projection, options }) {
        return this.model.find(filter, projection, options);
    }
    async paginate({ filter, select, options, query }) {
        let { page = 1, limit = 5 } = query;
        if (page < 0)
            page = 1;
        page = page * 1 || 1;
        const skip = (page - 1) * limit;
        const finalOptions = { ...options, skip, limit };
        const counts = await this.model.countDocuments({ deletedAt: { $exists: false } });
        const numPages = Math.ceil(counts / limit);
        const docs = await this.model.find(filter, select, finalOptions);
        return { docs, currentPage: page, totalDocs: counts, numPages };
    }
    async updateOne(filter, update) {
        return await this.model.updateOne(filter, update);
    }
    async findOneAndUpdate({ filter, update, options }) {
        return this.model.findOneAndUpdate(filter, update, { new: true });
    }
    async findOneAndDelete({ filter }) {
        return this.model.findOneAndDelete(filter);
    }
    async updateMany(filter, update) {
        return await this.model.updateMany(filter, update);
    }
    async deleteOne({ filter, }) {
        return this.model.deleteOne(filter);
    }
}
exports.DBRepo = DBRepo;
//# sourceMappingURL=db.repositories.js.map