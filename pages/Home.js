import React, { Component } from "react";
import { Table, Button, Alert } from "react-table";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      product: []
    };
  }

  componentDidMount() {
    const apiurl = "http://localhost:7777/user";
    fetch(apiurl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ product: result });
        },
        error => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, product } = this.state;
    if (error) {
      return <div>ERROR:{error.message}</div>;
    } else {
      return (
        <div>
          {product.map(product => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      );
    }
  }
}
