var app = {
  currentFilter: 'all',
  currentSearch: '',

  init: function() {
    document.getElementById('toolCount').textContent = toolsData.length;
    this.renderCategories();
    this.renderTools();
    this.renderNewest();
  },

  filterByCategory: function(cat) {
    this.currentFilter = cat;
    this.currentSearch = '';
    document.getElementById('searchInput').value = '';
    var btns = document.querySelectorAll('.filter-btn');
    for(var i = 0; i < btns.length; i++) {
      var b = btns[i];
      b.classList.toggle('active', b.dataset.cat === cat);
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
    var cats = [
      { id: 'all', label: '全部分类' },
      { id: 'productivity', label: 'AI办公' },
      { id: 'conversation', label: '对话大模型' },
      { id: 'image', label: 'AI绘图' },
      { id: 'video', label: 'AI视频' },
      { id: 'audio', label: 'AI音乐' },
      { id: 'coding', label: 'AI编程' },
      { id: 'resource', label: '资源与社区' }
    ];
    var html = '';
    for(var i = 0; i < cats.length; i++) {
      var c = cats[i];
      var cls = c.id === 'all' ? 'filter-btn active' : 'filter-btn';
      html += '<button class="' + cls + '" data-cat="' + c.id + '" onclick="app.filterByCategory(\'' + c.id + '\')">' + c.label + '</button>';
    }
    bar.innerHTML = html;
  },

  renderTools: function() {
    var container = document.getElementById('toolsContainer');
    var filtered = [];
    for(var i = 0; i < toolsData.length; i++) {
      var t = toolsData[i];
      var matchCat = this.currentFilter === 'all' || t.category === this.currentFilter;
      var matchSearch = true;
      if(this.currentSearch) {
        matchSearch = t.name.toLowerCase().indexOf(this.currentSearch) >= 0 ||
          t.desc.toLowerCase().indexOf(this.currentSearch) >= 0;
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
      var tags = t.tags || [];
      var tagHtml = '';
      for(var j = 0; j < Math.min(3, tags.length); j++) {
        tagHtml += '<span class="card-tag">' + tags[j] + '</span>';
      }
      html += '<a class="tool-card" href="detail.html?id=' + t.id + '">';
      html += '<div class="card-icon">' + t.icon + '</div>';
      html += '<div class="card-body">';
      html += '<div class="card-title-row"><h3 class="card-title">' + t.name + '</h3><span class="card-badge">' + t.categoryLabel + '</span></div>';
      html += '<p class="card-desc">' + t.desc + '</p>';
      if(tagHtml) html += '<div class="card-tags">' + tagHtml + '</div>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  },

  renderNewest: function() {
    var container = document.getElementById('newestContainer');
    var start = Math.max(0, toolsData.length - 8);
    var html = '';
    for(var i = start; i < toolsData.length; i++) {
      var t = toolsData[i];
      html += '<a class="newest-item" href="detail.html?id=' + t.id + '">';
      html += '<span class="newest-icon">' + t.icon + '</span>';
      html += '<div class="newest-info"><div class="newest-name">' + t.name + '</div><div class="newest-cat">' + t.categoryLabel + '</div></div>';
      html += '</a>';
    }
    container.innerHTML = html;
  }
};

document.addEventListener('DOMContentLoaded', function() { app.init(); });