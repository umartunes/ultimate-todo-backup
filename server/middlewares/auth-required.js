"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authRequired = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.t.message = "Authentication Required";
        return res.send(res.t);
    }
    next();
};
exports.default = authRequired;
//# sourceMappingURL=auth-required.js.map