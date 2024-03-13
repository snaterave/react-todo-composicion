import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincro, setSincro] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincro(true);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  },[sincro]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronize = ()=>{
    setLoading(true);
    setSincro(false);
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize
  };
}

export { useLocalStorage };
