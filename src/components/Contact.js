import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {lightBlue600, orange300} from 'material-ui/styles/colors';

const styles = {
  button: {
    margin: 22,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const CardExampleWithAvatar = () => (
  <Card style={{ margin: 15 }}>
    <CardTitle title="Lets Connect" subtitle="" />
    <FontIcon className="material-icons">account_circle</FontIcon>
    <CardText>

     <div style={{ padding: 15, display:'inline-block' }}>
      <RaisedButton
      href="https://www.facebook.com/ameabdellatif17"
      target="_blank"
      label="Facebook"
      backgroundColor= "blue"
      labelColor="white"
    /></div>

  <div style={{ padding: 15, display:'inline-block' }}>
    <RaisedButton
    href="https://www.instagram.com/ame_abdellatif/"
    target="_blank"
    label="Instagram"
    backgroundColor= "#B39DDB"
    labelColor="white"
  /></div>

  <div style={{ padding: 15, display:'inline-block' }}>
    <RaisedButton
    href="https://linkedin.com/in/ameabdellatif"
    target="_blank"
    label="LinkedIn"
    backgroundColor= "#0D47A1"
    labelColor="white"
  /></div>



    </CardText>
    <CardActions>
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
