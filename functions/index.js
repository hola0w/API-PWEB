"use strict";

var _app = _interopRequireDefault(require("../../app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//import "../../BaseDatos/conexion"
var PORT = process.env.PORT || 3000;
//app.listen(app.get("port"))

//console.log('holazx a tdod', app.get("port"))
_app["default"].get('/products', function (req, res) {
  res.send('This is the products page');
});