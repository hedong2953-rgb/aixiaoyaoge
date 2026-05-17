var app = {
  currentFilter: 'all',
  currentSearch: '',
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

  init: function() {
    document.getElementById('toolCount').textContent = toolsData.length;
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
    var input = document.getElementById('searchInput');
    this.currentSearch = input.value.trim().toLowerCase();
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

  renderTools: function() {
    var container = document.getElementById('categorySections');
    var search = this.currentSearch;

    // 分组
    var groups = {};
    for(var i = 0; i < toolsData.length; i++) {
      var t = toolsData[i];
      if(!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    }

    // 分类顺序
    var catOrder = [];
    for(var i = 0; i < this.categoryDefs.length; i++) {
      if(this.categoryDefs[i].id !== 'all') catOrder.push(this.categoryDefs[i].id);
    }

    var html = '';
    var count = 0;

    for(var ci = 0; ci < catOrder.length; ci++) {
      var catId = catOrder[ci];
      var tools = groups[catId];
      if(!tools) continue;

      // 筛选
      var filtered = [];
      for(var i = 0; i < tools.length; i++) {
        var t = tools[i];
        var matchCat = this.currentFilter === 'all' || t.category === this.currentFilter;
        var matchSearch = true;
        if(search) {
          matchSearch = t.name.toLowerCase().indexOf(search) >= 0 || t.desc.toLowerCase().indexOf(search) >= 0;
        }
        if(matchCat && matchSearch) filtered.push(t);
      }
      if(filtered.length === 0) continue;
      count += filtered.length;

      var label = catId;
      for(var d = 0; d < this.categoryDefs.length; d++) {
        if(this.categoryDefs[d].id === catId) { label = this.categoryDefs[d].label; break; }
      }

      html += '<div class="cat-section">';
      html += '<div class="cat-section-header"><span class="cat-section-title">' + label + '</span><a class="cat-section-more" href="https://ai-bot.cn/favorites/ai-' + catId + '-tools/" target="_blank">查看更多 &gt;&gt;</a></div>';
      html += '<div class="tools-grid">';
      var maxShow = (this.currentFilter !== 'all' || search) ? filtered.length : 6;
      var shown = 0;
      for(var i = 0; i < filtered.length && shown < maxShow; i++) {
        var t = filtered[i];
        shown++;
        html += '<a class="tool-card" href="' + (t.url || '#') + '" target="_blank">';
        html += '<div class="card-icon">' + t.icon + '</div>';
        html += '<div class="card-body">';
        html += '<div class="card-title">' + t.name + '</div>';
        html += '<div class="card-desc">' + t.desc + '</div>';
        html += '</div></a>';
      }
      html += '</div></div>';
    }

    if(count === 0) {
      html = '<div class="empty-state">没有找到对应的工具</div>';
    }

    container.innerHTML = html;
  }
};

document.addEventListener('DOMContentLoaded', function() { app.init(); });
