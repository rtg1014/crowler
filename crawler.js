var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var pupperteer = require("puppeteer");
var fs = require("fs");
var _getCompanyName = require("./functions/getCompanyName");
var _getMedicineName = require("./functions/getMedicineName");
var _getIsHealthCertification = require("./functions/getIsHealthCertification");
var _getEffects = require("./functions/getEffects");
var _getMedicineImageUrl = require("./functions/getMedicineImageUrl");
var _getMerchandiseHowToConsume = require("./functions/getMerchandiseHowToConsume");
(function () { return __awaiter(_this, void 0, void 0, function () {
    function startCrawling(page) {
        return __awaiter(this, void 0, void 0, function () {
            var companyName, medcineName, isHealthCertification, effects, medicineImageUrl, merchandiseHowToconsume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _getCompanyName(page)];
                    case 1:
                        companyName = _a.sent();
                        console.log("companyName", companyName);
                        return [4 /*yield*/, _getMedicineName(page)];
                    case 2:
                        medcineName = _a.sent();
                        console.log("medcineName", medcineName);
                        return [4 /*yield*/, _getIsHealthCertification(page)];
                    case 3:
                        isHealthCertification = _a.sent();
                        console.log("isHealthCertification", isHealthCertification);
                        return [4 /*yield*/, _getEffects(page)];
                    case 4:
                        effects = _a.sent();
                        console.log("effects", effects);
                        return [4 /*yield*/, _getMedicineImageUrl(page)];
                    case 5:
                        medicineImageUrl = _a.sent();
                        console.log("medicineImageUrl", medicineImageUrl);
                        return [4 /*yield*/, _getMerchandiseHowToConsume(page)];
                    case 6:
                        merchandiseHowToconsume = _a.sent();
                        console.log('merchandiseHowToConsume', merchandiseHowToconsume);
                        return [2 /*return*/];
                }
            });
        });
    }
    var browser, page, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pupperteer.launch({
                    headless: false,
                    args: ["--windows-size-1920,1080"],
                    slowMo: 30
                })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                i = 1;
                _a.label = 3;
            case 3:
                if (!(i <= 1000)) return [3 /*break*/, 7];
                return [4 /*yield*/, Promise.all([
                        page.goto("https://www.pillyze.com/products/".concat(i, "/a")),
                        page.waitForNavigation(),
                    ])];
            case 4:
                _a.sent();
                console.log("\ncurrent medicine id: ", i, "\n");
                return [4 /*yield*/, startCrawling(page)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                browser.close;
                return [2 /*return*/];
        }
    });
}); })();
// FIXME;
// 주요기능 보조기능은 아직 뭉텅이로 크롤링한 상태. 세분화 필요함
// 건강기능식품 유무는 링크 자체가 달라져서 이건 자동화 하는 부분에서 첫번째 링크로 크롤링 후 만약 leangth 가 없다면 다음 링크에서 다시 출력하게끔 하는 형태로 해야될 것 같음
// 건기식 유무같은 경우는 링크자체가 달라지니깐 여기만 좀 손보면 될것 같음
// 자동화까지만 하면 거의 완료될듯 합니다.
