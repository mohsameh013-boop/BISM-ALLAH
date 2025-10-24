const randomTexts = [
"Do not take Life too seriously.You will not get out alive.",
"Resentment is like Drinking poison and waiting for Your enemies to die.",
"You miss 100% of the shots you dont take.",
"The best revenge is massive success.",
"Its not what happens to you, but how you react to it that matters.",
];

function displayRamdomText()
{
const randomIndex = Math.floor(Math.random() * randomTexts.length);
const selectedText = randomTexts[randomIndex];
const textOutputElement = document.getElementById("text-output")
if (textOutputElement ) {
    textOutputElement.textContent = selectedText;
}
}

document.addEventListener('DOMContentLoaded' , () => {
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click' , displayRamdomText)
}
});


































