import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ani from './Images/ani.jpg';
import ani2 from './Images/ani2.jpg';

const styleCard = {
  marginLeft:'10px',
  marginTop: '15px',
  top: '116px',
  width: '588px',
  height: '490px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
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

const Post1 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="UIDAI"
        subtitle="@UIDAI . 8h"
        avatar={ani}
      />
      <CardText style={styleCardText}>
      Happy that UIDAI has introduced Virtual ID and limited KYC in the spirit of continuous innovation to enhance privacy and security #UIDAI
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src={ani2} alt="" />
      </CardMedia>
  
    <CardActions>
    <FlatButton 
    label="987" 
    primary={true}  
    icon={<i class="fa fa-reply" aria-hidden="true"></i>} 
    style={styleIconReply} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="190" 
    primary={true}  
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>} 
    style={styleIcon} 
    labelStyle={labelStyle} 
  />
  <FlatButton 
    label="7k" 
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
  
  export default Post1;