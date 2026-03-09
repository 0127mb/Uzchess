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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
let createBookDto = (() => {
    var _a;
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _price_extraInitializers = [];
    let _newPrice_decorators;
    let _newPrice_initializers = [];
    let _newPrice_extraInitializers = [];
    let _authorId_decorators;
    let _authorId_initializers = [];
    let _authorId_extraInitializers = [];
    let _categoryId_decorators;
    let _categoryId_initializers = [];
    let _categoryId_extraInitializers = [];
    let _languageId_decorators;
    let _languageId_initializers = [];
    let _languageId_extraInitializers = [];
    let _difficultyId_decorators;
    let _difficultyId_initializers = [];
    let _difficultyId_extraInitializers = [];
    let _pages_decorators;
    let _pages_initializers = [];
    let _pages_extraInitializers = [];
    let _pubDate_decorators;
    let _pubDate_initializers = [];
    let _pubDate_extraInitializers = [];
    return _a = class createBookDto {
            constructor() {
                this.title = __runInitializers(this, _title_initializers, void 0);
                this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.price = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                this.newPrice = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _newPrice_initializers, void 0));
                this.authorId = (__runInitializers(this, _newPrice_extraInitializers), __runInitializers(this, _authorId_initializers, void 0));
                this.categoryId = (__runInitializers(this, _authorId_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
                this.languageId = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _languageId_initializers, void 0));
                this.difficultyId = (__runInitializers(this, _languageId_extraInitializers), __runInitializers(this, _difficultyId_initializers, void 0));
                this.pages = (__runInitializers(this, _difficultyId_extraInitializers), __runInitializers(this, _pages_initializers, void 0));
                this.pubDate = (__runInitializers(this, _pages_extraInitializers), __runInitializers(this, _pubDate_initializers, void 0));
                __runInitializers(this, _pubDate_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, swagger_1.ApiProperty)({ example: "The Great Gatsby", description: "Book title" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({ example: "A classic novel by F. Scott Fitzgerald", description: "Book description" }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _price_decorators = [(0, swagger_1.ApiProperty)({ example: 25.99, description: "Book price" }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _newPrice_decorators = [(0, swagger_1.ApiProperty)({ example: 19.99, description: "Discounted price", required: false }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
            _authorId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Author ID" }), (0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _categoryId_decorators = [(0, swagger_1.ApiProperty)({ example: 2, description: "Category ID" }), (0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _languageId_decorators = [(0, swagger_1.ApiProperty)({ example: 3, description: "Language ID" }), (0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _difficultyId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Difficulty ID" }), (0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _pages_decorators = [(0, swagger_1.ApiProperty)({ example: 300, description: "Number of pages" }), (0, class_validator_1.IsInt)(), (0, class_validator_1.IsNotEmpty)()];
            _pubDate_decorators = [(0, swagger_1.ApiProperty)({ example: "1925-04-10", description: "Publication date" }), (0, class_validator_1.IsDate)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            __esDecorate(null, null, _newPrice_decorators, { kind: "field", name: "newPrice", static: false, private: false, access: { has: obj => "newPrice" in obj, get: obj => obj.newPrice, set: (obj, value) => { obj.newPrice = value; } }, metadata: _metadata }, _newPrice_initializers, _newPrice_extraInitializers);
            __esDecorate(null, null, _authorId_decorators, { kind: "field", name: "authorId", static: false, private: false, access: { has: obj => "authorId" in obj, get: obj => obj.authorId, set: (obj, value) => { obj.authorId = value; } }, metadata: _metadata }, _authorId_initializers, _authorId_extraInitializers);
            __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: obj => "categoryId" in obj, get: obj => obj.categoryId, set: (obj, value) => { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
            __esDecorate(null, null, _languageId_decorators, { kind: "field", name: "languageId", static: false, private: false, access: { has: obj => "languageId" in obj, get: obj => obj.languageId, set: (obj, value) => { obj.languageId = value; } }, metadata: _metadata }, _languageId_initializers, _languageId_extraInitializers);
            __esDecorate(null, null, _difficultyId_decorators, { kind: "field", name: "difficultyId", static: false, private: false, access: { has: obj => "difficultyId" in obj, get: obj => obj.difficultyId, set: (obj, value) => { obj.difficultyId = value; } }, metadata: _metadata }, _difficultyId_initializers, _difficultyId_extraInitializers);
            __esDecorate(null, null, _pages_decorators, { kind: "field", name: "pages", static: false, private: false, access: { has: obj => "pages" in obj, get: obj => obj.pages, set: (obj, value) => { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _pages_extraInitializers);
            __esDecorate(null, null, _pubDate_decorators, { kind: "field", name: "pubDate", static: false, private: false, access: { has: obj => "pubDate" in obj, get: obj => obj.pubDate, set: (obj, value) => { obj.pubDate = value; } }, metadata: _metadata }, _pubDate_initializers, _pubDate_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.createBookDto = createBookDto;
