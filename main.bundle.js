webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/adding-form/adding-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n    max-width: 500px;\r\n}\r\n.alert {\r\n    margin-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adding-form/adding-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <label for=\"augent\">Dodajna:</label>\r\n      <input \r\n      ngModel \r\n      name=\"augent\" \r\n      required \r\n      pattern=\"[+--]?\\d+,?\\d*\"\r\n      #augent=\"ngModel\" \r\n      type=\"text\" \r\n      id=\"augent\" \r\n      class=\"form-control\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"augent.dirty && !augent.valid\">\r\n        <div *ngIf=\"augent.errors.required\">\r\n          To pole nie może być puste.\r\n        </div>\r\n        <div *ngIf=\"augent.errors.pattern\">\r\n          Dodajna musi być liczbą w systemie dziesiętnym.\r\n        </div>      \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"addend\">Dodajnik:</label>\r\n        <input \r\n        ngModel \r\n        name=\"addend\" \r\n        required \r\n        pattern=\"[+--]?\\d+,?\\d*\" \r\n        #addend=\"ngModel\" \r\n        type=\"text\" \r\n        id=\"addend\" \r\n        class=\"form-control\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"addend.dirty && !addend.valid\">\r\n          <div *ngIf=\"addend.errors.required\">\r\n              To pole nie może być puste.             \r\n          </div>\r\n          <div *ngIf=\"addend.errors.pattern\">\r\n            Dodajnik musi być liczbą w systemie dziesiętnym.<br/>            \r\n          </div>       \r\n        </div>\r\n      </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <button type=\"button\" (click)=\"submit(f)\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Dodaj</button>\r\n    </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/adding-form/adding-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddingFormComponent = (function () {
    function AddingFormComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AddingFormComponent.prototype.ngOnInit = function () {
    };
    AddingFormComponent.prototype.submit = function (f) {
        var augent = f.value.augent.replace(",", ".");
        var addend = f.value.addend.replace(",", ".");
        this.add.emit({ augent: augent, addend: addend });
    };
    return AddingFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], AddingFormComponent.prototype, "add", void 0);
AddingFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adding-form',
        template: __webpack_require__("../../../../../src/app/adding-form/adding-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adding-form/adding-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddingFormComponent);

//# sourceMappingURL=adding-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/adding-tutorial/adding-tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    width: 300px;\r\n    margin: auto;\r\n}\r\n.btn-primary {\r\n    width: 300px;\r\n    margin: 5px;\r\n}\r\nh1 {\r\n    text-align: center;\r\n}\r\nimg {\r\n    overflow: hidden;\r\n    width: 50%;\r\n}\r\n.overline {\r\n    text-decoration: overline;\r\n}\r\n.line-through {\r\n    text-decoration: line-through;\r\n}\r\n.app-form {\r\n    display: inline-block;   \r\n    width: 50%;\r\n}\r\n.bold {\r\n    font-weight: bold;\r\n}\r\napp-theory-presenter {\r\n    text-align: left;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adding-tutorial/adding-tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"representation\">\r\n  <h2>Zapis {{representation}}:</h2>\r\n  <app-theory-presenter [addingStrategy]=\"title\"></app-theory-presenter>\r\n  <h4>Zobacz na przykładzie:</h4>\r\n  <app-representation-form class=\"app-form\" (representation)=\"showRepresentation($event)\"></app-representation-form>\r\n  <br/>\r\n  <app-animation-test #Rep [animation]=\"representAnimation\" *ngIf=\"showRepresentationAnimation\"></app-animation-test>\r\n</div>\r\n\r\n<div class=\"algorithm\">\r\n  <h2>Algorytm dodawania:</h2>\r\n  <img [src]=\"diagramPath\" alt=\"Smiley face\" style='min-width: 100%'>\r\n</div>\r\n\r\n<div class=\"example\">\r\n  <h2>Przykład:</h2>\r\n  <app-adding-form class=\"app-form\" (add)=\"showAdding($event)\"></app-adding-form>\r\n  <app-animation-test [animation]=\"addAnimation\" *ngIf=\"showAddingAnimation\"></app-animation-test>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/adding-tutorial/adding-tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddingTutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_diagram_service__ = __webpack_require__("../../../../../src/app/block-diagram.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animated_examples_adding_animations_generator__ = __webpack_require__("../../../../../src/app/animated-examples/adding-animations-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animated_examples_representation_animations_generator__ = __webpack_require__("../../../../../src/app/animated-examples/representation-animations-generator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddingTutorialComponent = (function () {
    //end of stuff
    function AddingTutorialComponent(route, diagramService) {
        this.route = route;
        this.diagramService = diagramService;
        //TODO it is not place for that stuff:
        this.showRepresentationAnimation = false;
        this.showAddingAnimation = false;
        this.addingAnimationRenderer = new __WEBPACK_IMPORTED_MODULE_3__animated_examples_adding_animations_generator__["a" /* AddingAnimation */]();
        this.representationAnimationRenderer = new __WEBPACK_IMPORTED_MODULE_4__animated_examples_representation_animations_generator__["a" /* RepresentationAnimation */]();
    }
    AddingTutorialComponent.prototype.showRepresentation = function (event) {
        this.showRepresentationAnimation = false;
        this.representationArgument = parseFloat(event);
        this.renderNewRepresentationAnimation();
        this.showRepresentationAnimation = true;
    };
    AddingTutorialComponent.prototype.showAdding = function (event) {
        this.showAddingAnimation = false;
        this.addingArg1 = parseFloat(event.augent);
        this.addingArg2 = parseFloat(event.addend);
        this.renderNewAddingAnimation();
        this.showAddingAnimation = true;
    };
    AddingTutorialComponent.prototype.renderNewRepresentationAnimation = function () {
        switch (this.title) {
            case "SM":
                this.representAnimation = this.representationAnimationRenderer.animateRepresentationZM(this.representationArgument);
                break;
            case "U1":
                this.representAnimation = this.representationAnimationRenderer.animateRepresentationU1(this.representationArgument);
                break;
            case "U2":
                this.representAnimation = this.representationAnimationRenderer.animateRepresentationU2(this.representationArgument);
                break;
        }
    };
    AddingTutorialComponent.prototype.renderNewAddingAnimation = function () {
        switch (this.title) {
            case "SM":
                this.addAnimation = this.addingAnimationRenderer.animateAdddingSM(this.addingArg1, this.addingArg2);
                break;
            case "U1":
                this.addAnimation = this.addingAnimationRenderer.animateAdddingU1(this.addingArg1, this.addingArg2);
                break;
            case "U2":
                this.addAnimation = this.addingAnimationRenderer.animateAdddingU2(this.addingArg1, this.addingArg2);
                break;
        }
    };
    AddingTutorialComponent.prototype.renderRepresentation = function () {
        switch (this.title) {
            case "SM": return "modułowy";
            case "U1": return "odwrotny";
            case "U2": return "dopełnieniowy";
        }
    };
    AddingTutorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.title = params.get('id');
            _this.showRepresentationAnimation = false;
            _this.showAddingAnimation = false;
            _this.diagramPath = _this.diagramService.get(_this.title);
            _this.representation = _this.renderRepresentation();
        });
    };
    return AddingTutorialComponent;
}());
AddingTutorialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adding-tutorial',
        template: __webpack_require__("../../../../../src/app/adding-tutorial/adding-tutorial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adding-tutorial/adding-tutorial.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__block_diagram_service__["a" /* BlockDiagramService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__block_diagram_service__["a" /* BlockDiagramService */]) === "function" && _b || Object])
], AddingTutorialComponent);

var _a, _b;
//# sourceMappingURL=adding-tutorial.component.js.map

/***/ }),

