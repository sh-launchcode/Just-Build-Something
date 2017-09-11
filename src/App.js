import React, { Component } from 'react';
import Header from './Header'
import Topics from './Topics'
import TopicInfo from './TopicInfo'
import './App.css'

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            currentTopic: {
                topic: 'Freestyle',
                video: 'https://www.youtube.com/embed/5HLW2AI1Ink?autoplay=1',
                description: ':)',
            },
            info: [{
                topic: 'Freestyle',
                video: 'https://www.youtube.com/embed/5HLW2AI1Ink?autoplay=1',
                description: ':)'
            }, {
                topic: 'Backstroke',
                video: 'https://www.youtube.com/embed/89HxafulzyI?autoplay=1',
                description: ':)'
            }, {
                topic: 'Breastroke',
                video: 'https://www.youtube.com/embed/mFFxTuaMpDQ?autoplay=1',
                description: ':)'
            }, {
                topic: 'Butterfly',
                video: 'https://www.youtube.com/embed/UffZn_-lU54?autoplay=1',
                description: ':)'
            }, {
                topic: 'Nutrition',
                video: 'https://www.youtube.com/embed/JqzWG3oyNUs?autoplay=1',
                description: ':)'
            }]
        }
        this.changeTopic = this.changeTopic.bind(this);
    }

    changeTopic(newTopic) {
        this.setState({
            currentTopic: newTopic,
        })
    }

    render() {
    return (
        <div>
            <Header />
            <ul>
                {this.state.info.map((it, index) => {
                    return <Topics key={index} {...it} changeTopic={this.changeTopic} />
                })}
            </ul>
            <TopicInfo currentTopic={this.state.currentTopic}/>
        </div>
    );
  }
}

export default App;