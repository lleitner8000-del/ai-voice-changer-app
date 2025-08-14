
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.leitnerprojects.voicechanger',
  appName: 'AI Voice Changer',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
