"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
const generateHash = (len) => {
    const options = "abcdefghijklmnopqrstuvwxyz1234567890";
    const length = options.length;
    let hash = "";
    for (let i = 0; i < len; i++) {
        hash += options[Math.floor(Math.random() * length)];
    }
    return hash;
};
exports.generateHash = generateHash;
//# sourceMappingURL=generateHash.js.map