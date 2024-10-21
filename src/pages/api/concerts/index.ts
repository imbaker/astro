import { XataClient } from '../../../xata';

const client = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: 'main',
});

export async function GET() {
  const concerts = await client.db.Concerts.select(['*', 'VenueId'])
    .sort('Date')
    .getAll();
  return new Response(JSON.stringify(concerts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
