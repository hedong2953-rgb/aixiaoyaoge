// ===== AI工具大全 - 详情页 =====

// 根据工具名+分类智能生成功能特点
function generateFeatures(tool, categoryLabel) {
  const name = tool.name || '';
  const cat = categoryLabel || '';
  const desc = tool.desc || '';
  
  // 基于分类生成通用feature
  const templates = {
    'AI聊天助手': [
      `${name}支持多轮自然语言对话，上下文理解能力强`,
      `可回答各类知识性问题，涵盖科技、文化、生活等领域`,
      `支持文件上传与内容分析，包括PDF、Word等格式`,
      `提供个性化对话体验，可调整回答风格与语气`,
      `支持联网搜索，获取实时信息与最新资讯`
    ],
    'AI写作工具': [
      `${name}支持多种文体创作，包括文章、报告、邮件、文案等`,
      `内置海量写作模板，快速上手各类写作场景`,
      `支持AI续写、扩写、改写、润色等编辑功能`,
      `可一键生成标题、摘要、大纲等内容结构`,
      `支持多语言写作，满足国际化内容创作需求`
    ],
    'AI图像工具': [
      `支持文本描述生成高质量图片，支持多种艺术风格`,
      `提供AI图片编辑功能，包括背景移除、物体抹除、无损放大`,
      `支持图片优化与修复，提升图片清晰度与质感`,
      `内置丰富的图片滤镜与效果，一键应用`,
      `支持批量处理，大幅提高工作效率`
    ],
    'AI视频工具': [
      `支持AI视频生成，文本/图片一键转视频`,
      `提供AI数字人视频创作，支持语音驱动口型同步`,
      `内置丰富的视频模板和特效`,
      `支持视频自动剪辑、字幕生成、智能转场`,
      `输出高清视频，支持多种分辨率和格式`
    ],
    'AI办公工具': [
      `一键AI生成PPT，自动排版与美化`,
      `支持智能表格处理与数据分析`,
      `AI辅助文档撰写、翻译、总结`,
      `提供思维导图自动生成功能`,
      `支持会议纪要自动生成与重点提取`
    ],
    'AI编程工具': [
      `AI代码补全与智能提示，提升编码效率`,
      `支持多种编程语言，包括Python、JavaScript、Java等`,
      `代码自动生成，根据自然语言描述生成功能代码`,
      `代码审查与Bug检测，提高代码质量`,
      `支持代码翻译与重构，轻松迁移项目`
    ],
    'AI设计工具': [
      `AI一键生成UI/UX设计稿`,
      `支持智能配色与排版建议`,
      `提供海量设计模板与素材库`,
      `AI抠图、图片编辑、批量处理`,
      `支持团队协作与实时预览`
    ],
    'AI音频工具': [
      `高质量AI文本转语音，支持多种声音和语言`,
      `AI音乐生成，支持多种风格和乐器`,
      `音频转文字，精准识别多种语言`,
      `支持声音克隆与定制化语音合成`,
      `批量音频处理，提高制作效率`
    ],
    'AI搜索引擎': [
      `AI驱动的智能搜索，精准理解用户意图`,
      `无广告纯净搜索体验，直达结果`,
      `支持多轮对话式搜索，深度挖掘信息`,
      `搜索结果智能聚合与摘要生成`,
      `支持学术、新闻、代码等多领域垂直搜索`
    ],
    'AI智能体': [
      `自主规划与执行复杂任务，无需人工干预`,
      `支持工具调用和API集成，扩展能力强`,
      `多Agent协作，分工处理复杂工作流`,
      `可自定义知识库与行为规则`,
      `支持本地部署，保障数据安全`
    ],
    'AI开发平台': [
      `提供一站式大模型API调用服务`,
      `支持模型训练、微调与部署`,
      `内置丰富的AI模型，覆盖文本、图像、语音等`,
      `提供可视化工作流编辑器，低代码构建AI应用`,
      `支持云端GPU资源调度，弹性扩展`
    ],
    'AI学习网站': [
      `提供系统的AI与机器学习课程体系`,
      `支持在线编程实践与项目实战`,
      `涵盖深度学习、自然语言处理、计算机视觉等方向`,
      `提供权威的AI学习资源与教材推荐`,
      `社区互动，与全球AI学习者交流进步`
    ]
  };
  
  return templates[cat] || [
    `${name}功能专业稳定，持续更新迭代`,
    `用户界面友好，操作简单易上手`,
    `提供免费试用，降低使用门槛`,
    `支持多平台使用，Web/桌面/移动端`,
    `数据安全保障，用户隐私优先`
  ];
}

