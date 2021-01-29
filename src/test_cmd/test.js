function will_be_use () {
  console.warn('will_be_use')
}

function will_not_use () {
  console.warn('will_not_use')
}

module.exports = {
  will_be_use,
  will_not_use
}