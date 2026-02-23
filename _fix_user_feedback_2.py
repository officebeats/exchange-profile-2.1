filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'

with open(filepath, 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Update certifications logo for ISSA to ieha_logo.png
js = js.replace('"https://www.google.com/s2/favicons?domain=issa.com&sz=128"', '"ieha_logo.png"')


NL = '\r\n' if '\r\n' in js else '\n'

OLD_VIDEO_FN = (
    'function renderVideo(d) {' + NL +
    '  const c = document.getElementById("heroVideoContainer");' + NL +
    '  if (!c || !d.video) return;' + NL +
    NL +
    '  const getAutoplayUrl = (url) => {' + NL +
    '    let newUrl = url;' + NL +
    '    if (newUrl.includes("?"))' + NL +
    '      newUrl += "&autoplay=1&loop=1&enablejsapi=1";' + NL +
    '    else newUrl += "?autoplay=1&loop=1&enablejsapi=1";' + NL +
    '    return newUrl;' + NL +
    '  };' + NL +
    NL +
    '  const getThumbnail = (url) => {' + NL +
    '    const match = url.match(/embed\\/([^?]+)/);' + NL +
    '    return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : \'https://placehold.co/800x450/111827/3b82f6?text=About+Us\';' + NL +
    '  };' + NL +
    NL +
    '  c.innerHTML = `' + NL +
    '    <div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; border-radius:inherit; overflow:hidden;">' + NL +
    '      <iframe class="video-iframe" id="heroVideoIframe" src="${getAutoplayUrl(d.video.url)}" ' + NL +
    '        title="${d.video.title}" ' + NL +
    '        frameborder="0" ' + NL +
    '        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' + NL +
    '        style="width:100%; height:100%; flex:1;"' + NL +
    '        allowfullscreen>' + NL +
    '      </iframe>' + NL +
    '      <div class="video-fallback-img" style="width:100%; height:100%; display:none; position:relative;">' + NL +
    '        <img src="${getThumbnail(d.video.url)}" alt="About Us Banner" style="width:100%; height:100%; object-fit:cover; filter: brightness(0.7);" />' + NL +
    '        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:8px;">' + NL +
    '          <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48" style="color:var(--accent); opacity:0.8;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>' + NL +
    '          <div style="color:white; font-size:14px; font-weight:600; text-shadow:0 2px 4px rgba(0,0,0,0.5);">Unlock Premium to watch video</div>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    </div>' + NL +
    '  `;' + NL +
    '}'
)

NEW_VIDEO_FN = (
    'function renderVideo(d) {' + NL +
    '  const c = document.getElementById("heroVideoContainer");' + NL +
    '  if (!c || !d.video) return;' + NL +
    NL +
    '  const getAutoplayUrl = (url) => {' + NL +
    '    let newUrl = url;' + NL +
    '    if (newUrl.includes("?"))' + NL +
    '      newUrl += "&autoplay=1&loop=1&enablejsapi=1";' + NL +
    '    else newUrl += "?autoplay=1&loop=1&enablejsapi=1";' + NL +
    '    return newUrl;' + NL +
    '  };' + NL +
    NL +
    '  c.innerHTML = `' + NL +
    '    <div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; border-radius:inherit; overflow:hidden;">' + NL +
    '      <iframe class="video-iframe" id="heroVideoIframe" src="${getAutoplayUrl(d.video.url)}" ' + NL +
    '        title="${d.video.title}" ' + NL +
    '        frameborder="0" ' + NL +
    '        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' + NL +
    '        style="width:100%; height:100%; flex:1;"' + NL +
    '        allowfullscreen>' + NL +
    '      </iframe>' + NL +
    '      <div class="video-fallback-img" style="width:100%; height:100%; display:none; position:relative;">' + NL +
    '        <img src="about_us_fallback.jpg" alt="About Us Banner" style="width:100%; height:100%; object-fit:cover; filter: brightness(0.6);" />' + NL +
    '        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:8px;">' + NL +
    '          <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48" style="color:var(--bg-subtle); opacity:0.9;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>' + NL +
    '          <div style="color:white; font-size:16px; font-weight:700; text-shadow:0 2px 4px rgba(0,0,0,0.8);">Unlock Premium to view</div>' + NL +
    '        </div>' + NL +
    '      </div>' + NL +
    '    </div>' + NL +
    '  `;' + NL +
    '}'
)

if OLD_VIDEO_FN in js:
    js = js.replace(OLD_VIDEO_FN, NEW_VIDEO_FN)
    print('Updated video rendering code to use about_us_fallback.jpg!')
else:
    print('Could not find video rendering code...')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(js)
