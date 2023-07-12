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
    instance = new BvnkApiEndpoints.WalletDto();
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

  describe('WalletDto', function() {
    it('should create an instance of WalletDto', function() {
      // uncomment below and update the code to test WalletDto
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be.a(BvnkApiEndpoints.WalletDto);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property alternatives (base name: "alternatives")', function() {
      // uncomment below and update the code to test the property alternatives
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property approxAvailable (base name: "approxAvailable")', function() {
      // uncomment below and update the code to test the property approxAvailable
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property approxBalance (base name: "approxBalance")', function() {
      // uncomment below and update the code to test the property approxBalance
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property convertedAvailable (base name: "convertedAvailable")', function() {
      // uncomment below and update the code to test the property convertedAvailable
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property custodianWallet (base name: "custodianWallet")', function() {
      // uncomment below and update the code to test the property custodianWallet
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property depositFee (base name: "depositFee")', function() {
      // uncomment below and update the code to test the property depositFee
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property isEmoney (base name: "isEmoney")', function() {
      // uncomment below and update the code to test the property isEmoney
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property lookup (base name: "lookup")', function() {
      // uncomment below and update the code to test the property lookup
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property supportsDeposits (base name: "supportsDeposits")', function() {
      // uncomment below and update the code to test the property supportsDeposits
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property supportsThirdParty (base name: "supportsThirdParty")', function() {
      // uncomment below and update the code to test the property supportsThirdParty
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property supportsWithdrawals (base name: "supportsWithdrawals")', function() {
      // uncomment below and update the code to test the property supportsWithdrawals
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalFee (base name: "withdrawalFee")', function() {
      // uncomment below and update the code to test the property withdrawalFee
      //var instance = new BvnkApiEndpoints.WalletDto();
      //expect(instance).to.be();
    });

  });

}));