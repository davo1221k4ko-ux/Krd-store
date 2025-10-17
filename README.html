<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KRD ANDROID STORE</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: "Poppins", sans-serif;
      background: linear-gradient(135deg, #007bff, #00bfff);
      color: white;
      text-align: center;
      overflow-x: hidden;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(10px);
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      position: relative;
      z-index: 5;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.8);
    }

    .store-title {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }

    .menu {
      font-size: 24px;
      cursor: pointer;
      transition: transform 0.3s;
      z-index: 10;
    }
    .menu:hover {
      transform: rotate(90deg);
    }

    .dropdown {
      position: absolute;
      top: 65px;
      right: 20px;
      background: rgba(255, 255, 255, 0.95);
      color: black;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      overflow: hidden;
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
      transition: all 0.3s ease;
      pointer-events: none;
      z-index: 9;
    }

    .dropdown.active {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    .dropdown a {
      display: block;
      padding: 12px 20px;
      text-decoration: none;
      color: black;
      transition: background 0.3s;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .dropdown a:last-child {
      border-bottom: none;
    }

    .dropdown a:hover {
      background: #f0f0f0;
    }

    .dropdown a:active {
      background: #e0e0e0;
    }

    /* Overlay for menu */
    .menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.3);
      z-index: 8;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .menu-overlay.active {
      opacity: 1;
      pointer-events: all;
    }

    h1 {
      margin-top: 20px;
      font-size: 28px;
      animation: fadeInDown 1s ease;
    }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .app-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
      animation: fadeIn 1.2s ease;
    }

    .app-card {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
      overflow: hidden;
    }

    .app-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    }

    .app-card img {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      margin-bottom: 10px;
      animation: fadeIn 0.8s ease;
    }

    .app-name {
      font-size: 20px;
      font-weight: bold;
    }

    .app-desc {
      margin: 10px 0;
      font-size: 14px;
    }

    .download-btn {
      background: #00ff88;
      color: black;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
      position: relative;
      overflow: hidden;
    }

    .download-btn:active {
      transform: scale(0.95);
    }

    .download-btn::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.4);
      transition: left 0.4s;
    }

    .download-btn:hover::after {
      left: 100%;
    }

    /* Admin Panel */
    #admin-panel {
      display: none;
      background: rgba(255,255,255,0.95);
      color: black;
      padding: 20px;
      border-radius: 15px;
      width: 90%;
      max-width: 400px;
      margin: 30px auto;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      animation: fadeIn 0.5s ease;
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border-radius: 10px;
      border: 1px solid #ccc;
    }

    button {
      cursor: pointer;
    }

    #reset-btn {
      background: red;
      color: white;
      margin-top: 10px;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
    }

    #reset-btn:hover {
      background: darkred;
    }

    /* Loading Animation */
    #loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #007bff, #00bfff);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      color: white;
      animation: fadeOut 1s ease forwards;
      animation-delay: 2.2s;
    }

    .loading-logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
      border: 3px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes fadeOut {
      to { opacity: 0; visibility: hidden; }
    }

    .loader {
      width: 60px;
      height: 60px;
      border: 6px solid rgba(255,255,255,0.2);
      border-top: 6px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 10px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <!-- Loading Animation -->
  <div id="loading-screen">
    <img src="https://i.ibb.co/gM7NyhSz/Picsart-25-10-16-14-43-34-096.jpg" alt="KRD Logo" class="loading-logo">
    <div class="loader"></div>
    <h2>Loading KRD ANDROID STORE...</h2>
  </div>

  <header>
    <div class="logo-container">
      <img src="https://i.ibb.co/gM7NyhSz/Picsart-25-10-16-14-43-34-096.jpg" alt="KRD Logo" class="logo">
      <div class="store-title">KRD STORE</div>
    </div>
    <div class="menu" onclick="toggleMenu()">☰</div>
    <div class="dropdown" id="dropdown">
      <a href="#" onclick="filterApps('Games')">Games</a>
      <a href="#" onclick="filterApps('Mods')">Mods</a>
      <a href="#" onclick="filterApps('Apps')">Apps</a>
      <a href="#" onclick="openOwner()">Owner</a>
    </div>
    <div class="menu-overlay" id="menuOverlay" onclick="closeMenu()"></div>
  </header>

  <h1>Simple App Store</h1>
  <div class="app-list" id="appList"></div>

  <!-- Admin Panel -->
  <div id="admin-panel">
    <h3>Owner Panel</h3>
    <input type="text" id="appName" placeholder="App Name">
    <input type="text" id="appDesc" placeholder="App Description">
    <input type="text" id="appImg" placeholder="App Image URL">
    <input type="text" id="appLink" placeholder="Download Link">
    <select id="appCategory">
      <option value="Apps">App</option>
      <option value="Games">Game</option>
      <option value="Mods">Mod</option>
    </select>
    <button onclick="addApp()">Add App</button>
    <button id="reset-btn" onclick="resetApps()">Delete All Apps</button>
  </div>

  <script>
    const dropdown = document.getElementById('dropdown');
    const menuOverlay = document.getElementById('menuOverlay');
    const adminPanel = document.getElementById('admin-panel');
    const appList = document.getElementById('appList');
    const loadingScreen = document.getElementById('loading-screen');
    
    let isMenuOpen = false;

    // Load apps from localStorage
    let apps = JSON.parse(localStorage.getItem("krd_apps")) || [];
    let filteredApps = [...apps];

    // Valid user accounts
    const validUsers = [
      { username: "Z4KO_BEMNAT", password: "Dalo0112" },
      { username: "danyar_boto", password: "kermaxure" }
    ];

    function toggleMenu() {
      if (!isMenuOpen) {
        dropdown.classList.add('active');
        menuOverlay.classList.add('active');
        isMenuOpen = true;
      } else {
        closeMenu();
      }
    }

    function closeMenu() {
      dropdown.classList.remove('active');
      menuOverlay.classList.remove('active');
      isMenuOpen = false;
    }

    function filterApps(category) {
      if (category === 'Apps') {
        filteredApps = [...apps];
      } else {
        filteredApps = apps.filter(app => app.category === category);
      }
      displayApps();
      closeMenu();
    }

    function openOwner() {
      closeMenu();
      const user = prompt("Enter username:");
      const pass = prompt("Enter password:");
      
      // Check if credentials match any valid user
      const isValidUser = validUsers.some(account => 
        account.username === user && account.password === pass
      );
      
      if (isValidUser) {
        alert("Welcome, " + user + "!");
        adminPanel.style.display = "block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      } else {
        alert("Access Denied! Invalid username or password.");
      }
    }

    function displayApps() {
      appList.innerHTML = "";
      if (filteredApps.length === 0) {
        appList.innerHTML = `<p>No apps found in this category.</p>`;
        return;
      }
      filteredApps.forEach(app => {
        const card = `
          <div class="app-card">
            <img src="${app.img || 'https://via.placeholder.com/100'}" alt="App Icon">
            <div class="app-name">${app.name}</div>
            <div class="app-desc">${app.desc}</div>
            <button class="download-btn" onclick="animateDownload('${app.link}')">Download</button>
          </div>
        `;
        appList.innerHTML += card;
      });
    }

    function animateDownload(link) {
      const btn = event.target;
      btn.innerText = "Downloading...";
      btn.style.background = "#00cc66";
      setTimeout(() => {
        window.open(link, '_blank');
        btn.innerText = "Download";
        btn.style.background = "#00ff88";
      }, 1000);
    }

    function addApp() {
      const name = document.getElementById('appName').value.trim();
      const desc = document.getElementById('appDesc').value.trim();
      const img = document.getElementById('appImg').value.trim();
      const link = document.getElementById('appLink').value.trim();
      const category = document.getElementById('appCategory').value;

      if (!name || !desc || !link) {
        alert("Please fill all fields!");
        return;
      }

      const newApp = { name, desc, img, link, category };
      apps.push(newApp);
      localStorage.setItem("krd_apps", JSON.stringify(apps));
      filteredApps = [...apps];

      alert("App Added Successfully!");
      displayApps();
      document.getElementById('appName').value = "";
      document.getElementById('appDesc').value = "";
      document.getElementById('appImg').value = "";
      document.getElementById('appLink').value = "";
    }

    function resetApps() {
      if (confirm("Are you sure you want to delete all apps?")) {
        localStorage.removeItem("krd_apps");
        apps = [];
        filteredApps = [];
        displayApps();
        alert("All apps deleted!");
      }
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !dropdown.contains(e.target) && !e.target.classList.contains('menu')) {
        closeMenu();
      }
    });

    // On load
    window.onload = () => {
      displayApps();
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 2500);
    };
  </script>
</body>
</html>
