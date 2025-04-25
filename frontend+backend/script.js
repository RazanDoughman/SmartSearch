document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
  
    // ========== COMMON BEHAVIOR ==========
  
    // Language Toggle (Desktop)
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const switchToAr = document.getElementById('switch-to-ar');
    const switchToEn = document.getElementById('switch-to-en');
  
    if (langToggle && langDropdown) {
      langToggle.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
      });
  
      switchToAr?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'AR-home.html';
      });
  
      switchToEn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'EN-home.html';
      });
  
      document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
          langDropdown.classList.remove('show');
        }
      });
    }
  
    // Hamburger Menu (Mobile Nav)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
  
    if (hamburgerBtn && mobileNav) {
      hamburgerBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
      });
  
      document.addEventListener('click', (e) => {
        if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileNav.classList.remove('open');
        }
      });
    }
  
    // Mobile About Toggle
    const mobileAboutBtn = document.querySelector('.mobile-about-btn');
    const mobileAboutContent = document.querySelector('.mobile-about-content');
  
    if (mobileAboutBtn && mobileAboutContent) {
      mobileAboutBtn.addEventListener('click', () => {
        mobileAboutContent.classList.toggle('show');
      });
    }
  
    // Mobile Language Toggle
    const mobileLangToggle = document.querySelector('.mobile-lang-toggle');
    const mobileLangDropdown = document.querySelector('.mobile-lang-dropdown');
    const switchToArMobile = document.querySelector('.mobile-lang-dropdown .switch-to-ar');
    const switchToEnMobile = document.querySelector('.mobile-lang-dropdown .switch-to-en');
  
    if (mobileLangToggle && mobileLangDropdown) {
      mobileLangToggle.addEventListener('click', () => {
        mobileLangDropdown.classList.toggle('show');
      });
  
      document.addEventListener('click', (e) => {
        if (!mobileLangToggle.contains(e.target) && !mobileLangDropdown.contains(e.target)) {
          mobileLangDropdown.classList.remove('show');
        }
      });
  
      switchToArMobile?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'AR-home.html';
      });
  
      switchToEnMobile?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'EN-home.html';
      });
    }
    // ========== EN-home.html ==========
    if (path.includes('EN-home.html')) {
      const searchButton = document.getElementById('searchButton');
      const queryInput = document.getElementById('queryInput');
  
      searchButton?.addEventListener('click', function (event) {
        const query = queryInput.value.trim();
        if (query) {
          this.href = 'EN-search.html?query=' + encodeURIComponent(query);
        } else {
          event.preventDefault();
          alert("Please enter a search query.");
        }
      });
  
      queryInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          searchButton.click();
        }
      });
  
      queryInput?.addEventListener('focus', function () {
        this.placeholder = '';
      });
  
      queryInput?.addEventListener('blur', function () {
        if (this.value === '') {
          this.placeholder = 'Find Arabic articles about mental health awareness';
        }
      });
  
      async function fetchRandomArticles() {
        try {
          const response = await fetch('http://localhost:5000/random_articles?lang=en');
          const data = await response.json();
          const exploreContainer = document.getElementById('explore-articles');
          exploreContainer.innerHTML = '';
  
          const colors = ['lavender-card', 'peach-card', 'mint-card'];
  
          data.slice(0, 3).forEach((article, index) => {
            const card = document.createElement('div');
            card.classList.add('card', 'article-card', colors[index] || 'green');
  
            card.innerHTML = `
              <h3 class="article-title">${article.title || 'Title Not Available'}</h3>
              <p class="article-abstract">${article.abstract || 'Abstract not available.'}</p>
              <div class="article-meta">
                <span class="author">By: ${article.author || 'Unknown Author'}</span>
                <span class="date">Year: ${article.date || 'N/A'}</span>
              </div>
              <a href="${article.link || '#'}" target="_blank" class="read-more-link">Read More</a>
            `;
            exploreContainer.appendChild(card);
          });
        } catch (error) {
          console.error('Error fetching articles:', error);
          document.getElementById('explore-articles').innerHTML = '<p>Failed to load explore articles.</p>';
        }
      }
  
      fetchRandomArticles();
    }
  
    // ========== AR-home.html ==========
  if (path.includes('AR-home.html')) {
    const searchButton = document.getElementById('searchButton');
    const queryInput = document.getElementById('queryInput');
  
    // ✨ Search button click
    searchButton?.addEventListener('click', function (event) {
      const query = queryInput.value.trim();
      const arabicRegex = /^[\u0600-\u06FF\s.,؟!?،\-()؛]+$/;
  
      if (!query) {
        event.preventDefault();
        alert("الرجاء إدخال عبارة للبحث.");
      } else if (!arabicRegex.test(query)) {
        event.preventDefault();
        alert("الرجاء استخدام اللغة العربية فقط في البحث.");
      } else {
        this.href = 'AR-search.html?query=' + encodeURIComponent(query);
      }
    });
  
    // ✨ Enter key handling
    queryInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = queryInput.value.trim();
        const arabicRegex = /^[\u0600-\u06FF\s.,؟!?،\-()؛]+$/;
  
        if (!query) {
          alert("الرجاء إدخال عبارة للبحث.");
        } else if (!arabicRegex.test(query)) {
          alert("الرجاء استخدام اللغة العربية فقط في البحث.");
        } else {
          searchButton.click();
        }
      }
    });
  
    // ✨ Placeholder behavior
    queryInput?.addEventListener('focus', function () {
      this.placeholder = '';
    });
  
    queryInput?.addEventListener('blur', function () {
      if (this.value === '') {
        this.placeholder = 'ابحث عن مقالات عربية تتعلق بالصحة النفسية';
      }
    });
  
    // ✨ Fetch and show random articles
    async function fetchRandomArticlesAR() {
      try {
        const response = await fetch('http://localhost:5000/random_articles?lang=ar');
        const data = await response.json();
        const exploreContainer = document.getElementById('explore-articles');
        exploreContainer.innerHTML = '';
  
        const colors = ['lavender-card', 'peach-card', 'mint-card'];
  
        data.slice(0, 3).forEach((article, index) => {
          const card = document.createElement('div');
          card.classList.add('card', 'article-card', colors[index] || 'green');
  
          card.innerHTML = `
            <h3 class="article-title">${article.title || 'العنوان غير متاح'}</h3>
            <p class="article-abstract">${article.abstract || 'الملخص غير متاح.'}</p>
            <div class="article-meta">
              <span class="author">بواسطة: ${article.author || 'مؤلف غير معروف'}</span>
              <span class="date">السنة: ${article.date || 'غير متاح'}</span>
            </div>
            <a href="${article.link || '#'}" target="_blank" class="read-more-link">اقرأ المزيد</a>
          `;
          exploreContainer.appendChild(card);
        });
      } catch (error) {
        console.error('Error fetching Arabic articles:', error);
        document.getElementById('explore-articles').innerHTML = '<p>فشل في تحميل المقالات.</p>';
      }
    }
  
    fetchRandomArticlesAR();
  }
  
  
    // ========== EN-search.html ==========
    if (path.includes('EN-search.html')) {
      const searchInput = document.getElementById("queryInput");
      const searchButton = document.getElementById("searchButton");
  
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("query");
  
      if (query) {
        searchInput.value = query;
        fetchResults(query);
      }
  
      searchButton?.addEventListener("click", () => {
        const newQuery = searchInput.value.trim();
        if (newQuery) {
          const newUrl = `${window.location.pathname}?query=${encodeURIComponent(newQuery)}`;
          window.history.pushState({}, '', newUrl);
          searchInput.value = newQuery;
          fetchResults(newQuery);
        } else {
          alert("Please enter a search query.");
        }
      });
  
      searchInput?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          searchButton.click();
        }
      });
  
      window.addEventListener('popstate', () => {
        const updatedParams = new URLSearchParams(window.location.search);
        const updatedQuery = updatedParams.get('query');
        if (updatedQuery) {
          searchInput.value = updatedQuery;
          fetchResults(updatedQuery);
        }
      });
  
      async function fetchResults(query) {
        try {
          const response = await fetch("http://localhost:5000/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query }),
          });
  
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
  
          const data = await response.json();
          displayResults(data);
        } catch (err) {
          console.error("Error fetching results:", err);
          document.getElementById("results-container").innerHTML = `<p>Failed to fetch results. ${err.message}</p>`;
        }
      }
  
      function displayResults(data) {
        const resultsContainer = document.getElementById("results-container");
        resultsContainer.innerHTML = "";
  
        if (!data || data.length === 0) {
          resultsContainer.innerHTML = "<p>No relevant articles found.</p>";
          return;
        }
  
        const top = data[0];
        const topCard = document.createElement("div");
        topCard.classList.add("card", "article-card", "top-result-card", "card-color-1");
        topCard.innerHTML = `
          <h3 class="article-title">${top.title}</h3>
          <p class="article-abstract">${top.abstract}</p>
          <div class="article-meta">
            <span class="author">By: ${top.author || "Unknown"}</span>
            <span class="date">Year: ${top.date || 'N/A'}</span>
          </div>
          <a href="${top.link}" target="_blank" class="read-more-link">Read More</a>
        `;
        resultsContainer.appendChild(topCard);
  
        const grid = document.createElement("div");
        grid.classList.add("results-grid");
        const colorClasses = ["card-color-2", "card-color-3", "card-color-4", "card-color-5"];
  
        data.slice(1, 5).forEach((item, i) => {
          const card = document.createElement("div");
          card.classList.add("card", "article-card", colorClasses[i % colorClasses.length]);
          card.innerHTML = `
            <h3 class="article-title">${item.title}</h3>
            <p class="article-abstract">${item.abstract}</p>
            <div class="article-meta">
              <span class="author">By: ${item.author || "Unknown"}</span>
              <span class="date">Year: ${item.date || 'N/A'}</span>
            </div>
            <a href="${item.link}" target="_blank" class="read-more-link">Read More</a>
          `;
          grid.appendChild(card);
        });
  
        resultsContainer.appendChild(grid);
      }
    }
  
    // ========== AR-search.html ==========
  if (path.includes('AR-search.html')) {
    const searchInput = document.getElementById("queryInput");
    const searchButton = document.getElementById("searchButton");
  
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
  
    const arabicRegex = /^[\u0600-\u06FF\s.,؟!?،\-()؛]+$/;
  
    if (query) {
      searchInput.value = query;
      fetchResults(query);
    }
  
    searchButton?.addEventListener("click", () => {
      const newQuery = searchInput.value.trim();
  
      if (!newQuery) {
        alert("الرجاء إدخال عبارة للبحث.");
      } else if (!arabicRegex.test(newQuery)) {
        alert("الرجاء استخدام اللغة العربية فقط في البحث.");
      } else {
        const newUrl = `${window.location.pathname}?query=${encodeURIComponent(newQuery)}`;
        window.history.pushState({}, '', newUrl);
        fetchResults(newQuery);
      }
    });
  
    searchInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
      }
    });
  
    window.addEventListener('popstate', () => {
      const updatedParams = new URLSearchParams(window.location.search);
      const updatedQuery = updatedParams.get('query');
      if (updatedQuery) {
        searchInput.value = updatedQuery;
        fetchResults(updatedQuery);
      }
    });
  
    async function fetchResults(query) {
      try {
        const response = await fetch("http://localhost:5000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: query }),
        });
  
        if (!response.ok) {
          throw new Error(`خطأ في الاتصال بالخادم: ${response.statusText}`);
        }
  
        const data = await response.json();
        displayResults(data);
      } catch (err) {
        console.error("Error fetching results:", err);
        document.getElementById("results-container").innerHTML = `<p>فشل في جلب النتائج. الرجاء المحاولة لاحقًا.</p>`;
      }
    }
  
    function displayResults(data) {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = "";
  
      if (!data || data.length === 0) {
        resultsContainer.innerHTML = "<p>لم يتم العثور على مقالات ذات صلة.</p>";
        return;
      }
  
      const top = data[0];
      const topCard = document.createElement("div");
      topCard.classList.add("card", "article-card", "top-result-card", "card-color-1");
      topCard.innerHTML = `
        <h3 class="article-title">${top.title}</h3>
        <p class="article-abstract">${top.abstract}</p>
        <div class="article-meta">
          <span class="author">بواسطة: ${top.author || "غير معروف"}</span>
          <span class="date">السنة: ${top.date || 'غير متاح'}</span>
        </div>
        <a href="${top.link}" target="_blank" class="read-more-link">اقرأ المزيد</a>
      `;
      resultsContainer.appendChild(topCard);
  
      const grid = document.createElement("div");
      grid.classList.add("results-grid");
      const colorClasses = ["card-color-2", "card-color-3", "card-color-4", "card-color-5"];
  
      data.slice(1, 5).forEach((item, i) => {
        const card = document.createElement("div");
        card.classList.add("card", "article-card", colorClasses[i % colorClasses.length]);
        card.innerHTML = `
          <h3 class="article-title">${item.title}</h3>
          <p class="article-abstract">${item.abstract}</p>
          <div class="article-meta">
            <span class="author">بواسطة: ${item.author || "غير معروف"}</span>
            <span class="date">السنة: ${item.date || 'غير متاح'}</span>
          </div>
          <a href="${item.link}" target="_blank" class="read-more-link">اقرأ المزيد</a>
        `;
        grid.appendChild(card);
      });
  
      resultsContainer.appendChild(grid);
    }
  }
  
  });
  