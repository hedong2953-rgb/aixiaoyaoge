var app = {
  currentFilter: 'all',
  currentSearch: '',

  allCategories: [
    { id: 'all', label: '全部热门', title: '🔥 全部热门', subtitle: '当下最热门的AI工具精选' },
    { id: 'conversation', label: 'AI聊天', title: '💬 AI聊天助手', subtitle: '对话大模型、AI助手' },
    { id: 'image', label: 'AI绘图', title: '🎨 AI绘图工具', subtitle: 'AI绘画、图像生成、图片编辑' },
    { id: 'writing', label: 'AI写作', title: '✍️ AI写作工具', subtitle: 'AI写作助手、内容创作、论文辅助' },
    { id: 'video', label: 'AI视频', title: '🎬 AI视频工具', subtitle: 'AI视频生成、数字人、视频编辑' },
    { id: 'productivity', label: 'AI办公', title: '📊 AI办公工具', subtitle: 'AI PPT、数据分析、文档处理' },
    { id: 'coding', label: 'AI编程', title: '💻 AI编程工具', subtitle: 'AI IDE、代码助手、开发工具' },
    { id: 'design', label: 'AI设计', title: '🎯 AI设计工具', subtitle: 'AI设计平台、UI/UX、原型工具' },
    { id: 'learning', label: 'AI教程', title: '📚 AI教程资源', subtitle: 'AI课程、教程、学习资源' },
    { id: 'resource', label: 'AI社区', title: '🌐 AI社区', subtitle: 'AI社区、资源汇总、工具导航' }
  ],

  init: function() {
    document.getElementById('toolCountHeader').textContent = toolsData.length;
    // Bind sidebar clicks
    var links = document.querySelectorAll('#sidebarNav a[data-cat]');
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function(e) {
        app.filterFromSidebar(this.dataset.cat);
        return false;
      };
    }
    this.renderTools();
  },

  filterFromSidebar: function(cat) {
    this.currentFilter = cat;
    this.currentSearch = '';
    var inp = document.getElementById('searchInput');
    if (inp) inp.value = '';

    // Update sidebar active state
    var links = document.querySelectorAll('#sidebarNav a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('active', links[i].dataset.cat === cat);
    }

    // Update section title
    var info = null;
    for (var i = 0; i < this.allCategories.length; i++) {
      if (this.allCategories[i].id === cat) { info = this.allCategories[i]; break; }
    }
    if (info) {
      document.getElementById('sectionTitle').textContent = info.title;
      document.getElementById('sectionSubtitle').textContent = info.subtitle;
    }

    this.renderTools();
    return false; // prevent link navigation
  },

  filterTools: function() {
    this.currentSearch = (document.getElementById('searchInput').value || '').trim().toLowerCase();
    this.renderTools();
  },

  renderTools: function() {
    var container = document.getElementById('toolsContainer');
    if (!container) return;

    var search = this.currentSearch;
    var filtered = [];

    for (var i = 0; i < toolsData.length; i++) {
      var t = toolsData[i];
      var matchCat = this.currentFilter === 'all' || t.category === this.currentFilter;
      if (!matchCat) continue;

      var matchSearch = true;
      if (search) {
        matchSearch = t.name.toLowerCase().indexOf(search) >= 0 ||
          t.desc.toLowerCase().indexOf(search) >= 0 ||
          (t.categoryLabel && t.categoryLabel.toLowerCase().indexOf(search) >= 0);
      }
      if (matchSearch) filtered.push(t);
    }

    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state">没有找到对应的工具，试试换个关键词搜索</div>';
      return;
    }

    // 首页"全部"模式只显示87个+1个更多资源卡片 = 88个（22行×4列）
    var displayList = filtered;
    if (!search && this.currentFilter === 'all') {
      displayList = filtered.slice(0, 88);
    }

    var html = '';
    for (var i = 0; i < displayList.length; i++) {
      // 第88个替换为"更多资源"卡片
      if (!search && this.currentFilter === 'all' && i === 87) {
        html += '<a class="tool-card more-resource-card" href="/categories.html">';
        html += '<div class="card-icon" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;font-size:20px">📂</div>';
        html += '<div class="card-body">';
        html += '<div class="card-title-row"><span class="card-title" style="color:#667eea">更多资源</span><span class="card-badge" style="background:#667eea;color:#fff">点击查看全部</span></div>';
        html += '<p class="card-desc">浏览全部1526+款AI工具</p>';
        html += '</div></a>';
        continue;
      }
      var t = displayList[i];
      html += '<a class="tool-card" href="' + (t.url || '#') + '" target="_blank">';
      html += '<div class="card-icon">' + (t.icon || '🛠️') + '</div>';
      html += '<div class="card-body">';
      html += '<div class="card-title-row"><span class="card-title">' + t.name + '</span><span class="card-badge">' + t.categoryLabel + '</span></div>';
      html += '<p class="card-desc">' + (t.desc || 'AI工具') + '</p>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  }
};

document.addEventListener('DOMContentLoaded', function() { app.init(); });
