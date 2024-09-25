import { FC } from 'react'
import { formatDate, formatTime } from '../helpers/date_time'

type Props = {
    day: string
    records: WorkRecord[]
    total_day: string
}

export const RecordCard: FC<Props> = ({ day, records, total_day }) => {
    return (
        <div className="flex flex-col sm:flex-row border shadow-md rounded-md mb-2">
            <div className="flex flex-col sm:flex-row w-full justify-around mr-2">
                <div className="flex flex-1 justify-center records-center bg-indigo-300 p-2 md:rounded-l-md rounded-md text-slate-600">
                    <span>{formatDate(day)}</span>
                </div>
                <div className="flex flex-1 records-center justify-center">
                    <span className="font-medium text-md text-gray-600 pr-3">
                        Total: {total_day}
                    </span>
                </div>
            </div>
            <div className="flex justify-center w-11/12 p-4 text-slate-700  text-sm">
                <div className="flex flex-col">
                    {records.map((record) => (
                        <span className="text-stone-600" key={record.total_str}>
                            {formatTime(record.start)} -{' '}
                            {record.finish && formatTime(record.finish)}
                            {!record.finish && 'En marcha'} ({record.total_str})
                        </span>
                    ))}
                </div>
                <div className="flex flex-col text-sm">
                    {records.map((record) => {
                        return (
                            record.comment && (
                                <span
                                    className="text-stone-600 font-thin"
                                    key={record.day}
                                >
                                    {record.comment}
                                </span>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
