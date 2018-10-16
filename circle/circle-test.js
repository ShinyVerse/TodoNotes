function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  return assert.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();
