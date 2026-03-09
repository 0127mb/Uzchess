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
exports.UsersLessons = void 0;
const User_entity_1 = require("src/features/user/infrastructure/typeorm/User.entity");
const typeorm_1 = require("typeorm");
const Course_lessons_entity_1 = require("../../../courses/infrastructure/typeorm/Course-lessons.entity");
let UsersLessons = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)("users_lessons")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _userId_decorators;
    let _userId_initializers = [];
    let _userId_extraInitializers = [];
    let _courseLessonId_decorators;
    let _courseLessonId_initializers = [];
    let _courseLessonId_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _lesson_decorators;
    let _lesson_initializers = [];
    let _lesson_extraInitializers = [];
    let _stoppedAt_decorators;
    let _stoppedAt_initializers = [];
    let _stoppedAt_extraInitializers = [];
    let _isCompleted_decorators;
    let _isCompleted_initializers = [];
    let _isCompleted_extraInitializers = [];
    var UsersLessons = _classThis = class {
        constructor() {
            this.userId = __runInitializers(this, _userId_initializers, void 0);
            this.courseLessonId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _courseLessonId_initializers, void 0));
            this.user = (__runInitializers(this, _courseLessonId_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.lesson = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _lesson_initializers, void 0));
            this.stoppedAt = (__runInitializers(this, _lesson_extraInitializers), __runInitializers(this, _stoppedAt_initializers, void 0));
            this.isCompleted = (__runInitializers(this, _stoppedAt_extraInitializers), __runInitializers(this, _isCompleted_initializers, void 0));
            __runInitializers(this, _isCompleted_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "UsersLessons");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _userId_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _courseLessonId_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.usersLessons)];
        _lesson_decorators = [(0, typeorm_1.ManyToOne)(() => Course_lessons_entity_1.CourseLessonsEntity, lesson => lesson.usersLessons)];
        _stoppedAt_decorators = [(0, typeorm_1.Column)({ type: "int", nullable: true })];
        _isCompleted_decorators = [(0, typeorm_1.Column)({ type: "boolean", default: false })];
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: obj => "userId" in obj, get: obj => obj.userId, set: (obj, value) => { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _courseLessonId_decorators, { kind: "field", name: "courseLessonId", static: false, private: false, access: { has: obj => "courseLessonId" in obj, get: obj => obj.courseLessonId, set: (obj, value) => { obj.courseLessonId = value; } }, metadata: _metadata }, _courseLessonId_initializers, _courseLessonId_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _lesson_decorators, { kind: "field", name: "lesson", static: false, private: false, access: { has: obj => "lesson" in obj, get: obj => obj.lesson, set: (obj, value) => { obj.lesson = value; } }, metadata: _metadata }, _lesson_initializers, _lesson_extraInitializers);
        __esDecorate(null, null, _stoppedAt_decorators, { kind: "field", name: "stoppedAt", static: false, private: false, access: { has: obj => "stoppedAt" in obj, get: obj => obj.stoppedAt, set: (obj, value) => { obj.stoppedAt = value; } }, metadata: _metadata }, _stoppedAt_initializers, _stoppedAt_extraInitializers);
        __esDecorate(null, null, _isCompleted_decorators, { kind: "field", name: "isCompleted", static: false, private: false, access: { has: obj => "isCompleted" in obj, get: obj => obj.isCompleted, set: (obj, value) => { obj.isCompleted = value; } }, metadata: _metadata }, _isCompleted_initializers, _isCompleted_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersLessons = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersLessons = _classThis;
})();
exports.UsersLessons = UsersLessons;
