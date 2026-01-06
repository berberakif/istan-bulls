// League configuration with colors - includes European competitions
const LEAGUES = {
    // Domestic Leagues
    'BSL': { name: 'Basketbol Süper Ligi', nameEn: "Men's Super League", tier: 'Men Tier 1', color: '#8B0000' },
    'TBL': { name: 'Türkiye Basketbol Ligi', nameEn: "Men's First League", tier: 'Men Tier 2', color: '#CD5C5C' },
    'TB2L': { name: 'Türkiye Basketbol 2. Ligi', nameEn: "Men's Second League", tier: 'Men Tier 3', color: '#F08080' },
    'KBSL': { name: 'Kadınlar Basketbol Süper Ligi', nameEn: "Women's Super League", tier: 'Women Tier 1', color: '#800080' },
    'TKBL': { name: 'Türkiye Kadınlar Basketbol Ligi', nameEn: "Women's First League", tier: 'Women Tier 2', color: '#BA55D3' },
    'BGL': { name: 'Basketbol Gelişim Ligi Erkek', nameEn: 'U20 Men Development', tier: 'U20 Men', color: '#FF8C00' },
    'BGLK': { name: 'Basketbol Gelişim Ligi Kadın', nameEn: 'U20 Women Development', tier: 'U20 Women', color: '#FF69B4' },
    // European Leagues (no tiers)
    'EL': { name: 'Euroleague', nameEn: 'Euroleague', tier: '', color: '#E31837' },
    'EC': { name: 'Eurocup', nameEn: 'Eurocup', tier: '', color: '#FF6B00' },
    'BCL': { name: 'Basketball Champions League', nameEn: 'Basketball Champions League', tier: '', color: '#00A651' },
    'ELW': { name: 'Euroleague Women', nameEn: 'Euroleague Women', tier: '', color: '#E31837' },
    'ECW': { name: 'Eurocup Women', nameEn: 'Eurocup Women', tier: '', color: '#FF6B00' }
};

