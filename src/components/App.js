import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { GET_RACE_DATA_QUERY, GRAPHQL_API } from '../queries/queries';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    };
  }

  getRaces = async () => {
    try{
      const queryResult = await axios.post(GRAPHQL_API, {
        query: GET_RACE_DATA_QUERY,
        headers: {
          Accept:'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_ZED_API_KEY}`
        },
        variables: {
          "first": 100,
          "before": null,
          "input": {
            "only_my_racehorses": true,
            "distance": {
              "from": 1000,
              "to": 2600
            }
          }
        }
      });
      console.log(queryResult);
      const raceResult = queryResult.data.data.get_race_results.edges;
      console.log('raceResult:', raceResult);
      this.setState({races: raceResult});
    } catch(err) {
      console.log('Error: ', err.message);
    }
  };

  render() {
    return(
      <>
        <h1>Race Tracker</h1>
        <button onClick={this.getRaces}>Get Races</button>
      </>
    );
  }
}


export default App;
