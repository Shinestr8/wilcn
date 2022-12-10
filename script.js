async function loadNames() {
    const response = await fetch('https://polite-conkies-75f54b.netlify.app/.netlify/functions/api/lingo');
    const lingo = await response.json();
    document.getElementById("name").textContent = lingo.name;
  }

  loadNames();
