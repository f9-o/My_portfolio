import './style.css'

const username = import.meta.env.VITE_GITHUB_USERNAME || 'f9-o';

async function fetchGitHubData() {
  try {
    const headers = {};
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    // Fetch Profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    const profileData = await profileRes.json();

    if (profileData) {
      const img = document.getElementById('profile-img');
      img.src = profileData.avatar_url;
      img.classList.remove('skeleton');
    }

    // Fetch Repos
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { headers });
    const reposData = await reposRes.json();
    
    const reposGrid = document.getElementById('repos-grid');
    reposGrid.innerHTML = ''; // Clear loading

    if (Array.isArray(reposData)) {
        reposData.forEach(repo => {
            // Skip the portfolio repo if desired, or fork/template repos
            const card = document.createElement('a');
            card.href = repo.html_url;
            card.target = "_blank";
            card.className = "glass-card";
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <div class="repo-stat">
                    <span><i class="fas fa-circle" style="color: ${getLanguageColor(repo.language)}"></i> ${repo.language || 'Code'}</span>
                    <span><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            `;
            reposGrid.appendChild(card);
        });
    }

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    document.getElementById('repos-grid').innerHTML = '<p style="color:red">Failed to load content.</p>';
  }
}

function getLanguageColor(lang) {
    const colors = {
        JavaScript: '#f7df1e',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        TypeScript: '#2b7489',
        Vue: '#41b883',
        Java: '#b07219'
    };
    return colors[lang] || '#fff';
}

fetchGitHubData();
