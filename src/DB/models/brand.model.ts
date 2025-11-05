import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import slugify from "slugify";


@Schema({ timestamps: true })
export class Brand {
    @Prop({ type: String, required:true, minLength: 3, maxLength: 50 })
    name: string

    @Prop({ type: String, minLength: 3, maxLength: 50 })
    description: string

    @Prop({ type: String, minLength: 3, maxLength: 50 })
    slug: string

    @Prop({ required: true, type: Types.ObjectId, ref: "User" })
    createdBy: Types.ObjectId

    @Prop({ required: true, type: String })
    image: string
}


export const brandSchema = SchemaFactory.createForClass(Brand);

brandSchema.pre("save" , async function(next){
    if(this.isModified("name")){
        this.slug = slugify(this.name)
    }
    next()
})
export type BrandDocument = HydratedDocument<Brand>;
export const BrandModel = MongooseModule.forFeature([{ name: Brand.name, schema: brandSchema }])



