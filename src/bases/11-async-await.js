
// const getsImagePromise = () => new Promise(res => res('https://google.com'));
// getsImagePromise().then(console.log)

const getsImage = async() => {
    try {
        const apiKey = 'xkZMmVXrMhZcXmWHlBwm8LjbCop6P3xo.';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        // console.log(data);
        const { url } = data.images.original;
        // console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Error handler
        console.error('error' + error);
    }

}

getsImage();

// httpCall
//     .then( resp => resp.json())
//     .then( ({data}) => {
//         const {url} = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch( console.warn )

