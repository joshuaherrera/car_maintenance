import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const moreInfo = () =>  (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Segment basic textAlign='center'>More Info about site. Style MoreInfo.js with css to make it look good.</Segment>
      </Grid.Column>
      <Grid.Column>
        {/*<Image src='/images/wireframe/paragraph.png' />*/}
        <Segment basic textAlign='center'>A pic of a car or something</Segment>
      </Grid.Column>
    </Grid.Row>
   </Grid>

)
export default moreInfo;