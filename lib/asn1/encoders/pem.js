'use strict';

const DEREncoder = require('./der');

function PEMEncoder(entity) {
  DEREncoder.call(this, entity);
  this.enc = 'pem';
}

PEMEncoder.prototype = Object.create(DEREncoder.prototype, {
  constructor: {
    value: PEMEncoder,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

module.exports = PEMEncoder;

PEMEncoder.prototype.encode = function encode(data, options) {
  const buf = DEREncoder.prototype.encode.call(this, data);

  const p = buf.toString('base64');
  const out = [ '-----BEGIN ' + options.label + '-----' ];
  for (let i = 0; i < p.length; i += 64)
    out.push(p.slice(i, i + 64));
  out.push('-----END ' + options.label + '-----');
  return out.join('\n');
};
