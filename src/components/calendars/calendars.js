import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  // Button
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';

var { width, height } = Dimensions.get('window');

const events = [
  { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]

export default class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 1
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,

            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
  // rowHasChanged() {

    return r1.name !== r2.name;
    // <EventCalendar
    //       // eventTapped={this._eventTapped.bind(this)}
    //       events={events}
    //       width={width}
    //       initDate={'2017-09-08'}
    //     />
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  render() {
    let currentDate = moment().format("YYYY-MM-DD");
    var { navigate } = this.props.navigation;
    return (
      <View style={{flex: 2}}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2017-09-08'}
          renderItem={this.renderItem.bind(this)}
          // renderItem={<EventCalendar
            // eventTapped={this._eventTapped.bind(this)}
            // events={events}
            // width={width}
            // initDate={'2017-09-08'}
          // />}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
        {/* <EventCalendar
          // eventTapped={this._eventTapped.bind(this)}
          events={events}
          width={width}
          initDate={'2017-09-08'}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  agendaTextContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  agendaText: {
    // flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    width: 160,
    textAlign: 'center',
    // opacity:0.9
  },
  actionBtn: {
    position: 'absolute',
    top: height / 1.45,
    right: 0
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
})
