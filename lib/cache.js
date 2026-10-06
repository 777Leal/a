// Funções simples para guardar e ler dados no localStorage

export function saveCache(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar cache", error);
  }
}

export function loadCache(key, defaultValue) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
}