// 获取URL参数
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// 分类信息映射（从 app.js 同步）
const catInfo = {
  'chatbot': { label: 'AI聊天助手', icon: 'fa-comments' },
  'writing': { label: 'AI写作工具', icon: 'fa-feather' },
  'image': { label: 'AI图像工具', icon: 'fa-images' },
  'video': { label: 'AI视频工具', icon: 'fa-video' },
  'audio': { label: 'AI音频工具', icon: 'fa-music' },
  'design': { label: 'AI设计工具', icon: 'fa-palette' },
  'office': { label: 'AI办公工具', icon: 'fa-folder-open' },
  'programming': { label: 'AI编程工具', icon: 'fa-code' },
  'developer': { label: 'AI开发平台', icon: 'fa-laptop-code' },
  'agent': { label: 'AI智能体', icon: 'fa-brain' },
  'search': { label: 'AI搜索引擎', icon: 'fa-search' },
  'framework': { label: 'AI开发平台', icon: 'fa-cubes' },
  'models': { label: 'AI训练模型', icon: 'fa-microchip' },
  'detection': { label: 'AI内容检测', icon: 'fa-shield-alt' },
  'learning': { label: 'AI学习网站', icon: 'fa-graduation-cap' },
  'prompt': { label: 'AI提示指令', icon: 'fa-lightbulb' },
  'sideline': { label: 'AI副业工具', icon: 'fa-bolt' },
  'benchmark': { label: 'AI模型评测', icon: 'fa-chart-bar' }
};

// 获取分类标签颜色
function getCatColor(category) {
  const colors = {
    'chatbot': '#5961f9',
    'writing': '#f95959',
    'image': '#f9a859',
    'video': '#59c7f9',
    'audio': '#a859f9',
    'design': '#f959b8',
    'office': '#59f9a8',
    'programming': '#5961f9',
    'agent': '#f9d959',
    'search': '#59f9f9',
  };
  return colors[category] || '#5961f9';
}

// 渲染侧边栏
function renderSidebar() {
  const ul = document.getElementById('sidebarUl');
  if (!ul) return;
  
  const catKeys = [
    'writing', 'image', 'video', 'audio', 'design', 'office',
    'chatbot', 'agent', 'programming', 'developer', 'search',
    'framework', 'models', 'detection', 'learning', 'prompt',
    'sideline', 'benchmark'
  ];
  
  ul.innerHTML = catKeys.map(key => {
    const info = catInfo[key];
    if (!info) return '';
    return `
      <li class="sidebar-item">
        <a href="index.html?cat=${key}">
          <i class="fas ${info.icon} icon-fw icon-lg"></i>
          <span>${info.label}</span>
        </a>
      </li>
    `;
  }).join('');
}

