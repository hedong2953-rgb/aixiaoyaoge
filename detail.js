document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { document.getElementById('detailContainer').innerHTML = '<div style="text-align:center;padding:60px 0"><h2>缺少参数</h2><p><a href="index.html">返回首页</a></p></div>'; return; }
  const tool = toolsData.find(t => t.id === id);
  if (!tool) { document.getElementById('detailContainer').innerHTML = '<div style="text-align:center;padding:60px 0"><h2>没有找到该工具</h2><p><a href="index.html">返回首页</a></p></div>'; return; }
  const d = tool.detail;
  document.getElementById('detailContainer').innerHTML = `
    <a href="index.html" class="back-link">← 返回首页</a>
    <div class="detail-header">
      <div class="detail-icon">${tool.icon}</div>
      <div class="detail-title"><h1>${tool.name}</h1><span class="category-badge">${tool.categoryLabel}</span></div>
    </div>
    <p style="font-size:16px;line-height:1.8;margin-bottom:24px">${d.intro}</p>
    ${d.features ? `<h2 style="font-size:18px;margin:24px 0 12px">✨ 核心功能</h2><ul style="list-style:none;display:flex;flex-direction:column;gap:8px">${d.features.map(f => `<li style="padding:10px 16px;background:#f8fafc;border-radius:10px;font-size:14px">✓ ${f}</li>`).join('')}</ul>` : ''}
    ${d.pricing ? `<h2 style="font-size:18px;margin:24px 0 12px">💰 价格</h2><div style="padding:16px;background:#fefce8;border:1px solid #fde68a;border-radius:10px;font-size:14px">${d.pricing}</div>` : ''}
    <div style="margin:32px 0;padding:20px;background:#fafafa;border:1px dashed #e2e8f0;border-radius:16px;text-align:center"><div style="font-size:11px;color:#999;letter-spacing:1px;margin-bottom:8px">广告</div><div style="color:#999;font-size:14px">📢 广告位招商中<br><small>欢迎联系投放</small></div></div>
    <div style="text-align:center;margin:32px 0"><a href="${tool.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#6366f1;color:white;border-radius:10px;font-size:16px;font-weight:600;text-decoration:none">访问 ${tool.name} →</a></div>
    <div style="margin:32px 0;padding:20px;background:#fafafa;border:1px dashed #e2e8f0;border-radius:16px;text-align:center"><div style="font-size:11px;color:#999;letter-spacing:1px;margin-bottom:8px">广告</div><div style="color:#999;font-size:14px">📢 广告位招商中<br><small>欢迎联系投放</small></div></div>
  `;
});