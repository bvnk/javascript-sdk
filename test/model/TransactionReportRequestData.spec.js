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
    instance = new BvnkApiEndpoints.TransactionReportRequestData();
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

  describe('TransactionReportRequestData', function() {
    it('should create an instance of TransactionReportRequestData', function() {
      // uncomment below and update the code to test TransactionReportRequestData
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be.a(BvnkApiEndpoints.TransactionReportRequestData);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property externalProcessing (base name: "externalProcessing")', function() {
      // uncomment below and update the code to test the property externalProcessing
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "walletId")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "toDate")', function() {
      // uncomment below and update the code to test the property toDate
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property languageTag (base name: "languageTag")', function() {
      // uncomment below and update the code to test the property languageTag
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "accountName")', function() {
      // uncomment below and update the code to test the property accountName
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property include (base name: "include")', function() {
      // uncomment below and update the code to test the property include
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

    it('should have the property exclude (base name: "exclude")', function() {
      // uncomment below and update the code to test the property exclude
      //var instance = new BvnkApiEndpoints.TransactionReportRequestData();
      //expect(instance).to.be();
    });

  });

}));
