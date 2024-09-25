import { formatDate, formatTime } from '../helpers/date_time'

type Props = {
    records: WorkRecord[]
    day: string
    hours_total: string
}
export const RecordTr: React.FC<Props> = ({ day, records, hours_total }) => {
    return (
        <tr className="bg-slate-50 border-b font-thin hover:bg-slate-100">
            <td>{formatDate(day)}</td>
            <td>
                {records.map((record) => (
                    <p key={record.total_str}>
                        {formatTime(record.start)}-
                        {record.finish && formatTime(record.finish)}
                        {!record.finish && 'En marcha'}
                        <b> Total: </b>
                        {record.total_str}
                    </p>
                ))}
            </td>
            <td>{hours_total}</td>
            <td>
                {records.map((item) => {
                    if (item.comment)
                        return <i key={item.comment}>{item.comment}</i>
                })}
            </td>
        </tr>
    )
}
