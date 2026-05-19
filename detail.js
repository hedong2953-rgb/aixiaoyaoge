// ===== AI工具大全 - 详情页 =====

const catNames = {
  all: '全部工具', conversation: '💬 AI对话助手', chatbot: '🤖 AI聊天机器人',
  writing: '✍️ AI写作工具', image: '🎨 AI图像工具', video: '🎬 AI视频工具',
  audio: '🎵 AI音频工具', design: '🖌️ AI设计工具', office: '📊 AI办公工具',
  programming: '💻 AI编程工具', coding: '⌨️ AI编程IDE', agent: '🧠 AI智能体',
  search: '🔍 AI搜索引擎', framework: '⚙️ AI开发平台', models: '🧬 AI训练模型',
  detection: '✅ AI内容检测', learning: '📚 AI学习网站', prompt: '📝 AI提示指令',
  resource: '🤗 AI资源社区', productivity: '⚡ AI效率工具',
};

function getTool() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return toolsData.find(t => t.id == id);
}

function renderSidebar() {
  const ul = document.getElementById('sidebarUl');
  if (!ul) return;
  const counts = {};
  for (const t of toolsData) counts[t.category] = (counts[t.category] || 0) + 1;
  const catOrder = ['conversation','chatbot','writing','image','video','audio',
    'design','office','programming','coding','agent','search','framework',
    'models','detection','learning','prompt','resource','productivity'];
  const catIconsFA = {
    conversation:'fa-comments', chatbot:'fa-robot', writing:'fa-feather',
    image:'fa-images', video:'fa-video', audio:'fa-music', design:'fa-palette',
    office:'fa-folder-open', programming:'fa-code', coding:'fa-laptop-code',
    agent:'fa-brain', search:'fa-search', framework:'fa-cubes',
    models:'fa-microchip', detection:'fa-shield-alt', learning:'fa-graduation-cap',
    prompt:'fa-lightbulb', resource:'fa-hubspot', productivity:'fa-bolt',
  };
  let html = '';
  for (const cat of catOrder) {
    if (!counts[cat] || counts[cat] === 0) continue;
    const name = catNames[cat] ? catNames[cat].replace(/^[^\s]+\s/,'') : cat;
    const icon = catIconsFA[cat] || 'fa-circle';
    html += `<li class="sidebar-item"><a href="/"><i class="fas ${icon} icon-fw icon-lg"></i><span>${name}</span><span class="badge">${counts[cat]}</span></a></li>`;
  }
  ul.innerHTML = html;
}

function renderDetail() {
  const tool = getTool();
  const container = document.getElementById('detailContainer');
  if (!tool) {
    container.innerHTML = `<div style="text-align:center;padding:80px 20px;color:#999">工具未找到</div>`;
    return;
  }

  const label = catNames[tool.category] || tool.categoryLabel || tool.category;
  const detail = tool.detail || {};
  const features = detail.features || [];
  const tags = detail.tags || [];
  const pricing = detail.pricing || '';

  let html = `<a href="/" class="back-link"><i class="fas fa-arrow-left"></i> 返回首页</a>
    <div class="detail-card">
      <div class="detail-head">
        <div class="d-icon">${tool.icon || '🤖'}</div>
        <div class="d-title">
          <h1>${tool.name}</h1>
          <span class="badge">${label}</span>
          ${tool.url ? `<a href="${tool.url}" target="_blank" style="margin-left:10px;font-size:13px;color:#5961f9">访问官网 <i class="fas fa-external-link-alt" style="font-size:11px"></i></a>` : ''}
        </div>
      </div>
      <div class="detail-body">
        <div class="section">
          <h2>工具简介</h2>
          <p>${tool.desc || '暂无详细介绍'}</p>
        </div>`;

  if (features.length > 0) {
    html += `<div class="section">
      <h2>功能特点</h2>
      <ul class="feature-list">`;
    features.forEach(f => { html += `<li>${f}</li>`; });
    html += `</ul></div>`;
  }

  if (tags.length > 0) {
    html += `<div class="section">
      <h2>相关标签</h2>
      <div class="tag-list">`;
    tags.forEach(t => { html += `<span class="tag">${t}</span>`; });
    html += `</div></div>`;
  }

  if (pricing) {
    html += `<div class="section">
      <h2>价格信息</h2>
      <div class="pricing-box">${pricing}</div>
    </div>`;
  }

  if (tool.url) {
    html += `<div class="section">
      <a href="${tool.url}" target="_blank" class="visit-btn">
        <i class="fas fa-external-link-alt"></i> 访问官网
      </a>
    </div>`;
  }

  html += `</div></div>`;
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderDetail();
});
