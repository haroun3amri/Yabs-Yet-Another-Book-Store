"use strict";
var History = (function () {
    function History(HistId, booktitle, bookAuthor, bookPrice, Operation, Date, State, UserLogin) {
        this.HistId = HistId;
        this.booktitle = booktitle;
        this.bookAuthor = bookAuthor;
        this.bookPrice = bookPrice;
        this.Operation = Operation;
        this.Date = Date;
        this.State = State;
        this.UserLogin = UserLogin;
    }
    return History;
}());
exports.History = History;
//# sourceMappingURL=History.js.map