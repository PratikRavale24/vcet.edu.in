import { useState, useEffect } from 'react';
import { newsTickerService } from '../services/newsTicker';
import type { NewsTicker } from '../admin/types';

export function useNewsTicker() {
  const [items, setItems] = useState<NewsTicker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    
    setLoading(true);
    newsTickerService.list()
      .then(data => {
        if (mounted) setItems(data);
      })
      .catch(err => {
        if (mounted) setError(err instanceof Error ? err : new Error('Failed to fetch news ticker'));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  return { items, loading, error };
}
