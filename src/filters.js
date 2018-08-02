import Vue from 'vue'

Vue.filter('currency', (num) => {
  if (typeof num !== 'number') {
    num = Number.parseFloat(num)
  }

  return num.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})

Vue.filter('dollar', (num, exchange) => {
  if (typeof num !== 'number') {
    num = Number.parseFloat(num)
  }

  return num / exchange
})
