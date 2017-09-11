import React, { Component } from 'react';

class TopicInfo extends Component {
  render(){
    const { currentTopic } = this.props;
    return(
        <div>
            <h1>{currentTopic.topic}</h1>
            <div>
                <iframe title="video" width="800" height="600" src={currentTopic.video}></iframe>
            </div>
            {currentTopic.description}
        </div>
    );
    }
}

export default TopicInfo