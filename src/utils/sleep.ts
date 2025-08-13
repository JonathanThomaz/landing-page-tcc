/**
 * Função utilitária para criar um delay assíncrono
 * @param seconds - Tempo em segundos para aguardar
 * @returns Promise que resolve após o tempo especificado
 */
export const sleepInSeconds = (seconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
