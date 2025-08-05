import { createContext } from 'react';
import type { NewsContextType } from '../types';

export const NewsContext = createContext<NewsContextType | undefined>(undefined);
