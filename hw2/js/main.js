const getComicId = async () => {
    const email = 'e.stroganov@innopolis.university';
    const response = await fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`);
    const data = await response.json();
    return data
};

const getXKCD = async () => {
    const comicId = await getComicId();
    const response = await fetch(`https://getxkcd.vercel.app/api/comic?num=${comicId}`);
    const data = await response.json();
    console.log(data)
    const myImage = document.getElementById('myImage');
    myImage.src = data.img;

    var desc = document.getElementById('desc')
    desc.textContent = data.alt;
};
