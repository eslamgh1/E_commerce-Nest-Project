import { DeleteResult, HydratedDocument, Model, ProjectionType, QueryOptions, RootFilterQuery, UpdateQuery } from 'mongoose';
export declare abstract class DBRepo<TDocument> {
    protected readonly model: Model<TDocument>;
    constructor(model: Model<TDocument>);
    create(data: Partial<TDocument>): Promise<HydratedDocument<TDocument>>;
    findOne({ filter, projection, options, }: {
        filter: RootFilterQuery<TDocument>;
        projection?: ProjectionType<TDocument>;
        options?: QueryOptions<TDocument>;
    }): Promise<HydratedDocument<TDocument> | null>;
    find({ filter, projection, options }: {
        filter: RootFilterQuery<TDocument>;
        projection?: ProjectionType<TDocument>;
        options?: QueryOptions<TDocument>;
    }): Promise<HydratedDocument<TDocument>[]>;
    paginate({ filter, select, options, query }: {
        filter: RootFilterQuery<TDocument>;
        select?: ProjectionType<TDocument>;
        options?: QueryOptions<TDocument>;
        query: {
            page?: number;
            limit?: number;
        };
    }): Promise<{
        docs: HydratedDocument<TDocument>[];
        currentPage: number;
        totalDocs: number;
        numPages: number;
    }>;
    updateOne(filter: RootFilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<import('mongoose').UpdateWriteOpResult>;
    findOneAndUpdate({ filter, update, options }: {
        filter: RootFilterQuery<TDocument>;
        update: UpdateQuery<TDocument>;
        options: QueryOptions<TDocument>;
    }): Promise<HydratedDocument<TDocument> | null>;
    findOneAndDelete({ filter }: {
        filter: RootFilterQuery<TDocument>;
    }): Promise<HydratedDocument<TDocument> | null>;
    updateMany(filter: RootFilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<import('mongoose').UpdateWriteOpResult>;
    deleteOne({ filter, }: {
        filter: RootFilterQuery<TDocument>;
    }): Promise<DeleteResult>;
}
