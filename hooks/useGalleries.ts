import { useEffect, useState } from 'react';
import { getGalleries } from '../services/gallery';
import { Gallery } from '../admin/types';

export function useGalleries() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getGalleries();
        if (!cancelled) setGalleries(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Unable to load galleries');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { galleries, loading, error };
}
