// Firebase Admin User Setup Script
// Creates admin user and sends verification email

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');

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

// Function to create admin user and send verification
async function createAdminAndSendVerification(email, password) {
  try {
    console.log(`👤 Creating admin user: ${email}`);
    
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log(`✅ User created successfully with UID: ${user.uid}`);
    
    // Send verification email
    console.log(`📧 Sending verification email to ${email}...`);
    
    await sendEmailVerification(user, {
      url: 'http://localhost:3000/management/dashboard',
      handleCodeInApp: true
    });
    
    console.log(`✅ Verification email sent successfully to ${email}`);
    console.log(`📬 Please check your inbox and click the verification link`);
    console.log(`🔗 After verification, you can sign in at: http://localhost:3000/management/login`);
    console.log(`\n📝 IMPORTANT: You also need to create an admin document in Firestore`);
    console.log(`📝 Run this in your browser console after creating the user:`);
    console.log(`📝 import { createAdminUser } from '@/lib/auth'`);
    console.log(`📝 await createAdminUser('${user.uid}', '${email}', ['read', 'write', 'admin'])`);
    
    return user;
    
  } catch (error) {
    console.error(`❌ Error creating admin user:`, error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log(`💡 User ${email} already exists. Try sending verification email instead:`);
      console.log(`💡 node scripts/send-verification-email.js ${email} ${password}`);
    } else if (error.code === 'auth/weak-password') {
      console.log(`💡 Password is too weak. Use a stronger password (at least 6 characters)`);
    } else if (error.code === 'auth/invalid-email') {
      console.log(`💡 Email format is invalid. Please check the email address`);
    }
    
    throw error;
  }
}

// Main execution
async function main() {
  console.log('🚀 Firebase Admin User Setup Script');
  console.log('===================================\n');
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const email = args[0];
  const password = args[1];
  
  if (!email || !password) {
    console.log('Usage: node setup-admin-user.js <email> <password>');
    console.log('');
    console.log('Examples:');
    console.log('  node setup-admin-user.js admin@sgagilab.com your-secure-password');
    console.log('  node setup-admin-user.js test@sgagilab.com test-password-123');
    console.log('');
    console.log('💡 Password requirements:');
    console.log('   - At least 6 characters long');
    console.log('   - Should be secure for admin access');
    console.log('');
    console.log('💡 After running this script:');
    console.log('   1. Check your email for verification link');
    console.log('   2. Click the link to verify your email');
    console.log('   3. Create admin document in Firestore');
    console.log('   4. Sign in at http://localhost:3000/management/login');
    process.exit(1);
  }
  
  if (password.length < 6) {
    console.log('❌ Password must be at least 6 characters long');
    process.exit(1);
  }
  
  try {
    await createAdminAndSendVerification(email, password);
    
    // Sign out after setup
    await auth.signOut();
    console.log('\n👋 Setup complete and signed out successfully');
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);