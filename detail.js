document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { document.getElementById('detailContainer').innerHTML = '<div style="text-align:center;padding:60px 0"><h2>缺少参数</h2><p><a href="index.html">返回首页</a></p></div>'; return; }
  const tool = toolsData.find(t => t.id === id);
  if (!tool) { document.getElementById('detailContainer').innerHTML = '<div style="text-align:center;padding:60px 0"><h2>没有找到该工具</h2><p><a href="index.html">返回首页</a></p></div>'; return; }
  const d = tool.detail;
  document.getElementById('detailContainer').innerHTML = `
    <a href="index.html" class="back-link" style="display:inline-flex;align-items:center;gap:6px;color:#6366f1;font-size:15px;text-decoration:none;margin-bottom:24px;">← 返回首页</a>
    
    <div style="display:flex;align-items:center;gap:20px;padding:28px 32px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 1px 3px rgba(0,0,0,.06);margin-bottom:24px">
      <div style="width:72px;height:72px;border-radius:18px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0">${tool.icon}</div>
      <div style="flex:1"><h1 style="font-size:26px;font-weight:700;margin-bottom:4px">${tool.name}</h1>
      <span class="category-badge" style="display:inline-block;padding:4px 12px;background:#eef2ff;color:#6366f1;border-radius:8px;font-size:13px;font-weight:500">${tool.categoryLabel}</span></div>
    </div>
    
    <div style="padding:24px 28px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;margin-bottom:20px">
      <p style="font-size:16px;line-height:1.8;color:#475569">${d.intro}</p>
    </div>
    
    ${d.features ? `<div style="padding:24px 28px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;margin-bottom:20px">
      <h2 style="font-size:18px;font-weight:700;margin-bottom:16px">✨ 核心功能</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${d.features.map(f => `<div style="padding:12px 16px;background:#f8fafc;border-radius:10px;font-size:14px;display:flex;align-items:center;gap:8px"><span style="width:20px;height:20px;border-radius:50%;background:#6366f1;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">✓</span>${f}</div>`).join('')}</div>
    </div>` : ''}
    
    ${d.pricing ? `<div style="padding:24px 28px;background:#fff;border:1px solid #fde68a;border-radius:16px;margin-bottom:20px">
      <h2 style="font-size:18px;font-weight:700;margin-bottom:12px">💰 价格</h2>
      <div style="padding:16px;background:#fefce8;border-radius:10px;font-size:15px;color:#92400e">${d.pricing}</div>
    </div>` : ''}
    
    <div style="margin:20px 0;padding:20px;background:#fafafa;border:1px dashed #e2e8f0;border-radius:16px;text-align:center">
      <div style="font-size:11px;color:#999;letter-spacing:1px;margin-bottom:8px">广告</div>
      <div style="color:#999;font-size:14px">📢 广告位招商中<br><small>欢迎联系投放</small></div>
    </div>
    
    <div style="text-align:center;margin:24px 0 40px">
      <a href="${tool.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:16px 48px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:12px;font-size:17px;font-weight:600;text-decoration:none;box-shadow:0 4px 15px rgba(99,102,241,.3)">访问 ${tool.name} →</a>
    </div>
    
    <div style="margin:20px 0 40px;padding:20px;background:#fafafa;border:1px dashed #e2e8f0;border-radius:16px;text-align:center">
      <div style="font-size:11px;color:#999;letter-spacing:1px;margin-bottom:8px">广告</div>
      <div style="color:#999;font-size:14px">📢 广告位招商中<br><small>欢迎联系投放</small></div>
    </div>
  `;
});