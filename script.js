import { characters} from "./charData.js";

// Function to display the bio
export function showBio(characterKey) {
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
                <li><b>Participant #${char.part_id ? char.part_id.toString() : "N/A"}</b></li>
                <li><b>Talent:</b>${char.talent}</li>
                <li><b>Interests:</b> ${char.likes}</li>
                <li><b>Dislikes:</b> ${char.dislikes}</li>
                <li><b>Inspired by:</b> ${char.inspiration}</li>
            </ul>
            <p><b>Description:</b> ${char.description}</p>
        </div>
    `;
}

// Make showBio available globally
window.showBio = showBio;

//Adds event listeners to buttons
document.getElementById('tony').addEventListener('click', () => showBio('tony'));
document.getElementById('eric').addEventListener('click', () => showBio('eric'));
document.getElementById('ken').addEventListener('click', () => showBio('ken'));
document.getElementById('amelia').addEventListener('click', () => showBio('amelia'));