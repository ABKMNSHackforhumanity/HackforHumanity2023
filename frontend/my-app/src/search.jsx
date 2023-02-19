import React, { useState } from 'react';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        //set up URL
        var street = urlParams.get('adrssearch');
        var city = urlParams.get('citysearch');
      fetch("http://localhost:3000/?adrssearch=500+El+Camino+Real&citysearch=Santa+Clara", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    render(){
        return <div className="container">
            <h1 name='water' id='water' value={this.state.items.water}></h1>
        </div>;
    }
}