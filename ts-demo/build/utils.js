"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFromFile = exports.appendToFile = void 0;
const fs = require('fs/promises');
const path = require('path');
function appendToFile(content, file) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = "\n" + content;
            const filePath = path.resolve(file);
            yield fs.appendFile(filePath, todo);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.appendToFile = appendToFile;
function readFromFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path.resolve(file);
        try {
            const data = yield fs.readFile(filePath, { encoding: 'utf8' });
            return data;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.readFromFile = readFromFile;
//# sourceMappingURL=utils.js.map