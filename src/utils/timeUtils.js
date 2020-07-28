export const formatMilliseconds = time => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time - minutes * 60000) / 1000)
    const milliseconds = time - (minutes * 60000) - (seconds * 1000)

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : seconds

    return [String(minutes), String(formattedSeconds), String(formattedMilliseconds)]
}
