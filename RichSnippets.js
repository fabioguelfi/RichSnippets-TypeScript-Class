var RichSnippet = /** @class */ (function () {
    function RichSnippet() {
    }
    // constructor(openingHours: string) {
    //     this._openingHours = "Mo,Tu,We,Th,Fr 08:00-18:00"
    // }
    RichSnippet.prototype.mathRaiting = function () {
        return Math.floor((Math.random() * 5) + 4);
    };
    RichSnippet.prototype.getNameCompany = function () {
        this._nameClient;
    };
    RichSnippet.prototype.setNameCompany = function (n) {
        this._nameClient = n;
    };
    return RichSnippet;
}());
