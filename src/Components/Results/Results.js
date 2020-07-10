import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidUpdate = () => {
    if (this.props.results !== this.state.results) {
      this.setState({
        results: this.props.results
      })
    }
  }

  parseResults = () => {
    let divs = this.state.results.map(r => {
        return(
        <div>
          <a href={"https://developer.mozilla.org"+ r.href}><h3>{r.title}</h3></a>
          <p>{r.href}</p>
          <p>{r.syntax}</p>
        </div>
      )
    })
    return divs
  }

  render() {
    // const resDivs = this.state.results.map(r => {
    //   return(
    //     <div>
    //       <p>{r.title}</p>
    //       <p>{r.href}</p>
    //       <p>{r.syntax}</p>
    //     </div>
    //   )
    // });

    return(
      <div>
        {this.state.results ?
          <div>{this.parseResults()}</div>
          :
          <p>Search for Something</p>
        }
      </div>
    )
  }
}

export default Results;
