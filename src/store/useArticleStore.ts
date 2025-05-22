import { create } from 'zustand';
import { ArticleResponse } from '../lib/apis/article/type';

interface ArticleState {
  article: ArticleResponse | null;
  setArticle: (article: ArticleResponse | null) => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  article: null,
  setArticle: (article) => set({ article }),
}));
