const PIECES = "{{ site.data.global.url }}/chess-pieces/{piece}.svg";

function createConfig(position) {
  return {
    pieceTheme: PIECES,
    position
  };
}

Chessboard("chess-opposition", createConfig("8/8/4k3/8/4K3/4P3/8/8 w - - 0 1"));
Chessboard(
  "chess-mined-squares",
  createConfig("8/2k5/8/1Pp3p1/6P1/1K6/8/8 w - - 0 1")
);
Chessboard(
  "chess-triangulation",
  createConfig("8/1p1k4/1P6/2PK4/8/8/8/8 w - - 0 1")
);
