import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisibility: false,
      autoFills: [],
    };
    this.timer;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onBlurHandler() {
    this.setState({
      searchVisibility: false
    });
  }

  onFocusHandler() {
    this.setState({
      searchVisibility: true
    });
  }

  // on change of the search field
  // grab results from db
  onChangeHandler(e) {
    const searchTerm = e.target.value;
    if (searchTerm === '') {
      this.setState({
        searchVisibility: false
      });
      return;
    }

    const apiCall = (string) => {
      axios.get(`http://localhost:3001/api/search/?term=${string}`)
        .then((data) => {
          this.setState({
            autoFills: data.data,
            searchVisibility: true
          });
        })
        .catch((err) => console.error(err));
    };

    const debounce = (fn, input, delay) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => fn.call(null, input), delay);
    };

    debounce(apiCall, searchTerm, 200);
  }

  render() {
    return (
      <div className="AJsearchwrapper" onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input id="AJsearchbox" placeholder="Search for great gear & clothing" onChange={this.onChangeHandler}></input>
          <button id="AJsearchbutton">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.707 19.294a1 1 0 01-1.414 1.414l-4.244-4.245a7.5 7.5 0 111.414-1.414l4.244 4.245zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"/>
            </svg>
          </button>
          {(this.state.searchVisibility ? 
            <div className="AJautofillmodal">
              <ul className="AJautofilllist">
                {this.state.autoFills.map((item, index) => {
                  return <li className="AJautofillitems" dangerouslySetInnerHTML={{__html: item.term}}></li>;
                })}
              </ul>
            </div>
            : null)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
