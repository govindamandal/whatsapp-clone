import axios from 'axios';

export const post = async (url, payload) => {
    const data = await axios.post(url, payload)
            .then(res => res.data)
            .catch(ex => (
                {error: ex.response.datas}
            ));
    return data;
};

export const put = async (url, payload) => {
    const data = await axios.put(url, payload)
            .then(res => res.data)
            .catch(ex => (
                {error: ex.response.datas}
            ));
    return data;
};

export const get = async (url) => {
    const data = await axios.post(url)
            .then(res => res.data)
            .catch(ex => (
                {error: ex.response.datas}
            ));
    return data;
};

export const deleteRequest = async (url) => {
    const data = await axios.post(url)
            .then(res => res.data)
            .catch(ex => (
                {error: ex.response.datas}
            ));
    return data;
};