import { client } from '../admin/api/client';
import type { ListResponse, NewsTicker } from '../admin/types';

export const newsTickerService = {
  async list(): Promise<NewsTicker[]> {
    try {
      const response = await client.request<NewsTicker[]>('/news-ticker');
      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error('Error fetching public news ticker:', error);
      return [];
    }
  },
};
