import axios from "axios";

axios.interceptors.request.use(config => {
    // log a message before any HTTP request is sent
    console.log('Request was sent');

    return config;
});

// sent a GET request
axios.get('https://api.github.com/users/sideshowbarker')
    .then(response => {
        console.log(response.data);
    });