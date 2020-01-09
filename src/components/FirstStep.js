import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

export default class FirstStep extends Component {
  state = {
    service: "",
    isPassed: false
  };

  onAdressChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      isPassed: true
    });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { service, isPassed } = this.state;
    return (
      <div className="first-step">
        <div className="container">
          <div className="title">
            <h1 className="heading-1">Describe what do you offer</h1>
          </div>

          <form className="grid" onSubmit={e => this.onSubmit(e)}>
            <div className="grid-block">
              <div className="grid-block-group">
                <h3 className="heading-3">Name of the service</h3>
                <div className="input-block">
                  <label htmlFor="service">Name</label>
                  <input
                    type="text"
                    name="service"
                    placeholder="name of service"
                    value={service}
                    onChange={e => this.onAdressChange(e)}
                  />
                </div>
              </div>
            </div>

            <div className="grid-block">
              <div className="grid-block-group">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem animi tempora corporis fuga soluta officiis
                  perspiciatis esse cupiditate itaque nesciunt
                </p>
              </div>
            </div>
          </form>
          <button>
            {isPassed ? (
              <Link className="btn-primay" to="/second">
                Submit
              </Link>
            ) : (
              <div className="error">The label is empty</div>
            )}
          </button>
        </div>
      </div>
    );
  }
}
