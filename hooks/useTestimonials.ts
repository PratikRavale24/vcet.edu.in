import { useState, useEffect } from 'react';
import { getTestimonials, TestimonialDTO } from '../services/testimonials';

export const useTestimonials = () => {
  const [items, setItems] = useState<TestimonialDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        if (mounted) {
          setItems(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch testimonials'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      mounted = false;
    };
  }, []);

  return { testimonials: items, loading, error };
};
