const PIECES = "{{ site.data.global.url }}/chess-pieces/{piece}.svg";

function createConfig(position) {
  return {
    pieceTheme: PIECES,
    position
  };
}

Chessboard("chess-opposition", createConfig("8/8/4k3/8/4K3/4P3/8/8 w - - 0 1"));
