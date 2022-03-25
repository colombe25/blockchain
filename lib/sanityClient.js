import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'dh0sjco2',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skGWzp70zRcRUPE9cckbffbQYSTNqauw7v4jmpRawIBpwrNGmoHq6Fesxk1Y4kd2PfcoslLJVycq9PFezQ1DkXopGL9EQmDkJyVzzMyxizZHJoEXb84e7HSYHSEaBQN3PWBOucsVznggo97oOi8AFshdXqJfmapTqDtIax2ThbFt6ZN04E2V',
  useCdn: false,
})
