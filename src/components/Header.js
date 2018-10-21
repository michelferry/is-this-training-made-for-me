import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <div className="full">
        {this.props.type === "section" && <h2 className="section-header">{this.props.title}</h2>}
        {this.props.type === "question" && <h3 className="question">{this.props.title}</h3>}
      </div>
    );
  }
}

export default Header;