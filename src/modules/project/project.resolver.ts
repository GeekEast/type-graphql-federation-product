import ObjectId from "bson-objectid"
import { Arg, Query, Resolver } from "type-graphql"
import { Service } from "typedi"

import { Trace } from "../../utils/logger/trace.util"
import { GetProjectDto } from "./getProject.dto"
import { ProjectEntity } from "./project.entity"

@Trace({ logInput: { enabled: true } })
@Service()
@Resolver()
export class ProjectResolver {
  @Query(() => ProjectEntity, { nullable: true, name: "ProjectGetOneUser" })
  async getProject(@Arg("filter") _getProjectDto: GetProjectDto): Promise<ProjectEntity> {
    // GetProjectDto.fromObject<GetProjectDto>(getProjectDto)
    return ProjectEntity.fromObject<ProjectEntity>({ _id: ObjectId().toHexString() })
  }
}
