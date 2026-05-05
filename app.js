    // Array de citations
    const quotes = [
      { text: "Lo único imposible es aquello que no intentas.", author: "Anónimo" },
      { text: "El éxito es la suma de pequeños esfuerzos repetidos.", author: "Robert Collier" },
      { text: "Cree en ti y todo será posible.", author: "Desconocido" },
      { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" }
    ];

    // Position (définie en dehors des fonctions)
    let index = 0;

    function display() {
      document.getElementById("content").textContent = quotes[index].text;
      document.getElementById("author").textContent = quotes[index].author;
    }

    function increase() {
      if (index < quotes.length - 1) {
        index++;
        display();
      }
    }

    function decrease() {
      if (index > 0) {
        index--;
        display();
      }
    }

    // Initialisation
    display();
