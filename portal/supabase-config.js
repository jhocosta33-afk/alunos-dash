// supabase-config.js — NasdaqPro
// Carrega Supabase SDK via CDN e expõe client global como window._supabase

const SUPABASE_URL  = 'https://bqcfotcxpumtobakgsej.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Y4U5hNLw1UDmJ1UkTz55dg_Dfgbqlzg';

(function () {
  function init() {
    if (window.supabase && window.supabase.createClient) {
      window._supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
      console.log('✅ Supabase inicializado');
      document.dispatchEvent(new Event('supabase-ready'));
    } else {
      setTimeout(init, 50);
    }
  }
  init();
})();
