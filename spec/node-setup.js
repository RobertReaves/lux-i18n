import "babel-polyfill";
import proxyFn from "proxyquire";
import { jsdom } from "jsdom";
import chai from "chai";
import React from "react";
import sinon from "sinon";
import "sinon-as-promised";
import ReactDOM from "react-dom";
import postal from "postal";
import lux from "lux.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure( {
	adapter: new Adapter()
} );

global.proxyquire = proxyFn.noPreserveCache().noCallThru();
global.document = jsdom( "<html><body></body></html>" );
global.window = document.defaultView;
global.chai = chai;
chai.use( require( "dirty-chai" ) );
chai.use( require( "sinon-chai" ) );
chai.use( require( "chai-as-promised" ) );
chai.use( require( "chai-enzyme" )() );
global.should = chai.should();
global.React = React;
global.ReactDOM = ReactDOM;
global.sinon = sinon;
global.postal = postal;
global.lux = lux;
