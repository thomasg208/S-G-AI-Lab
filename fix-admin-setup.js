// Fix Admin Setup Script
// Creates admin document and sends verification email

const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Firebase configuration
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

// Fix admin setup
async function fixAdminSetup(email, password) {
  try {
    console.log(`🔧 Fixing admin setup for: ${email}`);
    
    // Sign in to get user token
    console.log(`🔐 Signing in to get user credentials...`);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log(`✅ Signed in successfully!`);
    console.log(`👤 User UID: ${user.uid}`);
    console.log(`📧 Email: ${user.email}`);
    console.log(`✅ Email Verified: ${user.emailVerified}`);
    
    // Create admin document in Firestore
    console.log(`\n📝 Creating admin document in Firestore...`);
    await setDoc(doc(db, 'admins', user.uid), {
      email: user.email,
      role: 'admin',
      permissions: ['read', 'write', 'admin'],
      createdAt: new Date().toISOString()
    });
    
    console.log(`✅ Admin document created successfully!`);
    console.log(`📋 Role: admin`);
    console.log(`🔐 Permissions: ["read", "write", "admin"]`);
    
    // Send verification email if needed
    if (!user.emailVerified) {
      console.log(`\n📧 Sending email verification...`);
      await sendEmailVerification(user, {
        url: 'http://localhost:3000/management/dashboard',
        handleCodeInApp: true
      });
      console.log(`✅ Verification email sent to ${user.email}`);
      console.log(`📬 Please check your inbox and click the verification link`);
    } else {
      console.log(`\n✅ Email already verified!`);
    }
    
    console.log(`\n🎉 ADMIN SETUP COMPLETE!`);
    console.log(`✅ User is now configured as admin`);
    console.log(`🌐 Ready to access: http://localhost:3000/management/login`);
    console.log(`\n📝 Next steps:`);
    console.log(`1. Check your email for verification link (if not verified)`);
    console.log(`2. Click the link to verify your email`);
    console.log(`3. Sign in at: http://localhost:3000/management/login`);
    
    return true;
    
  } catch (error) {
    console.error(`❌ Error fixing admin setup:`, error.message);
    
    if (error.code === 'auth/user-not-found') {
      console.log(`💡 User not found. Check the email address.`);
    } else if (error.code === 'auth/wrong-password') {
      console.log(`💡 Incorrect password.`);
    } else if (error.code === 'auth/too-many-requests') {
      console.log(`💡 Too many failed attempts. Try again later.`);
    }
    
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Firebase Admin Setup Fix Script');
  console.log('====================================\n');
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const email = args[0] || 'thomasg208@gmail.com';
  const password = args[1];
  
  if (!password) {
    console.log('Usage: node fix-admin-setup.js <email> <password>');
    console.log('');
    console.log('Example:');
    console.log('  node fix-admin-setup.js thomasg208@gmail.com your-password');
    console.log('');
    console.log('💡 This script will:');
    console.log('   1. Sign in to verify user exists');
    console.log('   2. Create admin document in Firestore');
    console.log('   3. Send email verification (if needed)');
    process.exit(1);
  }
  
  try {
    const success = await fixAdminSetup(email, password);
    
    // Sign out after setup
    await auth.signOut();
    console.log(`\n👋 Setup complete and signed out`);
    
    process.exit(success ? 0 : 1);
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);