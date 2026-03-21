import { client } from '../admin/api/client';
import type { ListResponse, Achievement } from '../admin/types';

export const achievementsService = {
  async list(): Promise<Achievement[]> {
    try {
      const response = await client.request<Achievement[]>('/achievements');
      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error('Error fetching public achievements:', error);
      return [];
    }
  },
};
