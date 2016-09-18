import React, { PropTypes } from 'react';
import data from "./data.js";
import Card from "./Card.js";
import Header from './Header.js';
import Footer from './Footer.js'


//let arr=data.map((item,index) => <Card title={item.title} key={index} num={index+1} time={item.time} />)
 //let arr=data.map((item,index) => <Card  num={index+1} {...item} key={index}/>)

// let arrt=[];
// for(let i=0;i<data.length;i++){
//   if(i>6||i<15){
//     arrt.push(<Card title={data[i].title} key={i} num={i+1} time={data[i].time} />)
//   }
// }


class App extends React.Component {
  styles(){
    return  {
      div:{minHeight:'260px'}
    }
  }
  render () {
      let styles=this.styles()
        return <div>
                  <Header />
                  <div style={styles.div}>
                    <Card item={data} />
                  </div>
                  <Footer />
                </div>
  }
}

export default App;
//第一种方法  {arr}
