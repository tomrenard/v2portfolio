export default {
  name: 'asset',
  title: 'Assets',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Asset Title',
      type: 'string',
      description: 'Title of the asset',
    },
    {
      name: 'image',
      title: 'Asset',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headercontent',
      title: 'Header Content',
      type: 'text',
    },
    {
      name: 'stack',
      title: 'Current Stack',
      type: 'text',
    },
  ],
};
