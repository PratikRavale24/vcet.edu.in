import { useState, useEffect } from 'react';
import type { Event } from '../admin/types';
import { eventsService } from '../services/events';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    eventsService.list()
      .then(data => {
        if (mounted) {
          setEvents(data);
          setError(null);
        }
      })
      .catch(err => {
        if (mounted) setError(err instanceof Error ? err.message : 'Failed to fetch events');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
      
    return () => { mounted = false; };
  }, []);

  return { events, loading, error };
}
