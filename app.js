var app = {
  currentFilter: 'all',
  currentSearch: '',

  // 热门分类（主业展示的）
  hotCategories: ['conversation','image','writing','video','productivity','coding','design','search'],

  // 全部分类
  allCategories: [
    { id: 'all', label: '全部分类' },
    { id: 'writing', label: 'AI写作' },
    { id: 'image', label: 'AI绘图' },
    { id: 'video', label: 'AI视频' },
    { id: 'productivity', label: 'AI办公' },
    { id: 'agent', label: 'AI智能体' },
    { id: 'conversation', label: '对话大模型' },
    { id: 'coding', label: 'AI编程' },
    { id: 'design', label: 'AI设计' },
    { id: 'audio', label: 'AI音乐/音频' },
    { id: 'search', label: 'AI搜索' },
    { id: 'platform', label: 'AI开发' },
    { id: 'learning', label: 'AI学习' },
    { id: 'model', label: 'AI模型' },
    { id: 'detect', label: 'AI检测' },
    { id: 'prompt', label: 'AI提示词' },
    { id: 'side-project', label: 'AI副业' },
    { id: 'resource', label: '资源与社区' }
  ],

  init: function() {
    // Update tool counts
    document.getElementById('toolCountHeader').textContent = toolsData.length;
    var footerCount = document.getElementById('toolCountFooter');
    if (footerCount) footerCount.textContent = toolsData.length;

    this.renderFullCategories();
    this.renderTools();
  },

  filterByCategory: function(cat) {
    this.currentFilter = cat;
    this.currentSearch = '';
    var inp = document.getElementById('searchInput');
    if (inp) inp.value = '';

    // Update all filter buttons
    var btns = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].dataset.cat === cat);
    }
    this.renderTools();
  },

  filterTools: function() {
    this.currentSearch = (document.getElementById('searchInput').value || '').trim().toLowerCase();
    this.renderTools();
  },

  renderFullCategories: function() {
    var bar = document.getElementById('fullFilterBar');
    if (!bar) return;
    var html = '';
    for (var i = 0; i < this.allCategories.length; i++) {
      var c = this.allCategories[i];
      html += '<button class="filter-btn' + (c.id === 'all' ? '' : '') + '" data-cat="' + c.id + '" onclick="app.filterByCategory(\'' + c.id + '\')">' + c.label + '</button>';
    }
    bar.innerHTML = html;
  },

  renderTools: function() {
    var container = document.getElementById('toolsContainer');
    if (!container) return;

    var search = this.currentSearch;
    var filtered = [];
    var isHotMode = this.hotCategories.indexOf(this.currentFilter) >= 0 || this.currentFilter === 'all';

    for (var i = 0; i < toolsData.length; i++) {
      var t = toolsData[i];
      // If in hot mode, only show hot categories
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

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var t = filtered[i];
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
