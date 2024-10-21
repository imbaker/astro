import { defineDb, defineTable, column } from 'astro:db'

const Venue = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    city: column.text(),
    country: column.text(),
  },
})

const Concert = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    date: column.date(),
    venueId: column.number({ references: () => Venue.columns.id }),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: { Venue, Concert },
})
