// Generated by CoffeeScript 1.12.7
(function() {
  var BalanceFilter, Filter,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Filter = require('../filter');

  BalanceFilter = (function(superClass) {
    extend(BalanceFilter, superClass);

    function BalanceFilter() {
      return BalanceFilter.__super__.constructor.apply(this, arguments);
    }

    BalanceFilter.prototype.process = function(buffer) {
      var i, j, pan, ref;
      if (this.value === 0) {
        return;
      }
      pan = Math.max(-50, Math.min(50, this.value));
      for (i = j = 0, ref = buffer.length; j < ref; i = j += 2) {
        buffer[i] *= Math.min(1, (50 - pan) / 50);
        buffer[i + 1] *= Math.min(1, (50 + pan) / 50);
      }
    };

    return BalanceFilter;

  })(Filter);

  module.exports = BalanceFilter;

}).call(this);
