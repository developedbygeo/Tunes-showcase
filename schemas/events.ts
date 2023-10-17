import { Rule } from 'sanity';

const events = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {
          name: 'day',
          title: 'Day',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'month',
          title: 'Month',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      initialValue: '$300-$1200',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'location.city',
      subtitle: 'date.month',
    },
  },
};

export default events;
