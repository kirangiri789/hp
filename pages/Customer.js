import React, { Component } from "react";
import Modal from "react-modal";
import ReactTable from "react-table";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { transform } from "@babel/core";
import { Transform } from "stream";

export default class Customer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isActive: false
    };
    this.onclick = this.onclick;
  }

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  toggleModalCategory = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    const style = {
      content: {
        width: "811px",
        marginLeft: "302px",
        top: "70px",
        border: "3px solid rgb(204, 204, 204)",
        backgroundColor: "white",
        transition: "all 0.3s ease 0s",
        display: "block"
      }
    };

    return (
      <div>
        <div className="row">
          <>
            <section className=" mb-3">
              <div className="row mb-3">
                <div className="col text-center">
                  <a
                    href="#"
                    className="btn btn-lg btn-primary"
                    data-toggle="modal"
                    data-target="#largeModal"
                  >
                    Add Customer
                  </a>
                </div>
              </div>
              <div
                className="modal fade"
                id="largeModal"
                style={{
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease 0s"
                }}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="basicModal"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content" style={{ height: "450px" }}>
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel" />
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          style={{ marginLeft: "764px" }}
                        >
                          &times;
                        </span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group row">
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="Customer Name     
                            "
                          />
                        </div>
                        <div className="col-xs-2" style={{ width: "210px" }} />
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="Contact no"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-xs-2" style={{ width: "210px" }} />
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="State"
                          />
                        </div>
                        <div className="col-xs-2" style={{ width: "210px" }} />
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="Mobile"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-xs-3">
                          <input
                            className="form-control"
                            id="ex3"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-xs-2" style={{ width: "210px" }} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        style={{ marginLeft: "581px" }}
                        className="btn btn-primary "
                      >
                        Save{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
        <div className="container">
          <div className="row">
            <section className="col-xs-8">
              <div
                className="table-responsive"
                style={{ marginLeft: "39px", marginTop: "-42px" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Iteam Type</th>
                      <th>Iteam Name</th>
                      <th>Units</th>
                      <th>Packing kg</th>
                      <th>sale rate </th>
                      <th>GST</th>
                      <th>Total</th>
                      <th>Item Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
