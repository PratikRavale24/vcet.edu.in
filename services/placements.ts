import { client, resolveApiUrl } from '../admin/api/client';
import type { ListResponse, Placement } from '../admin/types';

export const placementsService = {
  // Public endpoint (GET /api/placements)
  async list(): Promise<Placement[]> {
    try {
      const response = await client.request<ListResponse<Placement>>('/placements');
      return Array.isArray(response.data)
        ? response.data.map((p) => ({
            ...p,
            logo: resolveApiUrl(p.logo),
          }))
        : [];
    } catch (error) {
      console.error('Error fetching public placements:', error);
      return [];
    }
  },
};
