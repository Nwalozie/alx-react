export const getFullYear = () => {
    return new Date().getFullYear();
  };
  
  export const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  };

  export const getLatestNotification = () => {
    return '<h1><strong>Urgent requirement</strong> - complete by EOD</h1>';
  }