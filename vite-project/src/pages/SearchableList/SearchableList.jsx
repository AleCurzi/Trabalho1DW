import React, { useState } from 'react';

export function SearchableList() {
  const [query, setQuery] = useState('');
  const items = ['maça', 'banana', 'laranja', 'uva', 'abacaxi'];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}