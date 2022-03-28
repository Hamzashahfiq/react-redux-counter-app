

export function IncrementAction(num) {
  console.log('incrementAction')
  return ({
        type:"INCREMENT",
        payload:num
  })
}

export function DecrementAction(num) {
  return ({
    type:"DECREMENT",
    payload:num
  })
}
export function resetAction() {
  return ({
    type:"RESET",
  })
}

