document.addEventListener('DOMContentLoaded', function () {
    const characterInfoContainer = document.getElementById('character-info');
    const apiUrl = 'https://anapioficeandfire.com/api/characters/583';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayCharacterInfo(data))
        .catch(error => console.error('Помилка отримання даних:', error));

    function displayCharacterInfo(character) {
        const markup = `
            <h1>${character.name}</h1>
            <h2>gender: ${character.gender} culture: ${character.culture}</h2>
            <p>born: ${character.born}</p>
            <p>died: ${character.died}</p>
            <p>titles: ${character.titles.join(', ')}</p>
            <p>aliases: ${character.aliases.join(', ')}</p>
            <p>father: ${character.father}</p>
            <p>mother: ${character.mother}</p>
            <p>spouse: ${character.spouse}</p>
            <p>books: ${character.books.join(', ')}</p>
            <p>povBooks: ${character.povBooks.join(', ')}</p>
            <p>playedBy: "${character.playedBy.join(', ')}"</p>
        `;

        characterInfoContainer.innerHTML = markup;
    }
});