// Venue configuration with Google Maps links and coordinates
const VENUES = {
    'Caferağa Spor Salonu': {
        url: 'https://maps.app.goo.gl/xarNcaDoAWVatUFY6',
        lat: 40.988405874589745, lon: 29.026705766909313
    },
    'Sinan Erdem Spor Salonu': {
        url: 'https://maps.app.goo.gl/kPiJvtpzjuiN1T6k6',
        lat: 40.988561377091585, lon: 28.85454277060473
    },
    'Turkcell Basketbol Gelişim Merkezi': {
        url: 'https://maps.app.goo.gl/edSUZtDKsiH1r5E69',
        lat: 40.99449817404435, lon: 28.918928760806306
    },
    'Turkcell Basketbol Gelisim Merkezi': {
        url: 'https://maps.app.goo.gl/edSUZtDKsiH1r5E69',
        lat: 40.99449817404435, lon: 28.918928760806306
    },
    'Ülker Spor ve Etkinlik Salonu': {
        url: 'https://maps.app.goo.gl/68gubvWnXRBYCTS47',
        lat: 40.9930226584777, lon: 29.105462958958594
    },
    'Ulker Spor ve Etkinlik Salonu': {
        url: 'https://maps.app.goo.gl/68gubvWnXRBYCTS47',
        lat: 40.9930226584777, lon: 29.105462958958594
    },
    'Gazanfer Bilge Spor Salonu': {
        url: 'https://maps.app.goo.gl/MNp3K8CK1NGiEr328',
        lat: 41.027066489086735, lon: 28.591963691489408
    },
    'Beşiktaş Akatlar Arena': {
        url: 'https://maps.app.goo.gl/uSMm5wh4jm4S9dh28',
        lat: 41.087099656184044, lon: 29.024052681690975
    },
    'Besiktas Akatlar Arena': {
        url: 'https://maps.app.goo.gl/uSMm5wh4jm4S9dh28',
        lat: 41.087099656184044, lon: 29.024052681690975
    },
    'Beylikdüzü Spor Salonu': {
        url: 'https://maps.app.goo.gl/zwoVZMEAzgdaqynVA',
        lat: 41.003039232637605, lon: 28.644945539137993
    },
    'Fenerbahçe Metro Enerji Spor Salonu': {
        url: 'https://maps.app.goo.gl/DBz7XcLhgEXPetxi8',
        lat: 40.99375843249731, lon: 29.106006178695996
    },
    'Fenerbahce Metro Enerji Spor Salonu': {
        url: 'https://maps.app.goo.gl/DBz7XcLhgEXPetxi8',
        lat: 40.99375843249731, lon: 29.106006178695996
    },
    'İTÜ Merkez Spor Salonu': {
        url: 'https://maps.app.goo.gl/tANmNGbBE9nhhvyi8',
        lat: 41.10315052062324, lon: 29.02222852642779
    },
    'ITU Spor Salonu': {
        url: 'https://maps.app.goo.gl/tANmNGbBE9nhhvyi8',
        lat: 41.10315052062324, lon: 29.02222852642779
    },
    'Öğretmen Fedai Altun Kapalı Spor Salonu': {
        url: 'https://maps.app.goo.gl/BN67CGE6dvoo9z957',
        lat: 40.979118695646, lon: 28.653692064501726
    },
    'Ogretmen Fedai Altun': {
        url: 'https://maps.app.goo.gl/BN67CGE6dvoo9z957',
        lat: 40.979118695646, lon: 28.653692064501726
    },
    'Başakşehir Spor Kompleksi': {
        url: 'https://maps.app.goo.gl/KqycXea7z4e1XraD9',
        lat: 41.10803295814748, lon: 28.780558826427793
    },
    'Basaksehir Spor Kompleksi': {
        url: 'https://maps.app.goo.gl/KqycXea7z4e1XraD9',
        lat: 41.10803295814748, lon: 28.780558826427793
    },
    'Hidayet Türkoğlu Spor Kompleksi': {
        url: 'https://maps.app.goo.gl/vYhgUkWwBp8D2pki8',
        lat: 41.06580549070676, lon: 28.886395885946275
    },
    'Hidayet Turkoglu Spor Kompleksi': {
        url: 'https://maps.app.goo.gl/vYhgUkWwBp8D2pki8',
        lat: 41.06580549070676, lon: 28.886395885946275
    },
    'Darüşşafaka Ayhan Şahenk Spor Salonu': {
        url: 'https://maps.app.goo.gl/jrLoPkgQ39b5N1zH9',
        lat: 41.125588379531415, lon: 29.029558016629373
    },
    'Darussafaka Ayhan Sahenk Spor Salonu': {
        url: 'https://maps.app.goo.gl/jrLoPkgQ39b5N1zH9',
        lat: 41.125588379531415, lon: 29.029558016629373
    }
};

// Istanbul teams for filtering
const ISTANBUL_TEAMS = [
    'Anadolu Efes', 'Fenerbahce Beko', 'Galatasaray Nef', 'Bahcesehir Koleji',
    'Besiktas Fibabanka', 'Darussafaka', 'Fenerbahce', 'Galatasaray',
    'Emlak Konut', 'Besiktas TRC', 'Uskudar Basketbol', 'Kagithane Basketbol',
    'Anadolu Efes U20', 'Fenerbahce U20', 'Galatasaray U20', 'Besiktas U20',
    'Fenerbahce U20 Women', 'Galatasaray U20 Women', 'Besiktas U20 Women'
];

let allGames = [];
let map = null;
let markers = [];
let popups = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    // Set default date filters (Jan 9-19, 2026)
    document.getElementById('start-date').value = '2026-01-09';
    document.getElementById('end-date').value = '2026-01-19';

    initMap();
    await loadGames();
    populateTeamFilter();
    renderLegend();
    applyFilters();
    setupEventListeners();
    updateLastUpdated();
    updateDataLastUpdate();
});

// Initialize MapLibre GL JS map centered on Istanbul
function initMap() {
    map = new maplibregl.Map({
        container: 'map',
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [28.9784, 41.0082],
        zoom: 10
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
}

// Load games from CSV
async function loadGames() {
    try {
        const response = await fetch('data/games.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                allGames = results.data.filter(game => game.date && game.homeTeam);
                console.log('Sample game:', allGames[0]);
                console.log(`Loaded ${allGames.length} games`);
            }
        });
    } catch (error) {
        console.error('Error loading games:', error);
        document.getElementById('games-body').innerHTML = `
            <tr><td colspan="7" class="no-results">Error loading games</td></tr>
        `;
    }
}

