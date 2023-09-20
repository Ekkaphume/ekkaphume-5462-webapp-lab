import axios from 'axios';

const access_Token = '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';

axios.get('https://api.github.com/user',{
    headers: {'Authorization': `token ${access_Token}`}

}).then((response) => {
    const { login, location } = response.data;

    console.log('GitHub user name is ', login , ' who lives in ', location);
})
.catch((error) => {
    console.error(error);
});