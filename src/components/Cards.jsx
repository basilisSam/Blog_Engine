import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/laptop.jpg";
import img2 from "../assets/laptopvan.jpeg";
import { Link } from "react-router-dom";

class Cards extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <Link to={"/blogpost"}>
          <div className='row'>
            <div className='col-md-4'>
              <Card title={"hother"} imgsrc={img1} />
            </div>
            <div className='col-md-4'>
              <Card title={"mierda"} imgsrc={img2} />
            </div>
            <div className='col-md-4'>
              <Card title={"cohones"} imgsrc={img1} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Cards;
