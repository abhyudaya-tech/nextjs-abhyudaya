// app/(private)/mom/page.tsx
import { getAllMeetings } from '@/lib/queries/getAllMeetings'
import MOMList from './mom-list'

export default async function MOMPage() {
  const meetings = await getAllMeetings()

  return <MOMList meetings={meetings} />
}
