// ===== AI工具大全 - 完全 ai-bot.cn 风格 =====

let currentCategory = 'all';
let currentSearch = '';

// Font Awesome 图标映射
const catIconsFA = {
  conversation: 'fa-comments',
  chatbot: 'fa-robot',
  writing: 'fa-feather',
  image: 'fa-images',
  video: 'fa-video',
  audio: 'fa-music',
  design: 'fa-palette',
  office: 'fa-folder-open',
  programming: 'fa-code',
  coding: 'fa-laptop-code',
  agent: 'fa-brain',
  search: 'fa-search',
  framework: 'fa-cubes',
  models: 'fa-microchip',
  detection: 'fa-shield-alt',
  learning: 'fa-graduation-cap',
  prompt: 'fa-lightbulb',
  resource: 'fa-hubspot',
  productivity: 'fa-bolt',
};

// 分类显示名
const catNames = {
  all: '全部工具', conversation: 'AI对话助手', chatbot: 'AI聊天机器人',
  writing: 'AI写作工具', image: 'AI图像工具', video: 'AI视频工具',
  audio: 'AI音频工具', design: 'AI设计工具', office: 'AI办公工具',
  programming: 'AI编程工具', coding: 'AI编程IDE', agent: 'AI智能体',
  search: 'AI搜索引擎', framework: 'AI开发平台', models: 'AI训练模型',
  detection: 'AI内容检测', learning: 'AI学习网站', prompt: 'AI提示指令',
  resource: 'AI资源社区', productivity: 'AI效率工具',
};

// 分类显示顺序 (侧边栏 + 顶部菜单)
const catOrder = [
  'all', 'conversation', 'chatbot', 'writing', 'image', 'video',
  'audio', 'design', 'office', 'programming', 'coding', 'agent',
  'search', 'framework', 'models', 'detection', 'learning', 'prompt',
  'resource', 'productivity'
];

// 有子分类的
const catSubItems = {
  image: ['常用AI图像工具','AI图片插画生成','AI图片背景移除','AI图片物体抹除','AI图片无损放大','AI图片优化修复','AI商品图生成','AI 3D模型生成'],
  office: ['AI幻灯片和演示','AI表格数据处理','AI思维导图','AI文档工具','AI会议工具','AI招聘求职','AI法律助手','AI语言翻译','AI效率提升'],
  agent: ['AI智能体','插件与Skills'],
  detection: ['内容检测','降AI/AIGC率'],
};

function getCategoryCounts() {
  const counts = { all: toolsData.length };
  for (const t of toolsData) {
    counts[t.category] = (counts[t.category] || 0) + 1;
  }
  return counts;
}

// ===== 侧边栏渲染 =====
function renderSidebar() {
  const ul = document.getElementById('sidebarUl');
  const counts = getCategoryCounts();
  let html = '';

  for (const cat of catOrder) {
    if (!counts[cat] || counts[cat] === 0) continue;
    const name = catNames[cat] || cat;
    const icon = catIconsFA[cat] || 'fa-circle';
    const hasSub = catSubItems[cat] !== undefined;
    const isActive = cat === currentCategory;

    html += `<li class="sidebar-item${isActive ? ' active' : ''}">`;
    html += `<a href="javascript:" onclick="switchCategory('${cat}')">
      <i class="fas ${icon} icon-fw icon-lg"></i>
      <span>${name}</span>
    </a>`;
    if (hasSub) {
      html += `<i class="iconfont icon-arrow-r-m sidebar-more text-sm" onclick="toggleSub(this)"></i>`;
      html += `<ul>`;
      for (const sub of catSubItems[cat]) {
        html += `<li><a href="javascript:"><span>${sub}</span></a></li>`;
      }
      html += `</ul>`;
    }
    html += `</li>`;
  }

  ul.innerHTML = html;
}

function toggleSub(el) {
  el.classList.toggle('open');
  const ul = el.parentElement.querySelector('ul');
  if (ul) ul.classList.toggle('show');
}

// ===== 顶部菜单 =====
function renderTopMenu() {
  const ul = document.getElementById('topMenuSub');
  if (!ul) return;
  const counts = getCategoryCounts();
  let html = '';
  for (const cat of catOrder) {
    if (cat === 'all' || !counts[cat] || counts[cat] === 0) continue;
    const name = catNames[cat] || cat;
    const isActive = cat === currentCategory;
    html += `<li${isActive ? ' class="current-menu-item"' : ''}>
      <a href="javascript:" onclick="switchCategory('${cat}')">${name}</a>
    </li>`;
  }
  ul.innerHTML = html;
}

// ===== 工具卡片渲染 =====
function renderTools() {
  const grid = document.getElementById('toolGrid');
  let filtered = toolsData;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(t => t.category === currentCategory);
  }

  if (currentSearch) {
    const term = currentSearch.toLowerCase();
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(term) ||
      t.desc.toLowerCase().includes(term)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">🤔 没有找到相关工具</div>';
    return;
  }

  // 构建卡片（完全 ai-bot.cn url-card 结构）
  grid.innerHTML = filtered.map(tool => `
    <div class="url-card col-6 col-sm-6 col-md-4 col-xl-3">
      <div class="url-body default">
        <a href="detail.html?id=${tool.id}" class="card no-c mb-4">
          <div class="card-body url-content d-flex align-items-center">
            <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center">
              ${tool.icon || '🤖'}
            </div>
            <div class="url-info flex-fill">
              <div class="text-sm overflowClip_1">
                <strong>${tool.name}</strong>
              </div>
              <p class="overflowClip_1 m-0 text-muted text-xs">${tool.desc}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `).join('');
}

// ===== 分类切换 =====
function switchCategory(category) {
  currentCategory = category;
  currentSearch = '';

  // 同步搜索框
  const searchInput = document.getElementById('search-text');
  if (searchInput) searchInput.value = '';

  // 更新分类标题
  const catBar = document.getElementById('catBarContainer');
  const catNameSpan = document.getElementById('catNameSpan');
  const catCountSpan = document.getElementById('catCountSpan');

  if (category === 'all') {
    catBar.style.display = 'none';
    document.querySelector('.header-big').style.display = 'block';
  } else {
    catBar.style.display = 'block';
    document.querySelector('.header-big').style.display = 'none';
    const counts = getCategoryCounts();
    const name = catNames[category] || category;
    catNameSpan.textContent = name;
    catCountSpan.textContent = `(收录 ${counts[category] || 0} 个工具)`;
  }

  renderSidebar();
  renderTopMenu();
  renderTools();
}

// ===== 搜索 =====
function doSearch() {
  const q = document.getElementById('search-text').value.trim();
  if (!q) return;
  currentSearch = q;
  currentCategory = 'all';

  document.querySelector('.header-big').style.display = 'none';
  document.getElementById('catBarContainer').style.display = 'block';
  document.getElementById('catNameSpan').textContent = `搜索: ${q}`;
  document.getElementById('catCountSpan').textContent = '';

  renderSidebar();
  renderTopMenu();
  renderTools();
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderTopMenu();
  renderTools();

  // 回车搜索
  document.getElementById('search-text').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
});
