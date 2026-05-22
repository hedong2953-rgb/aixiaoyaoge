// ===== AI工具大全 - 完全复刻 ai-bot.cn 布局 =====
let C = "all", S = "";
const FEATURE_COUNT = 8; // 热区显示的卡片数

// 图标映射
const I = {
  conversation:"fa-comments", chatbot:"fa-robot", writing:"fa-feather",
  image:"fa-images", video:"fa-video", audio:"fa-music",
  design:"fa-palette", office:"fa-folder-open", programming:"fa-code",
  coding:"fa-laptop-code", agent:"fa-brain", search:"fa-search",
  framework:"fa-cubes", models:"fa-microchip", detection:"fa-shield-alt",
  learning:"fa-graduation-cap", prompt:"fa-lightbulb",
  resource:"fa-hubspot", productivity:"fa-bolt"
};

// 分类名称
const N = {
  all:"全部工具", conversation:"AI对话助手", chatbot:"AI聊天机器人",
  writing:"AI写作工具", image:"AI图像工具", video:"AI视频工具",
  audio:"AI音频工具", design:"AI设计工具", office:"AI办公工具",
  programming:"AI编程工具", coding:"AI编程IDE", agent:"AI智能体",
  search:"AI搜索引擎", framework:"AI开发平台", models:"AI训练模型",
  detection:"AI内容检测", learning:"AI学习网站", prompt:"AI提示指令",
  resource:"AI资源社区", productivity:"AI效率工具"
};

// 分类顺序
const O = [
  "conversation","chatbot","writing","image","video","audio",
  "design","office","programming","coding","agent","search",
  "framework","models","detection","learning","prompt","resource","productivity"
];

// 子分类 (用于侧边栏和分类tab)
const Sub = {
  image: ["常用AI图像工具","AI图片插画生成","AI图片背景移除","AI图片物体抹除","AI图片无损放大","AI图片优化修复","AI商品图生成","AI 3D模型生成"],
  office: ["AI幻灯片和演示","AI表格数据处理","AI思维导图","AI文档工具","AI会议工具","AI招聘求职","AI法律助手","AI语言翻译","AI效率提升"],
  agent: ["AI智能体","插件与Skills"],
  detection: ["内容检测","降AI/AIGC率"]
};

const MAX = 12; // 首页每个分类显示的工具数

// ===== 计数 =====
function Cnt() {
  const c = { all: toolsData.length };
  for (const t of toolsData) c[t.category] = (c[t.category] || 0) + 1;
  return c;
}

// ===== 按分类取工具 =====
function ByCat(cat, limit, subcat) {
  let f = toolsData.filter(t => t.category === cat);
  if (subcat && subcat !== "all") {
    f = f.filter(t => t.detail && t.detail.tags && t.detail.tags.some(tg => tg.includes(subcat)));
  }
  return limit ? f.slice(0, limit) : f;
}

// ===== 侧边栏 =====
function side() {
  const ul = document.getElementById("sidebarUl");
  if (!ul) return;
  let h = '<li class="sidebar-item' + (C === "all" ? " active" : "") + '"><a href="javascript:" onclick="sw(\'all\')"><i class="fas fa-th-large icon-fw icon-lg"></i><span>全部工具</span></a></li>';
  const cnt = Cnt();
  for (const cat of O) {
    if (!cnt[cat] || cnt[cat] === 0) continue;
    const n = N[cat] || cat, icon = I[cat] || "fa-circle";
    const has = Sub[cat] !== undefined;
    h += '<li class="sidebar-item' + (cat === C ? " active" : "") + '"><a href="javascript:" onclick="sw(\'' + cat + '\')"><i class="fas ' + icon + ' icon-fw icon-lg"></i><span>' + n + '</span></a>';
    if (has) {
      h += '<i class="iconfont icon-arrow-r-m sidebar-more text-sm" onclick="tog(this)"></i><ul>';
      for (const s of Sub[cat]) h += '<li><a href="javascript:" onclick="swSub(\'' + cat + '\',\'' + s + '\')"><span>' + s + '</span></a></li>';
      h += '</ul>';
    }
    h += '</li>';
  }
  ul.innerHTML = h;
}

