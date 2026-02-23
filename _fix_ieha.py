filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old = 'logo: "https://icon.horse/icon/ieha.org",'
new = 'logo: "ieha_logo.png",'

if old in content:
    content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated IEHA logo to local file')
else:
    print('Pattern not found, dumping nearby text...')
    idx = content.find('ieha')
    print(repr(content[idx-20:idx+80]))