/***/ "../../../../../src/app/animated-examples/adding-animations-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddingAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__ = __webpack_require__("../../../../../src/app/arithmetic/adding.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__ = __webpack_require__("../../../../../src/app/animation-model/frame-cell.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__ = __webpack_require__("../../../../../src/app/animation-model/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__ = __webpack_require__("../../../../../src/app/animation-model/frame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__ = __webpack_require__("../../../../../src/app/arithmetic/utils.ts");





//TODO Utils from arithetic should not occur in this file

var AddingAnimation = (function () {
    function AddingAnimation() {
    }
    AddingAnimation.prototype.toSubscript = function (numberString) {
        var subscript = '₀₁₂₃₄₅₆₇₈₉';
        return numberString
            .split('')
            .map(function (d) { return d = subscript[d]; })
            .join('');
    };
    //args to liczb dziesietne
    AddingAnimation.prototype.animateAdddingU1 = function (augent, addend) {
        //detekcja overflowu       
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var augentBN = augent.toString(2).replace(".", ",");
        var addendBN = addend.toString(2).replace(".", ",");
        var augentEvenBN;
        var addendEvenBN;
        _a = __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].evenBinaryNumbers2(augentBN, addendBN), augentEvenBN = _a[0], addendEvenBN = _a[1];
        var addingResults = addingLogic.addInU1(augentEvenBN.trim(), addendEvenBN.trim());
        var f1 = this.showAsBinary_First(augentBN, addendBN);
        var f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);
        var f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴼ=" + addingResults.augentRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f3.appendLine("Yᴼ=" + addingResults.addendRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴼ=" + addingResults.augentRep);
        f4.appendLine("Yᴼ=");
        f4.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        var frames = [];
        //przeniesienie
        var dotIndex = addingResults.carries.indexOf('.');
        var comaIndex = addingResults.carries.indexOf(',');
        var newCarries = comaIndex === -1 ?
            (addingResults.carries.charAt(0) +
                addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
                addingResults.carries.substring(dotIndex + 2))
            :
                (addingResults.carries.charAt(0) +
                    addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
                    addingResults.carries.substring(dotIndex + 2, comaIndex) +
                    addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
                    addingResults.carries.substring(comaIndex + 2));
        if (comaIndex === -1) {
            comaIndex = dotIndex;
            dotIndex = -2;
        }
        //koiec przeniesienia
        var carry = "";
        for (var i = addingResults.partialResult.length - 1, c = i; i > -1; i--, c--) {
            var fi = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            //przenieisenie
            if (addingResults.partialResult.charAt(i) != ',' && addingResults.partialResult.charAt(i) != '.') {
                if (c <= dotIndex + 2) {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 3) + newCarries.substring(c - 2);
                }
                else if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 2) + newCarries.substring(c - 1);
                }
                else {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 1) + newCarries.substring(c);
                }
                fi.appendLine(carry);
            }
            else {
                fi.appendLine(carry);
                c++;
            }
            //koiec przeniesienia
            fi.appendLine("Xᴼ=" + addingResults.augentRep);
            fi.appendLine("Yᴼ=");
            fi.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            fi.appendLine("\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.partialResult.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fi.append(addingResults.partialResult.substring(i + 1));
            frames.push(fi);
        }
        var f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("Xᴼ=" + addingResults.augentRep);
        f5.appendLine("Yᴼ=");
        f5.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        var overflow = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](f5);
        f5.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
        var fResult = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](f5);
        var plusOne = [];
        if (addingResults.carries.charAt(0) == '1') {
            var f6 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f6.appendLine("Xᴼ=" + addingResults.augentRep);
            f6.appendLine("Yᴼ=");
            f6.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f6.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f6.appendLine("\xa0".repeat("Yᴼ=".length));
            f6.append("\xa0".repeat(addingResults.partialResult.length - 2));
            f6.append("+1", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            var f7 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f7.appendLine("Xᴼ=" + addingResults.augentRep);
            f7.appendLine("Yᴼ=");
            f7.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f7.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f7.appendLine("\xa0".repeat("Yᴼ=".length));
            f7.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            var f8 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f8.appendLine("Xᴼ=" + addingResults.augentRep);
            f8.appendLine("Yᴼ=");
            f8.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            overflow = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](f8);
            f8.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f8.appendLine("\xa0".repeat("Yᴼ=".length));
            f8.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            fResult = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](f8);
            f8.appendLine("\xa0\xa0\xa0" + addingResults.result, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fResult.appendLine("\xa0\xa0\xa0" + addingResults.result);
            plusOne.push(f6);
            plusOne.push(f7);
            plusOne.push(f8);
        }
        var result = [];
        var fResult2 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](fResult);
        //todo overflow
        fResult.append("=Zᴼ", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        fResult2.append("=Zᴼ");
        if (addingResults.result.charAt(0) === '0') {
            fResult2.append("=Zᴹ", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        }
        else {
            fResult2.appendLine("\xa0\xa0\xa0" + "1" +
                __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].invertOneAndZeros(addingResults.result.substring(1)) + "=Zᴹ", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        }
        result.push(fResult);
        result.push(fResult2);
        return new __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__["a" /* Animation */]([f1, f2, f3, f4].concat(frames, [f5], plusOne, result));
        var _a;
    };
    AddingAnimation.prototype.animateAdddingU2 = function (augent, addend) {
        //detekcja overflowu
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var augentBN = augent.toString(2).replace(".", ",");
        var addendBN = addend.toString(2).replace(".", ",");
        var augentEvenBN;
        var addendEvenBN;
        _a = __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].evenBinaryNumbers2(augentBN, addendBN), augentEvenBN = _a[0], addendEvenBN = _a[1];
        var addingResults = addingLogic.addInU2(augentEvenBN.trim(), addendEvenBN.trim());
        var f1 = this.showAsBinary_First(augentBN, addendBN);
        var f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);
        var f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴰ=" + addingResults.augentRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f3.appendLine("Yᴰ=" + addingResults.addendRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f3.appendLine("");
        var f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴰ=" + addingResults.augentRep);
        f4.appendLine("Yᴰ=");
        f4.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        f4.appendLine("");
        var frames = [];
        //przeniesienie
        var dotIndex = addingResults.carries.indexOf('.');
        var comaIndex = addingResults.carries.indexOf(',');
        var newCarries = comaIndex === -1 ?
            (addingResults.carries.charAt(0) +
                addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
                addingResults.carries.substring(dotIndex + 2))
            :
                (addingResults.carries.charAt(0) +
                    addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
                    addingResults.carries.substring(dotIndex + 2, comaIndex) +
                    addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
                    addingResults.carries.substring(comaIndex + 2));
        if (comaIndex === -1) {
            comaIndex = dotIndex;
            dotIndex = -2;
        }
        //koiec przeniesienia
        var carry = "";
        for (var i = addingResults.result.length - 1, c = i; i > -1; i--, c--) {
            var fi = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            //przenieisenie
            if (addingResults.result.charAt(i) != ',' && addingResults.result.charAt(i) != '.') {
                if (c <= dotIndex + 2) {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 3) + newCarries.substring(c - 2);
                }
                else if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 2) + newCarries.substring(c - 1);
                }
                else {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 1) + newCarries.substring(c);
                }
                fi.appendLine(carry);
            }
            else {
                fi.appendLine(carry);
                c++;
            }
            //koiec przeniesienia
            fi.appendLine("Xᴰ=" + addingResults.augentRep);
            fi.appendLine("Yᴰ=");
            fi.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            fi.appendLine("\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.result.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fi.append(addingResults.result.substring(i + 1));
            frames.push(fi);
        }
        var f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("");
        f5.appendLine("Xᴰ=" + addingResults.augentRep);
        f5.appendLine("Yᴰ=");
        f5.append(addingResults.addendRep + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        var reject = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](f5);
        f5.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.result);
        reject.appendLine("\xa0");
        reject.append(addingResults.carries.charAt(0), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "line-through");
        reject.append("←" + addingResults.result);
        var results = [];
        var fResult = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](reject);
        fResult.append("=Zᴰ", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var fResult2 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](reject);
        fResult2.append("=Zᴰ");
        var fResult3 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](fResult2);
        var fResult4 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        var fResult5 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        var fResult6 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        if (addingResults.result.charAt(0) === '0') {
            fResult2.append("=Zᴹ", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            results.push(fResult, fResult2);
        }
        else {
            fResult2.appendLine("");
            fResult2.appendLine("\xa0\xa0\xa0" + "1" +
                __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].invertOneAndZeros(addingResults.result.substring(1)), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            //here?
            fResult3.appendLine("");
            fResult3.appendLine("\xa0\xa0\xa0" + "1" +
                __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].invertOneAndZeros(addingResults.result.substring(1)));
            fResult3.appendLine("\xa0\xa0\xa0");
            fResult4 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](fResult3);
            fResult3.append("\xa0".repeat(addingResults.result.length - 2));
            fResult3.append("+1", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fResult4.append("\xa0".repeat(addingResults.result.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            fResult5 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](fResult4);
            fResult5.appendLine("\xa0\xa0\xa0");
            fResult6 = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](fResult5);
            //matko bosko..
            var resultInSM = __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].addOne(__WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].invertOneAndZeros(addingResults.result));
            fResult5.append(resultInSM, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fResult6.append(resultInSM);
            fResult6.append("=Zᴹ");
            results.push(fResult, fResult2, fResult3, fResult4, fResult5, fResult6);
        }
        //todo overflow
        return new __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__["a" /* Animation */]([f1, f2, f3, f4].concat(frames, [f5, reject], results));
        var _a;
    };
    AddingAnimation.prototype.animateAdddingSM = function (augent, addend) {
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var augentBN = augent.toString(2).replace(".", ",");
        var addendBN = addend.toString(2).replace(".", ",");
        var augentEvenBN;
        var addendEvenBN;
        _a = __WEBPACK_IMPORTED_MODULE_5__arithmetic_utils__["a" /* Utils */].evenBinaryNumbers2(augentBN, addendBN), augentEvenBN = _a[0], addendEvenBN = _a[1];
        var addingResults = addingLogic.addInSM(augentEvenBN.trim(), addendEvenBN.trim());
        var signIndex = this.toSubscript(addingResults.specificInfo.signIndex);
        var f1 = this.showAsBinary_First(augentBN, addendBN);
        var f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);
        var f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴹ=" + addingResults.augentRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f3.appendLine("Yᴹ=" + addingResults.addendRep, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴹ=" + addingResults.augentRep);
        f4.append("=x" + signIndex + ".|X|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f4.appendLine("Yᴹ=" + addingResults.addendRep);
        f4.append("=y" + signIndex + ".|Y|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("Xᴹ=" + addingResults.augentRep + "=x" + signIndex + ".|X|");
        f5.append(",\xa0x" + signIndex + "=" + addingResults.specificInfo.augentSign, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f5.appendLine("Yᴹ=" + addingResults.addendRep + "=y" + signIndex + ".|Y|");
        f5.append(",\xa0y" + signIndex + "=" + addingResults.specificInfo.addendSign, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f6 = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults);
        f6.appendLine("");
        f6.appendLine("|X|=" + addingResults.specificInfo.augentAbs, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f6.appendLine("|");
        var addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
        f6.append("Y", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN, addendIsC1 ? "overline" : "");
        f6.append("|=" + addingResults.specificInfo.addendAbs, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f7 = this.SM_newCarries(augentEvenBN, addendEvenBN, addingResults);
        var xd = [];
        //
        if (addendIsC1) {
            var f8 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            //pokaż przenieisenie
            f8.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            f8.append(addingResults.partialResult);
            if (addingResults.carries.charAt(0) === '0') {
                //pokaz znak sumy
                var f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f9.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f9.appendLine("z" + signIndex + "=y" + signIndex, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                var f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f10.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f10.appendLine("z" + signIndex + "=y" + signIndex);
                f10.append("=" + addingResults.specificInfo.resultSign, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                //pokaz |Z|=~wynik
                var f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f11.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f11.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f11.appendLine("|Z|=", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                f11.append(addingResults.partialResult, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN, "overline");
                //pokaz |Z|=~wynik=moduł sumy
                var f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f12.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f12.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f12.appendLine("|Z|=");
                f12.append(addingResults.partialResult, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "overline");
                f12.append("=" + addingResults.result.substring(2), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                //pokaz sume jako znak sumy + modul sumy 
                var f13 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f13.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f13.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f13.appendLine("|Z|=");
                f13.append(addingResults.partialResult, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "overline");
                f13.append("=" + addingResults.result.substring(2));
                f13.appendLine("Zᴹ=z" + signIndex + ".|Z|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                var f14 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f14.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f14.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f14.appendLine("|Z|=");
                f14.append(addingResults.partialResult, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "overline");
                f14.append("=" + addingResults.result.substring(2));
                f14.appendLine("Zᴹ=z" + signIndex + ".|Z|");
                f14.append("=" + addingResults.result, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                xd.push(f8, f9, f10, f11, f12, f13, f14);
            }
            else {
                //dodaj +1
                var f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f9.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f9.appendLine("\xa0\xa0\xa0\xa0" + "\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                var f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f10.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f10.appendLine("\xa0\xa0\xa0\xa0");
                f10.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                //pokaz modul sumy
                var f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f11.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f11.appendLine("\xa0\xa0\xa0\xa0");
                f11.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                f11.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                //pokaz znak sumy 
                var f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f12.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f12.appendLine("\xa0\xa0\xa0\xa0");
                f12.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                f12.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f12.appendLine("z" + signIndex + "=x" + signIndex, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                var f13 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f13.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f13.appendLine("\xa0\xa0\xa0\xa0");
                f13.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                f13.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f13.appendLine("z" + signIndex + "=x" + signIndex);
                f13.append("=" + addingResults.specificInfo.resultSign, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                //pokaz sume jako znak sumy + modul sumy 
                var f14 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f14.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f14.appendLine("\xa0\xa0\xa0\xa0");
                f14.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                f14.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f14.appendLine("z" + signIndex + "=x" + signIndex + "=" + addingResults.specificInfo.resultSign);
                f14.appendLine("Zᴹ=z" + signIndex + ".|Z|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                var f15 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f15.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
                f15.appendLine("\xa0\xa0\xa0\xa0");
                f15.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
                f15.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f15.appendLine("z" + signIndex + "=x" + signIndex + "=" + addingResults.specificInfo.resultSign);
                f15.appendLine("Zᴹ=z" + signIndex + ".|Z|");
                f15.append("=" + addingResults.result, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                xd.push(f8, f9, f10, f11, f12, f13, f14, f15);
            }
        }
        else {
            var f8 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            //pokaż wynik jako moduł sumy
            f8.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult);
            f8.append("=|Z|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            //pokaz znak sumy
            var f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f9.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f9.appendLine("z" + signIndex + "=x" + signIndex + "=y" + signIndex, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            var f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f10.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f10.appendLine("z" + signIndex + "=x" + signIndex + "=y" + signIndex);
            f10.append("=" + addingResults.specificInfo.augentSign, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            //pokaz sume jako znak sumy + moduł sumy
            var f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f11.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f11.appendLine("z" +
                signIndex + "=x" +
                signIndex + "=y" +
                signIndex + "=" +
                addingResults.specificInfo.augentSign);
            f11.appendLine("Zᴹ=z" + addingResults.specificInfo.augentSign + ".|Z|", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            var f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f12.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f12.appendLine("z" +
                signIndex + "=x" +
                signIndex + "=y" +
                signIndex + "=" +
                addingResults.specificInfo.augentSign);
            f12.appendLine("Zᴹ=z" + addingResults.specificInfo.augentSign + ".|Z|");
            f12.append("=" + addingResults.result, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            xd.push(f8, f9, f10, f11, f12);
        }
        return new __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__["a" /* Animation */]([f1, f2, f3, f4, f5, f6].concat(f7, xd));
        var _a;
    };
    AddingAnimation.prototype.SM_checkPoint1 = function (augentEvenBN, addendEvenBN, addingResults) {
        var f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        var signIndex = this.toSubscript(addingResults.specificInfo.signIndex);
        f5.appendLine("Xᴹ=" + addingResults.augentRep + "=x" + signIndex + ".|X|,\xa0x" + signIndex + "=" + addingResults.specificInfo.augentSign);
        f5.appendLine("Yᴹ=" + addingResults.addendRep + "=y" + signIndex + ".|Y|,\xa0y" + signIndex + "=" + addingResults.specificInfo.addendSign);
        return f5;
    };
    AddingAnimation.prototype.SM_checkPoint2 = function (augentEvenBN, addendEvenBN, addingResults) {
        var f6 = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults);
        f6.appendLine("");
        f6.appendLine("|X|=" + addingResults.specificInfo.augentAbs);
        f6.appendLine("|");
        var addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
        f6.append("Y", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, addendIsC1 ? "overline" : "");
        f6.append("|=");
        f6.append(addingResults.specificInfo.addendAbs + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        return f6;
    };
    AddingAnimation.prototype.SM_newCarries = function (augentEvenBN, addendEvenBN, addingResults) {
        //let dotIndex = addingResults.carries.indexOf('.');
        var comaIndex = addingResults.carries.indexOf(',');
        var newCarries = comaIndex === -1 ?
            addingResults.carries
            :
                (addingResults.carries.substring(0, comaIndex) +
                    addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
                    addingResults.carries.substring(comaIndex + 2));
        if (comaIndex == -1) {
            comaIndex--; //wajcha, potrzebna do paddingu przeniesien, gdy liczby nie maja czesci ulamkowej
        }
        //koiec przeniesienia
        var frames = [];
        var carry = "";
        for (var i = addingResults.partialResult.length - 1, c = i; i > -1; i--, c--) {
            //przenieisenie
            var fi = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults);
            if (addingResults.partialResult.charAt(i) != ',') {
                if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "|X|=".length - 2) + newCarries.substring(c - 1);
                }
                else {
                    carry = "\xa0".repeat(c + "|X|=".length - 1) + newCarries.substring(c);
                }
            }
            else {
                c++;
            }
            fi.appendLine(carry);
            fi.appendLine("|X|=" + addingResults.specificInfo.augentAbs);
            fi.appendLine("|");
            var addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
            fi.append("Y", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, addendIsC1 ? "overline" : "");
            fi.append("|=");
            fi.append(addingResults.specificInfo.addendAbs + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            fi.appendLine("\xa0\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.partialResult.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            fi.append(addingResults.partialResult.substring(i + 1));
            frames.push(fi);
        }
        return frames;
    };
    AddingAnimation.prototype.showAsBinary_First = function (augentBN, addendBN) {
        var f1 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("");
        f1.appendLine("X=" + augentBN, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f1.appendLine("Y=" + addendBN, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        return f1;
    };
    AddingAnimation.prototype.showAsEvenBinary_First = function (augentEvenBN, addendEvenBN) {
        var f2 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("");
        f2.appendLine("X=");
        f2.append(augentEvenBN, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f2.appendLine("Y=");
        f2.append(addendEvenBN, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        return f2;
    };
    AddingAnimation.prototype.showAsEvenBinary = function (augentEvenBN, addendEvenBN) {
        var f3 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f3.appendLine("");
        f3.appendLine("X=" + augentEvenBN);
        f3.appendLine("Y=" + addendEvenBN);
        f3.appendLine("");
        return f3;
    };
    AddingAnimation.adding = function () {
        var c = "\xa01   ";
        var x = "10100";
        var y = "00110";
        var z = "11010";
        var frames = [];
        var f1 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("");
        f1.appendLine(x);
        f1.appendLine("");
        f1.append(y + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        for (var i = x.length - 1; i > -1; i--) {
            var f = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
            f.appendLine("");
            if (i - 1 > -1) {
                f.append("\xa0".repeat(i - 1));
                f.append(c.charAt(i - 1), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                f.append(c.substring(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
            }
            else {
                f.append(c);
            }
            f.appendLine(x.substring(0, i));
            f.append(x.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
            f.append(x.substring(i + 1));
            f.appendLine("");
            f.append(y.substring(0, i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f.append(y.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline bold");
            f.append(y.substring(i + 1) + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f.appendLine("");
            f.append("\xa0".repeat(i));
            f.append(z.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN, "bold");
            f.append(z.substring(i + 1));
            frames.push(f);
        }
        var f2 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("");
        f2.appendLine(x);
        f2.appendLine("");
        f2.append(y + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        f2.appendLine("");
        f2.append(z, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
        return new __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__["a" /* Animation */]([f1].concat(frames, [f2]));
    };
    AddingAnimation.overflow = function () {
        var c = "1\xa0\xa0\xa0\xa01   ";
        var x = "\xa011110100";
        var y = "\xa010000110";
        var z = "101111010";
        var frames = [];
        var f1 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("");
        f1.appendLine(x);
        f1.appendLine("");
        f1.append(y + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        for (var i = x.length - 1; i > -1; i--) {
            var f = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
            f.appendLine("");
            if (i - 1 > -1) {
                f.append("\xa0".repeat(i - 1));
                f.append(c.charAt(i - 1), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
                f.append(c.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
                f.append(c.substring(i + 1), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE);
            }
            else {
                f.append(c.charAt(0), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
            }
            f.appendLine(x.substring(0, i));
            f.append(x.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
            f.append(x.substring(i + 1));
            f.appendLine("");
            f.append(y.substring(0, i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f.append(y.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline bold");
            f.append(y.substring(i + 1) + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            f.appendLine("");
            f.append("\xa0".repeat(i));
            f.append(z.charAt(i), __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN, "bold");
            f.append(z.substring(i + 1));
            frames.push(f);
        }
        var f2 = new __WEBPACK_IMPORTED_MODULE_4__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("");
        f2.appendLine(x);
        f2.appendLine("");
        f2.append(y + "\xa0+", __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
        f2.appendLine("");
        f2.append(z, __WEBPACK_IMPORTED_MODULE_2__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "bold");
        return new __WEBPACK_IMPORTED_MODULE_3__animation_model_animation__["a" /* Animation */]([f1].concat(frames, [f2]));
    };
    return AddingAnimation;
}());

//# sourceMappingURL=adding-animations-generator.js.map

/***/ }),

/***/ "../../../../../src/app/animated-examples/representation-animations-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentationAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_model_animation__ = __webpack_require__("../../../../../src/app/animation-model/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__ = __webpack_require__("../../../../../src/app/arithmetic/adding.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arithmetic_representation_converter__ = __webpack_require__("../../../../../src/app/arithmetic/representation-converter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__ = __webpack_require__("../../../../../src/app/animation-model/frame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__ = __webpack_require__("../../../../../src/app/animation-model/frame-cell.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var RepresentationAnimation = (function () {
    function RepresentationAnimation() {
        this.representationConverter = new __WEBPACK_IMPORTED_MODULE_2__arithmetic_representation_converter__["a" /* RepresentationConverter */]();
    }
    //przyjmuje liczbe dzisesiętną
    RepresentationAnimation.prototype.animateRepresentationU2 = function (num, name) {
        if (name === void 0) { name = "X"; }
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var inBN = num.toString(2).replace(".", ",");
        ;
        var inU1 = this.representationConverter.toU1(inBN);
        var eqAndPadSpaces = inBN.charAt(0) === "-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        var f1 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f1.appendLine("");
        var f2 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine("");
        f2.appendLine(name + "ᴼ=", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var frames = [];
        for (var i = inU1.length - 1; i > -1; i--) {
            var fx = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
            fx.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            fx.appendLine("");
            fx.appendLine(name + "ᴼ=");
            fx.append("\xa0".repeat(i)); //spaces, none
            fx.append(inU1.charAt(i), __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN); //new digit, fade in
            fx.append(inU1.substring(i + 1)); //rest digit, none
            frames.push(fx);
        }
        var toU2steps = [];
        var inU2 = this.representationConverter.toU2(inBN);
        if (inU2 !== inU1) {
            var addOne1 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
            addOne1.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            addOne1.appendLine("");
            addOne1.appendLine(name + "ᴼ=" + inU1);
            var addOne2 = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](addOne1);
            addOne1.appendLine("\xa0".repeat(3 + inU1.length - 2));
            addOne1.append("+1", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            addOne2.appendLine("\xa0\xa0\xa0");
            addOne2.append("\xa0".repeat(inU1.length - 2) + "+1\xa0+", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].NONE, "underline");
            var finalResult = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](addOne2);
            var finalResult2 = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](addOne2);
            finalResult.appendLine("\xa0\xa0\xa0" + inU2, __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            finalResult2.appendLine(name + "ᴰ=", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            finalResult2.append(inU2);
            toU2steps.push(addOne1, addOne2, finalResult, finalResult2);
        }
        else {
            var result = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
            result.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            result.appendLine("");
            result.appendLine(name + "ᴼ=" + inU1);
            result.appendLine(name + "ᴰ=" + inU2, __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
            toU2steps.push(result);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__animation_model_animation__["a" /* Animation */]([f1, f2].concat(frames, toU2steps));
    };
    RepresentationAnimation.prototype.animateRepresentationU1 = function (num, name) {
        if (name === void 0) { name = "X"; }
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var inBN = num.toString(2).replace(".", ",");
        ;
        var inU1 = this.representationConverter.toU1(inBN);
        var eqAndPadSpaces = inBN.charAt(0) === "-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        var f1 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f2 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine(name + "ᴼ=", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var frames = [];
        for (var i = inU1.length - 1; i > -1; i--) {
            var fx = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
            fx.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            fx.appendLine(name + "ᴼ=");
            fx.append("\xa0".repeat(i)); //spaces, none
            fx.append(inU1.charAt(i), __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN); //new digit, fade in
            fx.append(inU1.substring(i + 1)); //rest digit, none
            frames.push(fx);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__animation_model_animation__["a" /* Animation */]([f1, f2].concat(frames));
    };
    RepresentationAnimation.prototype.animateRepresentationZM = function (num, name) {
        if (name === void 0) { name = "X"; }
        var addingLogic = new __WEBPACK_IMPORTED_MODULE_1__arithmetic_adding__["a" /* Adding */]();
        var inBN = num.toString(2).replace(".", ",");
        ;
        var inSM = this.representationConverter.toSignModule(inBN);
        var eqAndPadSpaces = inBN.charAt(0) === "-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        var f1 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f2 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine(name + "ᴹ=", __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f3 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f3.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f3.appendLine(name + "ᴹ=" + "\xa0\xa0");
        f3.append(inSM.substring(2), __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        var f4 = new __WEBPACK_IMPORTED_MODULE_3__animation_model_frame__["a" /* Frame */]();
        f4.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f4.appendLine(name + "ᴹ=");
        f4.append(inSM.substring(0, 2), __WEBPACK_IMPORTED_MODULE_4__animation_model_frame_cell__["b" /* animationStrategy */].FADE_IN);
        f4.append(inSM.substring(2));
        return new __WEBPACK_IMPORTED_MODULE_0__animation_model_animation__["a" /* Animation */]([f1, f2, f3, f4]);
    };
    return RepresentationAnimation;
}());

//# sourceMappingURL=representation-animations-generator.js.map

/***/ }),

/***/ "../../../../../src/app/animation-model/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame__ = __webpack_require__("../../../../../src/app/animation-model/frame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var Animation = (function () {
    function Animation(frames) {
        if (frames === void 0) { frames = []; }
        this.frames = [];
        this.frames = frames;
    }
    Animation.prototype.getLastFrame = function () {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.frames[this.frames.length - 1]);
    };
    Animation.prototype.addFrame = function (nextFrame) {
        this.frames.push(nextFrame);
    };
    Animation.prototype.addFrames = function (nextFrames, shouldExtendLastFrame) {
        if (shouldExtendLastFrame === void 0) { shouldExtendLastFrame = true; }
        if (shouldExtendLastFrame) {
            var last = this.getLastFrame();
            for (var _i = 0, nextFrames_1 = nextFrames; _i < nextFrames_1.length; _i++) {
                var currentFrame = nextFrames_1[_i];
                var newFrame = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](last);
                (_a = newFrame.content).push.apply(_a, currentFrame.content);
                this.frames.push(newFrame);
            }
            return;
        }
        (_b = this.frames).push.apply(_b, nextFrames);
        var _a, _b;
    };
    Animation.prototype.addNewFrame = function (content) {
        this.frames.push(new __WEBPACK_IMPORTED_MODULE_0__frame__["a" /* Frame */](content));
    };
    Animation.prototype.getFrameLines = function (index) {
        return this.frames[index].content;
    };
    return Animation;
}());

//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "../../../../../src/app/animation-model/frame-cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animationStrategy; });
var FrameCell = (function () {
    function FrameCell(char, animation, cssClass) {
        if (animation === void 0) { animation = animationStrategy.NONE; }
        if (cssClass === void 0) { cssClass = ''; }
        this.char = char;
        this.animation = animation;
        this.cssClass = cssClass;
    }
    FrameCell.prototype.shouldFade = function () {
        return this.animation === animationStrategy.FADE_IN;
    };
    FrameCell.prototype.shouldBG = function () {
        return this.animation === animationStrategy.BG;
    };
    FrameCell.prototype.shouldDontAnimate = function () {
        return this.animation === animationStrategy.NONE;
    };
    return FrameCell;
}());

var animationStrategy;
(function (animationStrategy) {
    animationStrategy[animationStrategy["NONE"] = 0] = "NONE";
    animationStrategy[animationStrategy["FADE_IN"] = 1] = "FADE_IN";
    animationStrategy[animationStrategy["BG"] = 2] = "BG";
})(animationStrategy || (animationStrategy = {}));
//# sourceMappingURL=frame-cell.js.map

/***/ }),

/***/ "../../../../../src/app/animation-model/frame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_cell__ = __webpack_require__("../../../../../src/app/animation-model/frame-cell.ts");

var Frame = (function () {
    function Frame(content) {
        if (content === void 0) { content = []; }
        this.content = content;
    }
    Frame.prototype.append = function (chars, animation, cssClass) {
        if (animation === void 0) { animation = __WEBPACK_IMPORTED_MODULE_0__frame_cell__["b" /* animationStrategy */].NONE; }
        if (cssClass === void 0) { cssClass = ''; }
        var line = [];
        var charsArray = chars.split('');
        for (var _i = 0, charsArray_1 = charsArray; _i < charsArray_1.length; _i++) {
            var char = charsArray_1[_i];
            line.push(new __WEBPACK_IMPORTED_MODULE_0__frame_cell__["a" /* FrameCell */](char, animation, cssClass));
        }
        this.content[this.content.length - 1] = this.content[this.content.length - 1].concat(line);
    };
    Frame.prototype.appendLine = function (chars, animation) {
        if (animation === void 0) { animation = __WEBPACK_IMPORTED_MODULE_0__frame_cell__["b" /* animationStrategy */].NONE; }
        var line = [];
        var charsArray = chars.split('');
        for (var _i = 0, charsArray_2 = charsArray; _i < charsArray_2.length; _i++) {
            var char = charsArray_2[_i];
            line.push(new __WEBPACK_IMPORTED_MODULE_0__frame_cell__["a" /* FrameCell */](char, animation));
        }
        this.content.push(line);
    };
    Frame.prototype.addLineWithCells = function (line) {
        this.content.push(line);
    };
    return Frame;
}());

//# sourceMappingURL=frame.js.map

/***/ }),

/***/ "../../../../../src/app/animation-test/animation-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\r\n    font-family: \"console\", monospace;\r\n    font-size: 17px;\r\n}\r\n.underline {\r\n    text-decoration: underline;\r\n}\r\n.overline {\r\n    text-decoration: overline;\r\n}\r\n.line-through {\r\n    text-decoration: line-through;\r\n}\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n#left {\r\n    text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/animation-test/animation-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n<div class=\"panel-body\">\r\n\r\n  <div id=\"left\">\r\n    <button class=\"btn\" [disabled]=\"disablePrev\" (click)=\"onPrevFrameClick()\">Wstecz</button>\r\n    <button class=\"btn\" [disabled]=\"disableNext\" (click)=\"onNextFrameClick()\">Dalej</button>\r\n    <br/>\r\n    <span *ngFor=\"let line of getCurrentFrame()\">\r\n      <span *ngFor=\"let cell of line\"><span *ngIf=\"cell.shouldFade()\" @fade [class]=\"cell.cssClass\">{{cell.char}}</span><span *ngIf=\"cell.shouldDontAnimate()\" [class]=\"cell.cssClass\">{{cell.char}}</span></span><br/>\r\n    </span>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/animation-test/animation-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_model_animation__ = __webpack_require__("../../../../../src/app/animation-model/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//TODO
//number should be injected
//animation should be injected
var AnimationTestComponent = (function () {
    function AnimationTestComponent() {
        this.currentFrameIndex = 0;
    }
    AnimationTestComponent.prototype.ngOnChanges = function (changes) {
        this.currentFrameIndex = 0;
        this.disableButtons();
    };
    AnimationTestComponent.prototype.getCurrentFrame = function () {
        if (this.animation) {
            return this.animation.getFrameLines(this.currentFrameIndex);
        }
        return [[], []];
    };
    AnimationTestComponent.prototype.onNextFrameClick = function () {
        this.currentFrameIndex =
            this.currentFrameIndex + 1 < this.animation.frames.length ?
                this.currentFrameIndex + 1 : this.currentFrameIndex;
        this.disableButtons();
    };
    AnimationTestComponent.prototype.onPrevFrameClick = function () {
        this.currentFrameIndex =
            this.currentFrameIndex - 1 < 0 ? 0 : this.currentFrameIndex - 1;
        this.disableButtons();
    };
    AnimationTestComponent.prototype.disableButtons = function () {
        if (this.currentFrameIndex === 0) {
            this.disablePrev = true;
            this.disableNext = false;
        }
        else if (this.currentFrameIndex >= this.animation.frames.length - 1) {
            this.disablePrev = false;
            this.disableNext = true;
        }
        else {
            this.disablePrev = false;
            this.disableNext = false;
        }
    };
    AnimationTestComponent.prototype.ngOnInit = function () {
    };
    return AnimationTestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__animation_model_animation__["a" /* Animation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__animation_model_animation__["a" /* Animation */]) === "function" && _a || Object)
], AnimationTestComponent.prototype, "animation", void 0);
AnimationTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-animation-test',
        template: __webpack_require__("../../../../../src/app/animation-test/animation-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/animation-test/animation-test.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('fade', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0.5 })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000)
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('background', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ backgroundColor: 'coral' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AnimationTestComponent);

var _a;
//# sourceMappingURL=animation-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n    width: 70%;\r\n    margin: 20px;\r\n    display: inline-block;\r\n}\r\n@media only screen and (max-width: 1000px) {\r\n    .main {\r\n        width: 95%;\r\n        margin: auto;\r\n    }\r\n}\r\n#wrapper {\r\n    background-color: #acc1e0; /* for vizualization purposes */\r\n    text-align: center;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <div class=\"main\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adding_tutorial_adding_tutorial_component__ = __webpack_require__("../../../../../src/app/adding-tutorial/adding-tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_diagram_service__ = __webpack_require__("../../../../../src/app/block-diagram.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_test_animation_test_component__ = __webpack_require__("../../../../../src/app/animation-test/animation-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theory_presenter_theory_presenter_component__ = __webpack_require__("../../../../../src/app/theory-presenter/theory-presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__adding_form_adding_form_component__ = __webpack_require__("../../../../../src/app/adding-form/adding-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__representation_form_representation_form_component__ = __webpack_require__("../../../../../src/app/representation-form/representation-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__adding_tutorial_adding_tutorial_component__["a" /* AddingTutorialComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__animation_test_animation_test_component__["a" /* AnimationTestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__theory_presenter_theory_presenter_component__["a" /* TheoryPresenterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__adding_form_adding_form_component__["a" /* AddingFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__representation_form_representation_form_component__["a" /* RepresentationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: ':id',
                    component: __WEBPACK_IMPORTED_MODULE_4__adding_tutorial_adding_tutorial_component__["a" /* AddingTutorialComponent */]
                }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__block_diagram_service__["a" /* BlockDiagramService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/arithmetic/adding.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adding; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__representation_converter__ = __webpack_require__("../../../../../src/app/arithmetic/representation-converter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/arithmetic/utils.ts");


var Adding = (function () {
    function Adding() {
        this.representationConverter = new __WEBPACK_IMPORTED_MODULE_0__representation_converter__["a" /* RepresentationConverter */]();
    }
    Adding.prototype.addInSM = function (augent, addend) {
        //to jest SM
        //jako input wchodzi binarnie
        //inputy sa tej samej dlugosci
        var augentSM = this.representationConverter.toSignModule(augent);
        var addendSM = this.representationConverter.toSignModule(addend);
        var augentSplit = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].splitNumber(augentSM);
        var addendSplit = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].splitNumber(addendSM);
        var augentSign = augentSplit.sign;
        var augentAbs = augentSplit.fractional ? augentSplit.integer + ',' + augentSplit.fractional : augentSplit.integer;
        var addendSign = addendSplit.sign;
        var addendAbs = addendSplit.fractional ? addendSplit.integer + ',' + addendSplit.fractional : addendSplit.integer;
        var partialResult;
        if (augentSign != addendSign) {
            addendAbs = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].invertOneAndZeros(addendAbs);
        }
        var resultAbs = '';
        var resultSign = augentSign; //if is different from auddend sign, it will be overriden later;
        var carries = '';
        var carry = '0';
        for (var i = augentAbs.length - 1; i > -1; i--) {
            if (augentAbs.charAt(i) == '.' || augentAbs.charAt(i) == ',') {
                resultAbs += augentAbs.charAt(i);
                carries += augentAbs.charAt(i);
            }
            else {
                var addingDigits = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addDigits(augentAbs.charAt(i), addendAbs.charAt(i), carry);
                resultAbs += addingDigits.result;
                carry = addingDigits.carry;
                carries += carry;
            }
        }
        resultAbs = resultAbs.split("").reverse().join("");
        partialResult = resultAbs;
        if (augentSign != addendSign) {
            if (carry) {
                resultAbs = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addOne(resultAbs);
                resultSign = augentSign;
            }
            else {
                resultAbs = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].invertOneAndZeros(resultAbs);
                resultSign = addendSign;
            }
        }
        var addingInfo = {
            augentRep: augentSM,
            addendRep: addendSM,
            partialResult: partialResult,
            result: resultSign + '.' + resultAbs,
            carries: carries.split("").reverse().join(""),
            //TODO extract to detect overflow method
            overflowDetected: (augentSM.charAt(0) === addendSM.charAt(0) && resultSign !== augentSM.charAt(0)),
            specificInfo: {
                augentSign: augentSign,
                augentAbs: augentAbs,
                addendSign: addendSign,
                addendAbs: addendAbs,
                resultSign: resultSign,
                resultAbs: resultAbs,
                signIndex: augentSM.indexOf(',') == -1 ? (augentSM.length - 2).toString() : (augentSM.indexOf(',') - 2).toString()
            }
        };
        return addingInfo;
    };
    Adding.prototype.addInU1 = function (augent, addend) {
        //to jest U1
        //jako input wchodzi binarnie
        //inputy sa tej samej dlugosci
        var augentU1 = this.representationConverter.toU1(augent);
        var addendU1 = this.representationConverter.toU1(addend);
        var result = '';
        var partialResult = '';
        var carries = '';
        var carry = '0';
        for (var i = augentU1.length - 1; i > -1; i--) {
            if (augentU1.charAt(i) == '.' || augentU1.charAt(i) == ',') {
                partialResult += augentU1.charAt(i);
                carries += augentU1.charAt(i);
            }
            else {
                var addingDigits = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addDigits(augentU1.charAt(i), addendU1.charAt(i), carry);
                partialResult += addingDigits.result;
                carry = addingDigits.carry;
                carries += carry;
            }
        }
        partialResult = partialResult.split("").reverse().join("");
        if (carry) {
            result = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addOne(partialResult);
        }
        else {
            result = partialResult;
        }
        var addingInfo = {
            augentRep: augentU1,
            addendRep: addendU1,
            partialResult: partialResult,
            result: result,
            carries: carries.split("").reverse().join(""),
            //TODO extract to detect overflow method
            overflowDetected: (augentU1.charAt(0) === addendU1.charAt(0) && result.charAt(0) !== augentU1.charAt(0)),
            specificInfo: null
        };
        return addingInfo;
    };
    Adding.prototype.addInU2 = function (augent, addend) {
        //to jest U2
        //ale jako input wchodzi binarnie
        //inputy sa tej samej dlugosci
        var augentU2 = this.representationConverter.toU2(augent);
        var addendU2 = this.representationConverter.toU2(addend);
        var result = '';
        var carry = '0';
        var carries = '';
        for (var i = augentU2.length - 1; i > -1; i--) {
            if (augentU2.charAt(i) == '.' || augentU2.charAt(i) == ',') {
                result += augentU2.charAt(i);
                carries += augentU2.charAt(i);
            }
            else {
                var addingDigits = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addDigits(augentU2.charAt(i), addendU2.charAt(i), carry);
                result += addingDigits.result;
                carry = addingDigits.carry;
                carries += carry;
            }
        }
        carries += carry;
        var addingInfo = {
            augentRep: augentU2,
            addendRep: addendU2,
            partialResult: '',
            result: result.split("").reverse().join(""),
            carries: carries.split("").reverse().join(""),
            //TODO extract to detect overflow method
            overflowDetected: (augentU2.charAt(0) === addendU2.charAt(0) && result.charAt(0) !== augentU2.charAt(0)),
            specificInfo: null
        };
        return addingInfo;
    };
    return Adding;
}());

//# sourceMappingURL=adding.js.map

/***/ }),

/***/ "../../../../../src/app/arithmetic/representation-converter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BinaryNumberRepresentation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentationConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../../src/app/arithmetic/utils.ts");

var BinaryNumberRepresentation;
(function (BinaryNumberRepresentation) {
    BinaryNumberRepresentation[BinaryNumberRepresentation["SM"] = 0] = "SM";
    BinaryNumberRepresentation[BinaryNumberRepresentation["U1"] = 1] = "U1";
    BinaryNumberRepresentation[BinaryNumberRepresentation["U2"] = 2] = "U2";
})(BinaryNumberRepresentation || (BinaryNumberRepresentation = {}));
var RepresentationConverter = (function () {
    function RepresentationConverter() {
    }
    RepresentationConverter.prototype.toSignModule = function (num) {
        num = num.replace('.', ',');
        if (num.charAt(0) != '-') {
            return '0.' + num;
        }
        return '1.' + num.substring(1);
    };
    RepresentationConverter.prototype.toU1 = function (num) {
        if (num.charAt(0) != '-') {
            return '0.' + num;
        }
        return '1.' + __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].invertOneAndZeros(num);
    };
    RepresentationConverter.prototype.toU2 = function (num) {
        if (num.charAt(0) != '-') {
            return '0.' + num;
        }
        var inU1 = this.toU1(num);
        return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].addOne(inU1);
    };
    return RepresentationConverter;
}());

//# sourceMappingURL=representation-converter.js.map

/***/ }),

/***/ "../../../../../src/app/arithmetic/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.invertOneAndZeros = function (num) {
        var result = '';
        for (var i = 0; i < num.length; i++) {
            if (num.charAt(i) == '0') {
                result += 1;
            }
            else if (num.charAt(i) == '1') {
                result += 0;
            }
            else if (num.charAt(i) == '.') {
                result += '.';
            }
            else if (num.charAt(i) == ',') {
                result += ',';
            }
        }
        return result;
    };
    Utils.addDigits = function (first, second, carry) {
        if (carry === void 0) { carry = '0'; }
        var tmp = first + second + carry;
        var stringsearch = '1';
        switch (tmp.split(stringsearch).length - 1) {
            case 0:
                return { result: 0, carry: 0 };
            case 1:
                return { result: 1, carry: 0 };
            case 2:
                return { result: 0, carry: 1 };
            case 3:
                return { result: 1, carry: 1 };
        }
    };
    Utils.addOne = function (num) {
        var result = '';
        var pad = ' '.repeat(num.length);
        pad = (pad + '1').slice(-pad.length);
        var carry = '0';
        var addend = '1';
        for (var i = num.length - 1; i > -1; i--) {
            if (num.charAt(i) == '.' || num.charAt(i) == ',') {
                result += num.charAt(i);
            }
            else {
                var addingDigits = this.addDigits(num.charAt(i), addend, carry);
                result += addingDigits.result;
                carry = addingDigits.carry;
                addend = '0';
            }
        }
        result = result.split("").reverse().join("");
        return result;
    };
    Utils.evenBinaryNumbers2 = function (num1, num2) {
        var num1s = this.splitBinaryNumber(num1);
        var num2s = this.splitBinaryNumber(num2);
        //integer
        var finalIntegerLength = Math.max(num1s.integer.length, num2s.integer.length);
        var integerPad = '0'.repeat(finalIntegerLength);
        num1s.integer = integerPad.substring(0, integerPad.length - num1s.integer.length) + num1s.integer;
        num2s.integer = integerPad.substring(0, integerPad.length - num2s.integer.length) + num2s.integer;
        //fractional
        var finalFractionalLength = Math.max(num1s.fractional.length, num2s.fractional.length);
        var fractionalPad = '0'.repeat(finalFractionalLength);
        num1s.fractional = num1s.fractional + fractionalPad.substring(0, fractionalPad.length - num1s.fractional.length);
        num2s.fractional = num2s.fractional + fractionalPad.substring(0, fractionalPad.length - num2s.fractional.length);
        var fractionalSeparator = (num1s.fractional.length === 0 && num2s.fractional.length === 0) ? "" : ",";
        //return
        return [num1s.sign + num1s.integer + fractionalSeparator + num1s.fractional,
            num2s.sign + num2s.integer + fractionalSeparator + num2s.fractional];
    };
    Utils.splitNumber = function (num) {
        // for SM U2 and U2, not for natural binary
        var splited = { sign: 'x', integer: 'x', fractional: 'x' };
        //splited.sign = num.charAt(0);
        _a = num.replace(',', '.').split('.'), splited.sign = _a[0], splited.integer = _a[1], splited.fractional = _a[2];
        return splited;
        var _a;
    };
    Utils.splitBinaryNumber = function (num) {
        var splited = { sign: '', integer: 'x', fractional: 'x' };
        if (num.charAt(0) === '-') {
            splited.sign = '-';
            num = num.substring(1);
        }
        else {
            splited.sign = '\xa0';
        }
        _a = num.replace(',', '.').split('.'), splited.integer = _a[0], splited.fractional = _a[1];
        if (!splited.fractional) {
            splited.fractional = '';
        }
        return splited;
        var _a;
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/app/block-diagram.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDiagramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockDiagramService = (function () {
    function BlockDiagramService() {
    }
    BlockDiagramService.prototype.get = function (representation) {
        switch (representation) {
            case "SM": return this.SM();
            case "U1": return this.U1();
            case "U2": return this.U2();
        }
    };
    BlockDiagramService.prototype.SM = function () {
        return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/SM_642_sa.png";
    };
    BlockDiagramService.prototype.U1 = function () {
        return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/U1_642_2.png";
    };
    BlockDiagramService.prototype.U2 = function () {
        return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/U2_642_2_sa.png";
    };
    return BlockDiagramService;
}());
BlockDiagramService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BlockDiagramService);

//# sourceMappingURL=block-diagram.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    text-align: left;\r\n}\r\nli {\r\n    text-align: left;\r\n}\r\n.left-align {\r\n    text-align: left;\r\n}\r\nh3 {\r\n    align: left;\r\n}\r\n.underline {\r\n    text-decoration: underline;\r\n}\r\n.monospace{\r\n    font-family: \"console\", monospace;\r\n    font-size: 17px;\r\n}\r\n.bold {\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dodawanie liczb binarnych</h1>\r\n<h2>Cel</h2>\r\n<p class=\"left-align\">\r\n  Ta strona została zrealizowana w ramach pracy dyplowej. \r\n  Jej celem jest zapoznanie studentów informatyki z dodawania liczb w systemie dwójkowym z wykorzystaniem różnych zapisów liczb:\r\n</p>\r\n<ul class=\"left-align\">\r\n  <li>zapisu modułowego</li>\r\n  <li>zapisu odwrotnego</li>\r\n  <li>zapisu dopełnieniowego</li>\r\n</ul>\r\n<p class=\"left-align\">\r\n  Strona ta stanowi tylko uzupełnienie książek oraz skryptów związanych z arytmetyką systemów cyfrowych,\r\n  ponieważ nie skupia się na przedstawieniu teori dotyczącej każdej z metod dodawania liczb binarnych,\r\n  a na prezentacji ich zastosowania na przykładach.\r\n</p>\r\n<h2>Wymagania</h2>\r\n<p class=\"left-align\">\r\n  Użytkownik korzystający z tej strony, powinien mieć już ogólne pojęcie na temat systemu dwójkowego, oraz umieć dokonywać konwersji (np. z systemu dziesiętnego na dwójkowy).\r\n</p>\r\n<h2>Podstawy</h2>\r\n<p class=\"left-align\">\r\n  Poniżej, przedstawiono kilka mechanizmów wspólnych nie tylko dla poszczególnych metod dodawania, ale również dla arytmetki cyfrowej w ogóle.\r\n</p>\r\n<h3 class=\"left-align\">Dodawanie pojedyńczych cyfr</h3>\r\n<p>0 + 0 =\t0</p>\r\n<p>0 + 1 =\t1</p>\r\n<p>1 + 0 =\t1</p>\r\n<p>1 + 1 =\t0<sup>1</sup> (gdzie <sup>1</sup> oznacza przeniesienie)</p> \r\n<app-animation-test [animation]=\"addingAnimation\"></app-animation-test>\r\n\r\n\r\n<h3 class=\"left-align\">Znak liczby</h3>\r\n<p>\r\nW komputerze nie ma możliwości przechowywania bezpośrednio znaku \"+\" czy \"-\" służących nam do reprezentowania liczb dodatnich i ujemnych.\r\nDo zapisu liczby ze znakiem wykorzystuje się więc dodatkowy bit (tak zwany bit znaku), który umieszcza się po lewej stronie liczby. Bit ten przyjmuje wartość\r\n</p>\r\n<ul class=\"left-align\">\r\n    <li>0 dla +</li>\r\n    <li>1 dla -</li>\r\n</ul>\r\n<p>\r\n  I tak np liczby:<br>\r\n</p>\r\n<ul class=\"left-align\">\r\n  <li>+10010 można przedstawić jako 0.10010</li>\r\n  <li>-11 można przedstawić jako 1.11</li>\r\n</ul>\r\n<p>\r\n  Tak jak pokazano powyżej, w celu poprawienie czytelności bit znaku często odziela się od reszty bitów za pomocą kropki.\r\n</p>\r\n<h3 class=\"left-align\">Nadmiar</h3>\r\n<p>\r\n  Komputer każdą liczbę przechowuje na określonej liczbie bitów (np. 32 lub 64 bity).\r\n  Wynik dodawania dwóch liczb zapisanych np. na 8 bitach każda, może nie zmieścić się na 8 bitach.\r\n  W takiej sytuacji, najstarszy (tutaj 9 licząc od prawej) bit zostanie utracony.\r\n  Taka sytuacja nazywana jest nadmiarem. Występuje zawsze, gdy wynik operacji arytmetycznej \r\n  jest większy niż górny zakres danego formatu liczb binarnych \r\n  np. dla 8 bitów wynik większy od 2<sup>8</sup> - 1, czyli większy od 255 (dla liczb bez znaku)<br>\r\n</p>\r\n<p>\r\n  Rozważmy dodawanie dwóch liczb bez znaku 244<sub>10</sub> = 11110100<sub>2</sub> oraz 134<sub>10</sub> = 10000110<sub>2</sub>:\r\n</p>\r\n<app-animation-test [animation]=\"overflowAnimation\"></app-animation-test>\r\n<p>\r\n  Oczekiwanym wynikiem jest 378<sub>10</sub>=101111010<sub>2</sub>.<br>\r\n  Taki też otrzymaliśmy. Należy jednak mieć na uwadzę, że nie mieści się on na 8 bitach.\r\n  Z wiązku z tym, najstarszy bit zostanie odrzucony, dając w rezultacie 01111010<sub>2</sub>=122<sub>10</sub>.\r\n  Jest to oczywiście błędny wynik, dlatego istnieją sposoby wykrywania wystąpienia nadmiaru.\r\n</p>\r\n<h2>Oznaczenia</h2>\r\n<p>\r\n  Aby móc w łatwiejszy i bardziej ujednolicony sposób ukazać sposoby zapisu oraz dodawania liczb,\r\n  użyto następujących oznaczeń:\r\n</p>\r\n<ul>\r\n  <li>X - dodajna</li>\r\n  <li>Y - dodajnik</li>\r\n  <li>Z - suma</li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animated_examples_adding_animations_generator__ = __webpack_require__("../../../../../src/app/animated-examples/adding-animations-generator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.addingAnimation = __WEBPACK_IMPORTED_MODULE_1__animated_examples_adding_animations_generator__["a" /* AddingAnimation */].adding();
        this.overflowAnimation = __WEBPACK_IMPORTED_MODULE_1__animated_examples_adding_animations_generator__["a" /* AddingAnimation */].overflow();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    margin-top: 20px;\r\n}\r\nul {\r\n    width: 100%;\r\n}\r\nli {\r\n    width: 25%;\r\n    font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a routerLink=\"/\">Start</a></li>        \r\n      <li><a routerLink=\"/SM\">Zapis modułowy</a></li>\r\n      <li><a routerLink=\"/U1\">Zapis odwrotny</a></li>\r\n      <li><a routerLink=\"/U2\">Zapis dopełnieniowy</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/representation-form/representation-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n    max-width: 500px;\r\n}\r\n.alert {\r\n    margin-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/representation-form/representation-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (keyup.enter)=\"submit(f, $event)\" (ngSubmit)=\"submit(f, $event)\">\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <label for=\"number\">Liczba:</label>\r\n      <input \r\n      ngModel \r\n      name=\"number\" \r\n      required \r\n      pattern=\"[+--]?\\d+,?\\d*\"\r\n      #number=\"ngModel\" \r\n      type=\"text\" \r\n      id=\"number\" \r\n      class=\"form-control\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"number.dirty && !number.valid\">\r\n        <div *ngIf=\"number.errors.required\">\r\n          To pole nie może być puste.\r\n        </div>\r\n        <div *ngIf=\"number.errors.pattern\">\r\n          Wartość musi być liczbą w systemie dziesiętnym.\r\n        </div>      \r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <button type=\"button\" (click)=\"submit(f, $event)\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Pokaż w zapisie </button>\r\n    </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/representation-form/representation-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepresentationFormComponent = (function () {
    function RepresentationFormComponent() {
        this.representation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    RepresentationFormComponent.prototype.ngOnInit = function () {
    };
    RepresentationFormComponent.prototype.submit = function (f, event) {
        try {
            // console.log(event);
            // event.stopPropagation();
            // event.preventDefault();
            var number = f.value.number.replace(",", ".");
            this.representation.emit(number);
        }
        catch (e) {
            console.log("sth went wrong ");
        }
    };
    return RepresentationFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], RepresentationFormComponent.prototype, "representation", void 0);
RepresentationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-representation-form',
        template: __webpack_require__("../../../../../src/app/representation-form/representation-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/representation-form/representation-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RepresentationFormComponent);

//# sourceMappingURL=representation-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/theory-presenter/theory-presenter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inline-block {\r\n    display: table-cell;\r\n    border: solid 0px blue;\r\n    vertical-align: middle;\r\n}\r\n.big {\r\n    font-size: 3em;\r\n    font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.overline {\r\n    text-decoration: overline;\r\n}\r\n.double-overline {\r\n    text-decoration: overline;\r\n    -webkit-text-decoration-style: double;\r\n            text-decoration-style: double;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theory-presenter/theory-presenter.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"addingStrategy=='SM'\">\r\n  <p>Liczbę X w zapisie modułowym przedstawia się jako:</p>\r\n  <div>\r\n    <div class=\"inline-block\">X<sup>M</sup>=</div>\r\n    <div class=\"inline-block big\">&#123;</div>\r\n    <div class=\"inline-block\">\r\n      <div>0.|X| dla liczby X dodatniej</div>\r\n      <div>1.|X| dla liczby X ujemnej</div>      \r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"addingStrategy=='U1'\">\r\n  <p>Liczbę X w zapisie odwrotnym przedstawia się jako:</p>\r\n  <div>\r\n    <div class=\"inline-block\">X<sup>O</sup>=</div>\r\n    <div class=\"inline-block big\">&#123;</div>\r\n    <div class=\"inline-block\">\r\n      <div>0.|X| dla liczby X dodatniej</div>\r\n      <div>1.<span class=\"overline\">|X|</span> dla liczby X ujemnej</div>      \r\n    </div>\r\n  </div>\r\n  <p>Gdzie <span class=\"overline\">|X|</span> otrzymuje się poprzez zamiane każdej jedynki w liczbie X na zero oraz każdego zera na jedynkę</p>\r\n</div>\r\n<div *ngIf=\"addingStrategy=='U2'\">\r\n  <p>Liczbę X w zapisie dopełnienowym przedstawia się jako:</p>\r\n  <div>\r\n    <div class=\"inline-block\">X<sup>D</sup>=</div>\r\n    <div class=\"inline-block big\">&#123;</div>\r\n    <div class=\"inline-block\">\r\n      <div>0.|X| dla liczby X dodatniej</div>\r\n      <div>1.<span class=\"double-overline\">|X|</span> dla liczby X ujemnej</div>      \r\n    </div>\r\n  </div>\r\n  <p>Gdzie <span class=\"double-overline\">|X|</span> otrzymuje się poprzez zamiane każdej jedynki w liczbie X na zero oraz każdego zera na jedynkę, a następnie dodaniu jedynki na najmniej znaczącej pozycji</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theory-presenter/theory-presenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheoryPresenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheoryPresenterComponent = (function () {
    function TheoryPresenterComponent() {
    }
    TheoryPresenterComponent.prototype.ngOnInit = function () {
    };
    return TheoryPresenterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TheoryPresenterComponent.prototype, "addingStrategy", void 0);
TheoryPresenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-theory-presenter',
        template: __webpack_require__("../../../../../src/app/theory-presenter/theory-presenter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theory-presenter/theory-presenter.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TheoryPresenterComponent);

//# sourceMappingURL=theory-presenter.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map