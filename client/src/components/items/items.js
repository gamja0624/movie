import React from 'react'

const Test = (props) => {
  console.log(props.hello)
  return <div>Test Component {props.hello}</div >
}

function Items() {
  return (
    <div>
      <div>아이템이다</div>
      <div />
      <div></div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>

      {/*-------- [ 조건부 렌더링 ] ---------*/}
      {true && '하이'}
      {true && true}
      {true && <Test hello='쉬고싶다' />}
      {false && <Test />}
      {<Test /> && false}
      {true && 0}
      {0 && true}

    </div>
  )
}

export default Items