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
    instance = new BvnkApiEndpoints.ServerErrorDto();
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

  describe('ServerErrorDto', function() {
    it('should create an instance of ServerErrorDto', function() {
      // uncomment below and update the code to test ServerErrorDto
      //var instance = new BvnkApiEndpoints.ServerErrorDto();
      //expect(instance).to.be.a(BvnkApiEndpoints.ServerErrorDto);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new BvnkApiEndpoints.ServerErrorDto();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new BvnkApiEndpoints.ServerErrorDto();
      //expect(instance).to.be();
    });

  });

}));