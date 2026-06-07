// ════════════════════════════════════════════════════════
//  API 1: Open-Meteo + Geocoding (Previsão do Tempo)
//  https://open-meteo.com  /  https://geocoding-api.open-meteo.com
// ════════════════════════════════════════════════════════

const weatherInput = document.getElementById('weatherInput');
const weatherResult = document.getElementById('weatherResult');

const WMO_CODES = {
  0: 'Céu limpo ☀️',
  1: 'Principalmente limpo 🌤️',
  2: 'Parcialmente nublado ⛅',
  3: 'Nublado ☁️',
  45: 'Neblina 🌫️',
  51: 'Garoa leve 🌦️',
  61: 'Chuva leve 🌧️',
  63: 'Chuva moderada 🌧️',
  65: 'Chuva forte 🌧️',
  80: 'Pancadas de chuva 🌦️',
  95: 'Tempestade ⛈️',
};

async function buscarClima() {
  const cidade = weatherInput.value.trim();
  if (!cidade) {
    showWeatherError('Digite o nome de uma cidade.');
    return;
  }

  showLoading(weatherResult);

  try {
    // Passo 1: Geocoding — transforma nome da cidade em lat/lon
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1&language=pt&format=json`;
    const geoRes = await fetch(geoUrl);

    if (!geoRes.ok) throw new Error('Erro ao buscar localização.');

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      showWeatherError(`Cidade "${cidade}" não encontrada.`);
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Passo 2: Previsão do tempo com Open-Meteo
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
    const weatherRes = await fetch(weatherUrl);

    if (!weatherRes.ok) throw new Error('Erro ao buscar clima.');

    const weatherData = await weatherRes.json();
    const curr = weatherData.current;

    const desc = WMO_CODES[curr.weather_code] || 'Condição desconhecida';

    weatherResult.classList.remove('hidden');
    weatherResult.innerHTML = `
      <div class="weather-info">
        <div class="weather-main">
          <div>
            <div class="weather-temp">${curr.temperature_2m}°C</div>
          </div>
          <div>
            <div class="weather-city">${name}, ${country}</div>
            <div class="weather-desc">${desc}</div>
          </div>
        </div>
        <div class="weather-stat">
          <div class="label">Umidade</div>
          <div class="value">${curr.relative_humidity_2m}%</div>
        </div>
        <div class="weather-stat">
          <div class="label">Vento</div>
          <div class="value">${curr.wind_speed_10m} km/h</div>
        </div>
        <div class="weather-stat">
          <div class="label">Latitude</div>
          <div class="value">${latitude.toFixed(2)}°</div>
        </div>
        <div class="weather-stat">
          <div class="label">Longitude</div>
          <div class="value">${longitude.toFixed(2)}°</div>
        </div>
      </div>
    `;

  } catch (err) {
    console.error(err);
    showWeatherError('Erro de conexão. Tente novamente.');
  }
}

function showWeatherError(msg) {
  weatherResult.classList.remove('hidden');
  weatherResult.innerHTML = `<p class="error">⚠ ${msg}</p>`;
}

document.getElementById('btnWeather').addEventListener('click', buscarClima);
weatherInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') buscarClima(); });


// ════════════════════════════════════════════════════════
//  API 2: PokéAPI  (https://pokeapi.co)
// ════════════════════════════════════════════════════════

const pokeInput = document.getElementById('pokeInput');
const pokeResult = document.getElementById('pokeResult');

async function buscarPokemon() {
  const query = pokeInput.value.trim().toLowerCase().replace(/\s+/g, '-');
  if (!query) {
    showPokeError('Digite o nome ou número do Pokémon.');
    return;
  }

  showLoading(pokeResult);

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

    if (res.status === 404) {
      showPokeError(`Pokémon "${query}" não encontrado.`);
      return;
    }

    if (!res.ok) throw new Error('Erro na API.');

    const data = await res.json();

    const nome = data.name;
    const id = String(data.id).padStart(3, '0');
    const sprite = data.sprites.other['official-artwork'].front_default
      || data.sprites.front_default;
    const tipos = data.types.map(t => t.type.name);
    const peso = (data.weight / 10).toFixed(1);  // em kg
    const altura = (data.height / 10).toFixed(1); // em metros

    const typeBadges = tipos.map(t =>
      `<span class="type-badge type-${t}">${t}</span>`
    ).join('');

    pokeResult.classList.remove('hidden');
    pokeResult.innerHTML = `
      <div class="pokemon-info">
        <img class="pokemon-sprite" src="${sprite}" alt="${nome}" />
        <div>
          <div class="pokemon-id">#${id}</div>
          <div class="pokemon-name">${nome}</div>
          <div class="pokemon-types">${typeBadges}</div>
          <div class="pokemon-stats">
            <div>Peso: <span>${peso} kg</span></div>
            <div>Altura: <span>${altura} m</span></div>
          </div>
        </div>
      </div>
    `;

  } catch (err) {
    console.error(err);
    showPokeError('Erro de conexão. Tente novamente.');
  }
}

function showPokeError(msg) {
  pokeResult.classList.remove('hidden');
  pokeResult.innerHTML = `<p class="error">⚠ ${msg}</p>`;
}

document.getElementById('btnPoke').addEventListener('click', buscarPokemon);
pokeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') buscarPokemon(); });


// ── Helper compartilhado ──────────────────────────────────
function showLoading(el) {
  el.classList.remove('hidden');
  el.innerHTML = '<p class="loading-text">Carregando...</p>';
}