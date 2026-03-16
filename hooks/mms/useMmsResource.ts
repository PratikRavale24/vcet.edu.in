import { useEffect, useState } from 'react';

export function useMmsResource<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetcher();
        if (isMounted) {
          setData(result);
        }
      } catch {
        if (isMounted) {
          setError('Unable to load MMS data at the moment.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return { data, loading, error };
}
