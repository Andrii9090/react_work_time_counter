import config from '../config'
import useWorkerStore from '../store'
import useRecords from '../hooks/useRecords'

export const RecordFilters = () => {
    const { filterDate, records } = useWorkerStore()
    const { monthsClickHandler } = useRecords()

    return (
        <div className="flex p-3 justify-between">
            <div className="flex">
                <button
                    onClick={() => monthsClickHandler(-1)}
                    className="font-bold text-sky-600 text-2xl pr-2 pt-1 pb-1 pl-2 border border-sky-600 rounded-md transition-colors hover:bg-sky-600 hover:text-white"
                >
                    &#8592;
                </button>
                <span className="p-3 text-gray-600 font-thin">
                    {config.months[filterDate.getMonth()]},{' '}
                    {filterDate.getFullYear()}
                </span>
                <button
                    onClick={() => monthsClickHandler(1)}
                    className="font-bold text-sky-600 text-2xl pr-2 pt-1 pb-1 pl-2 border border-sky-600 rounded-md transition-colors hover:bg-sky-600 hover:text-white"
                >
                    &#8594;
                </button>
            </div>
            <div className="flex justify-end items-center">
                <span className="font-bold mr-1">
                    Total: {records.total_hours_str}
                </span>
            </div>
        </div>
    )
}
