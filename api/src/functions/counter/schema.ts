export default {
  type: "object",
  properties: {
    text: { type: 'string' },
    countUnknown: { type: 'boolean' },
  },
  required: ['text']
} as const;
