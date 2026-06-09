import type { Question } from "./questions";

export type TeamName = "walter" | "jesse";
export type Screen = "title" | "playerSelect" | "teamSelect" | "coinFlip" | "game" | "results";

export interface AnswerRecord {
  q: string;
  ok: boolean;
  correct: string;
}

export interface Team {
  name: TeamName;
  cls: "w" | "j";
  qs: Question[];
  score: number;
  answers: AnswerRecord[];
}

export interface GameState {
  numPlayers: number;
  teams: Team[];
  selectingIdx: number;
  turnOrder: number[];
  turnIdx: number;
  tQIdx: [number, number];
}

export function initGame(): GameState {
  return {
    numPlayers: 1,
    teams: [],
    selectingIdx: 0,
    turnOrder: [],
    turnIdx: 0,
    tQIdx: [0, 0],
  };
}
