export const formatMinutes = (minutes) => {
  if (!minutes || minutes === 0) return 'N/A';
  
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hr${hours > 1 ? 's' : ''}`;
  }
  
  return `${hours} hr${hours > 1 ? 's' : ''} and ${remainingMinutes} mins`;
};

export const formatPeso = (amount) => {
  if (!amount) return 'N/A';
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(amount);
};