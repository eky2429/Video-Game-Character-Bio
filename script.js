import { characters} from "./charData.js";

// Function to display the bio
export function showBio(characterKey) {
    const char = characters[characterKey];
    const modal = document.getElementById("bio-modal");
    const container = document.getElementById("modal-bio-container");

    if (!char) {
        container.innerHTML = "<p>Character not found.</p>";
    } else {
        container.innerHTML = `
            <div class="character-card">
                <h3>${char.name}</h3>
                <img src="${char.img_path}" alt="${char.img_alt}" width="150">
                <ul>
                    <li><b>Participant #${char.part_id ? char.part_id.toString() : "N/A"}</b></li>
                    <li><b>Talent:</b> ${char.talent}</li>
                    <li><b>Interests:</b> ${char.likes}</li>
                    <li><b>Dislikes:</b> ${char.dislikes}</li>
                    <li><b>Inspired by:</b> ${char.inspiration}</li>
                </ul>
                <p><b>Description:</b> ${char.description}</p>
            </div>
        `;
    }
    modal.style.display = "flex";
}

// Close modal on button click
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('bio-modal').style.display = "none";
});

// Optional: Close modal when clicking outside modal content
document.getElementById('bio-modal').addEventListener('click', (e) => {
    if (e.target.id === 'bio-modal') {
        document.getElementById('bio-modal').style.display = "none";
    }
});

// Make showBio available globally
window.showBio = showBio;

//Adds event listeners to buttons
document.getElementById('tony').addEventListener('click', () => showBio('tony'));
document.getElementById('eric').addEventListener('click', () => showBio('eric'));
document.getElementById('ken').addEventListener('click', () => showBio('ken'));
document.getElementById('amelia').addEventListener('click', () => showBio('amelia'));
document.getElementById('anneMarie').addEventListener('click', () => showBio('anneMarie'));
document.getElementById('derrick').addEventListener('click', () => showBio('derrick'));
document.getElementById('angelica').addEventListener('click', () => showBio('angelica'));
document.getElementById('georgie').addEventListener('click', () => showBio('georgie'));
document.getElementById('gerhardine').addEventListener('click', () => showBio('gerhardine'));
document.getElementById('dennis').addEventListener('click', () => showBio('dennis'));
document.getElementById('ophelia').addEventListener('click', () => showBio('ophelia'));
document.getElementById('tim').addEventListener('click', () => showBio('tim'));
document.getElementById('mariella').addEventListener('click', () => showBio('mariella'));
document.getElementById('dennisGar').addEventListener('click', () => showBio('dennisGar'));
document.getElementById('diane').addEventListener('click', () => showBio('diane'));