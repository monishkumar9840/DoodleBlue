import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);
const FAVORITES_STORAGE_KEY = 'campus-event-favorites';

function loadFavoriteIds() {
  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!storedFavorites) {
      return [];
    }

    const parsedFavorites = JSON.parse(storedFavorites);
    if (!Array.isArray(parsedFavorites)) {
      throw new TypeError('Saved favorites must be an array.');
    }
    if (!parsedFavorites.every((id) => typeof id === 'string' || typeof id === 'number')) {
      throw new TypeError('Saved favorite IDs must be strings or numbers.');
    }

    return [...new Set(parsedFavorites.map(String))];
  } catch (error) {
    console.error('Unable to load saved favorites from local storage.', error);
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(loadFavoriteIds);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoriteIds)
      );
    } catch (error) {
      console.error('Unable to save favorites to local storage.', error);
    }
  }, [favoriteIds]);

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
