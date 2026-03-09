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
exports.CourseSection = void 0;
const typeorm_1 = require("typeorm");
const Course_entity_1 = require("./Course.entity");
const Course_lessons_entity_1 = require("./Course-lessons.entity");
let CourseSection = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)("CourseSections")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = typeorm_1.BaseEntity;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _course_decorators;
    let _course_initializers = [];
    let _course_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    let _date_decorators;
    let _date_initializers = [];
    let _date_extraInitializers = [];
    let _lessons_decorators;
    let _lessons_initializers = [];
    let _lessons_extraInitializers = [];
    var CourseSection = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.course = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _course_initializers, void 0));
            this.title = (__runInitializers(this, _course_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.order = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.date = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.lessons = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _lessons_initializers, void 0));
            __runInitializers(this, _lessons_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CourseSection");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _course_decorators = [(0, typeorm_1.ManyToOne)(() => Course_entity_1.CourseEntity, course => course.CourseSection)];
        _title_decorators = [(0, typeorm_1.Column)({ type: "varchar", length: 128 })];
        _order_decorators = [(0, typeorm_1.Column)({ type: "int", nullable: true })];
        _date_decorators = [(0, typeorm_1.CreateDateColumn)({ type: "timestamp" })];
        _lessons_decorators = [(0, typeorm_1.ManyToMany)(() => Course_lessons_entity_1.CourseLessonsEntity, lessons => lessons.sections)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _course_decorators, { kind: "field", name: "course", static: false, private: false, access: { has: obj => "course" in obj, get: obj => obj.course, set: (obj, value) => { obj.course = value; } }, metadata: _metadata }, _course_initializers, _course_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: obj => "date" in obj, get: obj => obj.date, set: (obj, value) => { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _lessons_decorators, { kind: "field", name: "lessons", static: false, private: false, access: { has: obj => "lessons" in obj, get: obj => obj.lessons, set: (obj, value) => { obj.lessons = value; } }, metadata: _metadata }, _lessons_initializers, _lessons_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CourseSection = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CourseSection = _classThis;
})();
exports.CourseSection = CourseSection;
