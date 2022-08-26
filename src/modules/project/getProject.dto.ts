import { IsMongoId } from "class-validator"
import { Field, InputType } from "type-graphql"

import { DTOBase } from "../../utils/dto/base.dto"

@InputType("ProjectGetOneProject")
export class GetProjectDto extends DTOBase {
  @Field()
  @IsMongoId()
  _id: string
}
