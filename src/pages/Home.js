import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Recipes from '../components/Recipes'

export default class Home extends Component {
  render() {
    return (
      <div className="condiv">
        <>
        <Hero>
          <Banner title="Recipes Cookbook"></Banner>
        </Hero>
        <Recipes />
        </>
      </div>
    )
  }
}
