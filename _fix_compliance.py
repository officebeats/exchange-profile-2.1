filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

NL = '\r\n' if '\r\n' in content else '\n'

OLD_FN_START = '// \u2500\u2500 Render: Compliance Layer (v2.0 \u2014 COI + Bond + Business Codes) \u2500\u2500'
OLD_FN_END = '// \u2500\u2500 Render: Social & Reviews Layer'

start_idx = content.find(OLD_FN_START)
end_idx = content.find(OLD_FN_END, start_idx)

if start_idx == -1 or end_idx == -1:
    print('ERROR: markers not found')
    print('Found fn start:', start_idx)
    print('Found fn end:', end_idx)
    exit(1)

print(f'Replacing chars {start_idx} to {end_idx}')

NEW_FN = (
    '// \u2500\u2500 Render: Compliance Layer (v2.1 \u2014 Coverage Cards + Codes) \u2500\u2500' + NL +
    'function renderComplianceLayer(d) {' + NL +
    '  const c = $("#complianceContent");' + NL +
    '  if (!d.compliance) return;' + NL +
    NL +
    '  const limits = d.compliance.coi.limits;' + NL +
    '  const bond = d.compliance.fidelityBond;' + NL +
    NL +
    '  const coverageItems = [' + NL +
    '    { label: "General Liability", value: limits.generalLiability, icon: \'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>\', color: "var(--success)" },' + NL +
    '    { label: "Auto Liability", value: limits.autoLiability, icon: \'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 0 1 2 2v5h-6V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>\', color: "var(--accent)" },' + NL +
    '    { label: "Umbrella", value: limits.umbrella, icon: \'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>\', color: "#8b5cf6" },' + NL +
    '    { label: "Workers Comp", value: limits.workersComp, icon: \'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>\', color: "#f59e0b" },' + NL +
    '  ];' + NL +
    NL +
    '  c.innerHTML = `' + NL +
    '    <div style="display:flex; flex-direction:column; gap:20px;">' + NL +
    NL +
    '      <!-- Coverage Cards Grid -->' + NL +
    '      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">' + NL +
    '        ${coverageItems.map(item => `' + NL +
    '          <div style="background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform=\'translateY(-3px)\'; this.style.boxShadow=\'0 6px 20px rgba(0,0,0,0.1)\';" onmouseleave="this.style.transform=\'\'; this.style.boxShadow=\'\';">' + NL +
    '            <div style="display:flex; align-items:center; gap:8px;">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="2" width="18" height="18">${item.icon}</svg>' + NL +
    '              <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">${item.label}</span>' + NL +
    '            </div>' + NL +
    '            <div style="font-size:22px; font-weight:800; color:var(--text-primary); letter-spacing:-0.5px; line-height:1;">${item.value}</div>' + NL +
    '          </div>' + NL +
    '        `).join("")}' + NL +
    '      </div>' + NL +
    NL +
    '      <!-- Fidelity Bond -->' + NL +
    '      <div style="padding:16px; background:rgba(0,113,227,0.04); border:1px solid rgba(0,113,227,0.1); border-radius:12px;">' + NL +
    '        <div style="font-size:11px; font-weight:700; color:var(--accent); text-transform:uppercase; margin-bottom:4px; letter-spacing:0.5px;">${bond?.type || "Fidelity Bond"}</div>' + NL +
    '        <div style="font-size:24px; font-weight:700; color:var(--text-primary);">${bond?.amount || "\u2014"}</div>' + NL +
    '        <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">Bonded and Insured for commercial contract protection</div>' + NL +
    '      </div>' + NL +
    NL +
    '      <!-- Business Codes -->' + NL +
    '      <div style="border-top:1px solid var(--border-light); padding-top:16px;">' + NL +
    '        <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px; text-transform:uppercase;">Business Codes</div>' + NL +
    NL +
    '        <div style="margin-bottom:16px;">' + NL +
    '          <div style="font-size:12px; font-weight:600; color:var(--text-primary); margin-bottom:8px;">NAICS Codes (Tax & Marketplaces)</div>' + NL +
    '          <div style="display:flex; flex-direction:column; gap:6px;">' + NL +
    '            ${d.compliance.naics.map(n => `' + NL +
    '              <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:flex-start;">' + NL +
    '                <span style="font-family:monospace; background:var(--pill-bg); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border); line-height:1;">${n.code}</span>' + NL +
    '                <span style="flex:1;">${n.description}${n.primary ? " \u2b50" : ""}</span>' + NL +
    '              </div>' + NL +
    '            `).join("")}' + NL +
    '          </div>' + NL +
    '        </div>' + NL +
    NL +
    '        <div>' + NL +
    '          <div style="font-size:12px; font-weight:600; color:var(--text-primary); margin-bottom:8px;">NIGP Codes (Public Sector Procurement)</div>' + NL +
    '          <div style="display:flex; flex-direction:column; gap:6px;">' + NL +
    '            ${d.compliance.nigp.map(n => `' + NL +
    '              <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:flex-start;">' + NL +
    '                <span style="font-family:monospace; background:rgba(0,0,0,0.03); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border); line-height:1;">${n.code}</span>' + NL +
    '                <span style="flex:1;">${n.description}</span>' + NL +
    '              </div>' + NL +
    '            `).join("")}' + NL +
    '          </div>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    </div>' + NL +
    '  `;' + NL +
    '}' + NL +
    NL
)

new_content = content[:start_idx] + NEW_FN + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done! Compliance section rewritten.')
print('- Removed COI header block')
print('- Insurance limits now show as large 2x2 coverage cards with icons and big font')
