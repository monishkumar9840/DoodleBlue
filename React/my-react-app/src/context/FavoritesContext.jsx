import { createContext, useContext, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const value = useMemo(() => ({
    favoriteIds,
    isFavorite: (id) => favoriteIds.includes(String(id)),
    toggleFavorite: (id) => {
      const eventId = String(id);
      setFavoriteIds((currentIds) => (
        currentIds.includes(eventId)
          ? currentIds.filter((currentId) => currentId !== eventId)
          : [...currentIds, eventId]
      ));
    },
    removeFavorite: (id) => {
      const eventId = String(id);
      setFavoriteIds((currentIds) =>
        currentIds.filter((currentId) => currentId !== eventId)
      );
    },
  }), [favoriteIds]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
