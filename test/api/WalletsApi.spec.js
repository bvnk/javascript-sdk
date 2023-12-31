/**
 * BVNK API Endpoints
 * The BVNK API is designed to facilitate seamless and secure transactions including payments, channels, anddigital wallet transactions.
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BvnkApiEndpoints);
  }
}(this, function(expect, BvnkApiEndpoints) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BvnkApiEndpoints.WalletsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WalletsApi', function() {
    describe('transactionReport', function() {
      it('should call transactionReport successfully', function(done) {
        //uncomment below and update the code to test transactionReport
        //instance.transactionReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletBalanceList', function() {
      it('should call walletBalanceList successfully', function(done) {
        //uncomment below and update the code to test walletBalanceList
        //instance.walletBalanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletCreate', function() {
      it('should call walletCreate successfully', function(done) {
        //uncomment below and update the code to test walletCreate
        //instance.walletCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletList', function() {
      it('should call walletList successfully', function(done) {
        //uncomment below and update the code to test walletList
        //instance.walletList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletRGet', function() {
      it('should call walletRGet successfully', function(done) {
        //uncomment below and update the code to test walletRGet
        //instance.walletRGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
