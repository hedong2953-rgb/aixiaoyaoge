let currentCategory = 'all';

function renderCategories() {
  const tabs = document.getElementById('categoryTabs');
  let html = '<button class="tab active" data-cat="all" onclick="switchCategory(\'all\')">🌐 全部</button>';
  for (const [key, label] of Object.entries(categories)) {
    html += `<button class="tab" data-cat="${key}" onclick="switchCategory('${key}')">${label}</button>`;
  }
  tabs.innerHTML = html;
}

function renderTools(category, searchTerm = '') {
  const grid = document.getElementById('toolsGrid');
  let filtered = toolsData;
  if (category !== 'all') filtered = filtered.filter(t => t.category === category);
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(t => t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term));
  }
  if (filtered.length === 0) { grid.innerHTML = '<div style="text-align:center;padding:40px;color:#999">没有找到相关工具 🤔</div>'; return; }
  grid.innerHTML = filtered.map(tool => `
    <a href="detail.html?id=${tool.id}" class="tool-card">
      <div class="card-icon">${tool.icon}</div>
      <div class="card-info">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
      </div>
    </a>
  `).join('');
}

function switchCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab.dataset.cat === category));
  renderTools(category, document.getElementById('searchInput').value);
}

function filterTools() { renderTools(currentCategory, document.getElementById('searchInput').value); }

document.addEventListener('DOMContentLoaded', () => { renderCategories(); renderTools('all'); });