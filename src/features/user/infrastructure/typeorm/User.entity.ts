import { Logintype } from "src/constants/enum/Logintype.enum";
import { OtpCodes } from "src/features/auth/infrastructure/persistence/typeorm/otp-code.entity";
import { CourseReviews } from "src/features/courses/infrastructure/typeorm/Course.review.entity";
import { LikedCourse } from "src/features/courses/infrastructure/typeorm/Liked.course.entity";
import { PurchasedCourses } from "src/features/courses/infrastructure/typeorm/purchased.course.entity";
import { UsersLessons } from "src/features/courses/infrastructure/typeorm/users-lessons.entity";
import { BookReviewsEntity } from "src/features/courses/infrastructure/typeorm/book-reviews.entity";
import { BookLikesEntity } from "src/features/courses/infrastructure/typeorm/book-likes.entity";
import { NewsViewsEntity } from "src/news/domain/entites/news-views.entity";
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
    @OneToMany(() => OtpCodes, (otp: any) => otp.user)
    Otpcode: OtpCodes[]
    @OneToMany(() =>PurchasedCourses, (purchased: any) => purchased.user)
    purchasedcourses:PurchasedCourses[]
    @OneToMany(()=>CourseReviews, (review: any) => review.user)
    reviews:CourseReviews[]
    @OneToMany(() => LikedCourse, (liked: any) => liked.user)
    Liked:LikedCourse[]
    @OneToMany(() => UsersLessons, (ul: any) => ul.user)
    usersLessons: UsersLessons[]
    @OneToMany(() => BookReviewsEntity, (review: any) => review.user)
    bookReviews: BookReviewsEntity[]
    @OneToMany(() => BookLikesEntity, (like: any) => like.user)
    bookLikes: BookLikesEntity[]
    @OneToMany(() => NewsViewsEntity, (view: any) => view.user)
    newsViews: NewsViewsEntity[]
    @Column({ type: "enum" })
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
