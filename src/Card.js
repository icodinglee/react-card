import ReactDOM from "react-dom";
import React, { PropTypes } from 'react';
import data from './data.js'

class Card extends React.Component {
  constructor(){
    super();
    this.state={
      num:0,
      size:4,
      next:">",
      last:"<",
      arrts:data,
      datas:data
    }

  }
  next(){
    if(this.state.num<this.state.arrts.length/(this.state.size)-1){this.setState({num:this.state.num+1})}else{alert("没有了")}
  }
  last(){
    if(this.state.num>0){this.setState({num:this.state.num-1})}else{alert("没有了")}
  }
  styles(){
      return  {
              main:{height:"100px",
                    width:"60vw",
                    backgroundColor:"#546E7A",
                    margin:"0 auto",
                    marginTop:"25px",
                    cursor:"pointer",
                    boxSizing: "border-box",
                    boxShadow:"rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px"
                    },
              left:{fontSize:"40px",
                    float:"left",
                    width:"10vw",
                    backgroundColor:"teal",
                    textAlign:"center",
                    lineHeight:"100px",
                    color:"#fff"},
              rightH2:{color:"#fff",
                      lineHeight:"60px"},
              rightTime:{margin:"0",
                        color:"#fff"},
              right:{width:'50vw',
                    paddingLeft:'12vw'},
              lastbtn:{position:"absolute",
                       left:"5vh",
                      top:"300px",
                      width:"6vw",
                      height:"10vw",
                     fontSize:"5vw",
                     textAlign:"center",
                     lineHeight:"10vw",
                     cursor:"pointer",
                     color:"#fff",
                     backgroundColor:"rgba(20,20,20,0.2)"},
              nextbtn:{position:"absolute",
                      right:"5vh",
                       top:"300px",
                       width:"6vw",
                       height:"10vw",
                      fontSize:"5vw",
                      textAlign:"center",
                      lineHeight:"10vw",
                      cursor:"pointer",
                      color:"#fff",
                    backgroundColor:"rgba(50,50,50,0.2)"},
              inputs:{position:"absolute",
                      width:"20vw",
                      height:"30px",
                      left:"40vw",
                      background:"transparent",
                      border:"none",
                      color:"#fff",
                      outline:'none',
                      borderBottom:"1px solid #fff",
                      top:"130px",
                      fontSize:"18px"},
                find:{margin:"0 auto",
                      lineHeight:"20px",
                      marginBottom:"40px",
                      marginTop:"40px",
                      width:"140px"},
                finput:{width:"30px",
                        height:"18px"}
        }
    }
    onclick(){
      let val =this.refs.search.value
      let arr1=[];
      for(let i=0;i<this.state.datas.length;i++){
        let titl=data[i].title;
        let patt2=new RegExp(val,"i");
        if(patt2.test(titl)&&val!=""){
          arr1.push(data[i])
        }
      }
      console.log(arr1)
      if(val!=""){
        this.setState({
          arrts:arr1,
          num:0
      })
    }else{
      this.setState({
        arrts:data
      })
    }
      console.log(this.state.arrts)
    }

    findchange(){
      let vall=this.refs.find.value
      let tet=/^\d+$/
      let tt=new RegExp("")
      if(tet.test(vall)){
          this.setState({
              num:vall-1
            })

      }else if(tt.test(vall)) {
            this.setState({
                num:this.state.num
              })
      }
    }
    //输入框里的内容删不完
  render () {
    let styles=this.styles();
    let ss=this.state.arrts;
    console.log(ss)
    let cards=ss.map((item,index) =>
        (
            <div style={styles.main} key={index}>
              <div style={styles.left}>{index+1}</div>
              <div style={styles.right}>
                  <h2 style={styles.rightH2}>{item.title}</h2>
                  <div style={styles.rightTime}>{item.time}</div>
              </div>
            </div>
       )
     );
//----------
    let arrt=[];
    console.log(this.state.arrts)
    for(let i=0;i<this.state.arrts.length;i++){
        if(i>this.state.num*this.state.size-1&&i<(this.state.num+1)*this.state.size){
        arrt.push(cards[i])
        }
    }
    return(<div>
            <input ref="search" style={styles.inputs} onChange={this.onclick.bind(this)} placeholder="Search you want"></input>
            <div style={styles.lastbtn} onClick={this.last.bind(this)}>{this.state.last}</div>
            <div style={styles.nextbtn} onClick={this.next.bind(this)}>{this.state.next}</div>
            {arrt}
            <div>
              <div style={styles.find}>
                <span>第 <input ref ="find" style={styles.finput} onChange={this.findchange.bind(this)} value={this.state.num+1}></input> 页</span>,<span>共{Math.ceil(this.state.arrts.length/(this.state.size))} 页</span>
              </div>
            </div>
          </div>
      )
  }
}
Card.defaultProps={
  title:"标题",
  time:"2010.1.1",
  num:0,
}

Card.propTypes={
  title:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  num:PropTypes.number.isRequired
}

export default Card;
