import { db, Venue, Concert } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Venue).values([
    { id: 1, name: 'Wembley Stadium', city: 'London', country: 'UK' },
    { id: 2, name: 'Wembley Arena', city: 'London', country: 'UK' },
    { id: 3, name: 'National Bowl', city: 'Milton Keynes', country: 'UK' },
  ])

  await db.insert(Concert).values([
    { id: 1, date: new Date('1985-07-03'), venueId: 1 },
    { id: 2, date: new Date('1988-06-25'), venueId: 1 },
    { id: 3, date: new Date('1992-07-13'), venueId: 2 },
    { id: 4, date: new Date('1993-05-22'), venueId: 3 },
  ])
}
