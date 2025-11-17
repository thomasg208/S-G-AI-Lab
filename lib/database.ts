import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where, 
  Timestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from './firebase';

export interface Lead {
  id?: string;
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
  interestedProducts: string[];
  useCase: string;
  timeline?: string;
  budget?: string;
  isInvestor: boolean;
  submittedAt: Date;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  assignedTo?: string;
  notes?: string;
  lastContacted?: Date;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  newLeadAlerts: boolean;
  statusChangeAlerts: boolean;
  dailyDigest: boolean;
}

// Lead Management Services
export const leadService = {
  // Create a new lead
  async createLead(leadData: Omit<Lead, 'id' | 'submittedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'leads'), {
        ...leadData,
        submittedAt: Timestamp.now(),
        status: 'new'
      });
      
      // Trigger notification for new lead
      await this.triggerNotification('new_lead', { leadId: docRef.id, ...leadData });
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating lead:', error);
      throw error;
    }
  },

  // Get all leads
  async getAllLeads(): Promise<Lead[]> {
    try {
      const q = query(collection(db, 'leads'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          submittedAt: data.submittedAt?.toDate() || new Date(),
          lastContacted: data.lastContacted?.toDate() || undefined
        } as Lead;
      });
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error;
    }
  },

  // Get lead by ID
  async getLeadById(id: string): Promise<Lead | null> {
    try {
      const docRef = doc(db, 'leads', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          submittedAt: data.submittedAt?.toDate() || new Date(),
          lastContacted: data.lastContacted?.toDate() || undefined
        } as Lead;
      }
      return null;
    } catch (error) {
      console.error('Error fetching lead:', error);
      throw error;
    }
  },

  // Update lead status
  async updateLeadStatus(id: string, status: Lead['status'], notes?: string): Promise<void> {
    try {
      const docRef = doc(db, 'leads', id);
      const updateData: any = {
        status,
        lastContacted: Timestamp.now()
      };
      
      if (notes) {
        updateData.notes = notes;
      }
      
      await updateDoc(docRef, updateData);
      
      // Trigger notification for status change
      await this.triggerNotification('status_change', { leadId: id, status });
    } catch (error) {
      console.error('Error updating lead status:', error);
      throw error;
    }
  },

  // Update lead
  async updateLead(id: string, updates: Partial<Lead>): Promise<void> {
    try {
      const docRef = doc(db, 'leads', id);
      const updateData: any = { ...updates };
      
      // Convert dates to timestamps
      if (updates.submittedAt) {
        updateData.submittedAt = Timestamp.fromDate(updates.submittedAt);
      }
      if (updates.lastContacted) {
        updateData.lastContacted = Timestamp.fromDate(updates.lastContacted);
      }
      
      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  },

  // Delete lead
  async deleteLead(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'leads', id));
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw error;
    }
  },

  // Get leads by filter
  async getLeadsByFilter(filter: 'all' | 'investors' | 'customers'): Promise<Lead[]> {
    try {
      let q;
      
      if (filter === 'investors') {
        q = query(
          collection(db, 'leads'), 
          where('isInvestor', '==', true),
          orderBy('submittedAt', 'desc')
        );
      } else if (filter === 'customers') {
        q = query(
          collection(db, 'leads'), 
          where('isInvestor', '==', false),
          orderBy('submittedAt', 'desc')
        );
      } else {
        q = query(collection(db, 'leads'), orderBy('submittedAt', 'desc'));
      }
      
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          submittedAt: data.submittedAt?.toDate() || new Date(),
          lastContacted: data.lastContacted?.toDate() || undefined
        } as Lead;
      });
    } catch (error) {
      console.error('Error fetching filtered leads:', error);
      throw error;
    }
  },

  // Get lead statistics
  async getLeadStats(): Promise<{
    total: number;
    investors: number;
    customers: number;
    new: number;
    qualified: number;
    contacted: number;
    closed: number;
  }> {
    try {
      const leads = await this.getAllLeads();
      
      return {
        total: leads.length,
        investors: leads.filter(l => l.isInvestor).length,
        customers: leads.filter(l => !l.isInvestor).length,
        new: leads.filter(l => l.status === 'new').length,
        qualified: leads.filter(l => l.status === 'qualified').length,
        contacted: leads.filter(l => l.status === 'contacted').length,
        closed: leads.filter(l => l.status === 'closed').length
      };
    } catch (error) {
      console.error('Error fetching lead stats:', error);
      throw error;
    }
  },

  // Trigger notification
  async triggerNotification(type: string, data: any): Promise<void> {
    try {
      // Store notification in Firestore for processing
      await addDoc(collection(db, 'notifications'), {
        type,
        data,
        createdAt: Timestamp.now(),
        processed: false
      });
      
      console.log(`Notification triggered: ${type}`, data);
    } catch (error) {
      console.error('Error triggering notification:', error);
    }
  }
};

// Notification Settings Service
export const notificationService = {
  async getSettings(): Promise<NotificationSettings> {
    try {
      const docRef = doc(db, 'settings', 'notifications');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as NotificationSettings;
      }
      
      // Return default settings
      return {
        emailNotifications: true,
        smsNotifications: false,
        newLeadAlerts: true,
        statusChangeAlerts: true,
        dailyDigest: false
      };
    } catch (error) {
      console.error('Error fetching notification settings:', error);
      throw error;
    }
  },

  async updateSettings(settings: NotificationSettings): Promise<void> {
    try {
      const docRef = doc(db, 'settings', 'notifications');
      await updateDoc(docRef, settings as any);
    } catch (error) {
      console.error('Error updating notification settings:', error);
      throw error;
    }
  }
};

// Export utilities for testing and development
export const testUtils = {
  // Clear all leads (for testing only)
  async clearAllLeads(): Promise<void> {
    const leads = await leadService.getAllLeads();
    for (const lead of leads) {
      if (lead.id) {
        await leadService.deleteLead(lead.id);
      }
    }
  },

  // Create sample leads (for testing)
  async createSampleLeads(): Promise<void> {
    const sampleLeads: Omit<Lead, 'id' | 'submittedAt'>[] = [
      {
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.com',
        company: 'TechCorp Inc',
        role: 'CTO',
        phone: '+1 (555) 123-4567',
        interestedProducts: ['urban-vantage', 'qft'],
        useCase: 'Looking to integrate AGI analytics into our enterprise dashboard for real-time operations monitoring.',
        timeline: 'quarter',
        budget: '50k-100k',
        isInvestor: false,
        status: 'new'
      },
      {
        name: 'Michael Chen',
        email: 'mchen@vcpartners.com',
        company: 'VC Partners',
        role: 'Managing Partner',
        interestedProducts: ['crypto-lab', 'nexalytica'],
        useCase: 'Interested in reseller opportunities for education platforms. Have distribution network of 50+ schools.',
        timeline: 'immediate',
        isInvestor: true,
        status: 'contacted'
      }
    ];

    for (const lead of sampleLeads) {
      await leadService.createLead(lead);
    }
  }
};
