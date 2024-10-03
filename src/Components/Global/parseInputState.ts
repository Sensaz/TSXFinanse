const parseInputState = (stateValue: number) => {
  return stateValue <= 0 || Number.isNaN(stateValue)
    ? ''
    : stateValue.toString()
}

export default parseInputState
