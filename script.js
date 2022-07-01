async function loadNames() {
    const response = await fetch('https://tm-stats-bknd.herokuapp.com/lingo');
    const lingo = await response.json();
    document.getElementById("name").textContent = lingo.name;
  }

  loadNames();