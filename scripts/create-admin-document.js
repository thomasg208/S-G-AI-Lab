// Firebase Admin Document Creation Script
// Creates admin document in Firestore for existing user

const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu3rPlXpnD_cFOdv-q6JMbQLsSVwJQTKE",
  authDomain: "sgagilab.firebaseapp.com",
  projectId: "sgagilab",
  storageBucket: "sgagilab.firebasestorage.app",
  messagingSenderId: "52311600394",
  appId: "1:52311600394:web:ad275890ff64d7b7801ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to create admin document
async function createAdminDocument(uid, email, permissions = ['read', 'write', 'admin']) {
  try {
    console.log(`📝 Creating admin document for user: ${email}`);
    console.log(`🆔 User UID: ${uid}`);
    
    // Create admin document in Firestore
    await setDoc(doc(db, 'admins', uid), {
      email,
      role: 'admin',
      permissions,
      createdAt: new Date().toISOString()
    });
    
    console.log(`✅ Admin document created successfully in Firestore`);
    console.log(`📊 Document path: admins/${uid}`);
    console.log(`🔐 Permissions: ${permissions.join(', ')}`);
    
    return true;
    
  } catch (error) {
    console.error(`❌ Error creating admin document:`, error.message);
    
    if (error.code === 'permission-denied') {
      console.log(`💡 Permission denied. Check security rules and user authentication`);
    } else if (error.code === 'unavailable') {
      console.log(`💡 Firestore is unavailable. Check your network connection`);
    }
    
    throw error;
  }
}

// Function to sign in and create admin document
async function setupAdminDocument(email, password) {
  try {
    console.log(`🔐 Signing in as ${email}...`);
    
    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log(`✅ Successfully signed in as ${email}`);
    console.log(`🆔 User UID: ${user.uid}`);
    console.log(`📧 Email verified: ${user.emailVerified}`);
    
    // Create admin document
    await createAdminDocument(user.uid, user.email);
    
    return user;
    
  } catch (error) {
    console.error(`❌ Error setting up admin document:`, error.message);
    
    if (error.code === 'auth/user-not-found') {
      console.log(`💡 User ${email} not found. Create the user first:`);
      console.log(`💡 node scripts/setup-admin-user.js ${email} ${password}`);
    } else if (error.code === 'auth/wrong-password') {
      console.log(`💡 Incorrect password for ${email}. Please check the credentials`);
    } else if (error.code === 'auth/email-not-verified') {
      console.log(`💡 Email not verified. Please check your inbox and click the verification link`);
    }
    
    throw error;
  }
}

// Main execution
async function main() {
  console.log('🚀 Firebase Admin Document Creation Script');
  console.log('==========================================\n');
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const email = args[0];
  const password = args[1];
  const uid = args[2]; // Optional: provide UID directly
  
  if (!email || !password) {
    console.log('Usage: node create-admin-document.js <email> <password> [uid]');
    console.log('');
    console.log('Examples:');
    console.log('  node create-admin-document.js admin@sgagilab.com SecurePassword123');
    console.log('  node create-admin-document.js admin@sgagilab.com SecurePassword123 CQak73LEgkfB8v6X79KfLG9Xzl62');
    console.log('');
    console.log('💡 Prerequisites:');
    console.log('   1. User must exist in Firebase Auth');
    console.log('   2. User email must be verified');
    console.log('   3. Security rules must allow admin document creation');
    console.log('');
    console.log('💡 After running this script:');
    console.log('   1. Admin can sign in at http://localhost:3000/management/login');
    console.log('   2. Admin will have access to management dashboard');
    console.log('   3. Admin permissions will be enforced by security rules');
    process.exit(1);
  }
  
  try {
    if (uid) {
      console.log(`📋 Using provided UID: ${uid}`);
      await createAdminDocument(uid, email);
    } else {
      await setupAdminDocument(email, password);
    }
    
    // Sign out after setup
    await auth.signOut();
    console.log('\n👋 Admin document setup complete and signed out successfully');
    console.log('\n🎉 Ready to test admin login:');
    console.log('   1. Go to http://localhost:3000/management/login');
    console.log('   2. Sign in with your admin credentials');
    console.log('   3. Access the management dashboard');
    
  } catch (error) {
    console.error('\n❌ Admin document setup failed:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);