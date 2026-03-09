"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const Course_entity_1 = require("../../infrastructure/typeorm/Course.entity");
let CourseService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CourseService = _classThis = class {
        constructor(courseRepo) {
            this.courseRepo = courseRepo;
        }
        async createCourse(dto) {
            try {
                const courseData = new Course_entity_1.CourseEntity();
                courseData.title = dto.title;
                courseData.price = parseFloat(dto.price.toString());
                courseData.newPrice = dto.newPrice ? parseFloat(dto.newPrice.toString()) : undefined;
                courseData.author = { id: dto.authorId };
                courseData.category = { id: dto.categoryId };
                courseData.languages = { id: dto.languageId };
                courseData.difficulty = { id: dto.difficultyId };
                courseData.reviewsCount = 0;
                courseData.rating = 0;
                courseData.SectionsCount = 0;
                courseData.studentsCount = 0;
                const course = await this.courseRepo.save(courseData);
                return course;
            }
            catch (error) {
                console.error("Error creating course:", error);
                throw new common_1.InternalServerErrorException("Failed to create course");
            }
        }
        async getAllCourses() {
            try {
                return await this.courseRepo.find({
                    relations: ["author", "category", "languages", "difficulty", "CourseSection", "courseLessons"]
                });
            }
            catch (error) {
                console.error("Error fetching courses:", error);
                throw new common_1.InternalServerErrorException("Failed to fetch courses");
            }
        }
        async getCourseById(id) {
            try {
                const course = await this.courseRepo.findOne({
                    where: { id },
                    relations: ["author", "category", "languages", "difficulty", "CourseSection", "courseLessons"]
                });
                if (!course) {
                    throw new common_1.NotFoundException(`Course with ID ${id} not found`);
                }
                return course;
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException)
                    throw error;
                console.error("Error fetching course:", error);
                throw new common_1.InternalServerErrorException("Failed to fetch course");
            }
        }
        async updateCourse(id, dto) {
            try {
                const course = await this.getCourseById(id);
                if (dto.title)
                    course.title = dto.title;
                if (dto.price)
                    course.price = parseFloat(dto.price.toString());
                if (dto.newPrice)
                    course.newPrice = parseFloat(dto.newPrice.toString());
                return await this.courseRepo.save(course);
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException)
                    throw error;
                console.error("Error updating course:", error);
                throw new common_1.InternalServerErrorException("Failed to update course");
            }
        }
        async deleteCourse(id) {
            try {
                const course = await this.getCourseById(id);
                await this.courseRepo.remove(course);
                return { message: `Course with ID ${id} deleted successfully` };
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException)
                    throw error;
                console.error("Error deleting course:", error);
                throw new common_1.InternalServerErrorException("Failed to delete course");
            }
        }
    };
    __setFunctionName(_classThis, "CourseService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CourseService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CourseService = _classThis;
})();
exports.CourseService = CourseService;