// Populate team filter dropdown (multi-select) with league tier info
function populateTeamFilter(selectedLeagues = []) {
    const teamFilter = document.getElementById('team-filter');

    // Store currently selected teams
    const previouslySelectedTeams = Array.from(teamFilter.selectedOptions).map(opt => opt.value);

    // Clear existing options except the first placeholder if any
    teamFilter.innerHTML = '';

    // Build team -> league tier mapping (home teams only)
    const teamTiers = {};
    allGames.forEach(game => {
        // If leagues are selected, only include teams from those leagues
        if (selectedLeagues.length > 0 && !selectedLeagues.includes(game.league)) {
            return;
        }
        const league = LEAGUES[game.league];
        const tier = league ? league.tier : '';
        if (game.homeTeam && !teamTiers[game.homeTeam]) {
            teamTiers[game.homeTeam] = tier;
        }
    });

    // Sort teams alphabetically
    const sortedTeams = Object.keys(teamTiers).sort();

    sortedTeams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        const tier = teamTiers[team];
        option.textContent = tier ? `${team} (${tier})` : team;
        // Re-select if it was previously selected
        if (previouslySelectedTeams.includes(team)) {
            option.selected = true;
        }
        teamFilter.appendChild(option);
    });

    // Make it a multi-select
    teamFilter.setAttribute('multiple', 'true');
}

// Render league legend
function renderLegend() {
    const container = document.getElementById('legend-container');
    container.innerHTML = Object.entries(LEAGUES).map(([code, league]) => `
        <div class="legend-item">
            <span class="legend-color" style="background: ${league.color}"></span>
            <span>${code}${league.tier ? ' - ' + league.tier : ''}</span>
        </div>
    `).join('');

    // Make league filter multi-select
    const leagueFilter = document.getElementById('league-filter');
    leagueFilter.setAttribute('multiple', 'true');
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);

    // Special handler for league filter to update team list
    const leagueFilter = document.getElementById('league-filter');
    leagueFilter.addEventListener('change', () => {
        const selectedLeagues = Array.from(leagueFilter.selectedOptions).map(opt => opt.value).filter(v => v);
        populateTeamFilter(selectedLeagues);
        applyFilters();
    });

    document.querySelectorAll('.filter-group input, .filter-group select').forEach(el => {
        // Skip league filter as it has its own handler
        if (el.id === 'league-filter') return;
        el.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') applyFilters();
        });
        el.addEventListener('change', applyFilters);
    });
}

// Apply filters
function applyFilters() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Get selected values from multi-select dropdowns
    const leagueFilter = document.getElementById('league-filter');
    const selectedLeagues = Array.from(leagueFilter.selectedOptions).map(opt => opt.value).filter(v => v);

    const teamFilter = document.getElementById('team-filter');
    const selectedTeams = Array.from(teamFilter.selectedOptions).map(opt => opt.value).filter(v => v);

    let filteredGames = allGames.filter(game => {
        // Date filtering (always applied)
        if (startDate && game.date < startDate) return false;
        if (endDate && game.date > endDate) return false;
        // League filtering (only if leagues selected)
        if (selectedLeagues.length > 0 && !selectedLeagues.includes(game.league)) return false;
        // Team filtering (only if teams selected)
        if (selectedTeams.length > 0) {
            if (!selectedTeams.includes(game.homeTeam) && !selectedTeams.includes(game.awayTeam)) return false;
        }
        return true;
    });

    filteredGames.sort((a, b) => {
        const dateCompare = a.date.localeCompare(b.date);
        if (dateCompare !== 0) return dateCompare;
        return (a.time || '').localeCompare(b.time || '');
    });

    renderCalendar(filteredGames);
    renderTable(filteredGames);
    renderMapMarkers(filteredGames);
    updateGameCount(filteredGames.length);
}

