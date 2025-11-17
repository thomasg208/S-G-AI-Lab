// Firebase Email Verification Script
// Run this script to send verification emails to admin users

const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');

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

// Function to send verification email
async function sendVerificationEmailToUser(email, password) {
  try {
    console.log(`🔐 Signing in as ${email}...`);
    
    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (user.emailVerified) {
      console.log(`✅ Email ${email} is already verified!`);
      return;
    }
    
    console.log(`📧 Sending verification email to ${email}...`);
    
    // Send verification email
    await sendEmailVerification(user, {
      url: 'http://localhost:3000/management/dashboard',
      handleCodeInApp: true
    });
    
    console.log(`✅ Verification email sent successfully to ${email}`);
    console.log(`📬 Please check your inbox and click the verification link`);
    console.log(`🔗 After verification, you can sign in at: http://localhost:3000/management/login`);
    
  } catch (error) {
    console.error(`❌ Error sending verification email to ${email}:`, error.message);
    
    if (error.code === 'auth/user-not-found') {
      console.log(`💡 User ${email} not found. Please create the user first.`);
    } else if (error.code === 'auth/wrong-password') {
      console.log(`💡 Incorrect password for ${email}. Please check the credentials.`);
    } else if (error.code === 'auth/too-many-requests') {
      console.log(`💡 Too many requests. Please wait a few minutes and try again.`);
    }
  }
}

// Function to create and verify a new admin user
async function createAndVerifyAdmin(email, password) {
  try {
    console.log(`👤 Creating new admin user: ${email}`);
    
    // This would need to be implemented in your auth service
    console.log(`💡 To create a new admin user, use the createAdminUserWithVerification function in your app`);
    console.log(`📝 Or create the user manually in Firebase Console, then run this script to send verification`);
    
  } catch (error) {
    console.error(`❌ Error creating admin user:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('🚀 Firebase Email Verification Script');
  console.log('=====================================\n');
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const email = args[0];
  const password = args[1];
  
  if (!email || !password) {
    console.log('Usage: node send-verification-email.js <email> <password>');
    console.log('');
    console.log('Examples:');
    console.log('  node send-verification-email.js admin@sgagilab.com your-password');
    console.log('  node send-verification-email.js test@sgagilab.com test-password');
    console.log('');
    console.log('💡 Make sure email verification is enabled in Firebase Console:');
    console.log('   Firebase Console → Authentication → Settings → Templates → Email address verification');
    process.exit(1);
  }
  
  await sendVerificationEmailToUser(email, password);
  
  // Sign out after sending
  await auth.signOut();
  console.log('\n👋 Signed out successfully');
}

// Run the script
main().catch(console.error);