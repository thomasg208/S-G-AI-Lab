import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, sendEmailVerification, createUserWithEmailAndPassword, reload } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin';
  permissions: string[];
}

// Sign in with email and password
export const signIn = async (email: string, password: string): Promise<AdminUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Check if user is admin
    const adminDoc = await getDoc(doc(db, 'admins', user.uid));
    if (!adminDoc.exists()) {
      throw new Error('Access denied: Not an admin user');
    }
    
    return {
      uid: user.uid,
      email: user.email!,
      role: 'admin',
      permissions: adminDoc.data().permissions || ['read', 'write']
    };
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

// Sign out
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): Promise<AdminUser | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      unsubscribe();
      
      if (!user) {
        resolve(null);
        return;
      }
      
      try {
        const adminDoc = await getDoc(doc(db, 'admins', user.uid));
        if (adminDoc.exists()) {
          resolve({
            uid: user.uid,
            email: user.email!,
            role: 'admin',
            permissions: adminDoc.data().permissions || ['read', 'write']
          });
        } else {
          resolve(null);
        }
      } catch (error) {
        console.error('Error getting current user:', error);
        resolve(null);
      }
    });
  });
};

// Create admin user (for initial setup)
export const createAdminUser = async (uid: string, email: string, permissions: string[] = ['read', 'write']): Promise<void> => {
  try {
    await setDoc(doc(db, 'admins', uid), {
      email,
      role: 'admin',
      permissions,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
};

// Check if user has permission
export const hasPermission = (user: AdminUser | null, permission: string): boolean => {
  if (!user) return false;
  return user.permissions.includes(permission) || user.permissions.includes('admin');
};

// Send email verification link
export const sendVerificationEmail = async (user: User): Promise<void> => {
  try {
    await sendEmailVerification(user, {
      url: `${window.location.origin}/management/dashboard`,
      handleCodeInApp: true
    });
    console.log('✅ Verification email sent successfully');
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
};

// Create admin user with email verification
export const createAdminUserWithVerification = async (email: string, password: string, permissions: string[] = ['read', 'write', 'admin']): Promise<void> => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Send verification email
    await sendVerificationEmail(user);
    
    // Create admin document in Firestore
    await createAdminUser(user.uid, email, permissions);
    
    console.log(`✅ Admin user created for ${email}. Verification email sent.`);
  } catch (error) {
    console.error('Error creating admin user with verification:', error);
    throw error;
  }
};

// Check if user's email is verified
export const checkEmailVerification = async (user: User): Promise<boolean> => {
  try {
    await reload(user); // Reload user to get latest email verification status
    return user.emailVerified;
  } catch (error) {
    console.error('Error checking email verification:', error);
    return false;
  }
};

// Sign in with email verification check
export const signInWithVerification = async (email: string, password: string): Promise<AdminUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Check if email is verified
    if (!user.emailVerified) {
      throw new Error('Please verify your email before signing in. Check your inbox for the verification link.');
    }
    
    // Check if user is admin
    const adminDoc = await getDoc(doc(db, 'admins', user.uid));
    if (!adminDoc.exists()) {
      throw new Error('Access denied: Not an admin user');
    }
    
    return {
      uid: user.uid,
      email: user.email!,
      role: 'admin',
      permissions: adminDoc.data().permissions || ['read', 'write']
    };
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};
