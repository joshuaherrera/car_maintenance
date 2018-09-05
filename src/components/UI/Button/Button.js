import React from 'react'
import { Button } from 'semantic-ui-react'

const button = (props) => (
  <div>
    <Button basic color={props.color}>
      {props.name}
    </Button>
  </div>
)

export default button