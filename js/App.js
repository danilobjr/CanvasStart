var canvasIsSupported = function () {
  return Modernizr.canvas;
};

var setupCanvas = function (canvas) {
  canvas.height = 350;
  canvas.width = 500;
};

var getCanvasContext = function () {
  var canvas = document.getElementById('canvas');
  
  setupCanvas(canvas);
  
  return canvas.getContext('2d');
};
    
var startCanvasApp = function () {
  
  if (!canvasIsSupported()) {    
    return;
  }
  
  var context = getCanvasContext();
  
};

window.onload = function () {
  startCanvasApp();
};