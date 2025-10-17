<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Kurd App Store — Single File</title>
  <style>
    :root{--bg:#0b1220;--card:#0f1724;--accent:#3b82f6;--muted:#9aa6bf;--glass:rgba(255,255,255,0.03)}
    html,body{height:100%;margin:0;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,#071028 0%,#081426 60%);color:#e6eef8}
    .wrap{max-width:1100px;margin:28px auto;padding:20px}
    header{display:flex;align-items:center;justify-content:space-between;gap:12px}
    h1{margin:0;font-size:20px}
    .top-actions{display:flex;gap:8px}
    button{background:var(--accent);border:0;padding:8px 12px;border-radius:10px;color:white;cursor:pointer}
    button.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06)}
    .layout{display:grid;grid-template-columns:360px 1fr;gap:16px;margin-top:16px}
    .card{background:var(--card);padding:14px;border-radius:12px;box-shadow:0 6px 24px rgba(2,6,23,0.6)}
    label{display:block;font-size:13px;color:var(--muted);margin-top:10px}
    input[type=text],textarea,select{width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:var(--glass);color:inherit}
    textarea{min-height:80px}
    .app-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
    .app{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:12px;border-radius:10px;display:flex;gap:10px;align-items:center}
    .icon{width:56px;height:56px;border-radius:12px;background:#0b1220;display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--muted);overflow:hidden}
    .meta{flex:1}
    .meta h3{margin:0;font-size:15px}
    .meta p{margin:6px 0 0;font-size:13px;color:var(--muted)}
    .app-actions{display:flex;gap:6px}
    .small{padding:6px 8px;border-radius:8px;font-size:13px}
    .danger{background:#d14343}
    footer{margin-top:20px;color:var(--muted);font-size:13px}
    .import-export{display:flex;gap:8px;margin-top:8px}
    .helper{font-size:12px;color:var(--muted);margin-top:8px}
    .center{display:flex;align-items:center;justify-content:center}
    .file-info{font-size:12px;color:var(--muted);margin-top:6px}
    .search{width:320px;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:var(--glass)}
    @media(max-width:880px){.layout{grid-template-columns:1fr} .search{width:100%}}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div>
        <h1>Kurd App Store — Single-file (index.html)</h1>
        <div class="helper">Add apps locally, give download links or upload app files, export/import JSON to move data between devices.</div>
      </div>
      <div class="top-actions">
        <input id="search" class="search" placeholder="Search apps by name or category...">
        <button id="addBtn">+ Add App</button>
        <button id="exportBtn" class="ghost">Export JSON</button>
        <button id="importBtn" class="ghost">Import JSON</button>
        <input id="importFile" type="file" accept="application/json" style="display:none">
      </div>
    </header><div class="layout">
  <aside class="card">
    <h3>Quick actions</h3>
    <div class="import-export">
      <button id="clearBtn" class="ghost small">Clear all</button>
      <button id="downloadAllBtn" class="ghost small">Download All JSON</button>
    </div>
    <label>Default icon URL (optional)</label>
    <input id="defaultIcon" type="text" placeholder="https://.../icon.png">
    <div class="helper">You can set a default icon URL used when adding apps without an icon.</div>

    <div style="margin-top:12px">
      <label>How it works</label>
      <ol style="padding-left:18px;font-size:13px;color:var(--muted)">
        <li>Add an app using the + Add App button.</li>
        <li>Provide a download link or upload a file — uploaded files are stored as base64 in your browser (local only).</li>
        <li>Use Export/Import JSON to move the app list between devices.</li>
      </ol>
    </div>
  </aside>

  <main>
    <div class="card">
      <h3>Apps</h3>
      <div id="apps" class="app-list" style="margin-top:10px"></div>
      <div id="noapps" class="helper center" style="padding:18px;display:none">No apps yet — click "+ Add App" to start.</div>
    </div>
  </main>
</div>

<footer>
  Built as a single-file offline app store. Data stored in localStorage (key: <code>kurd_app_store_v1</code>). Export to move elsewhere.
</footer>

  </div>  <!-- Modal / Add App form (hidden) -->  <div id="modal" style="position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:18px">
    <div style="width:760px;max-width:96%;background:var(--card);border-radius:12px;padding:16px;box-shadow:0 10px 40px rgba(2,6,23,0.6)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h2 style="margin:0">Add / Edit App</h2>
        <button id="closeModal" class="ghost">Close</button>
      </div>
      <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:260px">
          <label>App name</label>
          <input id="appName" type="text" placeholder="My Cool App">
          <label>Version</label>
          <input id="appVersion" type="text" placeholder="1.0.0">
          <label>Category</label>
          <input id="appCategory" type="text" placeholder="Games / Tools / Utilities">
          <label>Short description</label>
          <textarea id="appDesc" placeholder="A short description..."></textarea>
        </div>
        <div style="width:300px;min-width:220px">
          <label>Icon URL (or leave blank to upload or use default)</label>
          <input id="appIconUrl" type="text" placeholder="https://.../icon.png">
          <label>Or upload icon (PNG/JPG)</label>
          <input id="appIconFile" type="file" accept="image/*">
          <label style="margin-top:8px">Download link (optional)</label>
          <input id="appDownloadUrl" type="text" placeholder="https://example.com/app.apk or https://drive..">
          <label>Or upload file to host locally (optional)</label>
          <input id="appFile" type="file">
          <div id="fileInfo" class="file-info"></div>
          <div style="margin-top:10px;display:flex;gap:8px">
            <button id="saveApp">Save App</button>
            <button id="cancelApp" class="ghost">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>  <script>
    // Single-file App Store script
    (()=>{
      const STORAGE_KEY = 'kurd_app_store_v1';
      const state = {apps:[], editId:null, defaultIcon: ''};

      const qs = s=>document.querySelector(s);
      const qsa = s=>document.querySelectorAll(s);

      // Elements
      const appsEl = qs('#apps');
      const noappsEl = qs('#noapps');
      const addBtn = qs('#addBtn');
      const modal = qs('#modal');
      const closeModal = qs('#closeModal');
      const saveApp = qs('#saveApp');
      const cancelApp = qs('#cancelApp');
      const appName = qs('#appName');
      const appVersion = qs('#appVersion');
      const appCategory = qs('#appCategory');
      const appDesc = qs('#appDesc');
      const appIconUrl = qs('#appIconUrl');
      const appIconFile = qs('#appIconFile');
      const appDownloadUrl = qs('#appDownloadUrl');
      const appFile = qs('#appFile');
      const fileInfo = qs('#fileInfo');
      const defaultIcon = qs('#defaultIcon');
      const exportBtn = qs('#exportBtn');
      const importBtn = qs('#importBtn');
      const importFile = qs('#importFile');
      const clearBtn = qs('#clearBtn');
      const downloadAllBtn = qs('#downloadAllBtn');
      const search = qs('#search');

      function load(){
        try{
          const raw = localStorage.getItem(STORAGE_KEY);
          if(raw) state.apps = JSON.parse(raw);
          const def = localStorage.getItem(STORAGE_KEY + '_deficon');
          if(def) state.defaultIcon = def;
        }catch(e){console.error('load',e)}
      }

      function save(){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.apps));
        localStorage.setItem(STORAGE_KEY + '_deficon', state.defaultIcon || '');
      }

      function uid(){return 'a-'+Math.random().toString(36).slice(2,9)}

      function render(){
        appsEl.innerHTML = '';
        const q = (search.value||'').trim().toLowerCase();
        const list = state.apps.filter(a=>{
          if(!q) return true;
          return (a.name||'').toLowerCase().includes(q) || (a.category||'').toLowerCase().includes(q) || (a.desc||'').toLowerCase().includes(q);
        });
        if(list.length===0){noappsEl.style.display='block'}else{noappsEl.style.display='none'}
        list.forEach(a=>{
          const el = document.createElement('div'); el.className='app';
          const icon = document.createElement('div'); icon.className='icon';
          if(a.icon && a.icon.startsWith('data:')){
            const img = document.createElement('img'); img.src=a.icon; img.style.width='100%'; img.style.height='100%'; img.style.objectFit='cover'; icon.appendChild(img);
          } else if(a.icon){ const img = document.createElement('img'); img.src=a.icon; img.style.width='100%'; img.style.height='100%'; img.style.objectFit='cover'; icon.appendChild(img);
          } else if(state.defaultIcon){ const img = document.createElement('img'); img.src=state.defaultIcon; img.style.width='100%'; img.style.height='100%'; img.style.objectFit='cover'; icon.appendChild(img);
          } else { icon.textContent = (a.name||'??').slice(0,2).toUpperCase(); }

          const meta = document.createElement('div'); meta.className='meta';
          const h = document.createElement('h3'); h.textContent = a.name + (a.version? ' — v'+a.version:'');
          const p = document.createElement('p'); p.textContent = (a.category? a.category + ' • ':'') + (a.desc||'');
          meta.appendChild(h); meta.appendChild(p);

          const actions = document.createElement('div'); actions.className='app-actions';
          const dl = document.createElement('button'); dl.className='small'; dl.textContent='Download';
          dl.onclick = ()=>downloadApp(a.id);
          const edit = document.createElement('button'); edit.className='small ghost'; edit.textContent='Edit';
          edit.onclick = ()=>openEdit(a.id);
          const del = document.createElement('button'); del.className='small danger'; del.textContent='Delete';
          del.onclick = ()=>{if(confirm('Delete "'+a.name+'"?')){state.apps=state.apps.filter(x=>x.id!==a.id); save(); render();}}

          actions.appendChild(dl); actions.appendChild(edit); actions.appendChild(del);

          el.appendChild(icon); el.appendChild(meta); el.appendChild(actions);
          appsEl.appendChild(el);
        });
      }

      function openAdd(){ state.editId=null; appName.value=''; appVersion.value=''; appCategory.value=''; appDesc.value=''; appIconUrl.value=''; appIconFile.value=''; appDownloadUrl.value=''; appFile.value=''; fileInfo.textContent=''; modal.style.display='flex'; }
      function close(){ modal.style.display='none'; }

      function openEdit(id){ const a = state.apps.find(x=>x.id===id); if(!a) return; state.editId=id; appName.value=a.name||''; appVersion.value=a.version||''; appCategory.value=a.category||''; appDesc.value=a.desc||''; appIconUrl.value = (a.icon && !a.icon.startsWith('data:'))? a.icon: ''; fileInfo.textContent = a.fileName? ('Uploaded: '+a.fileName+' ('+Math.round((a.fileSize||0)/1024)+' KB)') : ''; appDownloadUrl.value = a.downloadUrl||''; modal.style.display='flex'; }

      function readFileAsDataURL(file){ return new Promise((res,rej)=>{ const fr=new FileReader(); fr.onload=()=>res(fr.result); fr.onerror=rej; fr.readAsDataURL(file); }) }

      saveApp.addEventListener('click', async ()=>{
        const name = appName.value.trim(); if(!name){alert('Name required');return}
        const obj = { id: state.editId || uid(), name, version: appVersion.value.trim(), category: appCategory.value.trim(), desc: appDesc.value.trim(), icon: null, downloadUrl: appDownloadUrl.value.trim() };
        // icon handling
        if(appIconFile.files && appIconFile.files[0]){
          obj.icon = await readFileAsDataURL(appIconFile.files[0]);
        } else if(appIconUrl.value.trim()){
          obj.icon = appIconUrl.value.trim();
        } else if(state.defaultIcon){ obj.icon = state.defaultIcon }

        // file handling
        if(appFile.files && appFile.files[0]){
          const f = appFile.files[0];
          const data = await readFileAsDataURL(f);
          obj.fileData = data; // base64
          obj.fileName = f.name;
          obj.fileSize = f.size;
          // when storing file, we clear downloadUrl so Download uses stored file
          obj.downloadUrl = '';
        }

        // if editing replace
        const idx = state.apps.findIndex(x=>x.id===obj.id);
        if(idx>=0) state.apps[idx] = Object.assign({}, state.apps[idx], obj); else state.apps.unshift(obj);
        save(); render(); close();
      });

      cancelApp.addEventListener('click', close);
      addBtn.addEventListener('click', openAdd);
      closeModal.addEventListener('click', close);

      function downloadApp(id){ const a = state.apps.find(x=>x.id===id); if(!a) return alert('App not found');
        if(a.fileData){ // create blob and download
          try{
            const arr = a.fileData.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length; const u8 = new Uint8Array(n);
            while(n--) u8[n] = bstr.charCodeAt(n);
            const blob = new Blob([u8], {type:mime});
            const url = URL.createObjectURL(blob);
            const ael = document.createElement('a'); ael.href=url; ael.download = a.fileName || (a.name.replace(/[^a-z0-9]/gi,'_')+'.bin'); document.body.appendChild(ael); ael.click(); ael.remove(); URL.revokeObjectURL(url);
          }catch(e){console.error(e); alert('Failed to create download from stored file.')}
        } else if(a.downloadUrl){ window.open(a.downloadUrl,'_blank'); }
        else{ alert('No download file or link for this app. Edit the app to add one.'); }
      }

      exportBtn.addEventListener('click', ()=>{
        const payload = { apps: state.apps.slice(), defaultIcon: state.defaultIcon };
        const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href=url; a.download='kurd-app-store-export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      });

      importBtn.addEventListener('click', ()=>importFile.click());
      importFile.addEventListener('change', async (e)=>{
        const f = e.target.files[0]; if(!f) return; try{
          const text = await f.text(); const parsed = JSON.parse(text);
          if(parsed.apps && Array.isArray(parsed.apps)){
            // merge without duplicating IDs: if id exists replace, else add
            parsed.apps.forEach(a=>{
              const idx = state.apps.findIndex(x=>x.id===a.id);
              if(idx>=0) state.apps[idx]=a; else state.apps.push(a);
            });
            if(parsed.defaultIcon) state.defaultIcon = parsed.defaultIcon;
            save(); render(); alert('Import finished.');
          } else { alert('Invalid JSON file'); }
        }catch(err){console.error(err); alert('Import failed: '+err.message)}
        e.target.value='';
      });

      clearBtn.addEventListener('click', ()=>{ if(confirm('Clear all apps and reset?')){ state.apps=[]; save(); render(); } });

      downloadAllBtn.addEventListener('click', ()=>{ exportBtn.click(); });

      defaultIcon.addEventListener('change', e=>{ state.defaultIcon = e.target.value.trim(); localStorage.setItem(STORAGE_KEY + '_deficon', state.defaultIcon); render(); });

      search.addEventListener('input', ()=>render());

      // file preview info
      appFile.addEventListener('change', ()=>{
        const f = appFile.files[0]; if(!f){ fileInfo.textContent=''; return }
        fileInfo.textContent = 'Will upload: '+f.name+' ('+Math.round(f.size/1024)+' KB)';
      });

      // initial load
      load(); defaultIcon.value = state.defaultIcon || '';
      render();

      // expose for debugging
      window.KurdAppStore = {state, save, render};

    })();
  </script></body>
</html>
