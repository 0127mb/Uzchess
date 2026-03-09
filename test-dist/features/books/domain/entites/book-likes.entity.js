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
exports.BookLikesEntity = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("src/features/user/infrastructure/typeorm/User.entity");
const book_entity_1 = require("./book.entity");
let BookLikesEntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)("BookLikes")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = typeorm_1.BaseEntity;
    let _userId_decorators;
    let _userId_initializers = [];
    let _userId_extraInitializers = [];
    let _bookId_decorators;
    let _bookId_initializers = [];
    let _bookId_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _book_decorators;
    let _book_initializers = [];
    let _book_extraInitializers = [];
    let _date_decorators;
    let _date_initializers = [];
    let _date_extraInitializers = [];
    var BookLikesEntity = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.userId = __runInitializers(this, _userId_initializers, void 0);
            this.bookId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _bookId_initializers, void 0));
            this.user = (__runInitializers(this, _bookId_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.book = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _book_initializers, void 0));
            this.date = (__runInitializers(this, _book_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            __runInitializers(this, _date_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "BookLikesEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _userId_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _bookId_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.bookLikes)];
        _book_decorators = [(0, typeorm_1.ManyToOne)(() => book_entity_1.BookEntity, book => book.likes)];
        _date_decorators = [(0, typeorm_1.CreateDateColumn)()];
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: obj => "userId" in obj, get: obj => obj.userId, set: (obj, value) => { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _bookId_decorators, { kind: "field", name: "bookId", static: false, private: false, access: { has: obj => "bookId" in obj, get: obj => obj.bookId, set: (obj, value) => { obj.bookId = value; } }, metadata: _metadata }, _bookId_initializers, _bookId_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _book_decorators, { kind: "field", name: "book", static: false, private: false, access: { has: obj => "book" in obj, get: obj => obj.book, set: (obj, value) => { obj.book = value; } }, metadata: _metadata }, _book_initializers, _book_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: obj => "date" in obj, get: obj => obj.date, set: (obj, value) => { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BookLikesEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BookLikesEntity = _classThis;
})();
exports.BookLikesEntity = BookLikesEntity;
