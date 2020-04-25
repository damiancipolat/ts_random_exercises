var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var single = true;
var total = 0;
var fullName = 'asdsadsadsadsad';
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Damian', 32];
//Define enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//ANY
var anyThing = 100;
anyThing = true;
anyThing = 'adasdsad';
//Multi type
var multi;
multi = 20;
multi = true;
//Types in functions
function add(a, b) {
    if (b === void 0) { b = 50; }
    return a + b;
}
add(10, 500);
;
function fullPerson(person) {
    console.log(person.firstName, person.lastName);
}
var p = {
    firstName: 'damian',
    lastName: 'cipolat'
};
fullPerson(p);
//Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employee = name;
    }
    Employee.prototype.great = function () {
        console.log('Good morning', this.employee);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        var _this = _super.call(this, name) || this;
        _this.vip = true;
        return _this;
    }
    Manager.prototype.work = function () {
        console.log(this.vip, this.employee);
    };
    return Manager;
}(Employee));
var pepe = new Employee('pepe');
var bob = new Manager('Bob');
//NUMBERS
var PI = Math.PI; // 3.141592653589793
var minValue = Number.MIN_VALUE; // 5e-324
var maxValue = Number.MAX_VALUE; // 1.79e+308
var div0 = PI / 0; // Infinity
var divMinus0 = -PI / 0; // -Infinity
var unknown = div0 / divMinus0; // N