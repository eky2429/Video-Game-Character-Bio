const characters = {
    tony: {
        name: "Tony Fisher",
        img_path : "imgs/Tony Fisher.PNG",
        img_alt : "Tony's portrait",
        part_id : 1,
        talent : "Ultimate Lucky Student",
        likes: "Friends, being Postiive",
        dislikes: "Negativity, Conflict",
        inspiration: "<a href = 'https://www.instagram.com/cheroo.chim_comics/'> Cheroo Comics</a>",
        description: "Tony is a very omptimistic kid who likes making friends and encouraging others<br />to stay positive. Will this last in the killing game? Let's see..."
    }
};

// Function to display the bio
function showBio(characterKey) {
    const char = characters[characterKey];
    const container = document.getElementById("bio-container");

    if (!char) {
        container.innerHTML = "<p>Character not found.</p>";
        return;
    }

    container.innerHTML = `
        <div class="character-card">
            <h3>${char.name}</h3>
            <img src="${char.img_path}" alt="${char.img_alt}" width="150">
            <ul>
                <li><b>Participant #${char.part_id.toString()}</b></li>
                <li><b>Talent:</b>${char.talent}</li>
                <li><b>Interests:</b> ${char.likes}</li>
                <li><b>Dislikes:</b> ${char.dislikes}</li>
                <li><b>Inspired by:</b> ${char.inspiration}</li>
            </ul>
            <p><b>Description:</b> ${char.description}</p>
        </div>
    `;
}