console.log('Loaded custom.js');

  const re1 = {
    login(login, key) {
      if (login === undefined || key === undefined) {
        console.log('Nah...')
      }
      else
      {
        window.location.href = "/dash/?login=" + login + "&key" + key;
      }
        },
    };