import React, { Component } from 'react';

class Topics extends Component {
  constructor(props) {
    super(props);
    this.changethatTopic = this.changethatTopic.bind(this);
  }

  changethatTopic(event){
      this.props.changeTopic(this.props);
  }
  render(){
    const { topic } = this.props
    return(
        <li><div onClick={this.changethatTopic}>{topic}</div></li>
    )};
}

export default Topics