import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseSection } from "./course-section.entity";
import { CourseLessonsEntity } from "./Course-lessons.entity";
import { PurchasedCourses } from "./purchased.course.entity";
import { CourseReviews } from "./Course.review.entity";
import { LikedCourse } from "./Liked.course.entity";
import { Auhtors } from "src/features/auhtor/infrastructure/typeorm/auhtor.entity";
import { Difficulty } from "src/features/difficulty/infrastracture/typeorm/difficulty.entity";
import { CategoryCourse } from "./Category-course.entity";
import { Languages } from "src/features/languagges/infrastracture/typeorm/languages.entity";
@Entity("courses")

export class CourseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @OneToMany(() => CourseSection, section => section.course)
    CourseSection: CourseSection[]
    @ManyToMany(()=>Auhtors,author => author.course)
    author:Auhtors
    @ManyToOne(()=> Difficulty,difficult => difficult.CourseEntity)
    difficulty:Difficulty
    @ManyToOne(()=>CategoryCourse,category => category.course)
    category:CategoryCourse
    @ManyToOne(()=>Languages,language =>language.course)
    languages:Languages
    @OneToMany(() => CourseLessonsEntity, lesson => lesson.course)
    courseLessons: CourseLessonsEntity[]
    @OneToMany(() => PurchasedCourses, purchase => purchase.course)
    purchasedcourses: PurchasedCourses[]
    @OneToMany(() => CourseReviews, review => review.course)
    reviews: CourseReviews[]
    @OneToMany(() =>LikedCourse,liked =>liked.course)
    liked:LikedCourse[]
    @Column({ type: "varchar", length: 128 })
    title!: string
    @Column({ type: "varchar", length: 128, nullable: true })
    image?: string
    @Column({ type: "decimal", precision: 10, scale: 2 })
    price!: number
    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    newPrice?: number
    @Column({ type: "number", default: 0 })
    reviewsCount!: number
    @Column({ type: "decimal", precision: 2, scale: 1 })
    rating!: number
    @Column({ type: "number", default: 0 })
    SectionsCount!: number
    @Column({ type: "number", default: 0 })
    studentsCount: number

}
