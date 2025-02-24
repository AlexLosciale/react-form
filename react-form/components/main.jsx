import { useState } from "react";

const main = () => {
    const [libriTolkien, setlibriTolkien] = useState([
        {
          id: 1,
          titolo: "Lo Hobbit",
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
      ]);
    const [newBook, setnewBook] = useState("");
    

    const addBook = () => {
        setlibriTolkien([...libriTolkien, { id: libriTolkien.length + 1, titolo: newBook }]);
        setnewBook("");
    };

    const removeTask = (id) => {
        setlibriTolkien(libriTolkien.filter((libro) => libro.id !== id));
    };

    return (
        <div>
            <ul class="article-list">
                {libriTolkien.map((libro) => (
                    <li key={libro.id} className="article">{libro.titolo}
                    <button className="btn-remove" onClick={() => removeTask(libro.id)}>
                        X
                    </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newBook}
                placeholder="Aggiungi un libro"
                onChange={(e) => setnewBook(e.target.value)}
            />
            <button className="btn-aggiungi" onClick={addBook}>Aggiungi libro</button>
        </div>
    )
};
export default main;