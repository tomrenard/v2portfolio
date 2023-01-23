export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'string',
      description: 'Link of the project',
    },
    {
      name: 'index',
      title: 'Project Index',
      type: 'number',
      description: 'Index of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
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
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'role',
      title: 'Project Role',
      type: 'string',
    },
    {
      name: 'stack',
      title: 'Project Stack',
      type: 'string',
    },
    {
      name: 'host',
      title: 'Project Host',
      type: 'string',
    },
    {
      name: 'image2',
      title: 'Asset 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      title: 'Asset 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
