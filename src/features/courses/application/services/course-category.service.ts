import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseCategoryDto } from "../dto/course-category.dto";
import { CategoryCourse } from "../../domain/entites/Category-course.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseCategoryService {
    constructor(@InjectRepository(CategoryCourse)
    private categoryrepo: Repository<CategoryCourse>) { }
    async createCategory(dto: CourseCategoryDto): Promise<CategoryCourse> {
        try {
            const category = this.categoryrepo.create(dto)
            await this.categoryrepo.save(category)
            return category

        }
        catch (error) {
            console.error("eror creating course category", error)
            throw new InternalServerErrorException("Failed to create category")
        }
    } 
    async getCategory(id: number): Promise<CategoryCourse> {
        return this.categoryrepo.findOneBy({ id })
    }
  
}