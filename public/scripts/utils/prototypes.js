Array.prototype.isEmpty = function () {
    if (this) return this.length === 0;
};

Array.prototype.isNotEmpty = function () {
    if (this) return this.length > 0;
};

Object.prototype.isEmpty = function () {
    if (this) return Object.keys(this).length === 0;
};

Object.prototype.isNotEmpty = function () {
    if (this) return Object.keys(this).length > 0;
};
