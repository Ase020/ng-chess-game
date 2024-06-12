export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteKing = 'K',
  WhiteQueen = 'Q',
  WhiteRook = 'R',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackKing = 'k',
  BlackQueen = 'q',
  BlackRook = 'r',
}
