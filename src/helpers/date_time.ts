
export const formatTime = (timeStr: string) => {
    return new Date(timeStr)
        .toLocaleDateString('es-Es', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        .split(',')[1]
}

export const formatDate = (dateStr: string) => {
    return new Date(dateStr)
        .toLocaleTimeString('es-Es', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        })
        .split(',')[0]
}