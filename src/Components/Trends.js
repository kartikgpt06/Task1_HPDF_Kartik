import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '510px',
  width: '290px',
  marginTop: '250px',
  position: 'absolute',
  marginLeft: '100px'
};

const styleH3 = {
  margin: '20px',
  padding: '0',
  fontSize: '18px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontWeight: '700',
  color: '#14171a',
};
const styleChange = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '400',
  color: '#1b95e0',
  cursor: 'pointer'

};

const Header = {
  fontWeight: '700',
  color: '#1b95e0',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '14px',
  cursor: 'pointer',
  margin: '20px',
};

const Subheader = {
  fontSize: '12px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  color: '#657786',
  margin: '20px',
  marginTop: '0px'
};

const styleDiv = {
  marginTop: '10px'
};

const Trends = () => (
  <Paper style={paperStyle}>
    <div><h3 style={styleH3}>Trends For You <span><a style={styleChange} href="#"> Change </a></span></h3></div>
    <div style={styleDiv}><a style={Header} href="#">#CJI Case</a><p style={Subheader}>A big blame to the Indian Judiciary system.</p></div>
    <div style={styleDiv}><a style={Header} href="#">#TrippleTalaqBill</a><p style={Subheader}>The bill stucks in Rajya Sabha</p></div>
    <div style={styleDiv}><a style={Header} href="#">#India-Israel Meet</a><p style={Subheader}>2500k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#Benjamin Netanyahu</a><p style={Subheader}>Israel PM brings many surprises with him.</p></div>
    
    <div style={styleDiv}><a style={Header} href="#">#North-Korea</a><p style={Subheader}>6547 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#US-Pakistan</a><p style={Subheader}>9123 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#Padmaavt</a><p style={Subheader}>2M Tweets</p></div>
  </Paper>
);

export default Trends;