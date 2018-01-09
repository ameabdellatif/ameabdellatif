import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card style={{ margin: 15 }}>
    <h1><CardTitle title="Ahmed, Me?" subtitle="Columbia, SC" /></h1>
    <p><CardText>
        My name is Ahmed Abdellatif. I am a Web Developer from Columbia, SC.
        I have studied Computer Information Systems at the University of South Carolina
        in Columbia, and like to focus on the Design aspect of Web Development.
    </CardText></p>
    <CardActions>
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
