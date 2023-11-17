function useFetch(url, callback) {

    try {
        fetch(url).then(res => res.json()).then(data => callback(data))

    } catch (error) {
        console.log(error);
    }
}

export default useFetch