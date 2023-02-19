import React, { useState } from 'react';
import './search.css';

export default class Search extends
React.Component{
    render(){
        return <div class="search-container">
            <form action="/action_page.php">
            <input type="text" placeholder="Search..." name="search"/>
            </form>
        </div>;
    }
}