import { Schema } from "@effect/schema";
import { Model } from "@effect/sql";



class ExampleModel extends Model.Class<ExampleModel>("ExampleModel")({
    id: Model.Generated(Schema.String),
    name: Schema.optional(Schema.String)
}) {}
