import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LikedCourseService } from "../../application/services/liked-course.service";
import { LikedCourseDto } from "../../application/dto/liked-course.dto";


@ApiTags("likedCourse")
@Controller("likedCourse")
export class LikedCourseController {
    constructor(private readonly LikeService: LikedCourseService) { }
    @Post("post")
    async createLike(@Body() dto: LikedCourseDto) {
        return await this.LikeService.createLike(dto)
    }
    @Get()
    async getLikes(@Query() query: LikedCourseDto) {
        return this.LikeService.getLikes(query)

    }

}