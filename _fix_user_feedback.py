filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# Make dark mode default
if '<body>' in html:
    html = html.replace('<body>', '<body data-theme="dark">')
    print('Added data-theme="dark" to body')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html)


js_filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'

with open(js_filepath, 'r', encoding='utf-8') as f:
    js = f.read()

NL = '\r\n' if '\r\n' in js else '\n'

# Put Certs back to full width rows, but with interactive hover and large logo (56px)
OLD_CERTS = (
    '  c.className = "cert-grid";' + NL +
    '  c.innerHTML = items' + NL +
    '    .map((item) => `' + NL +
    '      <div class="cert-tile" title="${item.summary || item.name}">' + NL +
    '        <div class="cert-tile__logo">' + NL +
    '          <img src="${logoFor(item)}" alt="${item.name}"' + NL +
    '               onerror="this.onerror=null; this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' + NL +
    '          <div class="cert-tile__initials" style="display:none;">' + NL +
    '            ${item.name.split(/[^A-Z0-9]/)[0] || item.name.charAt(0)}' + NL +
    '          </div>' + NL +
    '        </div>' + NL +
    '        <div class="cert-tile__name">${item.name}</div>' + NL +
    '      </div>' + NL +
    '    `)' + NL +
    '    .join("");'
)

NEW_CERTS = (
    '  c.className = "card-list";' + NL +
    '  c.innerHTML = items' + NL +
    '    .map((item) => `' + NL +
    '      <div style="display:flex; align-items:center; gap:20px; padding:18px; background:var(--cert-card-bg); border-radius:14px; border:1px solid var(--cert-card-border); margin-bottom:12px; transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s, border-color 0.2s; cursor:default;" onmouseenter="this.style.transform=\'translateY(-4px)\'; this.style.boxShadow=\'0 12px 24px rgba(0,0,0,0.08)\'; this.style.borderColor=\'var(--accent)\';" onmouseleave="this.style.transform=\'\'; this.style.boxShadow=\'\'; this.style.borderColor=\'var(--cert-card-border)\';">' + NL +
    '        <div style="width:64px; height:64px; flex-shrink:0; background:white; border:1px solid var(--border-light); border-radius:12px; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:4px;">' + NL +
    '           <img src="${logoFor(item)}" alt="${item.name}" style="max-width:100%; max-height:100%; object-fit:contain; filter:none;" onerror="this.onerror=null; this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' + NL +
    '           <div style="display:none; width:100%; height:100%; background:var(--accent); color:white; font-size:18px; font-weight:bold; align-items:center; justify-content:center; border-radius:8px;">' + NL +
    '             ${item.name.charAt(0)}' + NL +
    '           </div>' + NL +
    '        </div>' + NL +
    '        <div style="flex:1; min-width:0;">' + NL +
    '          <div style="font-size:16px; font-weight:700; color:var(--text-primary); line-height:1.2; margin-bottom:6px; letter-spacing:-0.2px;">${item.name}</div>' + NL +
    '          <div style="font-size:13px; color:var(--text-secondary); line-height:1.4;">${item.summary}</div>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    `)' + NL +
    '    .join("");'
)

if OLD_CERTS in js:
    js = js.replace(OLD_CERTS, NEW_CERTS)
    print('Restored certifications to rows with interactive hover')
else:
    print('WARNING: Old cert pattern not found')

with open(js_filepath, 'w', encoding='utf-8') as f:
    f.write(js)

print('Done fixing!')
