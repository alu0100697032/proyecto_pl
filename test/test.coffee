chai     = require 'chai'
expect   = chai.expect
routes = require "../routes/test"

describe "Testing Code", ->
  it "Asignacion", ->
    #expect(view).equal "test"
    #expect(vars.title).equal "test"
    expect(innerHTML(original).value).equal "a=2+2"
    #OUTPUT.value.match(/ID/)
    #OUTPUT.value.match(/NUM/)
    