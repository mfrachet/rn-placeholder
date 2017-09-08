import React, { Component } from 'react';
import { View } from 'react-primitives';
import Card from './Card';
import data from './data';
/**
 * The ReactComponent class definition
 */
export default class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = { items: [], isLoading: false };
  }

  componentWillMount() {
    this.setState({
      items: data,
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }

  renderItem({ item }) {
    return (
      <Card
        image={item.image}
        isLoaded={!this.state.isLoading}
        content={item.content}
        username={item.username}
        date={item.date}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 12 }}>
        {
          data.map((d) => this.renderItem({ item: d }))
        }
      </View>
    );
  }
}
