import { FC } from 'react'
import { RecordTr } from './RecordTr'

type Props = {
    records: { [key: string]: { records: WorkRecord[]; total_day: string } }
}

export const RecordsTableView: FC<Props> = ({ records }) => {
    return (
        <div className="flex flex-wrap">
            <table className="table-auto w-full">
                <thead className="bg-neutral-600 text-white font-thin xl:text-xl text-center">
                    <tr>
                        <th>Fecha</th>
                        <th>Registro de horas</th>
                        <th>Horas total</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody className="text-sm xl:text-xl text-center">
                    {Object.keys(records).map((date: string) => (
                        <RecordTr
                            key={date}
                            records={records[date].records}
                            hours_total={records[date].total_day}
                            day={date}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