function tog(e) {
  e.classList.toggle("open");
  const u = e.parentElement.querySelector("ul");
  if (u) u.classList.toggle("show");
}

// 子分类点击
function swSub(cat, sub) {
  C = cat;
  S = "";
  document.getElementById("search-text").value = "";
  hb.style.display = "none";
  cc.style.display = "";
  hc.style.display = "none";
  tc.style.display = "";
  const cnt = Cnt();
  cs.textContent = N[cat] || cat;
  ct.textContent = "(收录 " + cnt[cat] + " 个工具)";
  cg.style.display = "";
  side();
  grid();
}

// ===== 计算热门工具 (取全量数据中热度高的) =====
function getHotTools(limit) {
  // 简单策略：取toolsData前 limit 个作为"热门"
  // 实际可以用随机种子或排序
  let arr = [...toolsData];
  // 用简单的名字hash做"热度"排序
  arr.sort((a,b) => {
    const ha = a.name.length + (a.desc ? a.desc.length : 0);
    const hb = b.name.length + (b.desc ? b.desc.length : 0);
    return hb - ha;
  });
  return arr.slice(0, limit);
}

function getNewTools(limit) {
  // "最新收录"：取数据末尾的
  return toolsData.slice(-limit).reverse();
}

// ===== 渲染热区 =====
function renderFeatureTools() {
  // 热门工具网格
  const hotGrid = document.getElementById("featureToolsGrid");
  if (hotGrid) {
    const data = getHotTools(8);
    hotGrid.innerHTML = data.map(t =>
      '<a href="detail.html?id=' + t.id + '" class="feature-tool-card"><div class="ft-icon">' + (t.icon || "🤖") + '</div><div class="ft-info"><div class="ft-name">' + t.name + '</div><div class="ft-desc">' + (t.desc || "") + '</div></div></a>'
    ).join("");
  }
  // 最新收录网格
  const newGrid = document.getElementById("newToolsGrid");
  if (newGrid) {
    const data = getNewTools(8);
    newGrid.innerHTML = data.map(t =>
      '<a href="detail.html?id=' + t.id + '" class="feature-tool-card"><div class="ft-icon">' + (t.icon || "🤖") + '</div><div class="ft-info"><div class="ft-name">' + t.name + '</div><div class="ft-desc">' + (t.desc || "") + '</div></div></a>'
    ).join("");
  }
}

