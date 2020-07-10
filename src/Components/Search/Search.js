import React, { Component } from 'react';
import osmosisService from '../../utils/osmosisService';

import Results from '../Results/Results';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terms: '',
      language: 'js'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidUpdate = () => {

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let results = await osmosisService.search(this.state.terms, this.state.language);
      console.log(results)
      this.setState({results: results[0]})
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return(
      <div className="search">
        <h1>Search</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <select name="language" onChange={this.handleChange}>
            <option value="js">Javascript - MDN</option>
            <option value="dj">Django - Django Project</option>
          </select>
          <input onChange={this.handleChange} value={this.state.terms} name="terms" className="search-bar"></input>
          <button type='submit'>Search</button>
        </form>
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default Search;
