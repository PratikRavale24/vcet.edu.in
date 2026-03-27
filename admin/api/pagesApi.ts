import { client } from './client';
import type { 
  AdmissionData, AdmissionPayload, 
  AcademicsData, AcademicsPayload,
  ItemResponse 
} from '../types';
import { 
  createAdmissionCrud, 
  createAcademicsCrud 
} from './mockStore';

const USE_MOCK = import.meta.env.VITE_MOCK_AUTH === 'true';

// Mock instances
const mockAdmission = createAdmissionCrud();
const mockAcademics = createAcademicsCrud();

/**
 * API for standalone pages (Admission, Academics)
 */
export const pagesApi = {
  admission: {
    get: () => USE_MOCK 
      ? mockAdmission.get() 
      : client.request<ItemResponse<AdmissionData>>('/pages/admission'),
    
    update: (payload: AdmissionPayload) => {
      if (USE_MOCK) return mockAdmission.update(payload);
      
      const formData = new FormData();
      if (payload.courses) formData.append('courses', JSON.stringify(payload.courses));
      
      if (payload.brochureFile) formData.append('brochure', payload.brochureFile);

      // Note: Handling arrays of files in FormData typically requires indexed keys
      // e.g. feesStructure[0][file], feesStructure[0][title], etc.
      // This implementation depends on backend expectations.
      if (payload.feesStructure) {
        formData.append('feesStructure', JSON.stringify(payload.feesStructure.map(f => ({ ...f, file: undefined }))));
      }
      if (payload.documentsRequired) {
        formData.append('documentsRequired', JSON.stringify(payload.documentsRequired.map(f => ({ ...f, file: undefined }))));
      }

      return client.requestForm<ItemResponse<AdmissionData>>('/pages/admission', formData);
    }
  },

  academics: {
    get: () => USE_MOCK 
      ? mockAcademics.get() 
      : client.request<ItemResponse<AcademicsData>>('/pages/academics'),
    
    update: (payload: AcademicsPayload) => {
      if (USE_MOCK) return mockAcademics.update(payload);
      
      const formData = new FormData();
      
      if (payload.programBooklets) {
        formData.append('programBooklets', JSON.stringify(payload.programBooklets.map(f => ({ ...f, file: undefined }))));
      }
      if (payload.academicCalendars) {
        formData.append('academicCalendars', JSON.stringify(payload.academicCalendars.map(f => ({ ...f, file: undefined }))));
      }

      return client.requestForm<ItemResponse<AcademicsData>>('/pages/academics', formData);
    }
  }
};