// ===== 首页分类区块 =====
function home() {
  const c = document.getElementById("categorySections");
  if (!c) return;
  const cnt = Cnt();
  let h = '';

  for (const cat of O) {
    if (!cnt[cat] || cnt[cat] === 0) continue;
    const tks = ByCat(cat, MAX);
    const cn = N[cat] || cat;
    const ic = I[cat] || "fa-circle";

    h += '<div class="category-section" id="sec-' + cat + '">';
    h += '<div class="section-header">';
    h += '<h2><i class="fas ' + ic + '" style="color:#5961f9"></i> ' + cn + '</h2>';
    h += '<a href="javascript:" onclick="sw(\'' + cat + '\')">查看更多 ›</a>';
    h += '</div>';

    // 子分类标签栏
    if (Sub[cat]) {
      h += '<div class="subcat-tabs" data-cat="' + cat + '">';
      h += '<span class="sctab active" data-sub="all">全部</span>';
      for (const s of Sub[cat]) {
        h += '<span class="sctab" data-sub="' + s + '">' + s + '</span>';
      }
      h += '</div>';
    }

    h += '<div class="category-grid" data-cat="' + cat + '">';
    for (const tk of tks) {
      h += '<a href="detail.html?id=' + tk.id + '" class="cat-tool-card">';
      h += '<div class="tool-icon">' + (tk.icon || "🤖") + '</div>';
      h += '<div class="tool-info">';
      h += '<div class="tool-name">' + tk.name + '</div>';
      h += '<div class="tool-desc">' + (tk.desc || "") + '</div>';
      h += '</div></a>';
    }
    h += '</div></div>';
  }

  c.innerHTML = h;

  // 绑定子分类标签点击
  document.querySelectorAll(".subcat-tabs").forEach(tabContainer => {
    const cat = tabContainer.dataset.cat;
    tabContainer.querySelectorAll(".sctab").forEach(tab => {
      tab.addEventListener("click", function() {
        const sub = this.dataset.sub;
        tabContainer.querySelectorAll(".sctab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        const grid = document.querySelector('.category-grid[data-cat="' + cat + '"]');
        if (!grid) return;
        if (sub === "all") {
          // 重新显示原来的
          const tks = ByCat(cat, MAX);
          grid.innerHTML = tks.map(tk =>
            '<a href="detail.html?id=' + tk.id + '" class="cat-tool-card"><div class="tool-icon">' + (tk.icon || "🤖") + '</div><div class="tool-info"><div class="tool-name">' + tk.name + '</div><div class="tool-desc">' + (tk.desc || "") + '</div></div></a>'
          ).join("");
        } else {
          const tks = ByCat(cat, MAX, sub);
          grid.innerHTML = tks.length ?
            tks.map(tk =>
              '<a href="detail.html?id=' + tk.id + '" class="cat-tool-card"><div class="tool-icon">' + (tk.icon || "🤖") + '</div><div class="tool-info"><div class="tool-name">' + tk.name + '</div><div class="tool-desc">' + (tk.desc || "") + '</div></div></a>'
            ).join("") :
            '<div class="empty-state" style="grid-column:1/-1;padding:20px">该分类下暂无工具</div>';
        }
      });
    });
  });
}

// ===== 分类详情网格 =====
function grid() {
  const g = document.getElementById("toolGrid");
  if (!g) return;
  let f = toolsData;
  if (C !== "all") f = f.filter(t => t.category === C);
  if (S) {
    const q = S.toLowerCase();
    f = f.filter(t => t.name.toLowerCase().includes(q) || (t.desc && t.desc.toLowerCase().includes(q)));
  }
  if (f.length === 0) {
    g.innerHTML = '<div class="empty-state">🤔 没有找到相关工具</div>';
    return;
  }
  g.innerHTML = f.map(t =>
    '<div class="url-card col-6 col-sm-6 col-md-4 col-xl-3"><div class="url-body default"><a href="detail.html?id=' + t.id + '" class="card no-c mb-4"><div class="card-body url-content d-flex align-items-center"><div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center">' + (t.icon || "🤖") + '</div><div class="url-info flex-fill"><div class="text-sm overflowClip_1"><strong>' + t.name + '</strong></div><div class="text-muted text-xs overflowClip_2 mt-1">' + (t.desc || "") + '</div></div></div></a></div></div>'
  ).join("");
}

// ===== 搜索引擎切换 =====
function initSearchTabs() {
  const labels = document.querySelectorAll("#sTypeList label");
  const groups = document.querySelectorAll(".search-group");
  labels.forEach(lb => {
    lb.addEventListener("click", function() {
      labels.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
      const type = this.dataset.type;
      groups.forEach(g => g.classList.remove("s-current"));
      const target = document.querySelector('.search-group[data-type="' + type + '"]');
      if (target) target.classList.add("s-current");
    });
  });
}

// ===== 搜索标签（快速搜索标签）=====
function renderSearchTags() {
  const container = document.getElementById("searchTags");
  if (!container) return;
  const tags = [
    "ChatGPT", "Claude", "DeepSeek", "Kimi", "通义千问",
    "Midjourney", "Suno", "Sora", "Cursor", "GitHub Copilot"
  ];
  container.innerHTML = tags.map(t =>
    '<li><label onclick="quickSearch(\'' + t + '\')">' + t + '</label></li>'
  ).join("");
}

function quickSearch(q) {
  document.getElementById("search-text").value = q;
  doSearch();
}

// ===== 视图切换 =====
const hb = { style: {} }, cc = { style: {} }, hc = { style: {} }, tc = { style: {} };
let cs = {}, ct = {}, cg = {};

function sw(cat) {
  // 如果不在首页，直接跳转到 index.html?cat=xxx
  var isHome = document.getElementById("homeContent") !== null;
  if (!isHome) {
    window.location.href = 'index.html?cat=' + cat;
    return;
  }
  C = cat;
  S = "";
  document.getElementById("search-text").value = "";

  const _hb = document.querySelector(".header-big");
  const _cc = document.getElementById("catBarContainer");
  const _hc = document.getElementById("homeContent");
  const _tc = document.getElementById("toolContent");
  const _cs = document.getElementById("catNameSpan");
  const _ct = document.getElementById("catCountSpan");
  const _cg = document.getElementById("catTitle");

  if (cat === "all") {
    if (_hb) _hb.style.display = "";
    if (_cc) _cc.style.display = "none";
    if (_hc) _hc.style.display = "";
    if (_tc) _tc.style.display = "none";
    side();
    home();
    // 确保热门工具和最新收录可见
    document.getElementById("hotZone") && (document.getElementById("hotZone").style.display = "");
    document.getElementById("newZone") && (document.getElementById("newZone").style.display = "");
    document.getElementById("infoCards") && (document.getElementById("infoCards").style.display = "");
  } else {
    if (_hb) _hb.style.display = "none";
    if (_cc) _cc.style.display = "";
    if (_hc) _hc.style.display = "none";
    if (_tc) _tc.style.display = "";
    const cnt = Cnt();
    if (_cs) _cs.textContent = N[cat] || cat;
    if (_ct) _ct.textContent = "(收录 " + cnt[cat] + " 个工具)";
    if (_cg) _cg.style.display = "";
    // 隐藏热区和信息卡片
    document.getElementById("hotZone") && (document.getElementById("hotZone").style.display = "none");
    document.getElementById("newZone") && (document.getElementById("newZone").style.display = "none");
    document.getElementById("infoCards") && (document.getElementById("infoCards").style.display = "none");
    side();
    grid();
  }
}

function doSearch() {
  const q = document.getElementById("search-text").value.trim();
  if (!q) { S = ""; sw(C); return; }

  // 检测选中的搜索引擎
  const activeEngine = document.querySelector("#sTypeList label.active");
  let engine = "local";
  if (activeEngine) engine = activeEngine.dataset.type;

  if (engine !== "local") {
    // 跳转到外部搜索引擎
    const query = encodeURIComponent(q);
    const urls = {
      bing: "https://www.bing.com/search?q=" + query,
      baidu: "https://www.baidu.com/s?wd=" + query,
      google: "https://www.google.com/search?q=" + query,
      perplexity: "https://www.perplexity.ai/search?q=" + query
    };
    if (urls[engine]) { window.open(urls[engine], "_blank"); return; }
  }

  // 站内搜索
  S = q;
  const _hb = document.querySelector(".header-big");
  const _cc = document.getElementById("catBarContainer");
  const _hc = document.getElementById("homeContent");
  const _tc = document.getElementById("toolContent");
  const _cs = document.getElementById("catNameSpan");
  const _cg = document.getElementById("catTitle");

  if (_hb) _hb.style.display = "none";
  if (_cc) _cc.style.display = "";
  if (_hc) _hc.style.display = "none";
  if (_tc) _tc.style.display = "";
  if (_cs) _cs.textContent = "搜索结果";
  if (_cg) _cg.style.display = "none";
  C = "all";
  document.getElementById("hotZone") && (document.getElementById("hotZone").style.display = "none");
  document.getElementById("newZone") && (document.getElementById("newZone").style.display = "none");
  document.getElementById("infoCards") && (document.getElementById("infoCards").style.display = "none");
  side();
  grid();
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", function() {
  side();
  home();
  renderFeatureTools();
  renderSearchTags();
  initSearchTabs();
  
  // 读取URL参数 ?cat=xxx，自动跳转到对应分类
  var urlParams = new URLSearchParams(window.location.search);
  var catParam = urlParams.get("cat");
  if (catParam && N[catParam]) {
    setTimeout(function() { sw(catParam); }, 100);
  }
});