// Clear all filters (reset to defaults)
function clearFilters() {
    // Reset to default dates (Jan 9-19, 2026)
    document.getElementById('start-date').value = '2026-01-09';
    document.getElementById('end-date').value = '2026-01-19';

    // Clear multi-select dropdowns
    const leagueFilter = document.getElementById('league-filter');
    Array.from(leagueFilter.options).forEach(opt => opt.selected = false);

    const teamFilter = document.getElementById('team-filter');
    Array.from(teamFilter.options).forEach(opt => opt.selected = false);

    applyFilters();
}

// Render games table
function renderTable(games) {
    const tbody = document.getElementById('games-body');

    if (games.length === 0) {
        tbody.innerHTML = `
            <tr><td colspan="7" class="no-results">No games found with these filters</td></tr>
        `;
        return;
    }

    tbody.innerHTML = games.map(game => {
        const league = LEAGUES[game.league] || { color: '#666' };
        const formattedDate = formatDate(game.date);
        const venueInfo = VENUES[game.venue];
        const mapsUrl = venueInfo ? venueInfo.url : (game.lat && game.lon ? `https://www.google.com/maps?q=${game.lat},${game.lon}` : '');

        return `
            <tr>
                <td>${formattedDate}</td>
                <td>${game.time || '-'}</td>
                <td><span class="league-badge" style="background: ${league.color}">${game.league}</span></td>
                <td>
                    <strong>${game.homeTeam}</strong>
                    ${game.homeCoach ? `<br><small class="coach">${game.homeCoach}</small>` : ''}
                </td>
                <td>
                    ${game.awayTeam}
                    ${game.awayCoach ? `<br><small class="coach">${game.awayCoach}</small>` : ''}
                </td>
                <td>${mapsUrl ? `<a href="${mapsUrl}" target="_blank" class="venue-link">${game.venue} 📍</a>` : (game.venue || '-')}</td>
                <td>
                    ${game.ticketUrl ? `<a href="${game.ticketUrl}" target="_blank">🎟️</a>` : ''}
                    ${game.broadcastUrl ? ` <span class="broadcast">${game.broadcastUrl}</span>` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

// Render calendar view
function renderCalendar(games) {
    const container = document.getElementById('calendar-container');

    if (games.length === 0) {
        container.innerHTML = '<div class="calendar-no-games">No games found with these filters</div>';
        return;
    }

    // Group games by date
    const gamesByDate = {};
    games.forEach(game => {
        if (!gamesByDate[game.date]) {
            gamesByDate[game.date] = [];
        }
        gamesByDate[game.date].push(game);
    });

    // Sort dates
    const sortedDates = Object.keys(gamesByDate).sort();

    // Get today's date string for highlighting
    const today = new Date().toISOString().split('T')[0];

    container.innerHTML = sortedDates.map(date => {
        const dateObj = new Date(date);
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNum = dateObj.getDate();
        const monthName = dateObj.toLocaleDateString('en-US', { month: 'short' });
        const isToday = date === today;

        const gamesHtml = gamesByDate[date]
            .sort((a, b) => (a.time || '').localeCompare(b.time || ''))
            .map(game => {
                const league = LEAGUES[game.league] || { color: '#666' };
                const venueInfo = VENUES[game.venue];
                const mapsUrl = venueInfo ? venueInfo.url : (game.lat && game.lon ? `https://www.google.com/maps?q=${game.lat},${game.lon}` : '#');
                return `
                    <a href="${mapsUrl}" target="_blank" class="calendar-game" style="border-left-color: ${league.color}" title="${game.venue || 'Venue TBD'}">
                        <div class="calendar-game-time">${game.time || 'TBD'}</div>
                        <div class="calendar-game-teams">
                            <strong>${shortenTeamName(game.homeTeam)}</strong> vs ${shortenTeamName(game.awayTeam)}
                        </div>
                        <span class="calendar-game-league" style="background: ${league.color}">${game.league}</span>
                    </a>
                `;
            }).join('');

        return `
            <div class="calendar-day ${isToday ? 'today' : ''}">
                <div class="calendar-day-header">
                    <span class="calendar-day-name">${dayName}</span>
                    <span class="calendar-day-date">${dayNum} ${monthName}</span>
                </div>
                <div class="calendar-games">
                    ${gamesHtml}
                </div>
            </div>
        `;
    }).join('');
}

