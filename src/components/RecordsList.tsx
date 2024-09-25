import { FC, useCallback, useState } from 'react'
import { RecordsTableView } from './RecordsTableView'
import { RecordsCardView } from './RecordsCardView'

type Props = {
    records: WorkRecordList
}

type ViewRecordsType = 'card' | 'table'

export const RecordsList: FC<Props> = ({ records }) => {
    const [viewType, setViewType] = useState<ViewRecordsType>('card')

    const changeViewHandler = useCallback(() => {
        setViewType((prev) => (prev == 'card' ? 'table' : 'card'))
    }, [])

    return (
        <>
            <div className="flex p-2">
                <button
                    className={`${
                        viewType == 'card'
                            ? 'bg-indigo-800 text-white '
                            : 'bg-indigo-100 text-gray-800'
                    } p-2 rounded-l-md`}
                    onClick={changeViewHandler}
                >
                    Tarjeta
                </button>
                <button
                    onClick={changeViewHandler}
                    className={`${
                        viewType == 'table'
                            ? 'bg-indigo-800 text-white '
                            : 'bg-indigo-100 text-gray-800'
                    } p-2 rounded-r-md`}
                >
                    Lista
                </button>
            </div>
            {records.items && viewType == 'table' && (
                <RecordsTableView records={records.items} />
            )}
            {records.items && viewType == 'card' && (
                <RecordsCardView records={records.items} />
            )}

            {!records.items && (
                <div className="flex justify-center mt-4">
                    <h4 className="text-2xl">No esta apuntado nada</h4>
                </div>
            )}
        </>
    )
}
