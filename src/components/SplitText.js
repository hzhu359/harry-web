import React from "react";

function SplitText(props) {
  let colorSequence = props.colorSequence;
  let text = ` ${props.text.trim()} `

  return (
    <span>
      {text.split("").map( (char, idx) => {
        let colorCode = colorSequence[idx % colorSequence.length];
        let spanStyle = {
          color: colorCode
        }
        return <span style={spanStyle}>{char}</span>
      })}
    </span>
  )
}

export default SplitText