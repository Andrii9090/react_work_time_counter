import { FC } from 'react'
import { RecordCard } from './RecordCard'

type Props = {
    records: { [key: string]: { records: WorkRecord[]; total_day: string } }
}

export const RecordsCardView: FC<Props> = ({ records }) => {
    return Object.keys(records).map((day) => (
        <RecordCard
            key={day}
            records={records[day].records}
            day={day}
            total_day={records[day].total_day}
        />
    ))
}
