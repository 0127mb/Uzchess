import { Logintype } from "../../../../constants/enum/Logintype.enum"
import { OtpCodes } from "../../../auth/infrastructure/persistence/typeorm/otp-code.entity"
import { CourseReviews } from "../../../courses/domain/entites/Course.review.entity"
import { LikedCourse } from "../../../courses/domain/entites/Liked.course.entity"
import { PurchasedCourses } from "../../../courses/domain/entites/purchased.course.entity"
import { UsersLessons } from "./users-lessons.entity"
import { BookReviewsEntity } from "../../../books/domain/entites/book-reviews.entity"
import { BookLikesEntity } from "../../../books/domain/entites/book-likes.entity"
import { NewsViewsEntity } from "../../../../news/domain/entites/news-views.entity"
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("Users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 64 })
    fullName!: string
    @Column({ type: "varchar", length: 128, nullable: true })
    profileImage?: string
    @Column({ type: "varchar", length: 64, unique: true })
    login!: string
    @OneToMany(() => OtpCodes, otp => otp.user)
    Otpcode: OtpCodes[]
    @OneToMany(() => PurchasedCourses, (purchased: any) => purchased.user)
    purchasedcourses: PurchasedCourses[]
    @OneToMany(() => CourseReviews, (review: any) => review.user)
    reviews: CourseReviews[]
    @OneToMany(() => LikedCourse, (liked: any) => liked.user)
    Liked: LikedCourse[]
    @OneToMany(() => UsersLessons, (ul: any) => ul.user)
    usersLessons: UsersLessons[]
    @OneToMany(() => BookReviewsEntity, (review: any) => review.user)
    bookReviews: BookReviewsEntity[]
    @OneToMany(() => BookLikesEntity, (like: any) => like.user)
    bookLikes: BookLikesEntity[]
    @OneToMany(() => NewsViewsEntity, (view: any) => view.user)
    newsViews: NewsViewsEntity[]
    @Column({ type: "enum", enum: Logintype })
    loginType!: Logintype
    @Column({ type: "varchar", length: 128, nullable: true })
    password?: string
    @CreateDateColumn()
    birthDate!: Date
    @Column({ type: "boolean", default: false })
    isVerified!: boolean
    @Column({ type: "boolean", default: false })
    isActive!: boolean
}
