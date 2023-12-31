/**
 * BVNK API Endpoints
 * The BVNK API is designed to facilitate seamless and secure transactions including payments, channels, and digital wallet transactions.
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
    instance = new BvnkApiEndpoints.MerchantChannelDto();
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

  describe('MerchantChannelDto', function() {
    it('should create an instance of MerchantChannelDto', function() {
      // uncomment below and update the code to test MerchantChannelDto
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be.a(BvnkApiEndpoints.MerchantChannelDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "dateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "lastUpdated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchantId")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property walletCurrency (base name: "walletCurrency")', function() {
      // uncomment below and update the code to test the property walletCurrency
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property displayCurrency (base name: "displayCurrency")', function() {
      // uncomment below and update the code to test the property displayCurrency
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property payCurrency (base name: "payCurrency")', function() {
      // uncomment below and update the code to test the property payCurrency
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property redirectUrl (base name: "redirectUrl")', function() {
      // uncomment below and update the code to test the property redirectUrl
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

    it('should have the property alternatives (base name: "alternatives")', function() {
      // uncomment below and update the code to test the property alternatives
      //var instance = new BvnkApiEndpoints.MerchantChannelDto();
      //expect(instance).to.be();
    });

  });

}));
