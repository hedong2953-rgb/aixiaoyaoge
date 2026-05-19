var app = {
  currentFilter: 'all',
  currentSearch: '',

  allCategories: [
    { id: 'all', label: '全部分类', title: '🔥 全部分类', subtitle: '浏览全部AI工具' },
    { id: 'writing', label: 'AI写作', title: '✍️ AI写作工具', subtitle: 'AI写作助手、内容创作、论文辅助' },
    { id: 'image', label: 'AI图像', title: '🎨 AI图像工具', subtitle: 'AI绘画、图像生成、图片编辑' },
    { id: 'video', label: 'AI视频', title: '🎬 AI视频工具', subtitle: 'AI视频生成、数字人、视频编辑' },
    { id: 'productivity', label: 'AI办公', title: '📊 AI办公工具', subtitle: 'AI PPT、数据分析、文档处理' },
    { id: 'agent', label: 'AI智能体', title: '🤖 AI智能体', subtitle: 'AI Agent、自动化工作流' },
    { id: 'conversation', label: 'AI聊天', title: '💬 AI聊天助手', subtitle: '对话大模型、AI助手' },
    { id: 'coding', label: 'AI编程', title: '💻 AI编程工具', subtitle: 'AI IDE、代码助手、开发工具' },
    { id: 'design', label: 'AI设计', title: '🎯 AI设计工具', subtitle: 'AI设计平台、UI/UX、原型工具' },
    { id: 'audio', label: 'AI音频', title: '🎵 AI音频工具', subtitle: 'AI音乐、语音合成、配音工具' },
    { id: 'search', label: 'AI搜索', title: '🔍 AI搜索引擎', subtitle: 'AI搜索、学术搜索、知识检索' },
    { id: 'platform', label: 'AI开发', title: '⚙️ AI开发平台', subtitle: 'AI框架、模型平台、API服务' },
    { id: 'learning', label: 'AI学习', title: '📚 AI学习网站', subtitle: 'AI课程、教程、学习资源' },
    { id: 'model', label: 'AI模型', title: '🧠 AI训练模型', subtitle: '大模型、开源模型、模型评测' },
    { id: 'detect', label: 'AI检测', title: '🔬 AI内容检测', subtitle: 'AI文本检测、图像检测、原创度' },
    { id: 'prompt', label: 'AI提示词', title: '💡 AI提示指令', subtitle: '提示词工具、Prompt工程' },
    { id: 'side-project', label: 'AI副业', title: '💼 AI副业工具', subtitle: '内容变现、自媒体、联盟营销' },
    { id: 'resource', label: 'AI社区', title: '🌐 资源与社区', subtitle: 'AI社区、资源汇总、工具导航' }
  ],

  init: function() {
    document.getElementById('toolCountHeader').textContent = toolsData.length;
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
