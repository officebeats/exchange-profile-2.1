filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Switch all clearbit logo URLs to icon.horse in associations
domains = {
    'logo.clearbit.com/issa.com': 'icon.horse/icon/issa.com',
    'logo.clearbit.com/bscai.org': 'icon.horse/icon/bscai.org',
    'logo.clearbit.com/ifma.org': 'icon.horse/icon/ifma.org',
    'logo.clearbit.com/boma.org': 'icon.horse/icon/boma.org',
    'logo.clearbit.com/ciriscience.org': 'icon.horse/icon/ciriscience.org',
    'logo.clearbit.com/ieha.org': 'icon.horse/icon/ieha.org',
    'logo.clearbit.com/iicrc.org': 'icon.horse/icon/iicrc.org',
    'logo.clearbit.com/ijcsa.org': 'icon.horse/icon/ijcsa.org',
    'logo.clearbit.com/cleaninginstitute.org': 'icon.horse/icon/cleaninginstitute.org',
    'logo.clearbit.com/restorationindustry.org': 'icon.horse/icon/restorationindustry.org',
    'logo.clearbit.com/pwna.org': 'icon.horse/icon/pwna.org',
    'logo.clearbit.com/iwca.org': 'icon.horse/icon/iwca.org',
}

for old, new in domains.items():
    before = len(content)
    content = content.replace(old, new)
    after = len(content)
    if before != after:
        print(f'Replaced: {old} -> {new}')
    else:
        print(f'NOT FOUND: {old}')

# 2. Fix certification logos - use icon.horse too
cert_domains = {
    'domain=wbenc.org&sz=128': None,  # keep google favicons for certs (they work fine for small icons)
    'domain=nmsdc.org&sz=128': None,
    'domain=navoba.org&sz=128': None,
    'domain=issa.com&sz=128': None,
}

# 3. Fix video URL - remove mute=1 so video plays with sound when premium is ON
old_url = 'autoplay=1&mute=1&loop=1&enablejsapi=1'
new_url = 'autoplay=1&loop=1&enablejsapi=1'
before = len(content)
content = content.replace(old_url, new_url)
if len(content) != before:
    print('Fixed video - removed mute=1')
else:
    # try alternate form
    old_url2 = 'autoplay=1\u0026mute=1\u0026loop=1\u0026enablejsapi=1'
    content = content.replace(old_url2, 'autoplay=1\u0026loop=1\u0026enablejsapi=1')
    print('Fixed video (alt form) - removed mute=1')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')
