import { useState } from 'react';
import { submitMmsEnquiry } from '../../services/mms';
import type { MmsEnquiryPayload } from '../../services/mms/types';

export function useMmsEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: MmsEnquiryPayload) => {
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await submitMmsEnquiry(payload);
      setSuccess(response.message || 'Enquiry submitted successfully.');
      return true;
    } catch {
      setError('Failed to submit enquiry. Please try again.');
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { submit, submitting, success, error };
}
