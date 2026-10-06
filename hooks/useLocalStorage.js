import { useState, useEffect } from "react";
import { saveCache, loadCache } from "../lib/cache";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  // lê o cache quando a página abre
  useEffect(() => {
    setValue(loadCache(key, initialValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // atualiza o estado e salva no cache
  function saveValue(newValue) {
    setValue(newValue);
    saveCache(key, newValue);
  }

  return [value, saveValue];
}
