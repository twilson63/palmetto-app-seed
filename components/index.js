module.exports = hx => {
  const Header = require('./header')(hx)
  const Main = require('./main')(hx)
  return state =>
    hx`
      <div>
        ${Header(state)}
        ${Main(state)}
      </div>
    `
}