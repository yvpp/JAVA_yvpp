const users = [
    {username: 'lau92', age: 30, premium: false},
    {username: 'kare93', age: 28, premium: true},
    {username: 'luis84', age: 36, premium: false},
    {username: 'ema2013', age: 7, premium: true},
    {username: 'yvpp86', age: 34, premium: true}
  ];
  
  users.map(user => {
    if (user.premium) {
      console.log(`${user.username} tiene cuenta premium`)
    }
  });
  
  const isNotPremium = users.filter(user => !user.premium);
  console.log(isNotPremium);