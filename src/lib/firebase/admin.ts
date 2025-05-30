import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../../../serviceAccountKey.json';



const adminApp = getApps().length === 0 
  ? initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
      projectId: serviceAccount.project_id,
    })
  : getApps()[0];

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
