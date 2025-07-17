// API de Noticias (usa tu clave)
const API_KEY = "781c3ad04fc64162881ba8405ed22720";

async function loadSportsNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=es&apiKey=${API_KEY}`);
        const data = await response.json();
        const widget = document.getElementById("sports-widget");
        
        if (data.articles) {
            widget.innerHTML = data.articles.slice(0, 3).map(article => `
                <div class="news-item">
                    <h3>${article.title}</h3>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                </div>
            `).join("");
        }
    } catch (error) {
        console.error("Error al cargar noticias:", error);
    }
}

window.onload = loadSportsNews;