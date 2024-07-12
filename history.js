function displaySearchHistory() {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = '';
  
    searchHistory.forEach((query, index) => {
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';
      historyItem.innerHTML = `
        <span>${query}</span>
        <button onclick="removeSearchQuery(${index})">Remove</button>
      `;
      historyContainer.appendChild(historyItem);
    });
  }
  
  function removeSearchQuery(index) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
  }
  
  window.onload = function() {
    displaySearchHistory();
  };
  