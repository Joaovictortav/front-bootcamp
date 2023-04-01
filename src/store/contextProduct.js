import React, { createContext, useState } from 'react';

export const productContext = createContext(null);

export default function ProductProvider({ children }) {
  const [products, setproducts] = useState(null);

  return (
    <productContext.Provider value={{ products, setproducts }}>
      {children}
    </productContext.Provider>
  );
};
