import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';



const CardExampleWithAvatar = () => (

  <Card style={{ margin: 15 }}>
  <Paper>
  <h1><CardTitle title="Introduction to HTML" subtitle="Hyper Text Markup Language" /></h1>
  <CardText>
  <p>
    HTML is not considered a programming language, but what we call a 'mark-up' language.
    In Web development we use it to markup our browser to indicate to the browser that
    this page should be shown in a particular way Functioning as the outer structure of
    your webpage, you could think of it as the exoskeleton of your website or application!
  </p>
  </CardText>
  <CardActions>
  </CardActions>
  </Paper>



  <Paper>
  <h1><CardTitle title="Introduction to CSS" subtitle="Cascading Style Sheets" /></h1>
  <CardText>
  <p>
    CSS is involved with the design aspect of your webpage, as well as adding proper format and layout to your HTML Elements.
    There are 3 main ways to add css to our html website, they are as follows: Inline CSS, External Style Sheet CSS, Internal Style Sheet CSS
  </p>
  </CardText>
  <CardActions>
  </CardActions>
  </Paper>


  <Paper>
  <h1><CardTitle title="Introduction to Javascript" subtitle="The Dawn of the 'DOM'" /></h1>
  <CardText>
          <p>
        In modern webpage development javascript plays an important role. Javascript has the power to access the elements of a web page, and
        the browser window in which it is running, and PERFORM actions on these elements. This allows you as a web developer to extend the capabilities of your webpage using Javascript!
      </p>
        </CardText>
        <CardActions>
        </CardActions>
  </Paper>
  </Card>
);

export default CardExampleWithAvatar;
