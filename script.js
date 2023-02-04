const namediv = document.getElementById("name");

async function loadNames() {
    const response = await fetch('https://polite-conkies-75f54b.netlify.app/.netlify/functions/api/lingo');
    const lingo = await response.json();
    namediv.textContent = lingo.name;
  }

namediv.addEventListener('click', async () => {
  const response = await fetch('https://polite-conkies-75f54b.netlify.app/.netlify/functions/api/hobbit');
  const hobbit = await response.json();
  namediv.textContent = hobbit.name;
})

  loadNames();
