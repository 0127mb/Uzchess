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
exports.CoursesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Course_entity_1 = require("./infrastructure/typeorm/Course.entity");
const course_section_entity_1 = require("./infrastructure/typeorm/course-section.entity");
const Course_lessons_entity_1 = require("./infrastructure/typeorm/Course-lessons.entity");
const purchased_course_entity_1 = require("./infrastructure/typeorm/purchased.course.entity");
const Course_review_entity_1 = require("./infrastructure/typeorm/Course.review.entity");
const Liked_course_entity_1 = require("./infrastructure/typeorm/Liked.course.entity");
const Category_course_entity_1 = require("./infrastructure/typeorm/Category-course.entity");
const course_service_1 = require("./application/services/course.service");
const course_controller_1 = require("./presentation/controllers/course.controller");
let CoursesModule = (() => {
    let _classDecorators = [(0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    Course_entity_1.CourseEntity,
                    course_section_entity_1.CourseSection,
                    Course_lessons_entity_1.CourseLessonsEntity,
                    purchased_course_entity_1.PurchasedCourses,
                    Course_review_entity_1.CourseReviews,
                    Liked_course_entity_1.LikedCourse,
                    Category_course_entity_1.CategoryCourse,
                ]),
            ],
            controllers: [course_controller_1.CourseController],
            providers: [course_service_1.CourseService],
            exports: [course_service_1.CourseService],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CoursesModule = _classThis = class {
    };
    __setFunctionName(_classThis, "CoursesModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CoursesModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CoursesModule = _classThis;
})();
exports.CoursesModule = CoursesModule;
