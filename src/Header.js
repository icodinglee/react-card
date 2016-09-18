import React, { PropTypes } from 'react'

class Header extends React.Component {
  styles(){
  return {
            bg:{width:"100vw",
                height:"160px",
                backgroundColor:"#8E24AA",
                fontSize:"20px",
                color:"#fff",
                textAlign:"center"},
            word:{fontSize:"40px",
                  lineHeight:"80px",
                  marginTop:"10px"}
        }
  }
  render () {
    let styles=this.styles()
      return (
              <div>
                <div style={styles.bg}>
                  <div style={styles.word}>One code  One world</div>
                  <p>Mr.icodinglee</p>
                </div>
              </div>
      )
  }
}

export default Header;
