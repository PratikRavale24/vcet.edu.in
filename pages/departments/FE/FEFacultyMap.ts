import type { FacultyData } from '../csds/FacultyProfileView';

import anahitaPereira from './faculty_anahita_pereira';
import ankitaMane from './faculty_ankita_mane';
import beautyAnsari from './faculty_beauty_ansari';
import chandrakishoriSonarkar from './faculty_chandrakishori_sonarkar';
import deepikaPanchal from './faculty_deepika_panchal';
import dipaPatel from './faculty_dipa_patel';
import drAashiCynth from './faculty_dr_aashi_cynth';
import drKavitaChuri from './faculty_dr_kavita_churi';
import drPradipGulbhile from './faculty_dr_pradip_gulbhile';
import drRhushirajeshwariNaik from './faculty_dr_rhushirajeshwari_naik';
import drTanyaDsouza from './faculty_dr_tanya_dsouza';
import ganeshTilave from './faculty_ganesh_tilave';
import gloriaCollaco from './faculty_gloria_collaco';
import jenisaDsilva from './faculty_jenisa_dsilva';
import kaminiMore from './faculty_kamini_more';
import mayurGohil from './faculty_mayur_gohil';
import nehaShah from './faculty_neha_shah';
import pracheeShah from './faculty_prachee_shah';
import praizaGonsalves from './faculty_praiza_gonsalves';
import rojalRodrigues from './faculty_rojal_rodrigues';
import sachinGondke from './faculty_sachin_gondke';
import shraddhaGosavi from './faculty_shraddha_gosavi';
import tarranumKhan from './faculty_tarranum_khan';
import vaishnaviGurav from './faculty_vaishnavi_gurav';
import vikasBhagat from './faculty_vikas_bhagat';

const map: Record<string, FacultyData> = {
  'chandrakishori-sonarkar': chandrakishoriSonarkar,
  'beauty-ansari': beautyAnsari,
  'dr-rhushirajeshwari-naik': drRhushirajeshwariNaik,
  'dipa-patel': dipaPatel,
  'vaishnavi-gurav': vaishnaviGurav,
  'vikas-bhagat': vikasBhagat,
  'neha-shah': nehaShah,
  'dr-kavita-churi': drKavitaChuri,
  'ankita-mane': ankitaMane,
  'praiza-gonsalves': praizaGonsalves,
  'mayur-gohil': mayurGohil,
  'ganesh-tilave': ganeshTilave,
  'anahita-pereira': anahitaPereira,
  'deepika-panchal': deepikaPanchal,
  'sachin-gondke': sachinGondke,
  'dr-pradip-gulbhile': drPradipGulbhile,
  'kamini-more': kaminiMore,
  'gloria-collaco': gloriaCollaco,
  'dr-tanya-dsouza': drTanyaDsouza,
  'dr-aashi-cynth': drAashiCynth,
  'jenisa-dsilva': jenisaDsilva,
  'shraddha-gosavi': shraddhaGosavi,
  'tarranum-khan': tarranumKhan,
  'prachee-shah': pracheeShah,
  'rojal-rodrigues': rojalRodrigues,
};

export default map;
