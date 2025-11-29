// functions/src/index.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

/**
 * Cloud Function: addEmailToList
 * Saves an email address to the early_access_emails collection
 */
export const addEmailToList = functions.https.onCall(async (data, context) => {
  // Validate input
  const email = data.email;
  
  if (!email || typeof email !== 'string') {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Email is required and must be a string'
    );
  }

  // Basic email validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Invalid email format'
    );
  }

  try {
    // Save email to Firestore
    await db.collection('early_access_emails').add({
      email: email.toLowerCase().trim(),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      ip: context.rawRequest?.ip || null,
    });

    return { 
      success: true, 
      message: 'Email added successfully' 
    };
  } catch (error) {
    console.error('Error adding email:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to save email. Please try again.'
    );
  }
});

/**
 * Cloud Function: castVote
 * Increments the vote count for a specific logo
 */
export const castVote = functions.https.onCall(async (data, context) => {
  // Validate input
  const logoIndex = data.logoIndex;
  
  if (typeof logoIndex !== 'number' || logoIndex < 0 || logoIndex > 4) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Logo index must be a number between 0 and 4'
    );
  }

  try {
    const logoDocId = `logo_${logoIndex}`;
    const logoRef = db.collection('logo_votes').doc(logoDocId);

    // Use a transaction to atomically increment the vote count
    await db.runTransaction(async (transaction) => {
      const logoDoc = await transaction.get(logoRef);

      if (!logoDoc.exists) {
        // Create the document if it doesn't exist
        transaction.set(logoRef, {
          count: 1,
          lastVote: admin.firestore.FieldValue.serverTimestamp(),
        });
      } else {
        // Increment the existing count
        transaction.update(logoRef, {
          count: admin.firestore.FieldValue.increment(1),
          lastVote: admin.firestore.FieldValue.serverTimestamp(),
        });
      }
    });

    return { 
      success: true, 
      message: 'Vote cast successfully' 
    };
  } catch (error) {
    console.error('Error casting vote:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to cast vote. Please try again.'
    );
  }
});