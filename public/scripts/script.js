fetch('https://whois.fdnd.nl/api/v1/members')
  .then((response) => response.json())
  .then((data) => console.log(data));
