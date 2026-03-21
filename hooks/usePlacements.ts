import { useState, useEffect } from 'react';
import type { Placement } from '../admin/types';
import { placementsService } from '../services/placements';

export function usePlacements() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const data = await placementsService.list();
        if (mounted) setPlacements(data);
      } catch (err: unknown) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error fetching placements');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return { placements, loading, error };
}
