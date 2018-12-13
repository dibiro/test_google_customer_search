export const SERVER = 'http://142.93.85.147'
export const APPNAME = 'Reporte Clientes'
export const GOOGLE_API_KEY_CUSTOMER_SEARCH = 'AIzaSyCufgKw8sgum1WXlaneArbXLi4hHEBavMQ'

export function isFunction (functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}

export function isBlank (str) {
  return (!str || /^\s*$/.test(str))
}

export function change_rute (url, event, history) {
  if (history !== undefined) {
    history.push(url)
  }
  if (event !== undefined) {
    event.preventDefault()
  }
}


export const getGroup = (user, group) => {
  if (user && user.groups && user.groups.length > 0) {
    return user.groups.filter(function(groupUser) {
      return groupUser.name === group
    }).length > 0
  } else {
    return false
  }
}

export function parImpar (numero) {
  if (numero % 2 == 0) {
    return true
  } else {
    return false
  }
}