// Shorten team name for calendar display
function shortenTeamName(name) {
    if (!name) return '';
    // Remove common suffixes and shorten
    return name
        .replace(/BASKETBOL|BASKET|SPOR|BELEDİYESPOR|BELEDİYESİ|KOLEJİ|KOLEJI/gi, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .slice(0, 2)
        .join(' ');
}

// Render map markers
function renderMapMarkers(games) {
    // Clear existing markers and popups
    markers.forEach(marker => marker.remove());
    popups.forEach(popup => popup.remove());
    markers = [];
    popups = [];

    // Group games by venue
    const venueGames = {};
    games.forEach(game => {
        const venueInfo = VENUES[game.venue];
        const lat = venueInfo ? venueInfo.lat : parseFloat(game.lat);
        const lon = venueInfo ? venueInfo.lon : parseFloat(game.lon);

        if (lat && lon) {
            const key = `${game.venue}`;
            if (!venueGames[key]) {
                venueGames[key] = {
                    lat: lat,
                    lon: lon,
                    venue: game.venue,
                    games: []
                };
            }
            venueGames[key].games.push(game);
        }
    });

    // Create markers for each venue
    Object.values(venueGames).forEach(venue => {
        createMarker(venue);
    });

    // Fit bounds if we have markers
    if (markers.length > 0) {
        const bounds = new maplibregl.LngLatBounds();
        markers.forEach(marker => bounds.extend(marker.getLngLat()));
        map.fitBounds(bounds, { padding: 50 });
    }
}

// Create a custom marker
function createMarker(venue) {
    const firstGame = venue.games[0];
    const league = LEAGUES[firstGame.league] || { color: '#2563eb' };

    // Create marker element
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.cssText = `
        background: ${league.color};
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        font-size: 11px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        cursor: pointer;
    `;
    el.textContent = venue.games.length;

    // Create popup content
    const popupContent = createPopupContent(venue);
    const popup = new maplibregl.Popup({ offset: 25, maxWidth: '280px' })
        .setHTML(popupContent);

    const marker = new maplibregl.Marker({ element: el })
        .setLngLat([venue.lon, venue.lat])
        .setPopup(popup)
        .addTo(map);

    markers.push(marker);
    popups.push(popup);
}

// Create popup content for a venue
function createPopupContent(venue) {
    const gamesHtml = venue.games.map(game => {
        const league = LEAGUES[game.league] || { color: '#666', name: game.league };
        return `
            <div class="popup-game">
                <span class="popup-league" style="background: ${league.color}">${game.league}</span>
                <p><strong>${game.homeTeam}</strong> vs ${game.awayTeam}</p>
                <p>${formatDate(game.date)} ${game.time || ''}</p>
                ${game.ticketUrl ? `<a href="${game.ticketUrl}" target="_blank">Tickets →</a>` : ''}
            </div>
        `;
    }).join('');

    return `
        <div class="popup-content">
            <h4>${venue.venue}</h4>
            <p style="font-size: 0.8rem; color: #666; margin-bottom: 8px;">${venue.games.length} game(s)</p>
            ${gamesHtml}
        </div>
    `;
}

// Format date nicely
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// Update game count
function updateGameCount(count) {
    document.getElementById('game-count').textContent = `${count} game(s) found`;
}

// Update last updated timestamp
function updateLastUpdated() {
    const now = new Date();
    document.getElementById('last-updated').textContent = now.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
// Update data last update time (from CSV file's last modified)
async function updateDataLastUpdate() {
    try {
        const response = await fetch('data/games.csv', { method: 'HEAD' });
        const lastModified = response.headers.get('Last-Modified');
        if (lastModified) {
            const date = new Date(lastModified);
            document.getElementById('data-last-update').textContent = date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } else {
            document.getElementById('data-last-update').textContent = 'December 21, 2025';
        }
    } catch (e) {
        document.getElementById('data-last-update').textContent = 'December 21, 2025';
    }
}