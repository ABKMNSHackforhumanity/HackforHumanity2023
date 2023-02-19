import React, { useState } from 'react';
import './search.css';

export default class Search extends
React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return <div class="search-container">
            <form action="/action_page.php">
            <input type="text" placeholder= {this.props.title} name="search"/>
            </form>
        </div>;
    }
}