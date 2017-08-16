var Teste = (function () {
    function Teste() {
    }
    Teste.prototype.saySomething = function (message) {
        if (message === void 0) { message = string; }
        console.log(message);
    };
    return Teste;
}());
var nessage = 'Hello';
