import { client, resolveApiUrl } from '../admin/api/client';
import type { Event, ListResponse } from '../admin/types';
import { MOCK_EVENTS } from '../admin/api/mockStore';

const USE_MOCK = import.meta.env.DEV && import.meta.env.VITE_MOCK_AUTH === 'true';

export const eventsService = {
  async list(): Promise<Event[]> {
    if (USE_MOCK) {
      return MOCK_EVENTS.filter(e => e.is_active).map(e => ({
        ...e,
        image: resolveApiUrl(e.image),
        attachment: resolveApiUrl(e.attachment),
      }));
    }
    
    // /api/events returns { success: true, data: Event[] } 
    // This is the public unpaginated route returning active events
    const res = await client.request<{ success: boolean; data: Event[] }>('/events').catch(e => {
      console.error("Failed fetching public events:", e);
      return { success: false, data: [] };
    });
    
    const items = Array.isArray(res?.data) ? res.data : [];
    return items.map(e => ({
      ...e,
      image: resolveApiUrl(e.image),
      attachment: resolveApiUrl(e.attachment),
    }));
  }
};
