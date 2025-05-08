export const getOS = () => {
  if (!import.meta.client) return 'unknown'

  const userAgent = navigator.userAgent

  if (userAgent.includes('Win')) {
    return 'windows'
  } else if (userAgent.includes('Mac')) {
    return 'mac'
  } else if (userAgent.includes('Linux')) {
    return 'linux'
  } else {
    return 'unknown'
  }
}
