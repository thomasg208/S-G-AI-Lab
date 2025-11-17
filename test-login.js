// Firebase Login Test Script
// Tests authentication and admin verification

const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, getDoc } = require('firebase/firestore');

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

// Test login function
async function testLogin(email, password) {
  try {
    console.log(`🔐 Testing login for: ${email}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Password: ${'*'.repeat(password.length)}`);
    console.log(`\n🔄 Attempting sign in...`);
    
    // Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log(`✅ Firebase Auth successful!`);
    console.log(`👤 User UID: ${user.uid}`);
    console.log(`📧 Email: ${user.email}`);
    console.log(`✅ Email Verified: ${user.emailVerified}`);
    
    // Check admin document in Firestore
    console.log(`\n🔍 Checking admin privileges...`);
    const adminDoc = await getDoc(doc(db, 'admins', user.uid));
    
    if (adminDoc.exists()) {
      const adminData = adminDoc.data();
      console.log(`✅ Admin user found!`);
      console.log(`📋 Role: ${adminData.role}`);
      console.log(`🔐 Permissions: ${JSON.stringify(adminData.permissions)}`);
      console.log(`📅 Created: ${adminData.createdAt}`);
      
      // Test complete
      console.log(`\n🎉 LOGIN TEST SUCCESSFUL!`);
      console.log(`✅ User is authenticated and has admin privileges`);
      console.log(`🌐 Ready to access: http://localhost:3000/management/dashboard`);
      
      return {
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        },
        admin: adminData
      };
    } else {
      console.log(`❌ Admin document not found in Firestore`);
      console.log(`📝 User exists but is not configured as admin`);
      console.log(`💡 To fix: Create admin document with UID: ${user.uid}`);
      
      return {
        success: false,
        error: 'Admin document not found',
        user: {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        }
      };
    }
    
  } catch (error) {
    console.error(`❌ Login test failed:`, error.message);
    
    // Provide specific error guidance
    if (error.code === 'auth/user-not-found') {
      console.log(`💡 User not found. Check if the email is correct.`);
    } else if (error.code === 'auth/wrong-password') {
      console.log(`💡 Incorrect password. Check the password.`);
    } else if (error.code === 'auth/too-many-requests') {
      console.log(`💡 Too many failed attempts. Try again later.`);
    } else if (error.code === 'auth/user-disabled') {
      console.log(`💡 User account is disabled.`);
    } else if (error.code === 'auth/invalid-email') {
      console.log(`💡 Invalid email format.`);
    }
    
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
}

// Main execution
async function main() {
  console.log('🚀 Firebase Login Test Script');
  console.log('===============================\n');
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const email = args[0] || 'thomasg208@gmail.com';
  const password = args[1];
  
  if (!password) {
    console.log('Usage: node test-login.js <email> <password>');
    console.log('');
    console.log('Example:');
    console.log('  node test-login.js thomasg208@gmail.com your-password');
    console.log('');
    console.log('💡 This script tests:');
    console.log('   1. Firebase Authentication');
    console.log('   2. Email verification status');
    console.log('   3. Admin privileges in Firestore');
    console.log('   4. Complete login flow');
    process.exit(1);
  }
  
  try {
    const result = await testLogin(email, password);
    
    // Sign out after test
    await auth.signOut();
    console.log(`\n👋 Test complete and signed out`);
    
    // Exit with appropriate code
    process.exit(result.success ? 0 : 1);
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run the test
main().catch(console.error);