import type { FacultyData } from '../csds/FacultyProfileView';

import aishwaryaAnil from './faculty_aishwarya_anil';
import arbazKazi from './faculty_arbaz_kazi';
import drAjayRadke from './faculty_dr_ajay_radke';
import drArchanaaDongre from './faculty_dr_archanaa_dongre';
import drJaydeepChougale from './faculty_dr_jaydeep_chougale';
import drVirenChandanshive from './faculty_dr_viren_chandanshive';
import prakashPanda from './faculty_prakash_panda';
import pujaGhadi from './faculty_puja_ghadi';
import vikrantKothari from './faculty_vikrant_kothari';

const map: Record<string, FacultyData> = {
  'dr-ajay-radke': drAjayRadke,
  'dr-archanaa-dongre': drArchanaaDongre,
  'dr-jaydeep-chougale': drJaydeepChougale,
  'puja-ghadi': pujaGhadi,
  'dr-viren-chandanshive': drVirenChandanshive,
  'vikrant-kothari': vikrantKothari,
  'arbaz-kazi': arbazKazi,
  'prakash-panda': prakashPanda,
  'aishwarya-anil': aishwaryaAnil,
};

export default map;
