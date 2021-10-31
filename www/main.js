(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\92308\Desktop\angular-website-example-master\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./content.component.html */ "3kzm");
/* harmony import */ var _content_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component.css */ "9tVA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () { };
    ContentComponent.ctorParameters = function () { return []; };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-content",
            template: _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_content_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "1XXE":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-social app-social {\n  float: right;\n  right: 10px;\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1zb2NpYWwgYXBwLXNvY2lhbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "3kzm":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\">\n  <div class=\"row no-padding-bottom clearfix\">\n    <!--Content Left Side-->\n    <div class=\"col-3\">\n      <!--User Testimonial-->\n      <blockquote class=\"testimonial text-right bigtest\">\n        <q\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua</q\n        >\n        <footer>— John Doe, Happy Customer</footer>\n      </blockquote>\n      <!-- End of Testimonial-->\n    </div>\n    <!--End Content Left Side-->\n\n    <!--Content of the Right Side-->\n    <div class=\"col-3\">\n      <div class=\"section-heading\">\n        <h3>BELIEVING</h3>\n        <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n        <p class=\"section-subtitle\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam!\n        </p>\n      </div>\n      <p>\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n        illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n        explicabo.\n      </p>\n      <p>\n        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\n        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem\n        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n        sit amet!\n      </p>\n      <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n      <a\n        href=\"#\"\n        data-videoid=\"UYJ5IjBRlW8\"\n        data-videosite=\"youtube\"\n        class=\"button video link-lightbox\"\n      >\n        WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <!--End Content Right Side-->\n\n    <div class=\"col-3\">\n      <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\" />\n    </div>\n  </div>\n</div>\n<!--End of Content Section-->\n");

/***/ }),

/***/ "9lXE":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pricing.component.html */ "U2kE");
/* harmony import */ var _pricing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component.css */ "NiUD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent.ctorParameters = function () { return []; };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pricing',
            template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pricing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "9tVA":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A4SG":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BLGF":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Gallery-->\n<aside\n  id=\"gallery\"\n  class=\"row text-center scrollto clearfix\"\n  data-featherlight-gallery\n  data-featherlight-filter=\"a\"\n>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-1.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-1.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-2.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.3s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-2.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-3.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.5s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-3.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-4.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"1.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-4.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-5.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.9s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-5.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-6.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.7s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-6.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n</aside>\n<!--End of Gallery-->\n");

/***/ }),

/***/ "BlCi":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Cko8":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n  <div class=\"row clearfix\">\n    <div class=\"col-3\">\n      <div class=\"section-heading\">\n        <h3>SUCCESS</h3>\n        <h2 class=\"section-title\">How We Help You To Sell Your Product</h2>\n        <p class=\"section-subtitle\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam!\n        </p>\n      </div>\n    </div>\n\n    <div class=\"col-2-3\">\n      <!--Icon Block-->\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-html5 fa-2x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>HTML5 &amp; CSS3</h4>\n          <p>\n            Has ne tritani atomorum conclusionemque, in dolorum volumus\n            cotidieque eum. At vis choro neglegentur iudico\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-bolt fa-2x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Easy to Use</h4>\n          <p>\n            Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis\n            repudiandae, sit detracto mediocrem disputationi\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-tablet fa-2x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Fully Responsive</h4>\n          <p>\n            Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit\n            debet ea sit, an pro nemore vivendum\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-rocket fa-2x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Parallax Effect</h4>\n          <p>\n            Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit\n            debet ea sit, an pro nemore vivendum\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n    </div>\n  </div>\n</section>\n<!--End of Introduction-->\n");

/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "DeXN":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _raw_loader_social_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./social.component.html */ "j0V1");
/* harmony import */ var _social_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.component.css */ "cLbj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent.ctorParameters = function () { return []; };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-social',
            template: _raw_loader_social_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_social_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n    <p id=\"copyright\" class=\"col-2\">\n      Made with love by <a href=\"https://www.shapingrain.com\">ShapingRain</a>\n    </p>\n\n    <!--Social Icons in Footer-->\n    <div class=\"col-2 social-icons\" id=\"footer-social app-social\">\n      <app-social></app-social>\n    </div>\n    <!--End of Social Icons in Footer-->\n  </div>\n</footer>\n<!--End of Footer-->\n");

/***/ }),

/***/ "HkMC":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gallery.component.html */ "BLGF");
/* harmony import */ var _gallery_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.css */ "BlCi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    GalleryComponent.ctorParameters = function () { return []; };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-gallery",
            template: _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gallery_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "K/lK":
