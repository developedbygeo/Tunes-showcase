import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from '@/schemas';
import customDeskStructure from '@/deskStructure';

export default defineConfig({
  name: 'default',
  title: 'dj-portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: 'production',

  plugins: [customDeskStructure(), visionTool()],
  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
});
