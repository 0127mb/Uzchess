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
exports.BookEntity = void 0;
const typeorm_1 = require("typeorm");
const auhtor_entity_1 = require("src/features/auhtor/infrastructure/typeorm/auhtor.entity");
const book_category_entity_1 = require("./book-category.entity");
const languages_entity_1 = require("src/features/languagges/infrastracture/typeorm/languages.entity");
const difficulty_entity_1 = require("src/features/difficulty/infrastracture/typeorm/difficulty.entity");
const book_reviews_entity_1 = require("./book-reviews.entity");
const book_likes_entity_1 = require("./book-likes.entity");
let BookEntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)("Books")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = typeorm_1.BaseEntity;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _author_decorators;
    let _author_initializers = [];
    let _author_extraInitializers = [];
    let _category_decorators;
    let _category_initializers = [];
    let _category_extraInitializers = [];
    let _language_decorators;
    let _language_initializers = [];
    let _language_extraInitializers = [];
    let _difficulty_decorators;
    let _difficulty_initializers = [];
    let _difficulty_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _image_decorators;
    let _image_initializers = [];
    let _image_extraInitializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _price_extraInitializers = [];
    let _newPrice_decorators;
    let _newPrice_initializers = [];
    let _newPrice_extraInitializers = [];
    let _rating_decorators;
    let _rating_initializers = [];
    let _rating_extraInitializers = [];
    let _reviewsCount_decorators;
    let _reviewsCount_initializers = [];
    let _reviewsCount_extraInitializers = [];
    let _pages_decorators;
    let _pages_initializers = [];
    let _pages_extraInitializers = [];
    let _pubDate_decorators;
    let _pubDate_initializers = [];
    let _pubDate_extraInitializers = [];
    let _reviews_decorators;
    let _reviews_initializers = [];
    let _reviews_extraInitializers = [];
    let _likes_decorators;
    let _likes_initializers = [];
    let _likes_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    var BookEntity = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.author = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _author_initializers, void 0));
            this.category = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.language = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _language_initializers, void 0));
            this.difficulty = (__runInitializers(this, _language_extraInitializers), __runInitializers(this, _difficulty_initializers, void 0));
            this.title = (__runInitializers(this, _difficulty_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.image = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            this.price = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.newPrice = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _newPrice_initializers, void 0));
            this.rating = (__runInitializers(this, _newPrice_extraInitializers), __runInitializers(this, _rating_initializers, void 0));
            this.reviewsCount = (__runInitializers(this, _rating_extraInitializers), __runInitializers(this, _reviewsCount_initializers, void 0));
            this.pages = (__runInitializers(this, _reviewsCount_extraInitializers), __runInitializers(this, _pages_initializers, void 0));
            this.pubDate = (__runInitializers(this, _pages_extraInitializers), __runInitializers(this, _pubDate_initializers, void 0));
            this.reviews = (__runInitializers(this, _pubDate_extraInitializers), __runInitializers(this, _reviews_initializers, void 0));
            this.likes = (__runInitializers(this, _reviews_extraInitializers), __runInitializers(this, _likes_initializers, void 0));
            this.createdAt = (__runInitializers(this, _likes_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            __runInitializers(this, _createdAt_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "BookEntity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _author_decorators = [(0, typeorm_1.ManyToOne)(() => auhtor_entity_1.Auhtors, author => author.books)];
        _category_decorators = [(0, typeorm_1.ManyToOne)(() => book_category_entity_1.BookCategoryEntity, category => category.books)];
        _language_decorators = [(0, typeorm_1.ManyToOne)(() => languages_entity_1.Languages, language => language.books)];
        _difficulty_decorators = [(0, typeorm_1.ManyToOne)(() => difficulty_entity_1.Difficulty, difficulty => difficulty.books)];
        _title_decorators = [(0, typeorm_1.Column)({ type: "varchar", length: 128 })];
        _description_decorators = [(0, typeorm_1.Column)({ type: "text" })];
        _image_decorators = [(0, typeorm_1.Column)({ type: "varchar", length: 128, nullable: true })];
        _price_decorators = [(0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2 })];
        _newPrice_decorators = [(0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2, nullable: true })];
        _rating_decorators = [(0, typeorm_1.Column)({ type: "decimal", precision: 2, scale: 1, nullable: true })];
        _reviewsCount_decorators = [(0, typeorm_1.Column)({ type: "int", default: 0 })];
        _pages_decorators = [(0, typeorm_1.Column)({ type: "int" })];
        _pubDate_decorators = [(0, typeorm_1.Column)({ type: "date" })];
        _reviews_decorators = [(0, typeorm_1.OneToMany)(() => book_reviews_entity_1.BookReviewsEntity, (review) => review.book)];
        _likes_decorators = [(0, typeorm_1.OneToMany)(() => book_likes_entity_1.BookLikesEntity, (like) => like.book)];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: obj => "author" in obj, get: obj => obj.author, set: (obj, value) => { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: obj => "category" in obj, get: obj => obj.category, set: (obj, value) => { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: obj => "language" in obj, get: obj => obj.language, set: (obj, value) => { obj.language = value; } }, metadata: _metadata }, _language_initializers, _language_extraInitializers);
        __esDecorate(null, null, _difficulty_decorators, { kind: "field", name: "difficulty", static: false, private: false, access: { has: obj => "difficulty" in obj, get: obj => obj.difficulty, set: (obj, value) => { obj.difficulty = value; } }, metadata: _metadata }, _difficulty_initializers, _difficulty_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: obj => "image" in obj, get: obj => obj.image, set: (obj, value) => { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _newPrice_decorators, { kind: "field", name: "newPrice", static: false, private: false, access: { has: obj => "newPrice" in obj, get: obj => obj.newPrice, set: (obj, value) => { obj.newPrice = value; } }, metadata: _metadata }, _newPrice_initializers, _newPrice_extraInitializers);
        __esDecorate(null, null, _rating_decorators, { kind: "field", name: "rating", static: false, private: false, access: { has: obj => "rating" in obj, get: obj => obj.rating, set: (obj, value) => { obj.rating = value; } }, metadata: _metadata }, _rating_initializers, _rating_extraInitializers);
        __esDecorate(null, null, _reviewsCount_decorators, { kind: "field", name: "reviewsCount", static: false, private: false, access: { has: obj => "reviewsCount" in obj, get: obj => obj.reviewsCount, set: (obj, value) => { obj.reviewsCount = value; } }, metadata: _metadata }, _reviewsCount_initializers, _reviewsCount_extraInitializers);
        __esDecorate(null, null, _pages_decorators, { kind: "field", name: "pages", static: false, private: false, access: { has: obj => "pages" in obj, get: obj => obj.pages, set: (obj, value) => { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _pages_extraInitializers);
        __esDecorate(null, null, _pubDate_decorators, { kind: "field", name: "pubDate", static: false, private: false, access: { has: obj => "pubDate" in obj, get: obj => obj.pubDate, set: (obj, value) => { obj.pubDate = value; } }, metadata: _metadata }, _pubDate_initializers, _pubDate_extraInitializers);
        __esDecorate(null, null, _reviews_decorators, { kind: "field", name: "reviews", static: false, private: false, access: { has: obj => "reviews" in obj, get: obj => obj.reviews, set: (obj, value) => { obj.reviews = value; } }, metadata: _metadata }, _reviews_initializers, _reviews_extraInitializers);
        __esDecorate(null, null, _likes_decorators, { kind: "field", name: "likes", static: false, private: false, access: { has: obj => "likes" in obj, get: obj => obj.likes, set: (obj, value) => { obj.likes = value; } }, metadata: _metadata }, _likes_initializers, _likes_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BookEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BookEntity = _classThis;
})();
exports.BookEntity = BookEntity;
