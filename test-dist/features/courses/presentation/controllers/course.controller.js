"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let CourseController = (() => {
    let _classDecorators = [(0, swagger_1.ApiTags)("Courses"), (0, common_1.Controller)("courses")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createCourse_decorators;
    let _getAllCourses_decorators;
    let _getCourseById_decorators;
    let _updateCourse_decorators;
    let _deleteCourse_decorators;
    var CourseController = _classThis = class {
        constructor(courseService) {
            this.courseService = (__runInitializers(this, _instanceExtraInitializers), courseService);
        }
        async createCourse(dto) {
            return await this.courseService.createCourse(dto);
        }
        async getAllCourses() {
            return await this.courseService.getAllCourses();
        }
        async getCourseById(id) {
            return await this.courseService.getCourseById(id);
        }
        async updateCourse(id, dto) {
            return await this.courseService.updateCourse(id, dto);
        }
        async deleteCourse(id) {
            return await this.courseService.deleteCourse(id);
        }
    };
    __setFunctionName(_classThis, "CourseController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createCourse_decorators = [(0, common_1.Post)(), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED), (0, swagger_1.ApiOperation)({ summary: "Create a new course" }), (0, swagger_1.ApiResponse)({ status: 201, description: "Course created successfully" }), (0, swagger_1.ApiResponse)({ status: 400, description: "Bad request" })];
        _getAllCourses_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({ summary: "Get all courses" }), (0, swagger_1.ApiResponse)({ status: 200, description: "List of all courses" })];
        _getCourseById_decorators = [(0, common_1.Get)(":id"), (0, swagger_1.ApiOperation)({ summary: "Get course by ID" }), (0, swagger_1.ApiParam)({ name: "id", type: "number", description: "Course ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Course found" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Course not found" })];
        _updateCourse_decorators = [(0, common_1.Put)(":id"), (0, swagger_1.ApiOperation)({ summary: "Update course by ID" }), (0, swagger_1.ApiParam)({ name: "id", type: "number", description: "Course ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Course updated successfully" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Course not found" })];
        _deleteCourse_decorators = [(0, common_1.Delete)(":id"), (0, swagger_1.ApiOperation)({ summary: "Delete course by ID" }), (0, swagger_1.ApiParam)({ name: "id", type: "number", description: "Course ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Course deleted successfully" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Course not found" })];
        __esDecorate(_classThis, null, _createCourse_decorators, { kind: "method", name: "createCourse", static: false, private: false, access: { has: obj => "createCourse" in obj, get: obj => obj.createCourse }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllCourses_decorators, { kind: "method", name: "getAllCourses", static: false, private: false, access: { has: obj => "getAllCourses" in obj, get: obj => obj.getAllCourses }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCourseById_decorators, { kind: "method", name: "getCourseById", static: false, private: false, access: { has: obj => "getCourseById" in obj, get: obj => obj.getCourseById }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCourse_decorators, { kind: "method", name: "updateCourse", static: false, private: false, access: { has: obj => "updateCourse" in obj, get: obj => obj.updateCourse }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCourse_decorators, { kind: "method", name: "deleteCourse", static: false, private: false, access: { has: obj => "deleteCourse" in obj, get: obj => obj.deleteCourse }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CourseController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CourseController = _classThis;
})();
exports.CourseController = CourseController;
