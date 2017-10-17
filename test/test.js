const expect = require('chai').expect;
const func = require('../index');

describe('func', () => {

  it('should return first when supplied "I"', () => {
    let result = func('i');
    expect(result).to.equal('first');
    expect(result).not.to.be.undefined;
  });

  it('should return plural when supplied "you"', () => {
    let result = func('you');
    expect(result).to.equal('plural');
    expect(result).not.to.be.undefined;
  });

  it('should return plural when supplied "they"', () => {
    let result = func('they');
    expect(result).to.equal('plural');
    expect(result).not.to.be.undefined;
  });

  it('should return plural when supplied "we"', () => {
    let result = func('we');
    expect(result).to.equal('plural');
    expect(result).not.to.be.undefined;
  });

  it('should return plural when supplied "these"', () => {
    let result = func('these');
    expect(result).to.equal('plural');
    expect(result).not.to.be.undefined;
  });

  it('should return plural when supplied "those"', () => {
    let result = func('those');
    expect(result).to.equal('plural');
    expect(result).not.to.be.undefined;
  });

  it('should return singular when supplied "he"', () => {
    let result = func('he');
    expect(result).to.equal('singular');
    expect(result).not.to.be.undefined;
  });

  it('should return singular when supplied "she"', () => {
    let result = func('she');
    expect(result).to.equal('singular');
    expect(result).not.to.be.undefined;
  });

  it('should return singular when supplied "it"', () => {
    let result = func('it');
    expect(result).to.equal('singular');
    expect(result).not.to.be.undefined;
  });

  it('should return singular by default', () => {
    let result = func();
    expect(result).to.equal('singular');
    expect(result).not.to.be.undefined;
  });

});