/*!*********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "L30g":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Testimonials-->\n<aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n  <div class=\"row clearfix\">\n\n    <div class=\"section-heading\">\n      <h3>FEEDBACK</h3>\n      <h2 class=\"section-title\">What our customers are saying</h2>\n    </div>\n\n    <!--User Testimonial-->\n    <blockquote class=\"col-3 testimonial classic\">\n      <img src=\"../assets/images/user-images/user-1.jpg\" alt=\"User\" />\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore\n        et dolore magna aliqua</q>\n      <footer>John Doe - Happy Customer</footer>\n    </blockquote>\n    <!-- End of Testimonial-->\n\n    <!--User Testimonial-->\n    <blockquote class=\"col-3 testimonial classic\">\n      <img src=\"../assets/images/user-images/user-2.jpg\" alt=\"User\" />\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore\n        et dolore magna aliqua</q>\n      <footer>Roslyn Doe - Happy Customer</footer>\n    </blockquote>\n    <!-- End of Testimonial-->\n\n    <!--User Testimonial-->\n    <blockquote class=\"col-3 testimonial classic\">\n      <img src=\"../assets/images/user-images/user-3.jpg\" alt=\"User\" />\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore\n        et dolore magna aliqua</q>\n      <footer>Thomas Doe - Happy Customer</footer>\n    </blockquote>\n    <!-- End of Testimonial-->\n  </div>\n\n</aside>\n<!--End of Testimonials-->");

/***/ }),

/***/ "NiUD":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SlET":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Beginning of header-->\n<div id=\"header\" class=\"nav-collapse nav-solid\">\n  <div class=\"row clearfix\">\n    <div class=\"col-1\">\n      <!--Logo-->\n      <div id=\"logo\">\n        <!--Logo that is shown on the banner-->\n        <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\" />\n        <!--End of Banner Logo-->\n\n        <!--The Logo that is shown on the sticky Navigation Bar-->\n        <img\n          src=\"assets/images/logo-2.png\"\n          id=\"navigation-logo\"\n          alt=\"Landing Page\"\n        />\n        <!--End of Navigation Logo-->\n      </div>\n      <!--End of Logo-->\n      <aside>\n        <app-social></app-social>\n      </aside>\n\n      <!--Main Navigation-->\n      <nav id=\"nav-main\">\n        <ul>\n          <li>\n            <a\n              routerLink=\"/Home\"\n              (click)=\"getActiveTab('home')\"\n              [class.active]=\"activetab === 'home'\"\n              >Home</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/About\"\n              (click)=\"getActiveTab('about')\"\n              [class.active]=\"activetab === 'about'\"\n              >About</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Gallery\"\n              (click)=\"getActiveTab('gallery')\"\n              [class.active]=\"activetab === 'gallery'\"\n              >Gallery</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Services\"\n              (click)=\"getActiveTab('services')\"\n              [class.active]=\"activetab === 'services'\"\n              >Services</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Testimonials\"\n              (click)=\"getActiveTab('testimonials')\"\n              [class.active]=\"activetab === 'testimonials'\"\n              >Testimonials</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Clients\"\n              (click)=\"getActiveTab('clients')\"\n              [class.active]=\"activetab === 'clients'\"\n              >Clients</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Pricing\"\n              (click)=\"getActiveTab('pricing')\"\n              [class.active]=\"activetab === 'pricing'\"\n              >Pricing</a\n            >\n          </li>\n        </ul>\n      </nav>\n      <!--End of Main Navigation-->\n      <div id=\"nav-trigger\"><span></span></div>\n      <nav id=\"nav-mobile\"></nav>\n    </div>\n  </div>\n</div>\n<!--End of Header-->\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'websitePractise';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U2kE":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix\">\n  <div class=\"row clearfix\">\n    <div class=\"section-heading\">\n      <h3>YOUR CHOICE</h3>\n      <h2 class=\"section-title\">We have the right package for you</h2>\n    </div>\n\n    <!--Pricing Block-->\n    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"pricing-block-content\">\n        <h3>Personal</h3>\n        <p class=\"pricing-sub\">The standard version</p>\n        <div class=\"pricing\">\n          <div class=\"price\"><span>$</span>19</div>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n        </div>\n        <ul>\n          <li>5 Downloads</li>\n          <li>2 Extensions</li>\n          <li>Tutorials</li>\n          <li>Forum Support</li>\n          <li>1 year free updates</li>\n        </ul>\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\n      </div>\n    </div>\n    <!--End Pricing Block-->\n\n    <!--Pricing Block-->\n    <div\n      class=\"pricing-block featured col-3 wow fadeInUp\"\n      data-wow-delay=\"0.6s\"\n    >\n      <div class=\"pricing-block-content\">\n        <h3>Student</h3>\n        <p class=\"pricing-sub\">Most popular choice</p>\n        <div class=\"pricing\">\n          <div class=\"price\"><span>$</span>29</div>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n        </div>\n        <ul>\n          <li>15 Downloads</li>\n          <li>5 Extensions</li>\n          <li>Tutorials with Files</li>\n          <li>Forum Support</li>\n          <li>2 years free updates</li>\n        </ul>\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\n      </div>\n    </div>\n    <!--End Pricing Block-->\n\n    <!--Pricing Block-->\n    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.8s\">\n      <div class=\"pricing-block-content\">\n        <h3>Business</h3>\n        <p class=\"pricing-sub\">For the whole team</p>\n        <div class=\"pricing\">\n          <div class=\"price\"><span>$</span>49</div>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n        </div>\n        <ul>\n          <li>Unlimited Downloads</li>\n          <li>Unlimited Extensions</li>\n          <li>HD Video Tutorials</li>\n          <li>Chat Support</li>\n          <li>Lifetime free updates</li>\n        </ul>\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\n      </div>\n    </div>\n    <!--End Pricing Block-->\n  </div>\n</section>\n<!--End of Pricing Tables-->\n");

