import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
let initialState = {
  app: {
    theme: 'xq-light',
    mode: 'html'
  }
};

const CardExampleWithAvatar = () => (
  <Card style={{ margin: 15 }}>
    <CardTitle title="Welcome Home" subtitle="" />
    <CardText>

<CodeMirror
  value='<h1>Welcome</h1>
<h1>Coding is Fun, is it not?</h1>'
  options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }}
  selection={[{
    anchor: {ch: 8, line: 5},
    head: {ch: 37, line: 5}
  }]}
  onSelection={(editor, data) => {}}
  onChange={(editor, data, value) => {
  }}
/>
    </CardText>
    <CardActions>
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
