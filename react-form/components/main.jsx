const main = () => {
    const libriTolkien = [
        {
          id: 1,
          titolo: "Lo Hobbit",
        },
        {
          id: 2,
          titolo: "Il Signore degli Anelli: La Compagnia dell'Anello",
        },
        {
          id: 3,
          titolo: "Il Signore degli Anelli: Le Due Torri",
        },
        {
          id: 4,
          titolo: "Il Signore degli Anelli: Il Ritorno del Re",
        },
        {
          id: 5,
          titolo: "Il Silmarillion",
        },
        {
          id: 6,
          titolo: "I Racconti Incompiuti",
        },
        {
          id: 7,
          titolo: "Beren e Lúthien",
        },
        {
          id: 8,
          titolo: "La Caduta di Gondolin",
        },
        {
          id: 9,
          titolo: "I Figli di Húrin",
        }
      ];
      
    return (
        <ul class="article-list">
            {libriTolkien.map((libro) => (
                <li key={libro.id} className="article">{libro.titolo}</li>
            ))}
        </ul>
    )
};
export default main;