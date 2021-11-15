module.exports = {
    clima: function consultarClima(local) 
    {
        const clima = fetch(`http://api.weatherstack.com/current?access_key=33ce7b4ff8a9b2d8271fb95a9477b973&query=${local}`)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                error.json().then(data => {
                    return data;
                })
            })
    }
}