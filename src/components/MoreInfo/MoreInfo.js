import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import classes from './MoreInfo.css';
const moreInfo = (props) =>  (
  <Container text>
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Segment basic textAlign='left'><div className={classes.Content}>{props.info}</div></Segment>
      </Grid.Column>
      <Grid.Column>
        {/*<Image src='/images/wireframe/paragraph.png' />*/}
        <Segment basic textAlign='left'><div className={classes.Content}>{props.img}</div></Segment>
      </Grid.Column>
    </Grid.Row>
   </Grid>
   </Container>

)
export default moreInfo;