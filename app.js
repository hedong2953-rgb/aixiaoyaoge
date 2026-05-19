// app.js - 修复版
var app = {
  currentFilter: 'all',
  currentSearch: '',

  init: function() {
    this.renderCategories();
    this.renderTools();
  },

  filterByCategory: function(cat) {
    this.currentFilter = cat;
    this.currentSearch = '';
    document.getElementById('searchInput').value = '';
    var btns = document.querySelectorAll('.filter-btn');
    for(var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].dataset.cat === cat);
    }
    this.renderTools();
  },

  filterTools: function() {
    this.currentSearch = document.getElementById('searchInput').value.trim().toLowerCase();
    this.renderTools();
  },

  renderCategories: function() {
    var bar = document.getElementById('filterBar');
    var html = '';
    for(var i = 0; i < this.categoryDefs.length; i++) {
      var c = this.categoryDefs[i];
      html += '<button class="filter-btn' + (c.id === 'all' ? ' active' : '') + '" data-cat="' + c.id + '" onclick="app.filterByCategory(\'' + c.id + '\')">' + c.label + '</button>';
    }
    bar.innerHTML = html;
  },

  categoryDefs: [
    { id: 'all', label: '全部分类' },
    { id: 'writing', label: 'AI写作' },
    { id: 'image', label: 'AI图像' },
    { id: 'video', label: 'AI视频' },
    { id: 'productivity', label: 'AI办公' },
    { id: 'agent', label: 'AI智能体' },
    { id: 'conversation', label: 'AI聊天' },
    { id: 'coding', label: 'AI编程' },
    { id: 'design', label: 'AI设计' },
    { id: 'audio', label: 'AI音频' },
    { id: 'search', label: 'AI搜索' },
    { id: 'platform', label: 'AI开发' },
    { id: 'learning', label: 'AI学习' },
    { id: 'model', label: 'AI模型' },
    { id: 'detect', label: 'AI检测' },
    { id: 'prompt', label: 'AI提示' },
    { id: 'side-project', label: 'AI副业' },
    { id: 'resource', label: '资源' }
  ],

  renderTools: function() {
    var container = document.getElementById('toolsContainer');
    var search = this.currentSearch;
    var filtered = [];

    for(var i = 0; i < toolsData.length; i++) {
      var t = toolsData[i];
      var matchCat = this.currentFilter === 'all' || t.category === this.currentFilter;
      var matchSearch = true;
      if(search) {
        matchSearch = t.name.toLowerCase().indexOf(search) >= 0 ||
          t.desc.toLowerCase().indexOf(search) >= 0;
      }
      if(matchCat && matchSearch) filtered.push(t);
    }

    if(filtered.length === 0) {
      container.innerHTML = '<div class="empty-state">没有找到对应的工具</div>';
      return;
    }

    var html = '';
    for(var i = 0; i < filtered.length; i++) {
      var t = filtered[i];
      html += '<a class="tool-card" href="' + (t.url || '#') + '" target="_blank">';
      html += '<div class="card-icon">' + t.icon + '</div>';
      html += '<div class="card-body">';
      html += '<div class="card-title-row"><span class="card-title">' + t.name + '</span><span class="card-badge">' + t.categoryLabel + '</span></div>';
      html += '<p class="card-desc">' + t.desc + '</p>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  }
};

document.addEventListener('DOMContentLoaded', function() { app.init(); });
