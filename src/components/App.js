import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()
 componentWillMount(){
    this.fetchTweets()
  }
  // TODO: componentDidMount()
  componentDidMount(){
    this.startInterval()
  }
  // TODO: componentWillUnmount()
  componentWillUnmount(){
    this.cleanUpInterval()
  }
  // TODO: componentDidUpdate()
  componentDidUpdate(){
    this.updateChart(this.state.latestTweets.length)
  }

  updateChart(numTweets) {
    update(numTweets);
  }

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}

export default App;
