import { MMKV } from 'react-native-mmkv';

// Initialize MMKV (optional config commented below)
export const storage = new MMKV(
    // {
    //   id: 'auth-storage',
    //   path: `${USER_DIRECTORY}/storage`,
    //   encryptionKey: 'hunter2',
    //   mode: Mode.MULTI_PROCESS,
    //   readOnly: false
    // }
);