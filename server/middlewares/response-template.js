"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseTemplate = (req, res, next) => {
    res.t = {
        auth: req.isAuthenticated(),
        success: false,
        message: "",
        data: null
    };
    next();
};
exports.default = responseTemplate;
//# sourceMappingURL=response-template.js.map