/***/ }),

/***/ "VcWf":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'My website',
        headingtext: 'Namari is a free landing page template you can use for your projects.',
        buttontext: 'do some action',
        buttonlink: '\home'
    }
};


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div\n    class=\"top-border wow fadeInDown animated\"\n    style=\"visibility: visible; animation-name: fadeInDown\"\n  ></div>\n  <div\n    class=\"right-border wow fadeInRight animated\"\n    style=\"visibility: visible; animation-name: fadeInRight\"\n  ></div>\n  <div\n    class=\"bottom-border wow fadeInUp animated\"\n    style=\"visibility: visible; animation-name: fadeInUp\"\n  ></div>\n  <div\n    class=\"left-border wow fadeInLeft animated\"\n    style=\"visibility: visible; animation-name: fadeInLeft\"\n  ></div>\n</div>\n<!--Main Content Area-->\n<main id=\"content\">\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n</main>\n<!--End Main Content Area-->\n");

/***/ }),

/***/ "XpQY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Clients-->\n<section id=\"clients\" class=\"scrollto clearfix\">\n  <div class=\"row clearfix\">\n\n    <div class=\"col-3\">\n\n      <div class=\"section-heading\">\n        <h3>TRUST</h3>\n        <h2 class=\"section-title\">Companies who use our services</h2>\n        <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n      </div>\n\n    </div>\n\n    <div class=\"col-2-3\">\n\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo1.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Tree</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo2.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Fingerprint</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo3.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>The Man</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo4.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Mustache</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo5.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Goat</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo6.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Justice</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo7.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Ball</span></div>\n      </a>\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo8.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Cold</span></div>\n      </a>\n\n      <a href=\"#\" class=\"col-3\">\n        <img src=\"../assets/images/company-images/company-logo9.png\" alt=\"Company\" />\n        <div class=\"client-overlay\"><span>Cold</span></div>\n      </a>\n\n    </div>\n\n  </div>\n</section>\n<!--End of Clients-->");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "czZ8");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients/clients.component */ "aCJP");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "9lXE");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social/social.component */ "DeXN");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config.service */ "wxHw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aCJP":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clients.component.html */ "XpQY");
/* harmony import */ var _clients_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component.css */ "A4SG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent.ctorParameters = function () { return []; };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-clients',
            template: _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clients_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "cLbj":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "czZ8":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./testimonials.component.html */ "L30g");
/* harmony import */ var _testimonials_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.component.css */ "K/lK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent.ctorParameters = function () { return []; };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-testimonials',
            template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_testimonials_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "drGS":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./intro.component.html */ "Cko8");
/* harmony import */ var _intro_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.component.css */ "qERE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () { };
    IntroComponent.ctorParameters = function () { return []; };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-intro",
            template: _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_intro_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "wxHw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config) {
        this.config = config;
        this.header = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.header = this.getHeader();
    };
    HeaderComponent.prototype.getHeader = function () {
        return this.config.getConfig().header;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "1XXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "j0V1":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside>\n  <!--Social Icons in Header-->\n  <ul class=\"social-icons\">\n    <li>\n      <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/username\">\n        <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" title=\"Google+\" href=\"http://google.com/+username\">\n        <i class=\"fa fa-google-plus fa-1x\"></i><span>Google+</span>\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" title=\"Twitter\" href=\"http://www.twitter.com/username\">\n        <i class=\"fa fa-twitter fa-1x\"></i><span>Twitter</span>\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" title=\"Instagram\" href=\"http://www.instagram.com/username\">\n        <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" title=\"behance\" href=\"http://www.behance.net\">\n        <i class=\"fa fa-behance fa-1x\"></i><span>Behance</span>\n      </a>\n    </li>\n  </ul>\n  <!--End of Social Icons in Header-->\n</aside>");

/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "SlET");
/* harmony import */ var _navigation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css */ "HkMC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.activetab = "home";
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.getActiveTab = function (tabname) {
        this.activetab = tabname;
    };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-navigation",
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n  <!--Banner Content-->\n  <div id=\"banner-content\" class=\"row clearfix\">\n\n    <div class=\"col-38\">\n\n      <div class=\"section-heading\">\n        <h1>{{ header.heading }}</h1>\n        <h2>{{ header.headingtext }}</h2>\n      </div>\n\n      <!--Call to Action-->\n      <a href=\"{{ header.buttonlink }}\" class=\"button\">{{ header.buttontext }}</a>\n      <!--End Call to Action-->\n\n    </div>\n\n  </div>\n  <!--End of Row-->\n</header>\n");

/***/ }),

/***/ "qERE":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "czZ8");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "aCJP");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "9lXE");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'Services', component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: 'Testimonials', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'Clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "wxHw":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "VcWf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_1__["configuration"];
    }
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.ctorParameters = function () { return []; };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map