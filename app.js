const button = document.querySelector("button");
const jokesUL = document.querySelector("#jokes");

let i = 0;

const maxJokesReached = () => {
    const li = document.createElement('li');
    li.innerText = "Maximum number of jokes reached.";
    jokesUL.appendChild(li);
}

const addJoke = async () => {
    const joke = await getJoke();
    const li = document.createElement('li');
    li.innerText = joke;
    jokesUL.appendChild(li);
    i++;
    if (i===3){
        button.removeEventListener('click', addJoke);
        button.addEventListener('click', maxJokesReached);
    }
};


const getJoke = async () => {
    try {
    const config = {headers : {Accept : 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    } catch (e) {
        return "Sorry. No jokes available. :(";
    }
};

button.addEventListener('click',addJoke);



