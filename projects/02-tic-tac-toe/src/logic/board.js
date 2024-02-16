import { WINNER_COMBOS } from "../components/constants"

export const checkWinnerFrom = (boardToCheck) => {
    //we review all winning combinations
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      )
      return boardToCheck[a]
    }

    //if no winner
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  