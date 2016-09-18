import React, { PropTypes } from 'react'

class Footer extends React.Component {
  styles(){
  return {
            bg:{width:"100vw",
                height:"260px",
                marginTop:"60px",
                marginBottom:"30px",
                backgroundColor:"#8E24AA",
                fontSize:"20px",
                color:"#fff",
                textAlign:"center"},
            uls:{fontSize:"16px",
                  lineHeight:"40px",
                  paddingTop:"20px"}
        }
  }
  render () {
    let styles=this.styles()
      return (
              <div>
                <div style={styles.bg}>
                  <ul style={styles.uls}>
                    <li>github:icodinglee</li>
                    <li>E-mail:Lihk11844@126.com</li>
                    <li>wechat:18712760293</li>
                    <li>Code the board, Change the world</li>
                  </ul>
                </div>
              </div>
      )
  }
}

export default Footer;
