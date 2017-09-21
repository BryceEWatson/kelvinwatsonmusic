import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import NavigationContainer from '../../Containers/NavigationContainer';
import PortfolioContainer from '../../Containers/PortfolioContainer';
import FooterContainer from '../../Containers/FooterContainer';
import App from '../../App';
import BlogContainer from '../../Containers/BlogContainer';
import MeContainer from '../../Containers/MeContainer';
import TimelineContainer from '../../Containers/TimelineContainer';
import ReachContainer from '../../Containers/ReachContainer';
import './Root.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="Route__HeightController">

        <NavigationContainer/>

        <Route exact path="/timeline" component={TimelineContainer} />
        <Route exact path="/portfolio" component={PortfolioContainer} />
        <Route exact path="/reach" component={ReachContainer} />
        <Route exact path="/play" component={App} />
        <Route path="/blog" component={BlogContainer} />
        <Route path="/me" component={MeContainer} />
        <Route exact path="/" component={MeContainer} />

        <FooterContainer/>
      </div>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
