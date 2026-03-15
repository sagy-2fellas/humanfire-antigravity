// Simulate backend delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const NEWSLETTER_KEY = "hf_newsletter_subs";
const CONTACT_KEY = "hf_contact_leads";
const WORKSHOP_KEY = "hf_workshop_registrations";

const getSavedData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return [];
  }
};

const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
};

export const localLeadStorage = {
  // Newsletter Methods
  getNewsletterSubs: async () => {
    await delay(300);
    const subs = getSavedData(NEWSLETTER_KEY);
    // Sort by created_date desc
    return subs.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
  },
  
  addNewsletterSub: async (data) => {
    await delay(500);
    const newSub = {
      id: "sub_" + Date.now().toString(),
      email: data.email,
      first_name: data.first_name || "",
      company: data.company || "",
      interests: data.interests || [],
      status: "active",
      created_date: new Date().toISOString()
    };
    
    const subs = getSavedData(NEWSLETTER_KEY);
    subs.push(newSub);
    saveData(NEWSLETTER_KEY, subs);
    return newSub;
  },

  // Contact Leads Methods
  getContactLeads: async () => {
    await delay(300);
    const leads = getSavedData(CONTACT_KEY);
    // Sort by created_date desc
    return leads.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
  },
  
  addContactLead: async (data) => {
    await delay(500);
    const newLead = {
      id: "lead_" + Date.now().toString(),
      ...data,
      source: "demo_request",
      status: "new",
      created_date: new Date().toISOString()
    };
    
    const leads = getSavedData(CONTACT_KEY);
    leads.push(newLead);
    saveData(CONTACT_KEY, leads);
    return newLead;
  },

  // Workshop Registration Methods
  getWorkshopRegistrations: async () => {
    await delay(300);
    const regs = getSavedData(WORKSHOP_KEY);
    return regs.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
  },

  addWorkshopRegistration: async (data) => {
    await delay(500);
    const newReg = {
      id: "ws_" + Date.now().toString(),
      email: data.email,
      full_name: data.full_name || "",
      phone: data.phone || "",
      company: data.company || "",
      workshop_name: data.workshop_name || "",
      status: "registered",
      created_date: new Date().toISOString()
    };

    const regs = getSavedData(WORKSHOP_KEY);
    regs.push(newReg);
    saveData(WORKSHOP_KEY, regs);
    return newReg;
  },

  // Generic CSV Export Utility
  exportToCSV: (data, filename) => {
    if (!data || !data.length) return;

    // Get headers from first object keys + standard properties
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
    
    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...data.map(row => {
        return headers.map(header => {
          let cellValue = row[header] === null || row[header] === undefined ? '' : row[header];
          // Handle arrays or objects, and escape quotes
          if (typeof cellValue === 'object') {
            cellValue = JSON.stringify(cellValue);
          }
          cellValue = cellValue.toString().replace(/"/g, '""');
          return `"${cellValue}"`;
        }).join(',');
      })
    ].join('\n');

    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
