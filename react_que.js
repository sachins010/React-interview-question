import React from 'react'

function Sachin() {

  return (
    <div>
      <h1>This is functional component</h1>
      <Other><h1>This is other component using html data</h1></Other>
    </div>
  )
}
function Other(props) {
    return (
      <div>
        <h1>{props.children}</h1>
      </div>
    )
  }

export default Sachin;