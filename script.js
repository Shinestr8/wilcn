async function loadNames() {
    const response = await fetch('http://localhost:8080/lingo');
    const lingo = await response.json();
    document.getElementById("name").textContent = lingo.name;
  }

  loadNames();