// 渲染详情页面
function renderPage() {
  const id = getQueryParam('id');
  
  renderSidebar();
  
  if (!id || !toolsData) {
    document.getElementById('toolName').textContent = '工具未找到';
    document.getElementById('toolDetail').innerHTML = '<div class="text-center py-5 text-muted"><i class="fas fa-exclamation-triangle fa-2x mb-3"></i><p>未找到该工具信息</p><a href="index.html" class="btn btn-arrow mt-3">返回首页</a></div>';
    return;
  }
  
  const tool = typeof id === 'string'
    ? toolsData.find(t => String(t.id) === id || t.id === parseInt(id))
    : toolsData.find(t => t.id === id);
  if (!tool) {
    document.getElementById('toolName').textContent = '工具未找到';
    document.getElementById('toolDetail').innerHTML = '<div class="text-center py-5 text-muted"><p>未找到该工具</p><a href="index.html" class="btn btn-arrow mt-3">返回首页</a></div>';
    return;
  }
  
  const cat = tool.category || 'chatbot';
  const catLabel = tool.categoryLabel || catInfo[cat]?.label || 'AI工具';
  const color = getCatColor(cat);
  
  // 更新页面标题和描述
  document.title = `${tool.name} - ${catLabel} | AI工具大全`;
  document.getElementById('pageDesc').content = `${tool.name} - ${tool.desc}。AI工具大全收录的${catLabel}工具。`;
  
  // 工具基本信息
  document.getElementById('toolName').textContent = tool.name;
  document.getElementById('toolIcon').textContent = tool.icon || '🤖';
  document.getElementById('toolCategory').textContent = catLabel;
  document.getElementById('toolCategory').style.background = color;
  document.getElementById('toolDesc').textContent = tool.desc;
  
  // 价格
  const pricing = tool.detail?.pricing || (['chatbot','search','learning'].includes(cat) ? '免费' : '免费 / 付费');
  document.getElementById('toolPricing').textContent = pricing;
  document.getElementById('toolPricing').style.background = color;
  
  // 标签
  const tags = tool.detail?.tags || [catLabel];
  document.getElementById('toolTags').innerHTML = tags.map(t => `<span class="tag-item">${t}</span>`).join('');
  
  // 链接
  const urlEl = document.getElementById('toolUrl');
  if (tool.url) {
    urlEl.href = tool.url;
    urlEl.innerHTML = `<span>访问官网 <i class="iconfont icon-arrow-r-m"></i></span>`;
  } else {
    urlEl.innerHTML = `<span>暂无官网链接</span>`;
  }
  
  // 详细内容
  const features = tool.detail?.features?.length ? tool.detail.features : generateFeatures(tool, catLabel);
  const introText = tool.detail?.intro || tool.desc || `${tool.name}是一款优秀的${catLabel}工具`;
  
  document.getElementById('toolDetail').innerHTML = `
    <h2>${tool.name}是什么</h2>
    <p>${introText}。${catLabel}领域的创新工具，为用户提供高效便捷的服务体验。</p>
    
    <h2>${tool.name}的功能特点</h2>
    <div class="mb-3">
      ${features.map(f => `<span class="feature-badge"><i class="fas fa-check-circle mr-1"></i>${f}</span>`).join('')}
    </div>
    <ul class="text-md">
      ${features.map(f => `<li><strong>${f.split('，')[0]}</strong>：${f.split('，').slice(1).join('，') || '提供专业高效的服务，满足用户多样化的需求'}</li>`).join('')}
    </ul>
    
    <h2>如何使用${tool.name}</h2>
    <ol class="text-md">
      <li>访问 ${tool.name} 的官网（<a href="${tool.url || '#'}" target="_blank">${tool.name}</a>），注册或登录账号</li>
      <li>根据指引选择所需功能模块，开始使用 AI 服务</li>
      <li>输入需求或上传文件，AI 将自动处理并返回结果</li>
      <li>根据需要调整参数，优化输出效果</li>
    </ol>
    
    <h2>产品特点</h2>
    <ul class="text-md">
      <li><strong>简单易用</strong>：清晰的操作界面，零门槛上手</li>
      <li><strong>功能强大</strong>：覆盖多种应用场景，满足不同需求</li>
      <li><strong>持续更新</strong>：紧跟AI技术发展，持续迭代优化</li>
      <li><strong>安全可靠</strong>：数据加密传输，保护用户隐私</li>
    </ul>
  `;
  
  // 类似工具推荐（同分类）
  const similar = toolsData.filter(t => t.id !== id && t.category === cat).slice(0, 8);
  const similarContainer = document.getElementById('similarTools');
  
  if (similar.length > 0) {
    similarContainer.innerHTML = similar.map(t => `
      <div class="url-card col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="url-body default">
          <a href="detail.html?id=${t.id}" class="card no-c mb-4">
            <div class="card-body url-content d-flex align-items-center">
              <div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center" style="font-size:24px">
                ${t.icon || '🤖'}
              </div>
              <div class="url-info flex-fill">
                <div class="text-sm overflowClip_1"><strong>${t.name}</strong></div>
                <p class="overflowClip_1 m-0 text-muted text-xs">${t.desc}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    `).join('');
  } else {
    similarContainer.innerHTML = '<div class="col-12 text-center text-muted py-3">暂无更多类似工具推荐</div>';
  }
}

// 页面加载
document.addEventListener('DOMContentLoaded', renderPage);
