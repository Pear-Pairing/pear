const daysToSeconds = (days) => days * 24 * 60 * 60;

const getExpire = () => {
  const expiresInDays = 120;

  return Math.round(Date.now() / 1000 + daysToSeconds(expiresInDays));
}

export default getExpire;