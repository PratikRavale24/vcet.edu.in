import { useState, useEffect } from 'react';
import { achievementsService } from '../services/achievements';
import type { Achievement } from '../admin/types';

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    
    setLoading(true);
    achievementsService.list()
      .then(data => {
        if (mounted) setAchievements(data);
      })
      .catch(err => {
        if (mounted) setError(err instanceof Error ? err : new Error('Failed to fetch achievements'));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  return { achievements, loading, error };
}
