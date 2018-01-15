import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import spurs1 from './Images/spurs1.jpg';
import spurs2 from './Images/spurs2.jpg';
import FlatButton from 'material-ui/FlatButton';

const styleCard = {
  marginLeft:'10px',
  marginTop: '61px',
  top: '116px',
  width: '588px',
  height: '498px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
  position: 'inherit'
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const styleCardText = {
  paddingTop: '0px',
  marginLeft: '50px'
};

const styleCardMedia = {
  width: '520px',
  marginLeft: '66px',
};

const styleIconReply = {
  marginLeft: '44px',
  marginRight: '0px',
  color: '#66757f',
};

const styleIcon = {
  padding: '0px',
  marginRight: '0px',
  color: '#66757f',
};

const labelStyle = {
  textTransform: 'capitalize',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '13px',
  height: '46px',
  padding: '0 14px 0 4px',
};

const Post3 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="India-Israel Meet"
        subtitle="Modi-Benjamin  . 23h"
        avatar={spurs1}
      />
        <CardText style={styleCardText}>
           Israel PM Benjamin Netanyahu visits India.
             #India-Israel_Relation
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src={spurs2} alt="" />
      </CardMedia>
  
    <CardActions>
    <FlatButton 
    label="383" 
    primary={true}  
    icon={<i class="fa fa-reply" aria-hidden="true"></i>} 
    style={styleIconReply} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="259" 
    primary={true}  
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>} 
    style={styleIcon} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="10k" 
    primary={true}  
    icon={<i class="fa fa-heart" aria-hidden="true"></i>} 
    style={styleIcon} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="" 
    primary={true}  
    icon={<i class="fa fa-envelope" aria-hidden="true"></i>} 
    style={styleIcon} 
    labelStyle={labelStyle} 
  />  
    </CardActions>
    </Card>
  );
  
  export default Post3;