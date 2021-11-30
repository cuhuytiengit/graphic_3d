function main() {
  var canvas = document.getElementById("webgl");
  var gl = getWebGLContext(canvas);

  var VSHADER_SOURCE =
    "void main() {\n" +
    "gl_Position = vec4(0.5,0.5,0.0,1.0);\n" +
    "gl_PointSize = 10.0;\n" +
    "}\n";

  var FSHADER_SOURCE =
    "void main() {\n" + "gl_FragColor = vec4(1.0,1.0,1.0,1.0);\n" + "}\n";

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed");
    return;
  }

  var a_position = gl.getAtttibLocation(g1.program, "a_position");
  if (a_position < 0) {
    console.log("Failed to get the storage location of a_position");
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, 1);
}

main();
